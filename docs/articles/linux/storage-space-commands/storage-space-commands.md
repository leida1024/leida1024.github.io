---
title: 用 du、df 与 lsblk 区分空间占用
description: 分别查看文件目录、文件系统和块设备，避免把三类容量混为一谈
date:
  created: 2024-01-03T17:20:26+08:00
  updated: 2024-01-06T20:33:39+08:00
categories:
  - Linux
slug: storage-space-commands
original_created_at: 2024-01-03T09:20:26Z
original_updated_at: 2024-01-06T12:33:39Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2024-01-06
status: historical-notes
sources:
  - type: discussion
    number: 24
    url: https://github.com/junxian-li-hpc/myIssues/discussions/24
contributors:
  - junxian-li-hpc
  - lk-uoser
---

`du` 统计路径实际占用的文件块，`df` 查看整个已挂载文件系统的使用量，`lsblk` 展示磁盘
和分区结构。三个命令回答的问题不同。

<!-- more -->

## 常用命令

```bash
# 当前目录总占用
du -sh .

# 当前目录下一层各项占用，包含隐藏项时用 --max-depth 更稳妥
du -h --max-depth=1 .

# 所有已挂载文件系统
df -h

# 指定路径所在的文件系统
df -h /path/to/check

# 文件系统类型、UUID 和挂载点
lsblk -f
```

外部贡献者 [lk-uoser](https://github.com/lk-uoser) 在原 Discussion 中补充了
`--max-depth` 的思路；迁移时将原评论的 `--max-depth==1` 修正为合法的
`--max-depth=1`，并去掉会掩盖分层输出的 `-s`。

## 为什么 du 与 df 可能不同

- 已删除但仍被进程打开的文件会计入 `df`，却无法再由普通路径 `du` 找到。
- 文件系统保留块、稀疏文件、硬链接、快照和挂载覆盖都会造成差异。
- `df` 只显示已挂载文件系统，未挂载分区应通过 `lsblk`/`blkid` 查看。
- 工具可能用十进制 GB 或二进制 GiB 展示同一容量。

发现明显差异时，可先用 `sudo lsof +L1` 查找已删除但仍打开的文件；不要因为数字不同
就直接删除目录。

## 来源

- [原始 Discussion #24](https://github.com/junxian-li-hpc/myIssues/discussions/24)
- [lk-uoser 的补充](https://github.com/junxian-li-hpc/myIssues/discussions/24#discussioncomment-8030349)
