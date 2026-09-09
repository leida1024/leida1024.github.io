# myIssues 迁移审核表

## 审核结论

发布稿正文均经过整理，不是原 Issue/Discussion 的逐字镜像。原始 UTC 创建/更新时间、
来源类型与编号、来源链接和贡献者保留在 frontmatter；24 张图片仅重命名，二进制内容
未改变。完整原始 JSON、评论和逐线程快照仍保存在本机
`C:\myfile\Proj\myIssues-migration`，未写回、未删除。

改动等级：

- **轻微**：调整标题、格式和段落，原结论基本不变。
- **中等**：重排内容、参数化路径、补充验证或风险边界。
- **较大**：合并/拆分多个来源，删除占位、转载或未验证生成内容，并重新组织正文。
- **重写**：原内容不宜直接发布，仅保留问题和可核实信息，按安全边界重新写。

## 提交批次

| 批次 | Commit | 内容 |
|---|---|---|
| 前置试点 | `0c88f07`、`2e38255` | Discussion #23、#30；后续补北京时间与排序元数据 |
| 批次 2：真实故障 | `44147f3` | 双系统、内核模块、Vivado、swap |
| 批次 3：FPGA 专题 | `d493759` | PetaLinux、Rocket-Chip、ZCU102、TinyRISC-V、Verilator、VLIW |
| 批次 4：Linux 工作环境 | `3d8fe80` | Ubuntu 配置、Vim、tmux、Zsh、存储、getcwd、Java、软件源、SSH |
| 批次 5：应用与历史 | `100bb59` | OBS、iPad、Eclipse、Android、Systemback、Spotify、KeePass |
| 迁移索引 | `ce9fd54` | 37 条来源映射、属性 CSV、站点导航 |

## 逐项改动

