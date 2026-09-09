---
title: OBS 预览中鼠标指针消失的排查记录
description: Windows 11 使用反色鼠标指针时，OBS 捕获预览不显示光标的一例
date:
  created: 2023-08-15T23:42:30+08:00
  updated: 2023-09-01T09:51:28+08:00
categories:
  - Windows
slug: obs-inverted-cursor
original_created_at: 2023-08-15T15:42:30Z
original_updated_at: 2023-09-01T01:51:28Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2023-08-15
status: historical-tested
sources:
  - type: issue
    number: 1
    url: https://github.com/junxian-li-hpc/myIssues/issues/1
contributors:
  - junxian-li-hpc
---

在 Windows 11 使用 OBS 的 Display Capture 或 Window Capture 时，录屏可以包含光标，
但用于裁剪画面的预览中看不到鼠标指针。

<!-- more -->

原环境启用了 Windows 辅助功能中的反色鼠标指针。进入 **Settings → Accessibility →
Mouse pointer and touch**，暂时切换为其他指针样式后，OBS 预览重新显示光标。

这只是一个已命中的特定原因。若切换指针无效，还应检查捕获源的 **Capture Cursor**、
OBS 与目标应用是否使用不同权限级别、捕获方式和显卡设置。调整后同时验证预览与最终
录制文件，因为两者的表现可能不同。

## 来源

- [原始 Issue #1](https://github.com/junxian-li-hpc/myIssues/issues/1)
- [OBS Forums：Windows 11 反色指针相关讨论](https://obsproject.com/forum/threads/win11-mouse-cursor-disappears-in-preview-once-display-capture-or-window-capture-is-added.149616/)
