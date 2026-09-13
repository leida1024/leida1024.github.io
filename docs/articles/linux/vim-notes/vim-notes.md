---
title: Vim 基础配置与搜索替换
description: 从旧 Ubuntu 工作环境记录中整理的 Vim 配置、系统剪贴板与常用查找命令
date:
  created: 2023-09-01T08:52:15+08:00
  updated: 2024-02-01T23:50:58+08:00
created_at: 2023-09-01T08:52:15+08:00
published_at: 2023-09-01T08:52:15+08:00
updated_at: 2024-02-01T23:50:58+08:00
update_history:
  - at: 2024-02-01T23:50:58+08:00
    summary: 来源记录的最后更新时间
categories:
  - Linux
slug: vim-notes
provenance:
  original_created_at: 2023-09-01T00:52:15Z
  original_updated_at: 2024-02-01T23:50:58+08:00
  migrated_at: 2026-09-09T20:54:56+08:00
  repository_files_migrated_at: 2026-09-10T00:20:43+08:00
last_verified: 2024-01-03
status: historical-notes
sources:
  - type: issue
    number: 6
    url: https://github.com/junxian-li-hpc/myIssues/issues/6
  - type: discussion
    number: 26
    url: https://github.com/junxian-li-hpc/myIssues/discussions/26
  - type: repository-file
    path: ubuntu-essentials/10-ubuntu-usages/nerdtree.md
    url: https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/10-ubuntu-usages/nerdtree.md
contributors:
  - junxian-li-hpc
---

旧记录保存了一整份个人 `.vimrc`。迁移时只留下能说明行为的配置，去掉 GUI 字体、旧
终端响铃选项和互相冲突的备份设置；原配置仍可在来源线程查看。

<!-- more -->

## 安装与剪贴板能力

```bash
sudo apt-get install vim
vim --version | grep clipboard
```

若输出是 `-clipboard`，该构建不能访问系统剪贴板。原 Ubuntu 环境通过安装
`vim-gtk3` 获得 `+clipboard` 支持：

```bash
sudo apt-get install vim-gtk3
```

## 精简配置

```vim title="~/.vimrc"
set number
set cursorline
set ruler
set shiftwidth=2
set softtabstop=2
set tabstop=2
set expandtab
set hlsearch
set smartindent
set backspace=indent,eol,start
set ignorecase
set smartcase

" 仅在 vim --version 显示 +clipboard 时启用
set clipboard=unnamedplus

" 空格开合当前折叠
set foldenable
set foldmethod=syntax
nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR>
```

旧配置使用 `setlocal noswapfile` 和 `set nobackup`。这会减少恢复编辑内容的机会，不应
在没有明确取舍时照抄。`autochdir` 也会改变外部命令的工作目录，可能影响项目工具。

## 查找

- `/pattern`：向后查找；`?pattern`：向前查找。
- `n`：沿当前搜索方向到下一个；`N`：反向。
- `*` / `#`：向后 / 向前查找光标下的单词。
- `:set ignorecase smartcase`：默认忽略大小写，模式含大写时区分。

## 替换

```vim
:s/old/new/       " 当前行第一个
:s/old/new/g      " 当前行全部
:%s/old/new/g     " 整个文件
:%s/old/new/gc    " 整个文件，逐项确认
```

替换模式是 Vim 正则表达式。涉及大量文件时，先保存或使用版本控制查看 diff。

## NERDTree 旧配置

原仓库曾把完整 NERDTree 源码随配置一起保存，并复制到 Vim 8 的原生 package 路径：

```text
~/.vim/pack/vendor/start/nerdtree/
```

现在更适合从 NERDTree 上游仓库或明确的插件管理器安装，避免长期携带无法追踪版本的
快照。旧配置把 `Ctrl+n` 映射为打开文件树；进入 NERDTree 后常用操作包括：

- `Enter`：打开文件或展开目录；
- `t`：在新标签页打开；
- `i` / `s`：水平 / 垂直分屏打开；
- `I`：显示或隐藏以点开头的文件；
- `m`：打开文件系统操作菜单；
- `?`：查看当前版本的内置帮助。

不同版本和个人映射可能改变按键。以 `:help NERDTree` 为准，不应把旧快捷键列表当作
稳定接口。

## 来源

- [原始 Issue #6](https://github.com/junxian-li-hpc/myIssues/issues/6)
- [原始 Discussion #26](https://github.com/junxian-li-hpc/myIssues/discussions/26)
- [原始 NERDTree 笔记](https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/10-ubuntu-usages/nerdtree.md)
- [preservim/nerdtree](https://github.com/preservim/nerdtree)
