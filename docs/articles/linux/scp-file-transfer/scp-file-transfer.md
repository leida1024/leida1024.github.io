---
title: 用 scp 在本机与远程主机之间传文件
description: 整理 scp 上传、下载、目录复制、端口与密钥选项，并说明主机校验边界
date:
  created: 2024-02-01T23:50:58+08:00
  updated: 2024-02-01T23:50:58+08:00
categories:
  - Linux
slug: scp-file-transfer
original_created_at: 2024-02-01T23:50:58+08:00
original_updated_at: 2024-02-01T23:50:58+08:00
migrated_at: 2026-09-10T00:20:43+08:00
last_verified: null
status: rewritten-unverified
sources:
  - type: repository-file
    path: ubuntu-essentials/10-ubuntu-usages/scp.md
    url: https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/10-ubuntu-usages/scp.md
contributors:
  - leida1024
---

`scp` 使用 SSH 连接在本地与远程主机之间复制文件。最重要的阅读方法是看冒号：
`user@host:path` 表示远程路径，没有主机前缀的路径属于执行命令的本机。

<!-- more -->

## 上传与下载

```bash
# 本地文件 -> 远程目录
scp ./report.pdf user@example.com:/srv/files/

# 远程文件 -> 本地目录
scp user@example.com:/srv/files/report.pdf ./downloads/

# 递归上传目录
scp -r ./results user@example.com:/srv/files/

# 递归下载目录
scp -r user@example.com:/srv/files/results ./downloads/
```

目标路径以 `/` 开头时是远程绝对路径；`user@example.com:files/` 通常相对于远程用户的
家目录。复制前先确认目标目录存在以及远程用户具有写权限。

## 端口、密钥与属性

```bash
scp -P 2222 -i ~/.ssh/id_ed25519 ./report.pdf user@example.com:/srv/files/
scp -p ./report.pdf user@example.com:/srv/files/
```

- `-P` 指定 SSH 服务端口，必须是大写；小写 `-p` 保留修改时间和文件模式。
- `-i` 选择私钥。不要把私钥随文件一起上传。
- SSH 的 `~/.ssh/config` 可以保存主机名、端口、用户和密钥，减少重复参数。

例如：

```sshconfig title="~/.ssh/config"
Host lab-server
  HostName 192.0.2.10
  User alice
  Port 2222
  IdentityFile ~/.ssh/id_ed25519_lab
  IdentitiesOnly yes
```

之后可使用：

```bash
scp ./report.pdf lab-server:/srv/files/
```

## 路径中有空格

本地 shell 和远程 shell 都可能参与解析。简单路径可以分别引用：

```bash
scp "./local report.pdf" 'user@example.com:/srv/files/remote report.pdf'
```

不同 OpenSSH 版本对远程路径解析细节有所变化。脚本中最好避免带换行、通配符或复杂
引号的远程文件名；必要时先在远端创建一个简单的临时路径。

## 安全与协议版本

第一次连接主机时，应通过可信渠道核对 SSH host key fingerprint。不要为了跳过提示而
全局关闭 `StrictHostKeyChecking`，否则可能把文件传给被冒充的主机。

较新的 OpenSSH 默认让 `scp` 使用 SFTP 协议。只有连接不支持 SFTP 的旧服务器时才考虑
临时使用 `-O` 请求旧 SCP 协议，并应把升级服务器作为长期方案。

`scp` 适合直接复制。需要断点续传、增量同步、删除预览或复杂过滤时，通常应选择
`rsync` over SSH，并先使用 `--dry-run` 检查结果。

## 来源

- [原始 SCP 笔记](https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/10-ubuntu-usages/scp.md)
- [OpenBSD manual：scp](https://man.openbsd.org/scp)
