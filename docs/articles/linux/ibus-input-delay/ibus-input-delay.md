---
title: Ubuntu 20.04/22.04 IBus 输入延迟的临时恢复
description: 重启 IBus，临时恢复 Ubuntu 上间歇性卡顿的键盘输入
date:
  created: 2023-12-06T15:12:59+08:00
  updated: 2024-01-19T11:56:10+08:00
created_at: 2023-12-06T15:12:59+08:00
published_at: 2023-12-06T15:12:59+08:00
updated_at: 2024-01-19T11:56:10+08:00
update_history:
  - at: 2024-01-19T11:56:10+08:00
    summary: 来源记录的最后更新时间
categories:
  - Linux
slug: ibus-input-delay
provenance:
  original_created_at: 2023-12-06T07:12:59Z
  original_updated_at: 2024-01-19T03:56:10Z
  migrated_at: 2026-09-09T18:26:09+08:00
last_verified: 2024-01-19
status: historical-tested
sources:
  - type: discussion
    number: 23
    url: https://github.com/junxian-li-hpc/myIssues/discussions/23
contributors:
  - junxian-li-hpc
---

!!! warning "适用边界"
    这是在 Ubuntu 20.04 和 22.04 上实际恢复过输入的临时办法，不是卡顿根因的
    通用修复。当前未在更新版本的 Ubuntu 上复测。

<!-- more -->

## 现象

键盘输入偶发明显延迟，但桌面仍能响应鼠标操作。重启 IBus 后，输入立即恢复。

## 临时恢复

先在终端执行 IBus 自带的重启命令：

```bash
ibus restart
```

原记录使用过下面的脚本。它会替换当前 IBus daemon，然后再次请求 IBus 重启：

```bash title="restart-keyboard.sh"
#!/usr/bin/env bash
ibus-daemon --replace --daemonize --xim
ibus restart
```

保存后赋予执行权限：

```bash
chmod +x restart-keyboard.sh
```

出现延迟时，从终端运行：

```bash
./restart-keyboard.sh
```

## 验证记录

- 2023-12-07：Ubuntu 20.04 出现延迟后运行脚本，输入恢复。
- 2024-01-19：Ubuntu 22.04 出现同类问题后运行脚本，输入恢复。

## 仍需排查

频繁复发时，应继续检查输入法扩展、桌面会话、CPU/内存负载和系统日志。这个脚本
只重启用户会话中的输入法进程，不会消除造成卡顿的上游原因。

## 来源

- [原始 Discussion #23](https://github.com/junxian-li-hpc/myIssues/discussions/23)
- [Ubuntu 22.04 `ibus` 手册](https://manpages.ubuntu.com/manpages/jammy/en/man1/ibus.1.html)
- [IBus 项目文档](https://github.com/ibus/ibus/wiki/ReadMe)
