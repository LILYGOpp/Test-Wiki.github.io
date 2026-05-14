---
layout: doc
title: MicroPython 固件
---

# MicroPython 固件

本页面提供 LILYGO 各产品的 MicroPython 固件下载和安装指南。

## MicroPython 简介

MicroPython 是 Python 3 的轻量级实现，专门为微控制器设计。

## 支持的产品

### 显示类产品

- T-Display S3
- T-Display S3 Pro
- T-Display-K230
- T-Pico 2350

### 其他产品

- T-Watch
- T-Echo
- T-Deck

## 固件下载

### 官方固件

访问 [MicroPython 官方网站](https://micropython.org/) 获取最新的标准固件。

### LILYGO 定制固件

LILYGO 提供了针对其产品优化的 MicroPython 固件。

## 安装步骤

### 1. 下载工具

- 下载 [esptool.py](https://github.com/espressif/esptool) 或使用在线工具

### 2. 擦除 Flash

```bash
esptool.py --port COM3 erase_flash
```

### 3. 刷写固件

```bash
esptool.py --port COM3 --baud 460800 write_flash -z 0x1000 micropython.bin
```

### 4. 测试安装

连接到 MicroPython REPL：

```bash
screen /dev/ttyUSB0 115200
# 或在 Windows 上使用 PuTTY
```

## 快速开始

### 使用 REPL

在 MicroPython REPL 中输入 Python 代码：

```python
>>> import time
>>> from machine import Pin
>>> led = Pin(2, Pin.OUT)
>>> led.on()
>>> led.off()
```

### 使用 Thonny IDE

1. 下载 [Thonny](https://thonny.org/)
2. 连接开发板
3. 在编辑器中写入代码
4. 点击运行

### 上传文件

使用 `ampy` 工具上传文件：

```bash
ampy --port /dev/ttyUSB0 put main.py
```

## 常用库

- `machine` - 硬件控制（GPIO、UART 等）
- `micropython` - MicroPython 特定功能
- `json` - JSON 处理
- `urequests` - HTTP 请求
- `umqtt` - MQTT 客户端

## 常见问题

**Q: 如何返回 Arduino 固件？**
A: 重新刷写 Arduino 固件即可。

**Q: MicroPython 是否支持所有 Python 库？**
A: 不支持，但大多数基础功能都支持。

**Q: 性能如何？**
A: MicroPython 的性能足以满足大多数物联网应用需求。

---

更多信息请查看 [MicroPython 文档](https://docs.micropython.org/)。
