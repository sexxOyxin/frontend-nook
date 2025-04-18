前端vite构建，后端nodejs+websocket+http
这是一个基于 Node.js 与 WebSocket 的前后端通信示例项目，特点如下：
前端部分：
使用 Vite 构建开发环境，支持模块化和热更新。
页面通过 fetch 和 XMLHttpRequest (XHR) 与后端进行 HTTP 请求通信。
通过 WebSocket 与服务器建立持久连接，实现实时通信功能。

后端部分：
使用 Node.js 创建 HTTP 服务处理常规请求。
使用 ws WebSocket 库 实现服务端推送与双向通信。
将多个客户端连接统一管理（Set 存储连接）。
通过 HTTP 接口触发 WebSocket 消息推送，实现跨协议交互。

开发说明：
采用 Vite 的代理功能将前端请求安全转发到 Node 服务，避免 CORS 问题。
适用于学习 WebSocket、前后端分离、HTTP 与 WS 混合使用的基础场景。


1.npm init -y
2.npm i ws http socket.io
3.cat > README.md -> ctrl+D 结束
4.创建index.html 和 index.js
5.node index.js

nodejs和前端客户端建立通信：
1、http
通信方式：客户端发从请求，服务器响应
特点：短连接，一次请求一次一次响应，服务器不能主动推送
实际应用：
---问完就结束
这里底层一些，涉及到tcp协议。http本身基于tcp协议的。
先建立tcp请求-单三次握手-客户端：你在吗？服务端：我在，你在吗！客户端：我也在！
建立好之后，客户端发送请求 - 服务器收到请求处理响应逻辑 - 返回完请求后在请求头加上Connection: close
2、websocket
通信方式：保持持续连接，可以随时双向通信
特点：全双工、实时
实际应用：

在本地通过服务打开html
方法1
用轻量级http服务 工具，http-server
npm i http-server
npx http-server
指定为localhost而不是127.0.0.1
http-server -p 3000 -a localhost

html就启动啦
方法2
使用nodejs和express搭建静态服务器
npm i express
```js
const express = require('express');
const app = express();
const path = require('path');

// 开启静态服务，指向你 HTML 所在文件夹
app.use(express.static(path.join(__dirname, 'websocket')));

// 启动服务
app.listen(3000, () => {
  console.log('前端页面服务已启动：http://localhost:3000/index.html');
});
```

想通过按钮发请求嘛，结果发现file本地和localhost跨域，所以就想着本地启动服务，但是http-server默认是IP地址127所以改一下端口和域名，发现因为端口问题还是跨域了，其实可以在http的服务里面改一下，但是我不想。所以最好用构建工具，也就是webpack或者vite，不想生成一整个vite的文件，所以直接增量式的改成vite。
1、添加vite
npm install vite --save-dev
添加vite.config.js
然后 npx vite 就启动了
