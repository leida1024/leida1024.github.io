---
title: 让 iPad 重新询问是否信任电脑
description: 误选不信任后，通过还原位置与隐私重新触发有线连接授权
date:
  created: 2023-08-19T19:57:59+08:00
  updated: 2023-09-01T09:52:58+08:00
categories:
  - Apple
slug: ipad-reset-trust
original_created_at: 2023-08-19T11:57:59Z
original_updated_at: 2023-09-01T01:52:58Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2023-08-19
status: historical-partial
sources:
  - type: issue
    number: 2
    url: https://github.com/junxian-li-hpc/myIssues/issues/2
contributors:
  - junxian-li-hpc
---

!!! info "结果边界"
    该操作成功让投屏应用再次触发“信任此电脑”，但原记录明确说文件传输提示仍未出现，
    因此不能把它视为所有 USB 连接问题的完整修复。

<!-- more -->

2023 年 iPadOS 的路径为：

**Settings → General → Transfer or Reset iPad → Reset → Reset Location & Privacy**

“还原位置与隐私”位于点开 **Reset** 后的二级菜单，所以只浏览上一层时容易误以为该
选项不存在。还原后重新连接电脑并打开有线投屏，iPad 再次显示是否信任该电脑的提示。

该操作会重置所有应用的位置和隐私授权，不只影响这一台电脑。执行前应理解影响，完成
后需要按需重新授予权限。若仍不能连接，再检查数据线是否支持数据、USB 端口、电脑端
Apple 驱动/服务和 iPad 是否已解锁。

## 来源

- [原始 Issue #2](https://github.com/junxian-li-hpc/myIssues/issues/2)
