# myIssues 迁移索引

`myIssues` 曾以 GitHub Issues 和 Discussions 记录问题。2026-09-09 导出时共有 9 个
Issues、28 个 Discussions、84 条评论和回复、24 张图片。

迁移不是逐条复制：重复线程合并，评论按问题与结论重排，纯占位和外部链接标成历史或
资料卡，未经验证的生成内容不作为事实。原线程仍是完整讨论记录，文章保留原始创建、
更新时间、来源和贡献者；[来源属性清单](source-inventory.csv)另存了状态、分类/标签、
评论数和 upvote。CSV 中的 `created_at`、`updated_at` 是 GitHub API 返回的 UTC 时间，
原导出格式没有附加 `Z`；各文章 frontmatter 同时保存了明确带 `Z` 的原始值和北京时间。

## Issues

| 来源 | 原标题 | 迁移去向 |
|---|---|---|
| [#1](https://github.com/junxian-li-hpc/myIssues/issues/1) | OBS 预览界面不显示鼠标 | [OBS 预览中鼠标指针消失](../docs/articles/windows/obs-inverted-cursor/obs-inverted-cursor.md) |
| [#2](https://github.com/junxian-li-hpc/myIssues/issues/2) | iPad 不显示“还原位置与隐私” | [让 iPad 重新询问是否信任电脑](../docs/articles/apple/ipad-reset-trust/ipad-reset-trust.md) |
| [#3](https://github.com/junxian-li-hpc/myIssues/issues/3) | 双系统远程选择启动盘 | [远程指定双系统下一次启动项](../docs/articles/linux/dual-boot-grub-next-entry/dual-boot-grub-next-entry.md) |
| [#4](https://github.com/junxian-li-hpc/myIssues/issues/4) | 安装显卡驱动后网络和蓝牙无法使用 | [内核升级后网络与蓝牙恢复](../docs/articles/linux/kernel-modules-extra-network-recovery/kernel-modules-extra-network-recovery.md) |
| [#5](https://github.com/junxian-li-hpc/myIssues/issues/5) | Ubuntu 安装/卸载 Vivado | [Vivado 2017.1/2020.2](../docs/articles/fpga/vivado-ubuntu-legacy/vivado-ubuntu-legacy.md) |
| [#6](https://github.com/junxian-li-hpc/myIssues/issues/6) | New Ubuntu Essentials | [Ubuntu 工作环境索引](../docs/articles/linux/ubuntu-workstation-setup/ubuntu-workstation-setup.md)及 Vim、tmux 子文 |
| [#7](https://github.com/junxian-li-hpc/myIssues/issues/7) | 自制 Ubuntu 镜像 | [Systemback 废弃记录](../docs/articles/linux/systemback-ubuntu-image-history/systemback-ubuntu-image-history.md) |
| [#8](https://github.com/junxian-li-hpc/myIssues/issues/8) | PetaLinux 2020.2 安装 | [PetaLinux 旧版本安装位置](../docs/articles/fpga/petalinux-legacy-install/petalinux-legacy-install.md) |
| [#9](https://github.com/junxian-li-hpc/myIssues/issues/9) | Ubuntu 切换 Java 版本 | [用 update-alternatives 切换 Java](../docs/articles/linux/java-alternatives/java-alternatives.md) |

## Discussions

| 来源 | 原标题 | 迁移去向 |
|---|---|---|
| [#10](https://github.com/junxian-li-hpc/myIssues/discussions/10) | Welcome to myIssues Discussions! | GitHub 默认欢迎帖，仅保留在本索引和原线程 |
| [#11](https://github.com/junxian-li-hpc/myIssues/discussions/11) | 消失的 SWAP 分区 | [swap 分区诊断与恢复](../docs/articles/linux/swap-partition-recovery/swap-partition-recovery.md) |
| [#12](https://github.com/junxian-li-hpc/myIssues/discussions/12) | Rocket-Chip Tutorial | [Rocket-Chip emulator 运行记录](../docs/articles/fpga/rocket-chip-run-notes/rocket-chip-run-notes.md) |
| [#13](https://github.com/junxian-li-hpc/myIssues/discussions/13) | ZCU102 PL 时钟 | [ZCU102 时钟与资料索引](../docs/articles/fpga/zcu102-reference-notes/zcu102-reference-notes.md) |
| [#14](https://github.com/junxian-li-hpc/myIssues/discussions/14) | ZCU102 references | [ZCU102 时钟与资料索引](../docs/articles/fpga/zcu102-reference-notes/zcu102-reference-notes.md) |
| [#15](https://github.com/junxian-li-hpc/myIssues/discussions/15) | TinyRISC-V on ZCU102 | [TinyRISC-V 阅读与移植线索](../docs/articles/fpga/tinyriscv-learning-notes/tinyriscv-learning-notes.md) |
| [#16](https://github.com/junxian-li-hpc/myIssues/discussions/16) | Eclipse 中文乱码 | [Eclipse 使用小记](../docs/articles/software/eclipse-notes/eclipse-notes.md) |
| [#17](https://github.com/junxian-li-hpc/myIssues/discussions/17) | Eclipse 添加 Source Folder | [Eclipse 使用小记](../docs/articles/software/eclipse-notes/eclipse-notes.md) |
| [#18](https://github.com/junxian-li-hpc/myIssues/discussions/18) | Eclipse 添加文本模板 | [Eclipse 使用小记](../docs/articles/software/eclipse-notes/eclipse-notes.md) |
| [#19](https://github.com/junxian-li-hpc/myIssues/discussions/19) | Eclipse 自动 import | [Eclipse 使用小记](../docs/articles/software/eclipse-notes/eclipse-notes.md) |
| [#20](https://github.com/junxian-li-hpc/myIssues/discussions/20) | Verilator | [Verilator 5.008 构建与仿真](../docs/articles/fpga/verilator-5-008-notes/verilator-5-008-notes.md) |
| [#21](https://github.com/junxian-li-hpc/myIssues/discussions/21) | 2023-11-06 | [小米 MIX 2 ROM 实验](../docs/articles/android/android-rom-2023-experiment/android-rom-2023-experiment.md) |
| [#22](https://github.com/junxian-li-hpc/myIssues/discussions/22) | TinyRISC-V 从零开始写处理器 | [TinyRISC-V 阅读与移植线索](../docs/articles/fpga/tinyriscv-learning-notes/tinyriscv-learning-notes.md) |
| [#23](https://github.com/junxian-li-hpc/myIssues/discussions/23) | Ubuntu 键盘间歇性延迟 | [IBus 输入延迟临时恢复](../docs/articles/linux/ibus-input-delay/ibus-input-delay.md) |
| [#24](https://github.com/junxian-li-hpc/myIssues/discussions/24) | `du` / `df` 使用 | [区分空间占用](../docs/articles/linux/storage-space-commands/storage-space-commands.md) |
| [#25](https://github.com/junxian-li-hpc/myIssues/discussions/25) | Ubuntu Setup and Customizations | [Ubuntu 工作环境索引](../docs/articles/linux/ubuntu-workstation-setup/ubuntu-workstation-setup.md) |
| [#26](https://github.com/junxian-li-hpc/myIssues/discussions/26) | Vim 使用 | [Vim 基础配置](../docs/articles/linux/vim-notes/vim-notes.md) |
| [#27](https://github.com/junxian-li-hpc/myIssues/discussions/27) | VLIW Compiler Backend | [VLIW 编译器资料卡](../docs/articles/fpga/vliw-compiler-reference/vliw-compiler-reference.md) |
| [#28](https://github.com/junxian-li-hpc/myIssues/discussions/28) | 双固态、双系统问题记录 | [远程指定双系统下一次启动项](../docs/articles/linux/dual-boot-grub-next-entry/dual-boot-grub-next-entry.md) |
| [#29](https://github.com/junxian-li-hpc/myIssues/discussions/29) | Ubuntu 换源 | [软件源配置的版本边界](../docs/articles/linux/ubuntu-software-sources/ubuntu-software-sources.md) |
| [#30](https://github.com/junxian-li-hpc/myIssues/discussions/30) | Ubuntu 22.04 中文输入法 | [中文输入与双拼设置](../docs/articles/linux/ubuntu-chinese-input/ubuntu-chinese-input.md) |
| [#31](https://github.com/junxian-li-hpc/myIssues/discussions/31) | tmux 使用 | [tmux 基础配置](../docs/articles/linux/tmux-notes/tmux-notes.md) |
| [#32](https://github.com/junxian-li-hpc/myIssues/discussions/32) | Ubuntu ISO self | [Systemback 废弃记录](../docs/articles/linux/systemback-ubuntu-image-history/systemback-ubuntu-image-history.md) |
| [#33](https://github.com/junxian-li-hpc/myIssues/discussions/33) | GitHub SSH key | [为 GitHub 配置 SSH 密钥](../docs/articles/git/github-ssh-key-setup/github-ssh-key-setup.md) |
| [#34](https://github.com/junxian-li-hpc/myIssues/discussions/34) | Zsh | [Zsh 与 Oh My Zsh](../docs/articles/linux/zsh-notes/zsh-notes.md) |
| [#35](https://github.com/junxian-li-hpc/myIssues/discussions/35) | `getcwd` Permission denied | [getcwd 排查记录](../docs/articles/linux/getcwd-permission-error/getcwd-permission-error.md) |
| [#36](https://github.com/junxian-li-hpc/myIssues/discussions/36) | Spotify 代理 | [Spotify 分流规则](../docs/articles/network/spotify-proxy-rules/spotify-proxy-rules.md) |
| [#37](https://github.com/junxian-li-hpc/myIssues/discussions/37) | KeePass | [账号安全复盘](../docs/articles/security/keepass-account-security/keepass-account-security.md) |

## 保存边界

- 24 张原图全部已本地化；其中有文章价值的 24 张均与对应文章 Markdown 文件同目录。
- 原始评论、回复和 GitHub 元数据未逐字塞进发布稿，可通过每篇来源链接查看。
- 本地迁移工作区仍保存 API 原始 JSON 与 37 份逐线程快照，发布稿不会反向修改它们。
- `historical`、`legacy`、`reference-only` 等状态用于明确内容年代和验证程度。
