---
title: 远程指定双系统下一次启动项
description: Ubuntu 与 Windows 双硬盘环境中，用 GRUB 只切换下一次启动目标的历史实测记录
date:
  created: 2023-08-25T14:50:21+08:00
  updated: 2024-01-19T19:46:44+08:00
created_at: 2023-08-25T14:50:21+08:00
published_at: 2023-08-25T14:50:21+08:00
updated_at: 2024-01-19T19:46:44+08:00
update_history:
  - at: 2024-01-19T19:46:44+08:00
    summary: 来源记录的最后更新时间
categories:
  - Linux
slug: dual-boot-grub-next-entry
provenance:
  original_created_at: 2023-08-25T06:50:21Z
  original_updated_at: 2024-01-19T11:46:44Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2023-08-25
status: historical-tested
sources:
  - type: issue
    number: 3
    url: https://github.com/junxian-li-hpc/myIssues/issues/3
  - type: discussion
    number: 28
    url: https://github.com/junxian-li-hpc/myIssues/discussions/28
contributors:
  - junxian-li-hpc
---

!!! warning "适用边界"
    这是 Ubuntu 20.04 与 Windows 11 分别安装在两块 SSD 上时的历史实测。
    GRUB 配置、Secure Boot 和远控软件行为会随机器变化，操作前应确保现场有人可以
    恢复启动顺序。

<!-- more -->

## 目标

机器平时默认进入 Ubuntu，需要时从远程 Ubuntu 会话指定“下一次进入 Windows”。
Windows 再次重启后仍回到默认 Ubuntu，不必远程操作 BIOS。

## 先让 GRUB 发现 Windows

原记录在 Ubuntu 中编辑 `/etc/default/grub`，将菜单设为可见，然后执行：

```bash
sudo update-grub
```

当时输出和重启后的菜单都出现了 `Windows Boot Manager`。执行下一步前，应先确认
`update-grub` 的输出确实发现 Windows；没有发现时不要猜测菜单序号。较新的 Ubuntu
还可能默认禁用 `os-prober`，需要根据当前发行版文档排查，而不是直接套用旧配置。

## 只改变下一次启动

当年的菜单顺序是 Ubuntu、高级选项、Windows，因此实际运行的是：

```bash
sudo grub-reboot 2
sudo reboot
```

GRUB 从 0 开始编号，所以 `2` 对应第三项。该次启动成功进入 Windows；Windows 再次
重启后恢复默认 Ubuntu。

!!! danger "不要长期硬编码序号"
    内核更新或菜单变化都可能改变 `2` 的含义。每次使用前核对当前 GRUB 菜单，或按
    当前 GRUB 文档改用稳定的菜单项标识。错误的启动目标在无人值守机器上可能造成
    远程失联。

## 远程登录边界

原环境使用 ToDesk。Windows 有登录密码时仍能连接并在登录界面输入密码；Ubuntu
开启登录密码后曾出现远控连接不到图形桌面的情况，因此当时启用了自动登录。这只是
特定版本和远控工具的观察，不建议为了远控直接取消系统登录保护。更稳妥的做法是先
验证远控服务是否能在显示管理器登录前启动，并准备 SSH 或带外管理作为备用通道。

## 双系统时间

后续记录还遇到 Windows 与 Ubuntu 时间不一致。历史做法是在 Ubuntu 中运行：

```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

另一种方向是让 Windows 将硬件时钟视为 UTC。两者只能在理解各系统时间策略后择一，
本文没有记录后续验证结果，因此不将其中任何一种标作已验证方案。

## 来源

- [原始 Issue #3](https://github.com/junxian-li-hpc/myIssues/issues/3)
- [原始 Discussion #28](https://github.com/junxian-li-hpc/myIssues/discussions/28)
