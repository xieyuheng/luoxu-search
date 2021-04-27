# 风格指南 / Style Guide

> **一般情况下，观察已有代码的编码风格，并且尊重已有的风格。**

## 命名 / Nameing convention

- module 中，禁止用 `_` 前缀来区分函数或变量是否被 `export`，
  用 `export` 语法关键词本身来区分。
- 文件名断词用 `-`。
- 变量和函数名断词用 `_`。

## 模式 / Patterns

- 尽量遵循 M-V-VM 模式。
- V 所对应的 VM 文件名后缀为 `-state.ts`。
- V 所对应的 VM 必须为一个 class 以便之后 refactor。
- V 创建 VM instance 并且传递给所有 sub view。
- V 中尽量只包含 view 相关的代码。
- V 所对应的 全局 singleton 文件名后缀为 `-state.ts` 前缀为 `global-`。
