---
title: 在 Ubuntu 为 GitHub 配置 SSH 密钥
description: 使用 Ed25519 生成独立密钥、加入 ssh-agent 并验证 GitHub 主机身份
date:
  created: 2024-01-18T10:18:43+08:00
  updated: 2024-01-18T10:25:09+08:00
categories:
  - Git
slug: github-ssh-key-setup
original_created_at: 2024-01-18T02:18:43Z
original_updated_at: 2024-01-18T02:25:09Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: null
status: rewritten-unverified
sources:
  - type: discussion
    number: 33
    url: https://github.com/junxian-li-hpc/myIssues/discussions/33
contributors:
  - junxian-li-hpc
---

原记录使用 4096 位 RSA。RSA 并非因此失效，但新建普通 GitHub 密钥时可优先使用
Ed25519；老环境不支持 Ed25519 时再查 GitHub 当前文档选择 RSA。

<!-- more -->

## 生成独立密钥

先确认目标文件不会覆盖已有密钥：

```bash
ls -la ~/.ssh
ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github
```

为私钥设置口令。启动 agent 并添加密钥：

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_github
```

只复制 `.pub` 公钥内容到 GitHub 的 **Settings → SSH and GPG keys**：

```bash
cat ~/.ssh/id_ed25519_github.pub
```

私钥 `~/.ssh/id_ed25519_github` 不得上传或发送。

## 多密钥配置

```sshconfig title="~/.ssh/config"
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  IdentitiesOnly yes
```

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/config ~/.ssh/id_ed25519_github
chmod 644 ~/.ssh/id_ed25519_github.pub
```

首次连接前，对照 GitHub 官方公布的 host key fingerprint，而不是无条件接受提示：

```bash
ssh -T git@github.com
```

## Git 提交身份是另一套配置

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

它们控制 commit 作者信息，不负责 SSH 认证。需要隐藏邮箱时使用 GitHub 提供的
`noreply` 地址。

## 来源

- [原始 Discussion #33](https://github.com/junxian-li-hpc/myIssues/discussions/33)
- [GitHub Docs：生成新的 SSH 密钥](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
