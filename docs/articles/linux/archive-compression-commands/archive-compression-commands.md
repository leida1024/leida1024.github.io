---
title: tar、zip、gzip 与 7z 归档压缩速查
description: 区分归档与压缩，并整理创建、查看和解压常见格式的可靠命令
date:
  created: 2024-01-30T13:45:26+08:00
  updated: 2024-01-30T13:45:26+08:00
created_at: 2024-01-30T13:45:26+08:00
published_at: 2024-01-30T13:45:26+08:00
updated_at: 2024-01-30T13:45:26+08:00
update_history: []
categories:
  - Linux
slug: archive-compression-commands
provenance:
  original_created_at: 2024-01-30T13:45:26+08:00
  original_updated_at: 2024-01-30T13:45:26+08:00
  migrated_at: 2026-09-10T00:20:43+08:00
last_verified: null
status: rewritten-unverified
sources:
  - type: repository-file
    path: ubuntu-essentials/10-ubuntu-usages/tar.md
    url: https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/10-ubuntu-usages/tar.md
contributors:
  - leida1024
---

`tar` 负责把多个路径组织成一个归档；gzip、bzip2 和 xz 主要压缩单个字节流。`.tar.gz`
和 `.tar.xz` 是先归档、再压缩的组合。ZIP 与 7z 则把归档和压缩放在同一种格式里。

<!-- more -->

## 先看内容，再解压

来源不明的归档可能包含绝对路径、`../` 路径或符号链接。先列出内容，并解压到新建的
空目录，不要直接覆盖工作目录：

```bash
mkdir -p unpacked
tar -tf archive.tar.gz
tar -xf archive.tar.gz -C unpacked
```

现代 GNU tar 通常能根据文件内容识别 gzip、bzip2 或 xz，解压时 `-xvf` 往往已经够用。
显式写出 `-z`、`-j`、`-J` 也可以让意图更清楚。

## tar 组合格式

```bash
# 创建 gzip / xz 压缩的归档
tar -czf archive.tar.gz directory file.txt
tar -cJf archive.tar.xz directory file.txt

# 查看
tar -tzf archive.tar.gz
tar -tJf archive.tar.xz

# 解压到指定目录
tar -xzf archive.tar.gz -C unpacked
tar -xJf archive.tar.xz -C unpacked
```

常用选项中，`-c` 创建、`-x` 解包、`-t` 列表、`-f` 指定归档文件；`-z`、`-j`、`-J`
分别选择 gzip、bzip2、xz。`-v` 只是显示详细文件列表，不影响格式。

向未压缩的 `.tar` 追加文件可以使用：

```bash
tar -rf archive.tar another-file
```

压缩流通常不能这样原地追加；应重新生成归档。

## ZIP

```bash
# 递归压缩目录
zip -r archive.zip directory

# 查看内容
unzip -l archive.zip

# 解压到指定目录
unzip archive.zip -d unpacked

# 更新归档中比现有条目新的文件
zip -u archive.zip file.txt
```

查看 ZIP 内容用的是 `unzip -l`，不是 `zip -l`。处理文件名编码、权限或符号链接时，
还应确认 ZIP 由什么平台和工具创建。

## gzip、bzip2 与 xz

这些工具默认处理单个文件，并可能用压缩文件替换原文件。想保留输入时可使用 `-k`：

```bash
gzip -k file.txt
bzip2 -k file.txt
xz -k file.txt

gzip -dk file.txt.gz
bzip2 -dk file.txt.bz2
xz -dk file.txt.xz
```

它们不会像 tar 那样保存一个完整目录树。需要压缩目录时，先用 tar 归档。

## 7z

安装 7-Zip 命令行工具后，常见操作是：

```bash
7z a archive.7z directory file.txt
7z l archive.7z
7z x archive.7z -ounpacked
```

`a` 添加并创建归档，`l` 列表，`x` 按完整路径解压。`-o` 与目标目录之间没有空格。
自动确认覆盖可加 `-y`，但脚本中启用前应确认目标目录不会包含需要保留的同名文件。

## 格式怎么选

| 需求 | 常见选择 |
| --- | --- |
| Linux 文件、权限和符号链接 | `.tar.gz` 或 `.tar.xz` |
| 跨平台交换普通文件 | `.zip` |
| 更高压缩率和 7-Zip 工具链 | `.7z` |
| 只压缩一个流或单个文件 | `.gz`、`.bz2` 或 `.xz` |

gzip 通常更快、兼容性更广；xz 通常压缩得更小，但耗时和内存可能更多。最终选择应根据
数据类型、平台和解压端可用工具实测。

## 来源

- [原始归档命令笔记](https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/10-ubuntu-usages/tar.md)
- [GNU tar manual](https://www.gnu.org/software/tar/manual/)
- [GNU gzip manual](https://www.gnu.org/software/gzip/manual/)
- [7-Zip for Linux](https://7-zip.org/7z.html)
