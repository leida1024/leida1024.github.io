---
title: Ubuntu Server 局域网、SSH 与代理配置
description: 从虚拟机网络连通开始，安全地启用 OpenSSH、限制防火墙并按范围设置代理
date:
  created: 2024-01-30T13:45:26+08:00
  updated: 2024-01-30T16:35:01+08:00
categories:
  - Linux
slug: ubuntu-server-lan-ssh-proxy
original_created_at: 2024-01-30T13:45:26+08:00
original_updated_at: 2024-01-30T16:35:01+08:00
migrated_at: 2026-09-10T00:20:43+08:00
last_verified: null
status: rewritten-unverified
sources:
  - type: repository-file
    path: ubuntu-essentials/10-ubuntu-usages/03-server.md
    url: https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/10-ubuntu-usages/03-server.md
contributors:
  - leida1024
---

配置 Ubuntu Server 虚拟机时，应按顺序处理三件事：先确认虚拟机与客户端之间有可达的
网络，再启用和收紧 SSH，最后按具体程序设置代理。直接关闭 Windows 防火墙或开放
root 密码登录虽然省事，却把排障变成了长期安全风险。

<!-- more -->

## 选择 NAT 还是桥接

- **NAT**：虚拟机借宿主机访问外网，默认更隔离。宿主机通常可以访问虚拟机；其他局域
  网设备要访问时，可能需要端口转发。
- **桥接**：虚拟机像一台独立设备接入局域网，获得与其他设备同网段的地址。无线网络、
  校园网认证或路由器隔离策略可能不允许桥接正常工作。

先在 Ubuntu 查看地址和路由：

```bash
ip -brief address
ip route
```

再从客户端测试虚拟机地址。ICMP ping 被禁并不一定代表 SSH 不通，可以直接探测端口：

```powershell
Test-NetConnection 192.0.2.10 -Port 22
```

`192.0.2.10` 是文档示例地址，需要替换。不要为了排障关闭整个 Windows 防火墙；应在
正确的网络配置文件上只允许需要的程序或端口，并核对虚拟化软件的网络模式。

## 安装并启动 OpenSSH Server

```bash
sudo apt update
sudo apt install openssh-server
sudo systemctl enable --now ssh
systemctl status ssh --no-pager
ss -ltnp | grep ':22'
```

如果启用了 UFW，只允许受信任网段访问会比对所有来源开放更稳妥：

```bash
sudo ufw allow from 192.0.2.0/24 to any port 22 proto tcp
sudo ufw status verbose
```

示例网段必须换成实际局域网。云服务器还要检查平台安全组，NAT 虚拟机则可能需要宿主
机端口转发。

## 先验证密钥，再关闭密码登录

客户端生成密钥并复制公钥：

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_lab
ssh-copy-id -i ~/.ssh/id_ed25519_lab.pub user@192.0.2.10
ssh -i ~/.ssh/id_ed25519_lab user@192.0.2.10
```

保留当前已登录会话，在另一个终端确认密钥登录成功后，再创建配置片段：

```text title="/etc/ssh/sshd_config.d/10-local-security.conf"
PermitRootLogin no
PubkeyAuthentication yes
PasswordAuthentication no
```

检查语法并重新加载：

```bash
sudo sshd -t
sudo systemctl reload ssh
```

不要一开始就启用 root 登录。配置错误或密钥未部署好时，直接关闭密码认证会把自己锁在
服务器外，所以必须保留恢复通道。

## 临时代理与 APT 代理

只给当前 shell 设置代理：

```bash
export http_proxy='http://proxy.example.com:8080'
export https_proxy='http://proxy.example.com:8080'
export no_proxy='localhost,127.0.0.1,::1,.example.internal'
```

许多 HTTP 代理通过 CONNECT 转发 HTTPS，因此 `https_proxy` 的值仍可能以 `http://`
开头；应以代理服务本身支持的协议为准。大小写变量的支持因程序而异。

只为 APT 配置代理，可创建：

```text title="/etc/apt/apt.conf.d/80proxy"
Acquire::http::Proxy "http://proxy.example.com:8080/";
Acquire::https::Proxy "http://proxy.example.com:8080/";
```

代理地址含账号密码时，不要提交到 Git；限制配置文件权限，并优先使用专门的凭据存储。
`/etc/environment` 也不是所有 systemd 服务的通用代理入口，后台服务通常要用各自配置
或 systemd drop-in。

## 时区

```bash
timedatectl
sudo timedatectl set-timezone Asia/Shanghai
```

时区只影响本地时间的显示和解释，不会替代 NTP 时间同步。用 `timedatectl` 同时确认系统
时钟与同步状态。

## 来源

- [原始 Ubuntu Server 笔记](https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/10-ubuntu-usages/03-server.md)
- [Ubuntu Server：OpenSSH server](https://documentation.ubuntu.com/server/how-to/security/openssh-server/)
- [Ubuntu Server：Firewall](https://documentation.ubuntu.com/server/how-to/security/firewalls/)
