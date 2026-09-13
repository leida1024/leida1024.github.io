---
title: 小米 MIX 2 第三方 Android ROM 实验记录
description: 2023 年在小米 MIX 2 上尝试 PE、crDroid 与 LineageOS 的结果边界
date:
  created: 2023-11-06T20:47:38+08:00
  updated: 2023-11-06T20:47:39+08:00
created_at: 2023-11-06T20:47:38+08:00
published_at: 2023-11-06T20:47:38+08:00
updated_at: 2023-11-06T20:47:39+08:00
update_history:
  - at: 2023-11-06T20:47:39+08:00
    summary: 来源记录的最后更新时间
categories:
  - Android
slug: android-rom-2023-experiment
provenance:
  original_created_at: 2023-11-06T12:47:38Z
  original_updated_at: 2023-11-06T12:47:39Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2023-11-06
status: experiment-log
sources:
  - type: discussion
    number: 21
    url: https://github.com/junxian-li-hpc/myIssues/discussions/21
contributors:
  - junxian-li-hpc
---

!!! warning "不是刷机教程"
    原记录没有 ROM build、下载校验、recovery、分区或回滚步骤，只能保存结果，不能
    支撑他人复现。刷机可能造成数据丢失或设备无法启动。

<!-- more -->

2023-11-06 在小米 MIX 2 上尝试了几个第三方 ROM：

| ROM | 当时结果 | 备注 |
|---|---|---|
| Pixel Experience | 失败 | 未记录版本与失败阶段 |
| crDroid Android 11 | 可用 | 最终选择；录屏可降低视频质量 |
| crDroid Android 13 | 失败 | 在 WLAN 选择网络并输入密码后无响应 |
| LineageOS | 可用 | 未记录具体 build |

原记录还观察到：两个应用同时请求麦克风时，接近原生 Android 的 ROM 使用体验不如当时
的 MIUI。由于没有复现步骤和日志，这只是设备与版本相关的体验，不作一般性判断。

同日还对新到的大容量机械硬盘进行了分区和坏道检测，但未留下工具版本、结果或 SMART
数据，与 ROM 实验无直接关系，迁移时只在来源索引中保留，不扩写成磁盘教程。

## 来源

- [原始 Discussion #21](https://github.com/junxian-li-hpc/myIssues/discussions/21)
