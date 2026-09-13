---
title: getcwd 无法访问父目录的排查记录
description: tmux 或 SSH 启动时报 cannot access parent directories 时的诊断顺序
date:
  created: 2024-01-28T10:58:48+08:00
  updated: 2024-01-28T10:58:48+08:00
created_at: 2024-01-28T10:58:48+08:00
published_at: 2024-01-28T10:58:48+08:00
updated_at: 2024-01-28T10:58:48+08:00
update_history: []
categories:
  - Linux
slug: getcwd-permission-error
provenance:
  original_created_at: 2024-01-28T02:58:48Z
  original_updated_at: 2024-01-28T02:58:48Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: null
status: diagnosis-not-retested
sources:
  - type: discussion
    number: 35
    url: https://github.com/junxian-li-hpc/myIssues/discussions/35
contributors:
  - junxian-li-hpc
---

原记录在进入一个多层目录后启动 tmux 或重新 SSH 时看到：

```text
shell-init: error retrieving current directory: getcwd: cannot access parent directories: Permission denied
chdir: error retrieving current directory: getcwd: cannot access parent directories: Permission denied
```

<!-- more -->

## 这类错误意味着什么

进程继承了一个工作目录，但当前用户已经无法沿目录链解析它。常见原因是某一级父目录
缺少执行权限、目录被删除或重命名、网络挂载失效，或权限在会话期间发生变化。原线程
没有留下根因和解决结果，因此以下是迁移时补充的排查顺序，不标作原始实测。

## 先恢复可用 shell

```bash
cd "$HOME"
pwd -P
```

若这样能消除报错，说明 shell 本身可用，问题集中在旧工作目录。启动 tmux 时可以明确
指定一个可访问目录：

```bash
tmux new-session -c "$HOME"
```

## 定位哪一级不可访问

在仍能访问目标路径的账号或管理员协助下检查：

```bash
namei -l /完整/目标/路径
ls -ld /完整 /完整/目标 /完整/目标/路径
```

目录的 `x` 权限控制“能否穿过”，仅有读权限并不足够。不要用 `chmod -R 777` 掩盖
问题；应只修正错误的目录所有者或必要的执行权限。若目录已被删除，退出旧会话并从
现存目录重新进入；若是挂载失效，先恢复挂载而不是修改本地权限。

## 来源

- [原始 Discussion #35](https://github.com/junxian-li-hpc/myIssues/discussions/35)
