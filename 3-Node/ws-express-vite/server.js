const http = require('http');
const WebSocket = require('ws');
const express = require('express');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = 5220;
let clients = new Set();

wss.on('connection', (ws) => {
  console.log('新客户端连接');
  clients.add(ws);

  ws.on('message', (msg) => {
    console.log('客户端发来:', msg.toString());
    ws.send('收到你的消息: ' + msg);
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('客户端断开连接');
  });
});

app.get('/push', (req, res) => {
  for (const ws of clients) {
    ws.send('来自 HTTP 接口的推送');
  }
  res.setHeader('Content-Type', 'text/plain');
  res.end('消息已通过 WebSocket 推送');
});

server.listen(PORT, () => {
  console.log('Node.js 服务运行在 http://localhost:' + PORT);
});