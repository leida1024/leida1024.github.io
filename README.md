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

每篇文章使用独立目录，正文和图片放在一起：

```text
docs/<主题>/<文章名>/
├── index.md
└── screenshot.png
```

新增文章后，在 `mkdocs.yml` 的 `nav` 中加入入口。本仓库只保存源码，生成的
`site/` 目录不提交。
