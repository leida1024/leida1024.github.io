# myIssues 仓库文件迁移索引

本页记录 `myIssues` 仓库中 Issues、Discussions 之外的普通文件如何进入博客。源仓库仍是
完整历史的保存位置；博客只发布经过核对、去重和改写后可以独立阅读的内容。

清点基于源仓库提交 `8b4cd69`。当时共有 483 个受 Git 跟踪的文件，其中 457 个位于
`ubuntu-essentials/`；这个数字很大，主要是因为仓库保存了第三方插件源码和离线安装包，
并不代表有 483 篇可迁移文档。

## 独立文章

| 源文件 | 内容形态 | 博客文章 | 处理方式 |
| --- | --- | --- | --- |
| `docs/计算机最传统的课程在学什么.md` | 原文迁移 | [计算机最传统的课程在学什么](../docs/articles/computer-science/traditional-cs-course-map/计算机最传统的课程在学什么.md) | 保留原文件名与原文，不改写内容 |
| `05-daiding/makefile 变量问题.md` | 原理教程 | [Makefile 配方之间为什么留不住变量](../docs/articles/build-tools/make-recipe-state-and-variables/make-recipe-state-and-variables.md) | 删除原通用问答，重写 make、shell 与递归 make 的边界 |
| `10-ubuntu-usages/tar.md` | 命令速查 | [tar、zip、gzip 与 7z 归档压缩速查](../docs/articles/linux/archive-compression-commands/archive-compression-commands.md) | 修正 ZIP、7z 和单文件压缩工具的错误命令 |
| `10-ubuntu-usages/scp.md` | 操作教程 | [用 scp 在本机与远程主机之间传文件](../docs/articles/linux/scp-file-transfer/scp-file-transfer.md) | 增加端口、密钥、host key 与新旧协议边界 |
| `10-ubuntu-usages/03-server.md` | 配置教程 | [Ubuntu Server 局域网、SSH 与代理配置](../docs/articles/linux/ubuntu-server-lan-ssh-proxy/ubuntu-server-lan-ssh-proxy.md) | 删除关闭整机防火墙和允许 root 登录的建议，按网络、SSH、代理重排 |
| `01-configs-backup/` 与安装脚本 | 配置方法 | [Linux dotfiles 备份与恢复脚本的边界](../docs/articles/linux/dotfiles-backup-and-restore/dotfiles-backup-and-restore.md) | 不发布原始自动化，提炼可回滚的配置恢复方法 |
| `10-office/word.md` | 操作速记 | [Word 删除整页与空白页](../docs/articles/office/word-delete-page/word-delete-page.md) | 从单条快捷操作扩展为按分页原因排查 |

表格中的 `05-daiding/`、`10-ubuntu-usages/` 和 `01-configs-backup/` 都位于源仓库的
`ubuntu-essentials/` 下。

## 合并到已有文章

- `10-ubuntu-usages/nerdtree.md` 与离线 Vim 插件脚本合并进
  [Vim 基础配置与搜索替换](../docs/articles/linux/vim-notes/vim-notes.md)，只保留仍可确认的
  NERDTree 操作与原生 package 安装路径。
- 离线 Zsh、Oh My Zsh、Powerlevel10k 和 tmux 配置不再各建文章。安装边界已经分别由
  [Zsh 与 Oh My Zsh 安装边界](../docs/articles/linux/zsh-notes/zsh-notes.md)、
  [tmux 基础配置与自动进入会话](../docs/articles/linux/tmux-notes/tmux-notes.md) 和 dotfiles 文章覆盖。
- 三份 ZCU102 PDF 没有复制进站点。已有
  [ZCU102 时钟与板卡资料索引](../docs/articles/fpga/zcu102-reference-notes/zcu102-reference-notes.md) 指向官方资料。

## 只保留在源仓库

| 内容 | 原因 |
| --- | --- |
| KeePass 插件 DLL、PLGX 与语言包 | 第三方二进制，不是文章，也不应由博客重新分发 |
| Oh My Zsh、Powerlevel10k、zsh 插件和 NERDTree 的完整源码 | 第三方项目快照，数量大且会迅速过时，应回到上游仓库 |
| tmux、libevent、ncurses 等源码压缩包 | 离线安装缓存，不是原创内容 |
| `.bashrc`、`.zshrc`、`.p10k.zsh` 等整份个人配置 | 与机器环境紧密绑定；博客只讲可移植片段和恢复原则 |
| `prompts/paper.md` | 通用论文总结提示词，缺少实际论文案例和验证结果，暂不足以独立成稿 |
| `script.sh` | 教学式 shell 语法样例，与仓库实际配置流程无关 |

## 迁移原则

1. 不把第三方源码、安装包或二进制伪装成原创博客内容。
2. 历史脚本中的覆盖、递归删除、硬编码路径和权限操作不直接作为推荐命令发布。
3. 原文有错误时保留来源链接，但发布稿以可解释、可回滚的步骤为准。
4. 文章 frontmatter 保存源文件路径、原提交时间和本次迁移时间。

## 来源

- [myIssues 源仓库](https://github.com/leida1024/myIssues)
- [源仓库 ubuntu-essentials 目录](https://github.com/leida1024/myIssues/tree/main/ubuntu-essentials)
