---
title: Ubuntu 软件源配置的版本边界
description: 从旧换源记录提炼的发行版代号、备份与验证原则
date:
  created: 2024-01-17T13:43:58+08:00
  updated: 2024-01-17T15:16:24+08:00
created_at: 2024-01-17T13:43:58+08:00
published_at: 2024-01-17T13:43:58+08:00
updated_at: 2024-01-17T15:16:24+08:00
update_history:
  - at: 2024-01-17T15:16:24+08:00
    summary: 来源记录的最后更新时间
categories:
  - Linux
slug: ubuntu-software-sources
provenance:
  original_created_at: 2024-01-17T05:43:58Z
  original_updated_at: 2024-01-17T07:16:24Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: null
status: rewritten-unverified
sources:
  - type: discussion
    number: 29
    url: https://github.com/junxian-li-hpc/myIssues/discussions/29
contributors:
  - junxian-li-hpc
---

!!! warning "没有迁移转载的源列表"
    原 Discussion 明确说明正文转载自第三方博客，且同时混有 `bionic`、`focal`、
    `jammy` 三个发行版。迁移稿不复制那部分内容，只保留实际需要的判断原则和来源。

<!-- more -->

## 先确认发行版与现有格式

```bash
. /etc/os-release
printf '%s %s\n' "$VERSION_ID" "$VERSION_CODENAME"
grep -RhsE '^(deb |Types:|URIs:|Suites:)' \
  /etc/apt/sources.list /etc/apt/sources.list.d 2>/dev/null
```

镜像配置必须匹配当前代号，例如 20.04 是 `focal`、22.04 是 `jammy`。不要将另一个
发行版的整段列表粘贴进来。新版本 Ubuntu 可能使用 deb822 格式的 `.sources` 文件，
不应假定所有配置都在 `/etc/apt/sources.list`。

## 修改原则

1. 优先使用系统 **Software & Updates** 界面或 Ubuntu 官方镜像说明选择镜像。
2. 修改前备份实际存在的源文件，并记录原内容。
3. 只替换镜像 URI，保留正确的发行版 suite、组件和签名配置。
4. 运行 `sudo apt update`，完整阅读错误；不要在索引失败时继续 `upgrade`。
5. 用 `apt-cache policy` 检查关键包来自预期发行版。

历史内容中的静态阿里云列表和 `apt-key` 用法不会在此重发。镜像路径和 Ubuntu 支持期
都会变化，应使用镜像站为当前版本提供的说明。

## 来源

- [原始 Discussion #29](https://github.com/junxian-li-hpc/myIssues/discussions/29)
- [Ubuntu 官方镜像列表](https://launchpad.net/ubuntu/+archivemirrors)
