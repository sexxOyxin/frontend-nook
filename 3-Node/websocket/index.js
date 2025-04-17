const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 1017 });

const clients = new Set(); // 存储所有连接的客户端

wss.on('connection', (ws) => {
    console.log('websocket连接成功，建立新连接啦');
    clients.add(ws);
    ws.on('message', (msg) => {
        ws.send('这是来自websocket的请求，你的websocket号是' + ws);
        console.log(`html发送的消息：：：：：${msg.toString()}`);
    });
    ws.on('close', () => {
        console.log('客户端htlm断开连接');
        clients.delete(ws);
    });
});

// 每 5 秒向所有客户端广播一条消息
setInterval(() => {
    const now = new Date().toLocaleTimeString();
    for (let ws of clients) {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(`[服务端推送] 当前时间是 ${now}`);
        }
    }
}, 5000);

const http = require('http');

// 创建一个普通 HTTP 服务
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); // 解决http响应编码问题

    if (req.url === '/push') {
        for (const ws of clients) {
            ws.send('这是来自http的请求');
        }
        res.end('http请求发完啦');
    } else {
        res.end('哈喽这里是http请求页');
    }
}).listen(5220);
