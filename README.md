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