| 来源 | 发布稿 | 是否改动原文 | 主要变化 |
|---|---|---|---|
| Discussion #23 | [IBus 输入延迟](docs/articles/linux/ibus-input-delay/index.md) | 有，轻微 | 评论整理成现象、临时恢复和两次实测；明确不是根因修复 |
| Discussion #30 | [Ubuntu 中文输入](docs/articles/linux/ubuntu-chinese-input/index.md) | 有，中等 | 步骤重排、截图加说明，限定 Ubuntu 22.04 |
| Issue #3 + Discussion #28 | [双系统下一次启动](docs/articles/linux/dual-boot-grub-next-entry/index.md) | 有，较大 | 两条来源合并；删除 GPT 原答和情绪/TODO；补菜单序号风险、远控边界 |
| Issue #4 | [内核模块恢复](docs/articles/linux/kernel-modules-extra-network-recovery/index.md) | 有，中等 | 按现象、定位、恢复重排；硬编码内核只作为历史值；补适用边界 |
| Issue #5 | [Vivado 旧版本](docs/articles/fpga/vivado-ubuntu-legacy/index.md) | 有，较大 | 路径参数化；按安装、环境、卸载、重装报错重排；保留外部贡献者署名 |
| Discussion #11 | [swap 分区恢复](docs/articles/linux/swap-partition-recovery/index.md) | 有，较大 | 删除 GPT 长解释；加入设备确认、数据风险和 UUID `fstab` 写法；区分已测与补充建议 |
| Issue #8 | [PetaLinux 安装](docs/articles/fpga/petalinux-legacy-install/index.md) | 有，中等 | 个人路径参数化；明确缺依赖、版本矩阵与最终验证，降级为不完整旧记录 |
| Discussion #12 | [Rocket-Chip 记录](docs/articles/fpga/rocket-chip-run-notes/index.md) | 有，较大 | 删除 TODO 和生成式排错正文；保留项目、故障线索与 emulator 成功截图 |
| Discussions #13、#14 | [ZCU102 资料](docs/articles/fpga/zcu102-reference-notes/index.md) | 有，较大 | 两条纯链接合并为资料卡；不复制第三方 PDF，不伪装成教程 |
| Discussions #15、#22 | [TinyRISC-V 阅读记录](docs/articles/fpga/tinyriscv-learning-notes/index.md) | 有，较大 | 合并移植线索和源码疑问；删除大段未验证模型回答；纠正“部分写入必须先读”泛化 |
| Discussion #20 | [Verilator 5.008](docs/articles/fpga/verilator-5-008-notes/index.md) | 有，较大 | 删除逐行 GPT 对话；保留构建和示例；将含 C++ 语法的 `.c` 更正为 `.cpp` |
| Discussion #27 | [VLIW 编译器资料卡](docs/articles/fpga/vliw-compiler-reference/index.md) | 有，轻微 | 保留唯一项目链接，增加“未实践、未验证”边界 |
| Issue #6 + Discussion #25 | [Ubuntu 工作环境索引](docs/articles/linux/ubuntu-workstation-setup/index.md) | 有，较大 | 去重并拆分为多篇；修正会递归增长的 `PROMPT_COMMAND` 风险；保留代理截图 |
| Issue #6 + Discussion #26 | [Vim 记录](docs/articles/linux/vim-notes/index.md) | 有，较大 | 精简个人 `.vimrc`；移除旧 GUI/响铃及高风险无备份默认；补剪贴板能力检查 |
| Issue #6 + Discussions #25、#31 | [tmux 记录](docs/articles/linux/tmux-notes/index.md) | 有，中等 | 合并重复配置；补可恢复会话命令；把 Zsh/TPM 写成有条件配置 |
| Discussion #34 | [Zsh 记录](docs/articles/linux/zsh-notes/index.md) | 有，重写 | 移除 `--no-check-certificate | sh`、`/root` 硬编码和强制 locale；保留插件线索 |
| Discussion #24 | [du/df/lsblk](docs/articles/linux/storage-space-commands/index.md) | 有，中等 | 删除通用 GPT 说明；区分三类命令；修正外部评论的 `--max-depth==1` 拼写并署名 |
| Discussion #35 | [getcwd 排查](docs/articles/linux/getcwd-permission-error/index.md) | 有，重写 | 原文只有症状；补诊断顺序，但明确没有原环境复测，不声称已解决 |
| Issue #9 | [Java alternatives](docs/articles/linux/java-alternatives/index.md) | 有，轻微 | 保留原命令；补 `java`/`javac` 验证及 `JAVA_HOME`、IDE 覆盖边界 |
| Discussion #29 | [Ubuntu 软件源](docs/articles/linux/ubuntu-software-sources/index.md) | 有，重写 | 不迁移明确转载的博客正文和静态源列表；改写为版本代号、备份和验证原则 |
| Discussion #33 | [GitHub SSH 密钥](docs/articles/git/github-ssh-key-setup/index.md) | 有，重写 | 新建密钥从 RSA 示例改为 Ed25519；补独立文件名、权限、host key 与私钥边界 |
| Issue #1 | [OBS 指针消失](docs/articles/windows/obs-inverted-cursor/index.md) | 有，轻微 | 保留反色指针解决结果；补捕获源和权限等排查边界 |
| Issue #2 | [iPad 信任电脑](docs/articles/apple/ipad-reset-trust/index.md) | 有，中等 | 重排菜单路径；明确会重置所有隐私授权，且文件传输问题原记录未解决 |
| Discussions #16–#19 | [Eclipse 小记](docs/articles/software/eclipse-notes/index.md) | 有，较大 | 四条合并；截图加语义说明；将 import 问题从“通用 bug”修正为模板位置相关现象 |
| Discussion #21 | [Android ROM 实验](docs/articles/android/android-rom-2023-experiment/index.md) | 有，中等 | 改成结果表；删除与主题无关的日记语气；明确缺版本与刷机步骤 |
| Issue #7 + Discussion #32 | [Systemback 历史页](docs/articles/linux/systemback-ubuntu-image-history/index.md) | 有，重写 | 合并占位与实验；旧 Xenial PPA、`apt-key` 和卸载 Firefox 只作历史说明，不给执行步骤 |
| Discussion #36 | [Spotify 规则](docs/articles/network/spotify-proxy-rules/index.md) | 有，中等 | 保留域名；策略组改占位符；指出重复规则和覆盖范围未知 |
| Discussion #37 | [账号安全复盘](docs/articles/security/keepass-account-security/index.md) | 有，较大 | 减少具体账号细节；不把浏览器当作已确认根因；补会话撤销、MFA 和备份边界 |
| Discussion #10 | 无普通文章 | 有，仅索引 | GitHub 默认欢迎帖和测试评论只进入迁移索引，完整内容留在原线程/本地快照 |

## 未改动与可追溯性

| 项目 | 处理 |
|---|---|
| 原始创建/更新时间 | ISO 8601 UTC 原值保留；页面显示值仅换算为北京时间 |
| 来源链接与编号 | 保留原 `junxian-li-hpc/myIssues` URL，作为迁移时的历史来源标识 |
| 作者与外部贡献者 | frontmatter 保留；Vivado 与 `du` 条目的外部贡献明确署名 |
| 图片 | 24/24 的 SHA-256 与快照一致；只改为可读文件名和补充 alt 文本 |
| 评论与回复 | 发布稿不逐字复制；完整版本保留在原 GitHub 线程和本地 snapshots |
| 原始导出 | `raw/`、`snapshots/`、附件映射和导出摘要均未修改 |
