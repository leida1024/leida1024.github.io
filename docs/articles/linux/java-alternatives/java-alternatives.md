---
title: 用 update-alternatives 切换 Java
description: Ubuntu 同时安装多个 Java 版本时切换 java 命令并核对 javac
date:
  created: 2023-09-04T22:35:05+08:00
  updated: 2023-09-04T22:36:01+08:00
categories:
  - Linux
slug: java-alternatives
original_created_at: 2023-09-04T14:35:05Z
original_updated_at: 2023-09-04T14:36:01Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2023-09-04
status: historical-tested
sources:
  - type: issue
    number: 9
    url: https://github.com/junxian-li-hpc/myIssues/issues/9
contributors:
  - junxian-li-hpc
---

Ubuntu 上多个 JRE/JDK 已注册到 alternatives 系统时，可以交互选择默认 `java`：

```bash
sudo update-alternatives --config java
```

<!-- more -->

输入列表中的编号后验证：

```bash
java -version
readlink -f "$(command -v java)"
```

如果编译器也需要匹配，应单独切换并检查 `javac`：

```bash
sudo update-alternatives --config javac
javac -version
```

该命令只影响 alternatives 管理的可执行文件，不会自动修改项目中的 `JAVA_HOME`、
Gradle toolchain、IDE JDK 或当前 shell 中手工写入的路径。遇到版本仍不一致时，依次
检查这些覆盖层。

## 来源

- [原始 Issue #9](https://github.com/junxian-li-hpc/myIssues/issues/9)
