---
title: Makefile 配方之间为什么留不住变量
description: 区分 make 变量、shell 变量与递归 make，并选择正确的状态传递方式
date:
  created: 2024-03-03T15:43:11+08:00
  updated: 2024-03-03T15:43:11+08:00
created_at: 2024-03-03T15:43:11+08:00
published_at: 2024-03-03T15:43:11+08:00
updated_at: 2024-03-03T15:43:11+08:00
update_history: []
categories:
  - 构建工具
slug: make-recipe-state-and-variables
provenance:
  original_created_at: 2024-03-03T15:43:11+08:00
  original_updated_at: 2024-03-03T15:43:11+08:00
  migrated_at: 2026-09-10T00:20:43+08:00
last_verified: null
status: rewritten-unverified
sources:
  - type: repository-file
    path: ubuntu-essentials/05-daiding/makefile 变量问题.md
    url: https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/05-daiding/makefile%20变量问题.md
contributors:
  - leida1024
---

在一个目标中改变变量，再期待后续目标看到新值，常常会失败。原因不是单一的“make 会
重启 shell”，而是这里同时存在三个边界：make 自己的变量、配方行启动的 shell，以及
递归调用产生的新 make 进程。

<!-- more -->

## 先区分两种变量

```makefile
MODE := debug

show:
	@echo "make variable: $(MODE)"
	@mode=release; echo "shell variable: $$mode"
```

`$(MODE)` 在命令交给 shell 前由 make 展开。`$$mode` 中的双美元符号会变成 `$mode`，
再由 shell 展开。把两种语法混在一起，很容易误判变量在哪个阶段丢失。

默认情况下，一条配方中的每个逻辑行由单独的 shell 执行：

```makefile
broken:
	mode=release
	@echo "$$mode"  # 新 shell，通常为空
```

需要共享临时 shell 状态时，把命令放在同一个逻辑行：

```makefile
working:
	@mode=release; \
	echo "$$mode"
```

GNU make 也支持 `.ONESHELL`，但它会改变文件中所有配方的执行与错误处理语义，不应只为
一个变量轻率开启。

## 目标之间传递固定配置

如果值在 make 开始构建前就能确定，使用目标专用变量：

```makefile
.PHONY: clean clean-cache clean-output

clean: MODE := full
clean: clean-cache clean-output

clean-cache clean-output:
	@echo "mode=$(MODE)"
```

GNU make 的目标专用变量也会对该目标的依赖生效，除非依赖自己覆盖了同名变量。这适合
传递构建模式，不适合保存某条命令运行后才计算出的结果。

命令行变量更直接：

```bash
make clean MODE=full
```

```makefile
MODE ?= normal
```

## 递归 make 要显式传值

同一 Makefile 内的目标应优先写成依赖关系，而不是在配方中再次执行 `make`。确实需要
进入子目录时，使用 `$(MAKE)`，它能保留 jobserver、命令行选项等上下文：

```makefile
.PHONY: subdir

subdir:
	+$(MAKE) -C component MODE="$(MODE)"
```

直接写 `make clean1`、`make clean2` 会启动两个新的 make 进程；第一个进程内部对变量的
修改不会自动回写给父进程，也不会传到第二个进程。

## 运行时结果应成为构建产物

如果状态由命令实际计算得到，最符合 make 模型的做法通常是写入文件，并把文件声明为
后续目标的依赖：

```makefile
.PHONY: report

build/version.txt:
	@mkdir -p "$(@D)"
	@git describe --always --dirty > "$@"

report: build/version.txt
	@cat "$<"
```

这样 make 能根据输入、输出和时间戳判断是否需要重建。为了在目标之间传值而在配方里
使用 `$(eval ...)`，会把 make 展开阶段和 shell 执行阶段缠在一起，通常不是可靠解法。

## 选择方法

| 需求 | 更合适的方式 |
| --- | --- |
| 构建开始前已知的选项 | 普通变量、命令行变量或目标专用变量 |
| 同一组 shell 命令共享临时状态 | 同一逻辑行，必要时审慎使用 `.ONESHELL` |
| 子 make 接收配置 | `$(MAKE)` 加显式变量参数 |
| 命令运行后产生、后续还要使用的状态 | 文件产物和依赖关系 |

## 来源

- [原始 Makefile 变量笔记](https://github.com/leida1024/myIssues/blob/main/ubuntu-essentials/05-daiding/makefile%20变量问题.md)
- [GNU make：Recipe Execution](https://www.gnu.org/software/make/manual/html_node/Execution.html)
- [GNU make：Target-specific Variable Values](https://www.gnu.org/software/make/manual/html_node/Target_002dspecific.html)
- [GNU make：How the MAKE Variable Works](https://www.gnu.org/software/make/manual/html_node/MAKE-Variable.html)
