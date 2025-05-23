# 电脑快捷键
网页：https://support.apple.com/zh-cn/102650

cmd + q 退出
cmd + w 关闭
cmd + m 小化
cmd + tab 切换当前桌面内的应用？官方：在打开的各个 App 中切换到下一个最近使用的 App
cmd + ` 切换当前桌面内 这一组中的应用？官方：激活最前方 App 中下一个打开的窗口
cmd + , 几乎是打开所有的设置页

cmd +z 回退
cmd + shift + z 快进

触控板 双指双击 可以放大

control + 左右 桌面切换

## 打印时间
教程：https://blog.csdn.net/Archiena/article/details/130336634
control + shift + t
2025-03-28 14:26:53 Friday

# 命令行常用总结
清空 - clear
当前目录文件和文件夹 - ls
当前所在目录 - pwd - print working directory
创建文件夹 - mkdir
查看全部帮助文档 - man git - 输入 q 退出

### 清空
Windows CMD 或者 Navicat 命令窗口的清屏命令：Clear 或者 CLS

MacBook 命令终端的清屏命令/快捷键：Ctrl+Cmd+L（清除屏幕） ，Cmd+K（清除到开头），Clear ，Ctrl+L

Linux 命令终端的清屏命令/快捷键：Clear，Ctrl+L

### 文件和目录操作
| 命令 | 作用 |
|------|------|
| `ls` | 查看当前目录的文件和文件夹 |
| `ls -l` | 以详细列表形式显示文件信息（权限、大小、修改时间等） |
| `ls -a` | 显示所有文件（包括隐藏文件，`.` 开头的） |
| `cd 目录名` | 进入指定目录 |
| `cd ..` | 返回上一级目录 |
| `pwd` | 显示当前所在目录 |
| `mkdir 目录名` | 创建一个新的目录 |
| `rm 文件名` | 删除文件（**不可恢复，慎用！**） |
| `rm -r 目录名` | 递归删除目录及其中的文件 |
| `mv 文件名 目标位置` | 移动/重命名文件 |
| `cp 源文件 目标位置` | 复制文件 |
| `cp -r 源目录 目标位置` | 复制整个目录 |

---

### **文件内容查看**
| 命令 | 作用 |
|------|------|
| `cat 文件名` | 显示文件内容 |
| `less 文件名` | 分页查看文件内容（按 `q` 退出） |
| `head -n 行数 文件名` | 查看文件的前 n 行 |
| `tail -n 行数 文件名` | 查看文件的最后 n 行 |
| `nano 文件名` | 使用 Nano 编辑文件（快捷编辑方式） |
| `vim 文件名` | 使用 Vim 编辑文件 |
| `echo "内容" > 文件名` | 写入内容到文件（会覆盖原内容） |
| `echo "内容" >> 文件名` | 追加内容到文件 |

---

### **磁盘和系统信息**
| 命令 | 作用 |
|------|------|
| `df -h` | 查看磁盘空间使用情况 |
| `du -sh 目录名` | 查看目录大小 |
| `top` | 实时查看系统进程和资源使用情况（按 `q` 退出） |
| `ps aux` | 列出所有正在运行的进程 |
| `kill 进程ID` | 终止指定进程 |
| `kill -9 进程ID` | 强制终止进程 |
| `whoami` | 显示当前用户 |
| `uname -a` | 显示系统信息 |
| `date` | 显示当前日期和时间 |
| `uptime` | 查看系统运行时长 |

---

### **网络相关**
| 命令 | 作用 |
|------|------|
| `ping 地址` | 测试网络连通性（如 `ping baidu.com`） |
| `curl 地址` | 发送 HTTP 请求（如 `curl google.com`） |
| `ifconfig` | 查看网络接口信息 |
| `netstat -an` | 查看当前网络连接 |
| `nslookup 域名` | 查询域名的 IP 地址 |

---

### **进阶技巧**
| 命令 | 作用 |
|------|------|
| `history` | 查看执行过的命令历史 |
| `!!` | 运行上一个命令 |
| `!n` | 运行 `history` 里第 n 条命令 |
| `ctrl + c` | 终止当前命令 |
| `ctrl + d` | 退出终端 |
| `man 命令` | 查看某个命令的帮助文档（如 `man ls`） |

如果你对某个命令不确定，可以加 `--help` 查看帮助，例如：
```bash
ls --help
```

这些命令在 Mac 终端（Terminal.app）和其他基于 Unix 的系统（如 Linux）里都通用，可以试试看！🚀