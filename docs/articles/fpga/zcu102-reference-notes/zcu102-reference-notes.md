---
title: ZCU102 时钟与板卡资料索引
description: ZCU102 的 PS 到 PL 时钟用法和官方板卡资料入口
date:
  created: 2023-09-21T16:15:46+08:00
  updated: 2023-09-21T16:21:41+08:00
created_at: 2023-09-21T16:15:46+08:00
published_at: 2023-09-21T16:15:46+08:00
updated_at: 2023-09-21T16:21:41+08:00
update_history:
  - at: 2023-09-21T16:21:41+08:00
    summary: 来源记录的最后更新时间
categories:
  - FPGA
slug: zcu102-reference-notes
provenance:
  original_created_at: 2023-09-21T08:15:46Z
  original_updated_at: 2023-09-21T08:21:41Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: null
status: reference-only
sources:
  - type: discussion
    number: 13
    url: https://github.com/junxian-li-hpc/myIssues/discussions/13
  - type: discussion
    number: 14
    url: https://github.com/junxian-li-hpc/myIssues/discussions/14
contributors:
  - junxian-li-hpc
---

这两条原始 Discussion 只有外部链接，没有留下独立实验步骤。迁移后将它们合并为资料
卡片，避免将链接集合包装成教程。

<!-- more -->

## PS 时钟送入 PL

[Numato Lab 的 Zynq PS PLL 时钟说明](https://numato.com/kb/styx-use-xilinx-zynq-ps-pll-clocks-fpga-fabric/)
展示了在 Zynq Processing System 配置中启用 fabric clock，并将其用于 PL 逻辑的基本
路径。文章针对的板卡不是 ZCU102，概念可以参考，具体时钟约束和频率仍应回到 ZCU102
与所用器件的官方文档确认。

## 板卡资料

- [ZCU102 Quick Start Guide](https://www.xilinx.com/support/documents/boards_and_kits/zcu102/xtp426-zcu102-quickstart.pdf)
- [UG1182: ZCU102 Evaluation Board User Guide](https://docs.xilinx.com/v/u/en-US/ug1182-zcu102-eval-bd)
- 原线程还保存过一条第三方托管的原理图链接；迁移稿不复制或重新托管该 PDF，应从
  AMD 官方板卡页面获取当前可用版本。

## 来源

- [原始 Discussion #13](https://github.com/junxian-li-hpc/myIssues/discussions/13)
- [原始 Discussion #14](https://github.com/junxian-li-hpc/myIssues/discussions/14)
