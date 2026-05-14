---
layout: doc
title: 固件下载
---

# 固件下载

这里提供了各个LILYGO产品的最新固件下载。

## 支持的产品

### Display 系列

- T-Display S3
- T-Display S3 Pro
- T-Display P4
- T-Display K230
- 其他 Display 系列产品

### 可穿戴设备

- T-Watch
- T-Echo
- T-LoRaPager

### 其他产品

- T-Deck
- T-Deck Pro

## 下载方式

### 在线资源库

最新的固件和资源可在以下位置获得：

1. **GitHub Releases**
   - 访问项目 GitHub 页面
   - 查看 Releases 部分
   - 下载最新固件

2. **官方存储库**
   - 访问 [lilygo.cc](https://lilygo.cc)
   - 查看资源下载页面

## 刷写指南

### 使用 ESPFlash

1. 下载 ESPFlash 工具
2. 选择相应的固件文件
3. 连接开发板到 USB
4. 选择正确的串口和波特率
5. 点击刷写

### 使用 Arduino IDE

1. 打开 Arduino IDE
2. 连接开发板
3. 选择板型和端口
4. 使用"上传"功能

### 使用命令行

使用 esptool.py：

```bash
esptool.py --port /dev/ttyUSB0 write_flash 0x1000 firmware.bin
```

## 常见问题

**Q: 固件刷写失败怎么办？**
A: 检查 USB 驱动程序、波特率设置和连接。

**Q: 如何回滚到旧版本固件？**
A: 下载旧版本固件文件后重新刷写即可。

**Q: 新固件是否与旧程序兼容？**
A: 大多数情况下兼容，但建议查看固件发布说明。

---

获取更多帮助，请访问 [GitHub Issues](https://github.com/Xinyuan-LilyGO/LILYGO_wiki/issues)。
