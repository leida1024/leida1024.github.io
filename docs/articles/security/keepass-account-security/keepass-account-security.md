---
title: 账号被盗后的密码管理复盘
description: 从浏览器保存密码迁移到 KeePass 的个人安全记录与仍需补齐的措施
date:
  created: 2024-10-07T21:03:26+08:00
  updated: 2024-10-07T21:03:26+08:00
created_at: 2024-10-07T21:03:26+08:00
published_at: 2024-10-07T21:03:26+08:00
updated_at: 2024-10-07T21:03:26+08:00
update_history: []
categories:
  - Security
slug: keepass-account-security
provenance:
  original_created_at: 2024-10-07T13:03:26Z
  original_updated_at: 2024-10-07T13:03:26Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2024-10-07
status: experience-note
sources:
  - type: discussion
    number: 37
    url: https://github.com/junxian-li-hpc/myIssues/discussions/37
contributors:
  - junxian-li-hpc
---

2024 年，多项在线账号在短期内接连被接管，其中一个游戏平台账号通过历史订单向客服
证明所有权后找回。事件发生后，开始用 KeePass 管理独立密码，并通过云盘同步数据库。

<!-- more -->

## 能确认的改变

- 不再依赖浏览器中重复保存的一组密码。
- 为不同网站生成并保存独立密码。
- KeePass 数据库通过 OneDrive 在多设备间同步。
- 使用约半个月后，日常访问体验可以接受。

原记录把事件怀疑为“浏览器保存的密码被盗”，但没有取证，不能把它当作已确认根因。
浏览器扩展、恶意软件、会话 cookie、邮箱失守、重复密码和钓鱼都可能造成类似结果。

## 密码管理器不是全部

迁移到 KeePass 后仍应完成：

1. 从干净设备优先重置主邮箱、云盘和密码数据库相关账号；
2. 撤销未知会话、应用密码、OAuth 授权和恢复方式；
3. 为重要账号启用独立的多因素认证，并安全保存恢复码；
4. 检查设备和浏览器扩展，必要时重装或清除现有会话；
5. 为 KeePass 数据库设置高强度主密码，并保留可恢复的离线备份。

云盘同步提供可用性，不等同于备份。应保留版本化副本，并实际演练从副本恢复。不要把
数据库、key file 和唯一恢复材料只放在同一个位置。

## 来源

- [原始 Discussion #37](https://github.com/junxian-li-hpc/myIssues/discussions/37)
- [KeePass 官方网站](https://keepass.info/)
