---
title: Verilator 5.008 构建与 C++ 仿真记录
description: 为一生一芯环境构建 Verilator 5.008，并运行最小 C++ 与 VCD 波形示例
date:
  created: 2023-10-02T10:11:17+08:00
  updated: 2023-10-02T11:15:37+08:00
created_at: 2023-10-02T10:11:17+08:00
published_at: 2023-10-02T10:11:17+08:00
updated_at: 2023-10-02T11:15:37+08:00
update_history:
  - at: 2023-10-02T11:15:37+08:00
    summary: 来源记录的最后更新时间
categories:
  - FPGA
slug: verilator-5-008-notes
provenance:
  original_created_at: 2023-10-02T02:11:17Z
  original_updated_at: 2023-10-02T03:15:37Z
  migrated_at: 2026-09-09T20:54:56+08:00
last_verified: 2023-10-02
status: legacy-tested
sources:
  - type: discussion
    number: 20
    url: https://github.com/junxian-li-hpc/myIssues/discussions/20
contributors:
  - junxian-li-hpc
---

!!! warning "固定旧版本"
    该环境按 2023 年“一生一芯”材料固定为 Verilator 5.008。本文不描述最新版 API，
    也不保证依赖列表适用于新的 Ubuntu。

<!-- more -->

## 从源码构建 5.008

原环境安装的依赖包括：

```bash
sudo apt-get install \
  help2man git perl python3 make autoconf g++ flex bison ccache \
  libgoogle-perftools-dev numactl perl-doc libfl2 libfl-dev \
  zlibc zlib1g zlib1g-dev
```

随后固定 tag 并构建：

```bash
git clone https://github.com/verilator/verilator.git
cd verilator
git checkout v5.008
autoconf
unset VERILATOR_ROOT
./configure
make -j "$(nproc)"
sudo make install
verilator --version
```

当时的验证输出为：

```text
Verilator 5.008 2023-03-04 rev v5.008
```

波形查看器另行安装：

```bash
sudo apt-get install gtkwave
```

## 最小 C++ 仿真

Verilog 顶层：

```verilog title="our.v"
module our;
  initial begin
    $display("Hello World");
    $finish;
  end
endmodule
```

C++ 驱动：

```cpp title="sim_main.cpp"
#include "Vour.h"
#include "verilated.h"

int main(int argc, char** argv) {
  VerilatedContext* contextp = new VerilatedContext;
  contextp->commandArgs(argc, argv);
  Vour* top = new Vour{contextp};
  while (!contextp->gotFinish()) {
    top->eval();
  }
  delete top;
  delete contextp;
  return 0;
}
```

顶层模块名 `our` 决定生成类名为 `Vour`。驱动使用了 C++ 类型和 `delete`，文件应命名为
`.cpp`，不应沿用原参考中的 `.c` 后缀。

## 带波形的组合逻辑实验

另一个实验用异或表示双控开关：

```verilog title="top.v"
module top(
  input  a,
  input  b,
  output f
);
  assign f = a ^ b;
endmodule
```

构建命令的核心是：

```bash
verilator --cc --exe --build --trace -j 0 -Wall sim_main.cpp top.v
```

`sim_main.cpp` 负责为 `a`、`b` 生成输入、调用 `top->eval()`，并通过
`VerilatedVcdC` 将每个时间点写入 `wave.vcd`。打开前先确认生成的可执行文件运行成功：

```bash
gtkwave wave.vcd
```

原 Makefile 中的 `git_commit` 和 `include ../Makefile` 属于特定课程框架，不能复制到
普通独立工程。迁移时也删除了原线程中与实验无关的逐行模型问答。

## 来源

- [原始 Discussion #20](https://github.com/junxian-li-hpc/myIssues/discussions/20)
- [Verilator C++ 示例](https://verilator.org/guide/latest/example_cc.html)
- [一生一芯：搭建 Verilator 仿真环境](https://ysyx.oscc.cc/docs/2306/prestudy/0.4.html)
