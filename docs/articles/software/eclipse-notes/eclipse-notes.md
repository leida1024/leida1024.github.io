---
title: Eclipse 编码、Source Folder 与自动导入小记
description: 四条 Eclipse 使用记录的合并版，包括项目编码、源码目录、模板与 import 位置
date:
  created: 2023-10-01T17:08:19+08:00
  updated: 2023-10-01T17:59:43+08:00
categories:
  - Software
slug: eclipse-notes
original_created_at: 2023-10-01T09:08:19Z
original_updated_at: 2023-10-01T09:59:43Z
migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2023-10-01
status: historical-tested
sources:
  - type: discussion
    number: 16
    url: https://github.com/junxian-li-hpc/myIssues/discussions/16
  - type: discussion
    number: 17
    url: https://github.com/junxian-li-hpc/myIssues/discussions/17
  - type: discussion
    number: 18
    url: https://github.com/junxian-li-hpc/myIssues/discussions/18
  - type: discussion
    number: 19
    url: https://github.com/junxian-li-hpc/myIssues/discussions/19
contributors:
  - junxian-li-hpc
---

这篇合并四条 2023 年的 Eclipse 小记录。菜单名称来自当时版本，较新的 Eclipse 可能
略有变化。

<!-- more -->

## 修改项目文本编码

右键项目，选择 **Properties**：

![Eclipse 项目右键菜单中的 Properties](project-properties-menu.png)

在 **Resource** 页的 **Text file encoding** 选择项目实际使用的编码：

![Eclipse 项目属性中的文本编码选择](project-text-encoding.png)

改变设置不会自动正确转换已有乱码文件。应先确认文件原始编码，必要时备份后转换，并
将项目编码配置提交到版本控制。

## 添加 Source Folder

一个项目下需要多个源码根目录时，右键项目并选择 **New → Source Folder**：

![Eclipse 新建 Source Folder 的菜单](new-source-folder-menu.png)

这与新建普通目录不同：Java 构建路径会把它识别为源码根目录。

## 文本模板

原记录希望在新代码文件中自动加入创建信息，只保存了一条外部教程，没有实际配置与
验证结果。Eclipse 通常可从 **Preferences → Java → Code Style → Code Templates**
管理模板。不要在模板里固定会过期的邮箱或个人信息，团队项目还应服从仓库的格式规则。

## 自动 import 插入到错误位置

新建 Class 时勾选生成 `public static void main`：

![Eclipse 新建 Class 并勾选 main 方法](new-class-main-method.png)

生成文件后，在模板注释下方输入 `Scanner` 并接受代码补全：

![生成的 Java 类和模板注释位置](generated-java-class.png)

![在类中输入 Scanner 并触发补全](scanner-content-assist.png)

当时 Eclipse 把自动添加的 `import` 放进了不合法的位置：

![import 被插入到错误位置后的错误提示](misplaced-import-error.png)

删除模板中处于 package/import 区域的异常内容，或手工将 `import` 移到 `package`
声明之后、类型声明之前，后续自动导入恢复正常。这里更像模板位置导致的结构问题，
没有证据表明是 Eclipse 本体的通用 bug。

## 来源

- [原始 Discussion #16](https://github.com/junxian-li-hpc/myIssues/discussions/16)
- [原始 Discussion #17](https://github.com/junxian-li-hpc/myIssues/discussions/17)
- [原始 Discussion #18](https://github.com/junxian-li-hpc/myIssues/discussions/18)
- [原始 Discussion #19](https://github.com/junxian-li-hpc/myIssues/discussions/19)
