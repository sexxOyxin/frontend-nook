浏览器中：BOM、DOM
NodeJS中：V8引擎，把谷歌的引擎进一步加工成可以在任何操作系统中都能运行js的平台

安装好node，控制台中输入node就可以达到和浏览器console一样的效果。
.exit是退出

REPL 的全称是 Read Eval Print Loop（读取-执行-输出-循环），通常可以理解为交互式解释器，你可以输入任何表达式或语句，然后就会立刻执行并返回结果。

在浏览器运行 console.log 调用了 BOM，实际上执行的是 window.console.log('Hello World!')
Node 首先在所处的操作系统中创建一个新的进程，然后向标准输出打印了指定的字符串， 实际上执行的是 process.stdout.write('Hello World!\n')

浏览器专属，例如 window、alert 等等；
Node 专属，例如 process、Buffer、__dirname、__filename 等等；
浏览器和 Node 共有，但是实现方式不同，例如 console（第一节中已提到）、setTimeout、setInterval 等；
浏览器和 Node 共有，并且属于 ECMAScript 语言定义的一部分，例如 Date、String、Promise 等；

node模块：
核心模块
文件模块

因为模块这个机制，引入了新的全局对象：
require
exports
module
```js
// 导入内置库或第三方模块
const os = require('os');
const express = require('express');

// 通过相对路径导入其他模块
const utils = require('./utils');

// 通过绝对路径导入其他模块
const utils = require('/home/xxx/MyProject/utils');
```
q：怎么找到的express呢，每个模块都有个路径搜索列表 module.paths，打印module可以看到，有一个path，是从内而外的查找node_modules

然后在 DevTools → Network → Headers 页签 → 看 Query String Parameters，那里显示的就是 URL 参数。
get请求报文中没有请求体，post请求报文中有请求体

express就是一个基于nodejs的web开发框架相当于是一个第三方模块，用来创建http服务的，中间件【就是一个函数】和路由

中间件的概念：
是指将具体的业务逻辑和底层逻辑解耦的组件。换句话说，中间件就是能够适用多个应用场景、可复用性良好的代码。


实现前端自动化工作流的命令行工具，例如 Grunt、Gulp 还有大名鼎鼎的 Webpack。