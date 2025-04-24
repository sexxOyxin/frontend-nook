const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

// 监听 connect 事件，注册回调函数
emitter.on('connect', (username) => {
    console.log(username + ' connect success');
})
// 触发 connect 事件，并且传参
emitter.emit('connect', 'yaxin');