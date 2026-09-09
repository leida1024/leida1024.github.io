---
title: PetaLinux 2017.1/2020.2 安装位置记录
description: PetaLinux 旧版本安装器参数与非 root 安装目录的历史备忘
date:
  created: 2023-09-01T16:16:35+08:00
  updated: 2023-09-02T20:09:07+08:00
categories:
  - FPGA
slug: petalinux-legacy-install
original_created_at: 2023-09-01T08:16:35Z
original_updated_at: 2023-09-02T12:09:07Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: null
status: legacy-incomplete
sources:
  - type: issue
    number: 8
    url: https://github.com/junxian-li-hpc/myIssues/issues/8
contributors:
  - junxian-li-hpc
---

!!! warning "不完整的旧版本备忘"
    原记录没有列出依赖、Ubuntu 小版本、安装结果或验证命令，不能作为完整安装教程。
    2017.1 和 2020.2 也已是旧工具链，应配合对应版本官方文档使用。

<!-- more -->

## 2020.2

从 AMD/Xilinx 的归档下载页取得 `petalinux-v2020.2-final-installer.run`。安装目录应由
普通用户拥有并可写，不要把 PetaLinux 安装到只有 root 能访问的位置：

```bash
chmod +x petalinux-v2020.2-final-installer.run
mkdir -p "$HOME/opt/petalinux-2020.2"
./petalinux-v2020.2-final-installer.run -d "$HOME/opt/petalinux-2020.2"
```

原记录特别注明 2020.2 使用 `-d` 指定目录。安装前仍需按 2020.2 文档安装主机依赖，
并确认宿主 Ubuntu 版本处于该版本的支持矩阵中。

## 2017.1

旧记录中的调用形式没有 `-d`：

```bash
./petalinux-v2017.1-final-installer.run <安装目录>
```

这条仅用于解释两个安装器的参数差异，未保留完整复测。不要照抄原记录中的系统级
`/usr/programs` 路径。

## 来源

- [原始 Issue #8](https://github.com/junxian-li-hpc/myIssues/issues/8)
- [AMD 嵌入式开发工具归档](https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/embedded-design-tools/archive.html)
