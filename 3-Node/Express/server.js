const express = require('express');
const app = express();
const port = 1017;

const middleware = (req, res, next) => {
    const time = new Date();
    console.log(`[${time.toLocaleString()}] - ${req.method} ${req.url}`);
    next();
};

app.use(middleware);

app.get('/', (req, res) => {
    res.send('res end');
});

// 默认监听0.0.0.0，当前电脑的所有网络接口
app.listen(port, () => {
    console.log('qidong');
});