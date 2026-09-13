# 文章时间元数据规范

> 生效时间：2026-09-13
>
> 范围：`docs/articles/` 中的文章 frontmatter、首页文章流、时间线和文章页元信息。

## 决策

文章时间分为内容生命周期和来源审计两组。读者关心文章何时公开、最近何时更新；作者和维护者还需要知道文章何时开始写作，以及内容从哪里来、何时迁入本站。

### 内容生命周期

| 字段 | 含义 | 读者界面 | 排序用途 |
| --- | --- | --- | --- |
| `created_at` | 开始写作、形成初稿或创建记录 | 折叠“文章记录”显示为“写于” | 不排序 |
| `published_at` | 第一次公开发布 | 顶部和文章信息显示为“发布于/首次发布于” | 首页默认排序、时间线 |
| `updated_at` | 发布后最近一次有意义的内容更新 | 日期不同时显示为“更新于” | 首页可按更新时间排序 |
| `update_history` | 发布后的重要修改，按时间从旧到新记录 `at` 与 `summary` | 正文末尾折叠显示 | 不单独排序 |

`created_at` 与 `published_at` 可以相差多年。发布前的草稿迭代不进入 `update_history`；发布后的实质修改必须同时更新 `updated_at` 和 `update_history`。错别字、纯排版、构建和迁移不算读者更新。

### 来源审计

以下字段放在 `provenance` 下，只用于维护和追溯：

- `original_created_at`
- `original_updated_at`
- `source_committed_at`
- `migrated_at`
- `repository_files_migrated_at`

“迁移”不是文章公开事件，不在普通文章页面显示，也不应影响发布时间线。

## Material 构建适配

Material Blog 插件要求 `date.created` 存在，并使用它生成文章流和归档。每篇文章保留以下适配结构：

```yaml
date:
  created: 2026-09-13T10:00:00+08:00 # 与 published_at 相同
  updated: 2026-09-13T10:00:00+08:00 # 与 updated_at 相同
```

它不是另一套时间来源；修改文章时必须同步维护顶层生命周期字段与该适配结构。构建校验应确保两组值一致。

## 示例

一篇去年写、今天发布的文章：

```yaml
created_at: 2025-08-12T20:00:00+08:00
published_at: 2026-09-13T10:00:00+08:00
updated_at: 2026-09-13T10:00:00+08:00
update_history: []
```

发布后修订：

```yaml
updated_at: 2026-09-20T09:30:00+08:00
update_history:
  - at: 2026-09-20T09:30:00+08:00
    summary: 补充新版命令和验证结果
```

## 旧文章迁移

- 已公开的旧文章：`published_at` 取原始公开/创建时间，`created_at` 保存原始写作或创建时间。
- `original_*` 等原始字段原值不改，只移动到 `provenance`。
- 原始更新时间没有可靠修改说明时，可在 `update_history` 中记为“来源记录的最后更新时间”；不得把 `migrated_at` 当作文章更新。
- 从私人笔记整理、迁入后才首次公开的文章：`published_at` 使用本站首次公开时间，来源时间留在 `provenance`。
