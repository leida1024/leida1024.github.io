# Notes

站点源码。文章位于 `docs/`；在 VS Code 中编辑 Markdown，提交并推送到
`main` 后，GitHub Actions 会自动构建并发布到
<https://leida1024.github.io/>。

## 本地预览

```powershell
python -m pip install -r requirements.txt
python -m mkdocs serve
```

## 新建文章

每篇文章使用独立目录，正文和图片放在一起；正文 Markdown 与文章目录同名，方便在
编辑器标签中辨认：

```text
docs/articles/<分类>/<文章名>/
├── <文章名>.md
└── screenshot.png
```

文章需要在 frontmatter 中填写 `date.created`、`date.updated`、`categories` 和
`slug`。模板会自动更新首页、排序、分类和时间归档，不需要手工修改导航。本仓库只
保存源码，生成的 `site/` 目录不提交。页面时间使用带时区的 ISO 8601 值，当前文章
统一显示北京时间 `+08:00` 并保留到秒。

## 站点结构

- `文章` 是按创建时间排列的完整内容流，可按分类筛选和切换排序。
- `主题` 将现有分类组织为系统开发、硬件平台、软件效率和基础记录四组。
- `时间归档` 的年份内容页与 `分类` 页由 Material Blog 插件根据文章 frontmatter 自动生成。
- `迁移与历史` 保存迁移审计和旧链接说明，不参与普通文章分类。

新增或重命名分类时，同时更新 `docs/topics/index.md` 中的分组、链接和文章数；新增年份
时更新 `docs/timeline/index.md`。
