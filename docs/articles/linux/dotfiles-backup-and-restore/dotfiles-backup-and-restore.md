---
title: Linux dotfiles 备份与恢复脚本的边界
description: 把个人配置、软件安装与 shell 切换拆开，并在覆盖 dotfiles 前保留可恢复副本
date:
  created: 2024-01-30T13:45:26+08:00
  updated: 2024-03-03T15:43:11+08:00
created_at: 2024-01-30T13:45:26+08:00
published_at: 2024-01-30T13:45:26+08:00
updated_at: 2024-03-03T15:43:11+08:00
update_history:
  - at: 2024-03-03T15:43:11+08:00
    summary: 来源记录的最后更新时间
categories:
  - Linux
slug: dotfiles-backup-and-restore
provenance:
  original_created_at: 2024-01-30T13:45:26+08:00
  original_updated_at: 2024-03-03T15:43:11+08:00
  migrated_at: 2026-09-10T00:20:43+08:00
last_verified: null
status: rewritten-unverified
sources:
  - type: repository-file
    path: ubuntu-essentials/01-configs-backup/copy.sh
    url: https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/01-configs-backup/copy.sh
  - type: repository-file
    path: ubuntu-essentials/03-zsh-directory/offline_install_zsh_ohmyzsh.sh
    url: https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/03-zsh-directory/offline_install_zsh_ohmyzsh.sh
contributors:
  - leida1024
---

个人环境脚本很容易同时承担包安装、配置覆盖、插件解压、默认 shell 切换和立即加载。
一旦其中某一步失败，恢复路径就不清楚。更稳妥的模型是把配置仓库当作输入：先比较，
再备份目标文件，最后逐项安装。

<!-- more -->

## 先划分职责

建议至少拆成三层：

1. **系统依赖**：用发行版包管理器安装 `git`、`vim`、`tmux`、`zsh` 等软件。
2. **用户配置**：管理 `.bashrc`、`.profile`、`.vimrc`、`.tmux.conf`、`.zshrc` 等文本。
3. **运行时切换**：用 `chsh` 改登录 shell，或让当前 tmux 服务器重新读取配置。

配置复制脚本不应顺手删除 `~/.oh-my-zsh`、编译软件或执行 `exec zsh`。这些动作的失败
模式不同，也需要不同的确认和回滚方式。

## 入库前先排除秘密与机器状态

提交 dotfiles 前搜索并移除：

- API token、密码、私钥和代理凭据；
- 公司或校园网内部域名、固定主机地址；
- shell 历史、缓存、会话和插件构建产物；
- 只能在单台机器成立的绝对路径。

私钥、KeePass 数据库和浏览器配置不属于普通 dotfiles 仓库。即使 Git 历史后来删除了
秘密，也应视为已经泄露并立即轮换。

## 覆盖前比较并备份

假设仓库中的配置放在 `configs/`：

```bash
diff -u ~/.vimrc configs/.vimrc || true
diff -u ~/.tmux.conf configs/.tmux.conf || true
```

下面的示例只处理明确列出的文件，并在覆盖前创建带时间戳的备份：

```bash
#!/usr/bin/env bash
set -euo pipefail

readonly source_dir="${1:-$PWD/configs}"
readonly stamp="$(date +%Y%m%d-%H%M%S)"
readonly backup_dir="${XDG_STATE_HOME:-$HOME/.local/state}/dotfiles-backups/$stamp"
readonly -a files=(.bashrc .profile .vimrc .tmux.conf .zshrc)

mkdir -p "$backup_dir"

for name in "${files[@]}"; do
  source_file="$source_dir/$name"
  target_file="$HOME/$name"

  if [[ ! -f "$source_file" ]]; then
    printf 'skip missing source: %s\n' "$source_file" >&2
    continue
  fi

  if [[ -e "$target_file" || -L "$target_file" ]]; then
    cp -a -- "$target_file" "$backup_dir/$name"
  fi

  install -m 0600 -- "$source_file" "$target_file"
  printf 'installed %s\n' "$target_file"
done

printf 'backup: %s\n' "$backup_dir"
```

运行前仍应阅读脚本并确认 `source_dir`。这不是配置合并器：目标文件会被替换，只是旧版
被保存到备份目录。希望保留本机片段时，可以让主配置显式加载一个不入库的文件，例如
`.bashrc.local`。

## 处理换行符

不要让恢复脚本对整个插件目录执行 `dos2unix`，它可能改动二进制或第三方文件。文本
配置应在 Git 中声明换行策略：

```gitattributes title=".gitattributes"
*.sh      text eol=lf
.bashrc   text eol=lf
.profile  text eol=lf
.vimrc    text eol=lf
.zshrc    text eol=lf
```

脚本本身使用 LF 后，通常无需在目标机批量转换。

## 不硬编码 Zsh 路径

将 tmux 的默认 shell 写死为 `~/Applications/zsh/bin/zsh`，换机器后可能导致 tmux 无法
启动。确实要固定时，先获取实际路径：

```bash
command -v zsh
```

```tmux title="~/.tmux.conf"
# 仅在该路径由 command -v zsh 验证存在后设置
set-option -g default-shell /usr/bin/zsh
```

多数情况下，让 tmux 继承登录 shell 更简单。切换登录 shell 应使用 `chsh`，并在新会话
中验证；安装脚本不必自动向 `.profile` 追加 `exec zsh -l`。

## 安装后逐项加载

```bash
# 检查 Bash 配置语法，再在当前交互会话按需加载
bash -n ~/.bashrc
source ~/.bashrc

# 让已运行的 tmux 服务器读取配置
tmux source-file ~/.tmux.conf
```

`.profile`、`.zprofile` 和登录 shell 行为最好通过新登录会话验证。由脚本连续 `source`
多个启动文件，会让错误发生在哪个阶段变得难以判断。

## 来源

- [原始配置恢复脚本](https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/01-configs-backup/copy.sh)
- [原始离线 Zsh 安装脚本](https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/03-zsh-directory/offline_install_zsh_ohmyzsh.sh)
- [GNU Coreutils：install invocation](https://www.gnu.org/software/coreutils/manual/html_node/install-invocation.html)
- [Git：gitattributes](https://git-scm.com/docs/gitattributes)
