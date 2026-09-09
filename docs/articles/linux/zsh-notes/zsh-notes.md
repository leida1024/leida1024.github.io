---
title: Zsh 与 Oh My Zsh 安装边界
description: 从旧安装记录中保留 Zsh 切换、插件目录和安全注意事项
date:
  created: 2024-01-18T10:41:42+08:00
  updated: 2024-01-18T11:03:33+08:00
categories:
  - Linux
slug: zsh-notes
original_created_at: 2024-01-18T02:41:42Z
original_updated_at: 2024-01-18T03:03:33Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: null
status: rewritten-unverified
sources:
  - type: discussion
    number: 34
    url: https://github.com/junxian-li-hpc/myIssues/discussions/34
contributors:
  - junxian-li-hpc
---

!!! warning "旧命令已移除"
    原线程使用 `wget --no-check-certificate ... | sh`，并在普通用户配置中硬编码
    `/root/.oh-my-zsh`。前者关闭 TLS 校验并直接执行网络内容，后者路径错误，均不保留
    为推荐步骤。

<!-- more -->

## 安装并切换 shell

```bash
sudo apt install zsh
command -v zsh
cat /etc/shells
chsh -s "$(command -v zsh)"
```

注销后重新登录，再用 `echo "$SHELL"` 检查登录 shell。只想临时尝试时，直接运行
`zsh` 即可，不必执行 `chsh`。

## Oh My Zsh 与插件

Oh My Zsh 不是使用 Zsh 的必要条件。决定安装时，从
[官方仓库](https://github.com/ohmyzsh/ohmyzsh) 阅读当前安装方式，先下载脚本检查内容，
不要关闭证书校验或直接管道给 shell。

原记录使用过：

- `zsh-users/zsh-autosuggestions`
- `zsh-users/zsh-syntax-highlighting`
- `romkatv/powerlevel10k`

插件应放在当前用户的 `${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}`，并在 `.zshrc` 的
`plugins=(...)` 中启用。不要从不明镜像混装同名插件。

## Locale 与配置路径

不要为了“防止中文乱码”盲目写死 `LC_ALL=en_US.UTF-8`，它会覆盖所有 locale 分类。
先用 `locale` 检查系统已生成的语言环境。Oh My Zsh 路径通常应基于当前用户：

```zsh
export ZSH="$HOME/.oh-my-zsh"
```

迁移稿没有在当前 Ubuntu 上复测完整主题与插件组合，因此状态保留为未验证重写。

## 来源

- [原始 Discussion #34](https://github.com/junxian-li-hpc/myIssues/discussions/34)
