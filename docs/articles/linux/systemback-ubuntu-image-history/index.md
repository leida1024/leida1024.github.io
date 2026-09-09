---
title: Systemback 制作 Ubuntu 镜像的废弃记录
description: Ubuntu 22.04 上使用旧 Xenial PPA 和处理 Firefox Snap 错误的历史实验
date:
  created: 2023-09-01T09:54:15+08:00
  updated: 2024-01-18T15:17:04+08:00
categories:
  - Linux
slug: systemback-ubuntu-image-history
original_created_at: 2023-09-01T01:54:15Z
original_updated_at: 2024-01-18T07:17:04Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2024-01-18
status: deprecated
sources:
  - type: issue
    number: 7
    url: https://github.com/junxian-li-hpc/myIssues/issues/7
  - type: discussion
    number: 32
    url: https://github.com/junxian-li-hpc/myIssues/discussions/32
contributors:
  - junxian-li-hpc
---

!!! danger "不要按本文安装 Systemback"
    这是一份保留历史事实的废弃页。原方案在 Ubuntu 22.04 上添加 Ubuntu 16.04
    (`xenial`) 的第三方 PPA，并使用已经废弃的 `apt-key`，会引入版本与供应链风险。

<!-- more -->

Issue #7 最初只有“自制 Ubuntu 镜像”的占位。后续 Discussion #32 记录了通过旧 PPA
安装 Systemback，并尝试创建 Live image。迁移时不重发安装命令，也不建议把不匹配
发行版的仓库加入当前系统。

## 当时遇到的错误

Ubuntu 22.04 创建镜像时，Systemback 无法为 Firefox Snap 字典建立硬链接：

```text
An error occurred while creating the following hard link:
/var/.sblvtmp/var/snap/firefox/common/host-hunspell/en_AU.dic

Reference file:
/var/snap/firefox/common/host-hunspell/en_AU.dic
```

当时通过彻底卸载 Firefox Snap 绕开错误，之后可以继续创建镜像。这个操作移除了用户
应用，只是在特定环境规避症状，没有解决 Systemback 与 Snap/文件系统语义的兼容问题，
不应作为推荐修复。

## 现在如何处理同类需求

先明确目标是系统备份、可重复装机，还是制作可分发 Live ISO。这三者应分别考虑受支持
的备份工具、声明式配置/自动化脚本，或当前发行版仍维护的镜像构建工具。无论选择什么
方案，都应在虚拟机或备用设备验证启动、恢复和数据完整性，不能只以“ISO 成功生成”
作为验收。

## 来源

- [原始 Issue #7](https://github.com/junxian-li-hpc/myIssues/issues/7)
- [原始 Discussion #32](https://github.com/junxian-li-hpc/myIssues/discussions/32)
