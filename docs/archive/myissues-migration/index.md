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
| [#1](https://github.com/junxian-li-hpc/myIssues/issues/1) | OBS 预览界面不显示鼠标 | [OBS 预览中鼠标指针消失](../../articles/windows/obs-inverted-cursor/index.md) |
| [#2](https://github.com/junxian-li-hpc/myIssues/issues/2) | iPad 不显示“还原位置与隐私” | [让 iPad 重新询问是否信任电脑](../../articles/apple/ipad-reset-trust/index.md) |
| [#3](https://github.com/junxian-li-hpc/myIssues/issues/3) | 双系统远程选择启动盘 | [远程指定双系统下一次启动项](../../articles/linux/dual-boot-grub-next-entry/index.md) |
| [#4](https://github.com/junxian-li-hpc/myIssues/issues/4) | 安装显卡驱动后网络和蓝牙无法使用 | [内核升级后网络与蓝牙恢复](../../articles/linux/kernel-modules-extra-network-recovery/index.md) |
| [#5](https://github.com/junxian-li-hpc/myIssues/issues/5) | Ubuntu 安装/卸载 Vivado | [Vivado 2017.1/2020.2](../../articles/fpga/vivado-ubuntu-legacy/index.md) |
| [#6](https://github.com/junxian-li-hpc/myIssues/issues/6) | New Ubuntu Essentials | [Ubuntu 工作环境索引](../../articles/linux/ubuntu-workstation-setup/index.md)及 Vim、tmux 子文 |
| [#7](https://github.com/junxian-li-hpc/myIssues/issues/7) | 自制 Ubuntu 镜像 | [Systemback 废弃记录](../../articles/linux/systemback-ubuntu-image-history/index.md) |
| [#8](https://github.com/junxian-li-hpc/myIssues/issues/8) | PetaLinux 2020.2 安装 | [PetaLinux 旧版本安装位置](../../articles/fpga/petalinux-legacy-install/index.md) |
| [#9](https://github.com/junxian-li-hpc/myIssues/issues/9) | Ubuntu 切换 Java 版本 | [用 update-alternatives 切换 Java](../../articles/linux/java-alternatives/index.md) |

## Discussions

| 来源 | 原标题 | 迁移去向 |
|---|---|---|
| [#10](https://github.com/junxian-li-hpc/myIssues/discussions/10) | Welcome to myIssues Discussions! | GitHub 默认欢迎帖，仅保留在本索引和原线程 |
| [#11](https://github.com/junxian-li-hpc/myIssues/discussions/11) | 消失的 SWAP 分区 | [swap 分区诊断与恢复](../../articles/linux/swap-partition-recovery/index.md) |
| [#12](https://github.com/junxian-li-hpc/myIssues/discussions/12) | Rocket-Chip Tutorial | [Rocket-Chip emulator 运行记录](../../articles/fpga/rocket-chip-run-notes/index.md) |
| [#13](https://github.com/junxian-li-hpc/myIssues/discussions/13) | ZCU102 PL 时钟 | [ZCU102 时钟与资料索引](../../articles/fpga/zcu102-reference-notes/index.md) |
| [#14](https://github.com/junxian-li-hpc/myIssues/discussions/14) | ZCU102 references | [ZCU102 时钟与资料索引](../../articles/fpga/zcu102-reference-notes/index.md) |
| [#15](https://github.com/junxian-li-hpc/myIssues/discussions/15) | TinyRISC-V on ZCU102 | [TinyRISC-V 阅读与移植线索](../../articles/fpga/tinyriscv-learning-notes/index.md) |
| [#16](https://github.com/junxian-li-hpc/myIssues/discussions/16) | Eclipse 中文乱码 | [Eclipse 使用小记](../../articles/software/eclipse-notes/index.md) |
| [#17](https://github.com/junxian-li-hpc/myIssues/discussions/17) | Eclipse 添加 Source Folder | [Eclipse 使用小记](../../articles/software/eclipse-notes/index.md) |
| [#18](https://github.com/junxian-li-hpc/myIssues/discussions/18) | Eclipse 添加文本模板 | [Eclipse 使用小记](../../articles/software/eclipse-notes/index.md) |
| [#19](https://github.com/junxian-li-hpc/myIssues/discussions/19) | Eclipse 自动 import | [Eclipse 使用小记](../../articles/software/eclipse-notes/index.md) |
| [#20](https://github.com/junxian-li-hpc/myIssues/discussions/20) | Verilator | [Verilator 5.008 构建与仿真](../../articles/fpga/verilator-5-008-notes/index.md) |
| [#21](https://github.com/junxian-li-hpc/myIssues/discussions/21) | 2023-11-06 | [小米 MIX 2 ROM 实验](../../articles/android/android-rom-2023-experiment/index.md) |
| [#22](https://github.com/junxian-li-hpc/myIssues/discussions/22) | TinyRISC-V 从零开始写处理器 | [TinyRISC-V 阅读与移植线索](../../articles/fpga/tinyriscv-learning-notes/index.md) |
| [#23](https://github.com/junxian-li-hpc/myIssues/discussions/23) | Ubuntu 键盘间歇性延迟 | [IBus 输入延迟临时恢复](../../articles/linux/ibus-input-delay/index.md) |
| [#24](https://github.com/junxian-li-hpc/myIssues/discussions/24) | `du` / `df` 使用 | [区分空间占用](../../articles/linux/storage-space-commands/index.md) |
| [#25](https://github.com/junxian-li-hpc/myIssues/discussions/25) | Ubuntu Setup and Customizations | [Ubuntu 工作环境索引](../../articles/linux/ubuntu-workstation-setup/index.md) |
| [#26](https://github.com/junxian-li-hpc/myIssues/discussions/26) | Vim 使用 | [Vim 基础配置](../../articles/linux/vim-notes/index.md) |
| [#27](https://github.com/junxian-li-hpc/myIssues/discussions/27) | VLIW Compiler Backend | [VLIW 编译器资料卡](../../articles/fpga/vliw-compiler-reference/index.md) |
| [#28](https://github.com/junxian-li-hpc/myIssues/discussions/28) | 双固态、双系统问题记录 | [远程指定双系统下一次启动项](../../articles/linux/dual-boot-grub-next-entry/index.md) |
| [#29](https://github.com/junxian-li-hpc/myIssues/discussions/29) | Ubuntu 换源 | [软件源配置的版本边界](../../articles/linux/ubuntu-software-sources/index.md) |
| [#30](https://github.com/junxian-li-hpc/myIssues/discussions/30) | Ubuntu 22.04 中文输入法 | [中文输入与双拼设置](../../articles/linux/ubuntu-chinese-input/index.md) |
| [#31](https://github.com/junxian-li-hpc/myIssues/discussions/31) | tmux 使用 | [tmux 基础配置](../../articles/linux/tmux-notes/index.md) |
| [#32](https://github.com/junxian-li-hpc/myIssues/discussions/32) | Ubuntu ISO self | [Systemback 废弃记录](../../articles/linux/systemback-ubuntu-image-history/index.md) |
| [#33](https://github.com/junxian-li-hpc/myIssues/discussions/33) | GitHub SSH key | [为 GitHub 配置 SSH 密钥](../../articles/git/github-ssh-key-setup/index.md) |
| [#34](https://github.com/junxian-li-hpc/myIssues/discussions/34) | Zsh | [Zsh 与 Oh My Zsh](../../articles/linux/zsh-notes/index.md) |
| [#35](https://github.com/junxian-li-hpc/myIssues/discussions/35) | `getcwd` Permission denied | [getcwd 排查记录](../../articles/linux/getcwd-permission-error/index.md) |
| [#36](https://github.com/junxian-li-hpc/myIssues/discussions/36) | Spotify 代理 | [Spotify 分流规则](../../articles/network/spotify-proxy-rules/index.md) |
| [#37](https://github.com/junxian-li-hpc/myIssues/discussions/37) | KeePass | [账号安全复盘](../../articles/security/keepass-account-security/index.md) |

## 保存边界

- 24 张原图全部已本地化；其中有文章价值的 24 张均与对应 `index.md` 同目录。
- 原始评论、回复和 GitHub 元数据未逐字塞进发布稿，可通过每篇来源链接查看。
- 本地迁移工作区仍保存 API 原始 JSON 与 37 份逐线程快照，发布稿不会反向修改它们。
- `historical`、`legacy`、`reference-only` 等状态用于明确内容年代和验证程度。
