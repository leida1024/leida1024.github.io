---
title: Word 删除整页与空白页
description: 用“定位”选择当前页，并根据分页符、分节符或末尾段落处理空白页
date:
  created: 2026-02-26T16:01:13+08:00
  updated: 2026-02-26T16:01:13+08:00
categories:
  - Office
slug: word-delete-page
original_created_at: 2026-02-26T16:01:13+08:00
original_updated_at: 2026-02-26T16:01:13+08:00
migrated_at: 2026-09-10T00:20:43+08:00
last_verified: null
status: expanded-note
sources:
  - type: repository-file
    path: 10-office/word.md
    url: https://github.com/leida1024/myIssues/blob/main/10-office/word.md
contributors:
  - leida1024
---

Word 没有固定的“删除页面”对象；页面由正文、分页符、分节符和段落排版共同形成。删除
普通内容页时可以先选择整页，空白页则要找出制造它的格式标记。

<!-- more -->

## 选择并删除当前页

在 Windows 版 Word 中：

1. 把光标放到要删除的页面。
2. 按 `Ctrl+G` 打开“定位”。
3. 在页码框输入 `\page`，按 `Enter`，再关闭对话框。
4. Word 会选择当前页内容；确认选择范围后按 `Delete`。

删除前特别注意页眉、表格和跨页内容是否被一并选中。长文档最好先保存副本或确认撤销
功能可用。

## 空白页删不掉时

按 `Ctrl+Shift+8` 显示段落标记和其他非打印字符，然后检查：

- **多余段落标记**：选择空段落后删除。
- **分页符**：选择“分页符”标记后删除。
- **分节符**：删除会合并前后两节，可能改变页眉、页脚、页码、纸张方向和边距。
- **文档末尾的表格**：Word 必须在表格后保留一个段落标记。可选中该标记，把字号缩小
  到 `1 pt`、段前段后设为 0，或将它标记为隐藏文字，使其回到上一页。

导航窗格的“页面”视图适合定位，但删除缩略图本身并不是独立的删除机制，最终改变的
仍是正文和排版标记。

## 来源

- [原始 Word 删页笔记](https://github.com/leida1024/myIssues/blob/main/10-office/word.md)
- [Microsoft Support：Delete a page in Word](https://support.microsoft.com/en-us/office/delete-a-page-in-word-174fedd3-b4e5-42e4-a4d0-0c1dbb1e3e20)
