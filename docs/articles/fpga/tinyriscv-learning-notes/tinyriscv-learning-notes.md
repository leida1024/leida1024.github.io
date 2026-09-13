---
title: TinyRISC-V 阅读与 ZCU102 移植线索
description: TinyRISC-V 源码阅读问题、总线观察和板级调试资料的历史整理
date:
  created: 2023-09-26T15:48:45+08:00
  updated: 2023-11-07T14:43:54+08:00
created_at: 2023-09-26T15:48:45+08:00
published_at: 2023-09-26T15:48:45+08:00
updated_at: 2023-11-07T14:43:54+08:00
update_history:
  - at: 2023-11-07T14:43:54+08:00
    summary: 来源记录的最后更新时间
categories:
  - FPGA
slug: tinyriscv-learning-notes
provenance:
  original_created_at: 2023-09-26T07:48:45Z
  original_updated_at: 2023-11-07T06:43:54Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: null
status: study-notes
sources:
  - type: discussion
    number: 15
    url: https://github.com/junxian-li-hpc/myIssues/discussions/15
  - type: discussion
    number: 22
    url: https://github.com/junxian-li-hpc/myIssues/discussions/22
contributors:
  - junxian-li-hpc
---

!!! info "未完成的学习记录"
    原线程主要是阅读时的问题和模型生成的解释，没有保留完整仿真或 ZCU102 移植结果。
    迁移稿只保留可追溯的问题与资料，不把生成内容当作已验证结论。

<!-- more -->

## 项目与教程

- [liangkangnan/tinyriscv](https://github.com/liangkangnan/tinyriscv)
- [从零开始写 RISC-V 处理器](https://liangkangnan.gitee.io/2020/04/29/%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E5%86%99RISC-V%E5%A4%84%E7%90%86%E5%99%A8/)
- 原线程引用的 FPGA 移植视频涉及 CMSIS-DAP 与 OpenOCD 连接

## 源码阅读时留下的问题

- 通用寄存器堆采用组合读时，写回与同地址读取的先后由什么旁路或时序规则保证？
- 除法模块的 `ready` 与 `busy` 分别描述哪一侧握手？
- 组合逻辑是否为所有分支赋值，从而避免意外推断 latch？
- RIB 总线主设备切换需要一个周期时，为何外设读取请求要在译码阶段提前发出？
- JTAG 地址相同的读写操作如何映射到调试模块寄存器？

这些问题应对照当时固定的源码 commit 和波形回答。原记录没有 commit，因此迁移时不补
确定性答案。

## 关于部分写入

原笔记曾把 `sb`/`sh` 存储理解为“先读取整字，再保留其他字节”。这并非总线实现的
通用要求：很多设计使用 byte-enable/write-strobe 只更新选中字节，并不先读整字。
是否发生读改写取决于缓存、存储器和总线接口实现，需要查看 TinyRISC-V 的具体 RTL。

## OpenOCD 线索

原线程保存了一套未注明版本、接口选项和验证结果的源码编译步骤。为避免形成不可复现
的安装指令，迁移稿不直接推荐它。重新开展板级实验时至少应记录：

1. OpenOCD tag/commit 与 configure 选项；
2. CMSIS-DAP 固件和 USB 识别结果；
3. ZCU102 约束、bitstream 和调试配置；
4. 能复现连接成功的完整命令与日志。

## 来源

- [原始 Discussion #15](https://github.com/junxian-li-hpc/myIssues/discussions/15)
- [原始 Discussion #22](https://github.com/junxian-li-hpc/myIssues/discussions/22)
