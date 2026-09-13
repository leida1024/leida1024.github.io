---
title: Spotify 分流规则备忘
description: 一组 Clash 风格的 Spotify 域名后缀规则及其适用边界
date:
  created: 2024-07-08T19:13:33+08:00
  updated: 2024-07-08T19:13:34+08:00
created_at: 2024-07-08T19:13:33+08:00
published_at: 2024-07-08T19:13:33+08:00
updated_at: 2024-07-08T19:13:34+08:00
update_history:
  - at: 2024-07-08T19:13:34+08:00
    summary: 来源记录的最后更新时间
categories:
  - Network
slug: spotify-proxy-rules
provenance:
  original_created_at: 2024-07-08T11:13:33Z
  original_updated_at: 2024-07-08T11:13:34Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: null
status: historical-snippet
sources:
  - type: discussion
    number: 36
    url: https://github.com/junxian-li-hpc/myIssues/discussions/36
contributors:
  - junxian-li-hpc
---

原记录只保存了一组规则，没有客户端名称、规则模式、测试地区或日志。从语法看，它们
适用于 Clash 一类使用 `DOMAIN-SUFFIX,<域名>,<策略组>` 的配置。

<!-- more -->

将 `<策略组>` 换成配置中实际存在的名称：

```yaml
rules:
  - DOMAIN-SUFFIX,spotify.com,<策略组>
  - DOMAIN-SUFFIX,scdn.co,<策略组>
  - DOMAIN-SUFFIX,spclient.wg.spotify.com,<策略组>
  - DOMAIN-SUFFIX,audio-ak-spotify-com.akamaized.net,<策略组>
  - DOMAIN-SUFFIX,spotifycdn.com,<策略组>
```

`DOMAIN-SUFFIX,spotify.com` 已覆盖 `spclient.wg.spotify.com`，单独再写后者通常是冗余，
但是否保留取决于客户端从上到下匹配规则的方式。服务域名会变化，以上规则不能保证
覆盖登录、图片、音频和遥测的所有请求。应用后应查看客户端连接日志，而不是继续无限
添加来源不明的域名。

## 来源

- [原始 Discussion #36](https://github.com/junxian-li-hpc/myIssues/discussions/36)
