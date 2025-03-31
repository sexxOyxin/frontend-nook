# nodejs
# QUESTION：说说你对Node.js 的理解？优缺点？应用场景？

 ![](https://static.vue-js.com/b565d240-c1e6-11eb-ab90-d9ae814b240d.png)



## 一、是什么
`Node.js` 是一个开源与跨平台的 `JavaScript` 运行时环境

在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能

可以理解为 `Node.js` 就是一个服务器端的、非阻塞式I/O的、事件驱动的`JavaScript`运行环境

### 非阻塞异步

`Nodejs`采用了非阻塞型`I/O`机制，在做`I/O`操作的时候不会造成任何的阻塞，当完成之后，以时间的形式通知执行操作

例如在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率



### 事件驱动

事件驱动就是当进来一个新的请求的时，请求将会被压入一个事件队列中，然后通过一个循环来检测队列中的事件状态变化，如果检测到有状态变化的事件，那么就执行该事件对应的处理代码，一般都是回调函数

比如读取一个文件，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理

 ![](https://static.vue-js.com/a7729590-c1e8-11eb-ab90-d9ae814b240d.png)







## 二、优缺点

优点：

- 处理高并发场景性能更佳
- 适合I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作

因为`Nodejs`是单线程，带来的缺点有：

- 不适合CPU密集型应用
- 只支持单核CPU，不能充分利用CPU
- 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃





## 三、应用场景

借助`Nodejs`的特点和弊端，其应用场景分类如下：

- 善于`I/O`，不善于计算。因为Nodejs是一个单线程，如果计算（同步）太多，则会阻塞这个线程
- 大量并发的I/O，应用程序内部并不需要进行非常复杂的处理
- 与 websocket 配合，开发长连接的实时交互应用程序

具体场景可以表现为如下：

- 第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序
- 第二大类：基于web、canvas等多人联网游戏
- 第三大类：基于web的多人实时聊天客户端、聊天室、图文直播
- 第四大类：单页面浏览器应用程序
- 第五大类：操作数据库、为前端和移动端提供基于`json`的API

其实，`Nodejs`能实现几乎一切的应用，只考虑适不适合使用它



## 参考文献

- http://nodejs.cn/
- https://segmentfault.com/a/1190000019854308
- https://segmentfault.com/a/1190000005173218

# QUESTION：说说 Node. js 有哪些全局对象？

 ![](https://static.vue-js.com/79c7b100-c2a3-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

在浏览器 `JavaScript` 中，通常` window` 是全局对象， 而 `Nodejs `中的全局对象是 `global`

在`NodeJS`里，是不可能在最外层定义一个变量，因为所有的用户代码都是当前模块的，只在当前模块里可用，但可以通过`exports`对象的使用将其传递给模块外部

所以，在`NodeJS`中，用`var`声明的变量并不属于全局的变量，只在当前模块生效

像上述的`global`全局对象则在全局作用域中，任何全局变量、函数、对象都是该对象的一个属性值



## 二、有哪些

将全局对象分成两类：

- 真正的全局对象

- 模块级别的全局变量



### 真正的全局对象

下面给出一些常见的全局对象：

- Class:Buffer
- process

- console
- clearInterval、setInterval
- clearTimeout、setTimeout

- global



#### Class:Buffer

可以处理二进制以及非`Unicode`编码的数据

在`Buffer`类实例化中存储了原始数据。`Buffer`类似于一个整数数组，在V8堆原始存储空间给它分配了内存

一旦创建了`Buffer`实例，则无法改变大小



#### process

进程对象，提供有关当前进程的信息和控制

包括在执行`node`程序进程时，如果需要传递参数，我们想要获取这个参数需要在`process`内置对象中

启动进程：

```cmd
 node index.js 参数1 参数2 参数3
```

index.js文件如下：

```js
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

输出如下：

```js
/usr/local/bin/node
/Users/mjr/work/node/process-args.js
参数1
参数2
参数3
```

除此之外，还包括一些其他信息如版本、操作系统等

![](https://static.vue-js.com/85f473a0-c2a3-11eb-ab90-d9ae814b240d.png)



#### console

用来打印`stdout`和`stderr`

最常用的输入内容的方式：console.log

```js
console.log("hello");
```

清空控制台：console.clear

```js
console.clear
```

打印函数的调用栈：console.trace

```js
function test() {
    demo();
}

function demo() {
    foo();
}

function foo() {
    console.trace();
}

test();
```

 ![](https://static.vue-js.com/91b6dbb0-c2a3-11eb-85f6-6fac77c0c9b3.png)



#### clearInterval、setInterval

设置定时器与清除定时器

```js
setInterval(callback, delay[, ...args])
```

`callback`每`delay`毫秒重复执行一次

`clearInterval`则为对应发取消定时器的方法



#### clearTimeout、setTimeout

设置延时器与清除延时器

```js
setTimeout(callback,delay[,...args])
```

`callback`在`delay`毫秒后执行一次

`clearTimeout`则为对应取消延时器的方法



#### global

全局命名空间对象，墙面讲到的`process`、`console`、`setTimeout`等都有放到`global`中

```js
console.log(process === global.process) // true
```





### 模块级别的全局对象

这些全局对象是模块中的变量，只是每个模块都有，看起来就像全局变量，像在命令交互中是不可以使用，包括：

- __dirname
- __filename
- exports
- module
- require



#### __dirname

获取当前文件所在的路径，不包括后面的文件名

从 `/Users/mjr` 运行 `node example.js`：

```js
console.log(__dirname);
// 打印: /Users/mjr
```



#### __filename

获取当前文件所在的路径和文件名称，包括后面的文件名称

从 `/Users/mjr` 运行 `node example.js`：

```js
console.log(__filename);
// 打印: /Users/mjr/example.js
```



#### exports

`module.exports` 用于指定一个模块所导出的内容，即可以通过 `require()` 访问的内容

```js
exports.name = name;
exports.age = age;
exports.sayHello = sayHello;
```



#### module

对当前模块的引用，通过`module.exports` 用于指定一个模块所导出的内容，即可以通过 `require()` 访问的内容



#### require

用于引入模块、 `JSON`、或本地文件。 可以从 `node_modules` 引入模块。

可以使用相对路径引入本地模块或` JSON `文件，路径会根据`__dirname`定义的目录名或当前工作目录进行处理





## 参考文献

- http://nodejs.cn/api/globals.html
- https://vue3js.cn/interview


# QUESTION：说说对 Node 中的 process 的理解？有哪些常用方法？

![](https://static.vue-js.com/4f7866b0-c2b2-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

`process` 对象是一个全局变量，提供了有关当前 `Node.js `进程的信息并对其进行控制，作为一个全局变量

我们都知道，进程计算机系统进行资源分配和调度的基本单位，是操作系统结构的基础，是线程的容器

当我们启动一个`js`文件，实际就是开启了一个服务进程，每个进程都拥有自己的独立空间地址、数据栈，像另一个进程无法访问当前进程的变量、数据结构，只有数据通信后，进程之间才可以数据共享

由于`JavaScript`是一个单线程语言，所以通过`node xxx`启动一个文件后，只有一条主线程





## 二、属性与方法

关于`process`常见的属性有如下：

- process.env：环境变量，例如通过 `process.env.NODE_ENV 获取不同环境项目配置信息
- process.nextTick：这个在谈及 `EventLoop` 时经常为会提到
- process.pid：获取当前进程id
- process.ppid：当前进程对应的父进程
- process.cwd()：获取当前进程工作目录，
- process.platform：获取当前进程运行的操作系统平台
- process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
- 进程事件： process.on(‘uncaughtException’,cb) 捕获异常信息、 process.on(‘exit’,cb）进程推出监听
- 三个标准流： process.stdout 标准输出、 process.stdin 标准输入、 process.stderr 标准错误输出
- process.title 指定进程名称，有的时候需要给进程指定一个名称



下面再稍微介绍下某些方法的使用：

### process.cwd()

返回当前 `Node `进程执行的目录

一个` Node` 模块 `A` 通过 NPM 发布，项目 `B` 中使用了模块 `A`。在 `A` 中需要操作 `B` 项目下的文件时，就可以用 `process.cwd()` 来获取 `B` 项目的路径



### process.argv

在终端通过 Node 执行命令的时候，通过 `process.argv` 可以获取传入的命令行参数，返回值是一个数组：

- 0: Node 路径（一般用不到，直接忽略）
- 1: 被执行的 JS 文件路径（一般用不到，直接忽略）
- 2~n: 真实传入命令的参数

所以，我们只要从 `process.argv[2]` 开始获取就好了

```js
const args = process.argv.slice(2);
```



### process.env

返回一个对象，存储当前环境相关的所有信息，一般很少直接用到。

一般我们会在 `process.env` 上挂载一些变量标识当前的环境。比如最常见的用 `process.env.NODE_ENV` 区分 `development` 和 `production`

在 `vue-cli` 的源码中也经常会看到 `process.env.VUE_CLI_DEBUG` 标识当前是不是 `DEBUG` 模式



### process.nextTick()

我们知道`NodeJs`是基于事件轮询，在这个过程中，同一时间只会处理一件事情

在这种处理模式下，`process.nextTick()`就是定义出一个动作，并且让这个动作在下一个事件轮询的时间点上执行

例如下面例子将一个`foo`函数在下一个时间点调用

```js
function foo() {
    console.error('foo');
}

process.nextTick(foo);
console.error('bar');
```

输出结果为`bar`、`foo`

虽然下述方式也能实现同样效果：

```js
setTimeout(foo, 0);
console.log('bar');
```

两者区别在于：

- process.nextTick()会在这一次event loop的call stack清空后（下一次event loop开始前）再调用callback
- setTimeout()是并不知道什么时候call stack清空的，所以何时调用callback函数是不确定的





### 参考文献

- http://nodejs.cn/api/process.html
- https://vue3js.cn/interview/



# QUESTION：说说对 Node 中的 fs模块的理解? 有哪些常用方法

 ![](https://static.vue-js.com/a141e5c0-c46a-11eb-85f6-6fac77c0c9b3.png)



## 一、是什么

fs（filesystem），该模块提供本地文件的读写能力，基本上是`POSIX`文件操作命令的简单包装

可以说，所有与文件的操作都是通过`fs`核心模块实现

导入模块如下：

```js
const fs = require('fs');
```

这个模块对所有文件系统操作提供异步（不具有`sync` 后缀）和同步（具有 `sync` 后缀）两种操作方式，而供开发者选择



### 二、文件知识

在计算机中有关于文件的知识：

- 权限位 mode
- 标识位 flag
- 文件描述为 fd



### 权限位 mode

 ![](https://static.vue-js.com/4f4d41a0-c46b-11eb-ab90-d9ae814b240d.png)

针对文件所有者、文件所属组、其他用户进行权限分配，其中类型又分成读、写和执行，具备权限位4、2、1，不具备权限为0

如在`linux`查看文件权限位：

```js
drwxr-xr-x 1 PandaShen 197121 0 Jun 28 14:41 core
-rw-r--r-- 1 PandaShen 197121 293 Jun 23 17:44 index.md
```

在开头前十位中，`d`为文件夹，`-`为文件，后九位就代表当前用户、用户所属组和其他用户的权限位，按每三位划分，分别代表读（r）、写（w）和执行（x），- 代表没有当前位对应的权限



### 标识位

标识位代表着对文件的操作方式，如可读、可写、即可读又可写等等，如下表所示：

| 符号 | 含义                                                     |
| ---- | -------------------------------------------------------- |
| r    | 读取文件，如果文件不存在则抛出异常。                     |
| r+   | 读取并写入文件，如果文件不存在则抛出异常。               |
| rs   | 读取并写入文件，指示操作系统绕开本地文件系统缓存。       |
| w    | 写入文件，文件不存在会被创建，存在则清空后写入。         |
| wx   | 写入文件，排它方式打开。                                 |
| w+   | 读取并写入文件，文件不存在则创建文件，存在则清空后写入。 |
| wx+  | 和 w+ 类似，排他方式打开。                               |
| a    | 追加写入，文件不存在则创建文件。                         |
| ax   | 与 a 类似，排他方式打开。                                |
| a+   | 读取并追加写入，不存在则创建。                           |
| ax+  | 与 a+ 类似，排他方式打开。                               |



### 文件描述为 fd

操作系统会为每个打开的文件分配一个名为文件描述符的数值标识，文件操作使用这些文件描述符来识别与追踪每个特定的文件

`Window `系统使用了一个不同但概念类似的机制来追踪资源，为方便用户，`NodeJS `抽象了不同操作系统间的差异，为所有打开的文件分配了数值的文件描述符

在 `NodeJS `中，每操作一个文件，文件描述符是递增的，文件描述符一般从 `3` 开始，因为前面有 `0`、`1`、`2`三个比较特殊的描述符，分别代表 `process.stdin`（标准输入）、`process.stdout`（标准输出）和 `process.stderr`（错误输出）



## 三、方法

下面针对`fs`模块常用的方法进行展开：

- 文件读取
- 文件写入
- 文件追加写入
- 文件拷贝
- 创建目录



### 文件读取

####  fs.readFileSync

同步读取，参数如下：

- 第一个参数为读取文件的路径或文件描述符
- 第二个参数为 options，默认值为 null，其中有 encoding（编码，默认为 null）和 flag（标识位，默认为 r），也可直接传入 encoding

结果为返回文件的内容

```js
const fs = require("fs");

let buf = fs.readFileSync("1.txt");
let data = fs.readFileSync("1.txt", "utf8");

console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(data); // Hello
```



#### fs.readFile

异步读取方法 `readFile` 与 `readFileSync` 的前两个参数相同，最后一个参数为回调函数，函数内有两个参数 `err`（错误）和 `data`（数据），该方法没有返回值，回调函数在读取文件成功后执行

```js
const fs = require("fs");

fs.readFile("1.txt", "utf8", (err, data) => {
   if(!err){
       console.log(data); // Hello
   }
});
```



### 文件写入

#### writeFileSync

同步写入，有三个参数：

- 第一个参数为写入文件的路径或文件描述符

- 第二个参数为写入的数据，类型为 String 或 Buffer

- 第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 w）和 mode（权限位，默认为 0o666），也可直接传入 encoding

```js
const fs = require("fs");

fs.writeFileSync("2.txt", "Hello world");
let data = fs.readFileSync("2.txt", "utf8");

console.log(data); // Hello world
```



#### writeFile

异步写入，`writeFile` 与 `writeFileSync` 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 `err`（错误），回调函数在文件写入数据成功后执行

```js
const fs = require("fs");

fs.writeFile("2.txt", "Hello world", err => {
    if (!err) {
        fs.readFile("2.txt", "utf8", (err, data) => {
            console.log(data); // Hello world
        });
    }
});
```



### 文件追加写入

#### appendFileSync

参数如下：

- 第一个参数为写入文件的路径或文件描述符
- 第二个参数为写入的数据，类型为 String 或 Buffer
- 第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 a）和 mode（权限位，默认为 0o666），也可直接传入 encoding

```js
const fs = require("fs");

fs.appendFileSync("3.txt", " world");
let data = fs.readFileSync("3.txt", "utf8");
```



#### appendFile

异步追加写入方法 `appendFile` 与 `appendFileSync` 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 `err`（错误），回调函数在文件追加写入数据成功后执行

```js
const fs = require("fs");

fs.appendFile("3.txt", " world", err => {
    if (!err) {
        fs.readFile("3.txt", "utf8", (err, data) => {
            console.log(data); // Hello world
        });
    }
});
```



### 文件拷贝

#### copyFileSync

同步拷贝

```js
const fs = require("fs");

fs.copyFileSync("3.txt", "4.txt");
let data = fs.readFileSync("4.txt", "utf8");

console.log(data); // Hello world
```



#### copyFile

异步拷贝

```js
const fs = require("fs");

fs.copyFile("3.txt", "4.txt", () => {
    fs.readFile("4.txt", "utf8", (err, data) => {
        console.log(data); // Hello world
    });
});
```



### 创建目录

#### mkdirSync

同步创建，参数为一个目录的路径，没有返回值，在创建目录的过程中，必须保证传入的路径前面的文件目录都存在，否则会抛出异常

```js
// 假设已经有了 a 文件夹和 a 下的 b 文件夹
fs.mkdirSync("a/b/c")
```



#### mkdir

异步创建，第二个参数为回调函数

```js
fs.mkdir("a/b/c", err => {
    if (!err) console.log("创建成功");
});
```





## 参考文献

- http://nodejs.cn/api/fs.html

- https://segmentfault.com/a/1190000019913303

# QUESTION：说说对 Node 中的 Buffer 的理解？应用场景？

 ![](https://static.vue-js.com/176d02b0-c69c-11eb-ab90-d9ae814b240d.png)


## 一、是什么

在`Node`应用中，需要处理网络协议、操作数据库、处理图片、接收上传文件等，在网络流和文件的操作中，要处理大量二进制数据，而`Buffer`就是在内存中开辟一片区域（初次初始化为8KB），用来存放二进制数据

在上述操作中都会存在数据流动，每个数据流动的过程中，都会有一个最小或最大数据量

如果数据到达的速度比进程消耗的速度快，那么少数早到达的数据会处于等待区等候被处理。反之，如果数据到达的速度比进程消耗的数据慢，那么早先到达的数据需要等待一定量的数据到达之后才能被处理

这里的等待区就指的缓冲区（Buffer），它是计算机中的一个小物理单位，通常位于计算机的 `RAM` 中

简单来讲，`Nodejs`不能控制数据传输的速度和到达时间，只能决定何时发送数据，如果还没到发送时间，则将数据放在`Buffer`中，即在`RAM`中，直至将它们发送完毕

上面讲到了`Buffer`是用来存储二进制数据，其的形式可以理解成一个数组，数组中的每一项，都可以保存8位二进制：`00000000`，也就是一个字节

例如：

```js
const buffer = Buffer.from("why")
```

其存储过程如下图所示：

 ![](https://static.vue-js.com/20371250-c69c-11eb-ab90-d9ae814b240d.png)


## 二、使用方法

`Buffer` 类在全局作用域中，无须`require`导入

创建`Buffer`的方法有很多种，我们讲讲下面的两种常见的形式：

- Buffer.from()

- Buffer.alloc()

### Buffer.from()

```js
const b1 = Buffer.from('10');
const b2 = Buffer.from('10', 'utf8');
const b3 = Buffer.from([10]);
const b4 = Buffer.from(b3);

console.log(b1, b2, b3, b4); // <Buffer 31 30> <Buffer 31 30> <Buffer 0a> <Buffer 0a>
```

### Buffer.alloc()

```js
const bAlloc1 = Buffer.alloc(10); // 创建一个大小为 10 个字节的缓冲区
const bAlloc2 = Buffer.alloc(10, 1); // 建一个长度为 10 的 Buffer,其中全部填充了值为 `1` 的字节
console.log(bAlloc1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(bAlloc2); // <Buffer 01 01 01 01 01 01 01 01 01 01>
```

在上面创建`buffer`后，则能够`toString`的形式进行交互，默认情况下采取`utf8`字符编码形式，如下

```js
const buffer = Buffer.from("你好");
console.log(buffer);
// <Buffer e4 bd a0 e5 a5 bd>
const str = buffer.toString();
console.log(str);
// 你好
```

如果编码与解码不是相同的格式则会出现乱码的情况，如下：

```js
const buffer = Buffer.from("你好","utf-8 ");
console.log(buffer);
// <Buffer e4 bd a0 e5 a5 bd>
const str = buffer.toString("ascii");
console.log(str);
// d= e%=
```

当设定的范围导致字符串被截断的时候，也会存在乱码情况，如下：

```js
const buf = Buffer.from('Node.js 技术栈', 'UTF-8');

console.log(buf)          // <Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88>
console.log(buf.length)   // 17

console.log(buf.toString('UTF-8', 0, 9))  // Node.js �
console.log(buf.toString('UTF-8', 0, 11)) // Node.js 技
```

所支持的字符集有如下：

- ascii：仅支持 7 位 ASCII 数据，如果设置去掉高位的话，这种编码是非常快的
- utf8：多字节编码的 Unicode 字符，许多网页和其他文档格式都使用 UTF-8
- utf16le：2 或 4 个字节，小字节序编码的 Unicode 字符，支持代理对（U+10000至 U+10FFFF）
- ucs2，utf16le 的别名
- base64：Base64 编码
- latin：一种把 Buffer 编码成一字节编码的字符串的方式
- binary：latin1 的别名，
- hex：将每个字节编码为两个十六进制字符



## 三、应用场景

`Buffer`的应用场景常常与流的概念联系在一起，例如有如下：

- I/O操作
- 加密解密
- zlib.js



### I/O操作

通过流的形式，将一个文件的内容读取到另外一个文件

```js
const fs = require('fs');

const inputStream = fs.createReadStream('input.txt'); // 创建可读流
const outputStream = fs.createWriteStream('output.txt'); // 创建可写流

inputStream.pipe(outputStream); // 管道读写
```



### 加解密

在一些加解密算法中会遇到使用 `Buffer`，例如 `crypto.createCipheriv` 的第二个参数 `key` 为 `string` 或 `Buffer` 类型



### zlib.js

`zlib.js` 为 `Node.js` 的核心库之一，其利用了缓冲区（`Buffer`）的功能来操作二进制数据流，提供了压缩或解压功能



## 参考文献
- http://nodejs.cn/api/buffer.html
- https://segmentfault.com/a/1190000019894714


# QUESTION：说说对 Node 中的 Stream 的理解？应用场景？

 ![](https://static.vue-js.com/a5df3c60-c76f-11eb-ab90-d9ae814b240d.png)



## 一、是什么

流（Stream），是一个数据传输手段，是端到端信息交换的一种方式，而且是有顺序的,是逐块读取数据、处理内容，用于顺序读取输入或写入输出

`Node.js`中很多对象都实现了流，总之它是会冒数据（以 `Buffer` 为单位）

它的独特之处在于，它不像传统的程序那样一次将一个文件读入内存，而是逐块读取数据、处理其内容，而不是将其全部保存在内存中

流可以分成三部分：`source`、`dest`、`pipe`

在`source`和`dest`之间有一个连接的管道`pipe`,它的基本语法是`source.pipe(dest)`，`source`和`dest`就是通过pipe连接，让数据从`source`流向了`dest`，如下图所示：

 ![](https://static.vue-js.com/aec05670-c76f-11eb-ab90-d9ae814b240d.png)





## 二、种类

在`NodeJS`，几乎所有的地方都使用到了流的概念，分成四个种类：

- 可写流：可写入数据的流。例如 fs.createWriteStream()  可以使用流将数据写入文件

- 可读流： 可读取数据的流。例如fs.createReadStream() 可以从文件读取内容

- 双工流： 既可读又可写的流。例如 net.Socket

- 转换流： 可以在数据写入和读取时修改或转换数据的流。例如，在文件压缩操作中，可以向文件写入压缩数据，并从文件中读取解压数据


在`NodeJS`中`HTTP`服务器模块中，`request` 是可读流，`response` 是可写流。还有`fs` 模块，能同时处理可读和可写文件流

可读流和可写流都是单向的，比较容易理解，而另外两个是双向的

### 双工流

之前了解过`websocket`通信，是一个全双工通信，发送方和接受方都是各自独立的方法，发送和接收都没有任何关系

如下图所示：

 ![](https://static.vue-js.com/b7ac6d00-c76f-11eb-ab90-d9ae814b240d.png)

基本代码如下：

```js
const { Duplex } = require('stream');

const myDuplex = new Duplex({
  read(size) {
    // ...
  },
  write(chunk, encoding, callback) {
    // ...
  }
});
```



### 双工流

双工流的演示图如下所示：

 ![](https://static.vue-js.com/c02883b0-c76f-11eb-ab90-d9ae814b240d.png)

除了上述压缩包的例子，还比如一个 `babel`，把`es6`转换为，我们在左边写入 `es6`，从右边读取 `es5`

基本代码如下所示：

```js
const { Transform } = require('stream');

const myTransform = new Transform({
  transform(chunk, encoding, callback) {
    // ...
  }
});
```



## 三、应用场景

`stream`的应用场景主要就是处理`IO`操作，而`http`请求和文件操作都属于`IO`操作

试想一下，如果一次`IO`操作过大，硬件的开销就过大，而将此次大的`IO`操作进行分段操作，让数据像水管一样流动，直到流动完成

常见的场景有：

- get请求返回文件给客户端
- 文件操作
- 一些打包工具的底层操作



### get请求返回文件给客户端

使用`stream`流返回文件，`res`也是一个`stream`对象，通过`pipe`管道将文件数据返回

```js
const server = http.createServer(function (req, res) {
    const method = req.method; // 获取请求方法
    if (method === 'GET') { // get 请求
        const fileName = path.resolve(__dirname, 'data.txt');
        let stream = fs.createReadStream(fileName);
        stream.pipe(res); // 将 res 作为 stream 的 dest
    }
});
server.listen(8000);
```



### 文件操作

创建一个可读数据流`readStream`，一个可写数据流`writeStream`，通过`pipe`管道把数据流转过去

```js
const fs = require('fs')
const path = require('path')

// 两个文件名
const fileName1 = path.resolve(__dirname, 'data.txt')
const fileName2 = path.resolve(__dirname, 'data-bak.txt')
// 读取文件的 stream 对象
const readStream = fs.createReadStream(fileName1)
// 写入文件的 stream 对象
const writeStream = fs.createWriteStream(fileName2)
// 通过 pipe执行拷贝，数据流转
readStream.pipe(writeStream)
// 数据读取完成监听，即拷贝完成
readStream.on('end', function () {
    console.log('拷贝完成')
})

```





### 一些打包工具的底层操作

目前一些比较火的前端打包构建工具，都是通过`node.js`编写的，打包和构建的过程肯定是文件频繁操作的过程，离不来`stream`，如`gulp`





## 参考文献

- https://xie.infoq.cn/article/1a9695020828460eb3c4ff1fa
- https://juejin.cn/post/6844903891083984910


# QUESTION：说说Node中的EventEmitter? 如何实现一个EventEmitter?

 ![](https://static.vue-js.com/16b10390-c83a-11eb-ab90-d9ae814b240d.png)

## 一、是什么

我们了解到，`Node `采用了事件驱动机制，而`EventEmitter `就是`Node`实现事件驱动的基础

在`EventEmitter`的基础上，`Node `几乎所有的模块都继承了这个类，这些模块拥有了自己的事件，可以绑定／触发监听器，实现了异步操作

`Node.js` 里面的许多对象都会分发事件，比如 fs.readStream 对象会在文件被打开的时候触发一个事件

这些产生事件的对象都是 events.EventEmitter 的实例，这些对象有一个 eventEmitter.on() 函数，用于将一个或多个函数绑定到命名事件上


## 二、使用方法

`Node `的`events`模块只提供了一个`EventEmitter`类，这个类实现了`Node`异步事件驱动架构的基本模式——观察者模式

在这种模式中，被观察者(主体)维护着一组其他对象派来(注册)的观察者，有新的对象对主体感兴趣就注册观察者，不感兴趣就取消订阅，主体有更新的话就依次通知观察者们

基本代码如下所示：

```js
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

function callback() {
    console.log('触发了event事件！')
}
myEmitter.on('event', callback)
myEmitter.emit('event')
myEmitter.removeListener('event', callback);
```

通过实例对象的`on`方法注册一个名为`event`的事件，通过`emit`方法触发该事件，而`removeListener`用于取消事件的监听

关于其常见的方法如下：

- emitter.addListener/on(eventName, listener) ：添加类型为 eventName 的监听事件到事件数组尾部
- emitter.prependListener(eventName, listener)：添加类型为 eventName 的监听事件到事件数组头部
- emitter.emit(eventName[, ...args])：触发类型为 eventName 的监听事件
- emitter.removeListener/off(eventName, listener)：移除类型为 eventName 的监听事件
- emitter.once(eventName, listener)：添加类型为 eventName 的监听事件，以后只能执行一次并删除
- emitter.removeAllListeners([eventName])： 移除全部类型为 eventName 的监听事件



## 三、实现过程

通过上面的方法了解，`EventEmitter`是一个构造函数，内部存在一个包含所有事件的对象

```js
class EventEmitter {
    constructor() {
        this.events = {};
    }
}
```

其中`events`存放的监听事件的函数的结构如下：

```js
{
  "event1": [f1,f2,f3]，
  "event2": [f4,f5]，
  ...
}
```

然后开始一步步实现实例方法，首先是`emit`，第一个参数为事件的类型，第二个参数开始为触发事件函数的参数，实现如下：

```js
emit(type, ...args) {
    this.events[type].forEach((item) => {
        Reflect.apply(item, this, args);
    });
}
```

当实现了`emit`方法之后，然后实现`on`、`addListener`、`prependListener`这三个实例方法，都是添加事件监听触发函数，实现也是大同小异

```js
on(type, handler) {
    if (!this.events[type]) {
        this.events[type] = [];
    }
    this.events[type].push(handler);
}

addListener(type,handler){
    this.on(type,handler)
}

prependListener(type, handler) {
    if (!this.events[type]) {
        this.events[type] = [];
    }
    this.events[type].unshift(handler);
}
```

紧接着就是实现事件监听的方法`removeListener/on`

```js
removeListener(type, handler) {
    if (!this.events[type]) {
        return;
    }
    this.events[type] = this.events[type].filter(item => item !== handler);
}

off(type,handler){
    this.removeListener(type,handler)
}
```

最后再来实现`once`方法， 再传入事件监听处理函数的时候进行封装，利用闭包的特性维护当前状态，通过`fired`属性值判断事件函数是否执行过

```js
once(type, handler) {
    this.on(type, this._onceWrap(type, handler, this));
  }

  _onceWrap(type, handler, target) {
    const state = { fired: false, handler, type , target};
    const wrapFn = this._onceWrapper.bind(state);
    state.wrapFn = wrapFn;
    return wrapFn;
  }

  _onceWrapper(...args) {
    if (!this.fired) {
      this.fired = true;
      Reflect.apply(this.handler, this.target, args);
      this.target.off(this.type, this.wrapFn);
    }
 }
```

完整代码如下：

```js
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, handler) {
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push(handler);
    }

    addListener(type,handler){
        this.on(type,handler)
    }

    prependListener(type, handler) {
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].unshift(handler);
    }

    removeListener(type, handler) {
        if (!this.events[type]) {
            return;
        }
        this.events[type] = this.events[type].filter(item => item !== handler);
    }

    off(type,handler){
        this.removeListener(type,handler)
    }

    emit(type, ...args) {
        this.events[type].forEach((item) => {
            Reflect.apply(item, this, args);
        });
    }

    once(type, handler) {
        this.on(type, this._onceWrap(type, handler, this));
    }

    _onceWrap(type, handler, target) {
        const state = { fired: false, handler, type , target};
        const wrapFn = this._onceWrapper.bind(state);
        state.wrapFn = wrapFn;
        return wrapFn;
    }

    _onceWrapper(...args) {
        if (!this.fired) {
            this.fired = true;
            Reflect.apply(this.handler, this.target, args);
            this.target.off(this.type, this.wrapFn);
        }
    }
}
```

测试代码如下：

```js
const ee = new EventEmitter();

// 注册所有事件
ee.once('wakeUp', (name) => { console.log(`${name} 1`); });
ee.on('eat', (name) => { console.log(`${name} 2`) });
ee.on('eat', (name) => { console.log(`${name} 3`) });
const meetingFn = (name) => { console.log(`${name} 4`) };
ee.on('work', meetingFn);
ee.on('work', (name) => { console.log(`${name} 5`) });

ee.emit('wakeUp', 'xx');
ee.emit('wakeUp', 'xx');         // 第二次没有触发
ee.emit('eat', 'xx');
ee.emit('work', 'xx');
ee.off('work', meetingFn);        // 移除事件
ee.emit('work', 'xx');           // 再次工作
```



## 参考文献
- http://nodejs.cn/api/events.html#events_class_eventemitter
- https://segmentfault.com/a/1190000015762318
- https://juejin.cn/post/6844903781230968845
- https://vue3js.cn/interview


# QUESTION：说说对Nodejs中的事件循环机制理解?

 ![](https://static.vue-js.com/e0faf3c0-c90e-11eb-ab90-d9ae814b240d.png)


## 一、是什么

在[浏览器事件循环](https://github.com/febobo/web-interview/issues/73)中，我们了解到`javascript`在浏览器中的事件循环机制，其是根据`HTML5`定义的规范来实现

而在`NodeJS`中，事件循环是基于`libuv`实现，`libuv`是一个多平台的专注于异步IO的库，如下图最右侧所示：

 ![](https://static.vue-js.com/ea690b90-c90e-11eb-85f6-6fac77c0c9b3.png)

上图`EVENT_QUEUE` 给人看起来只有一个队列，但`EventLoop`存在6个阶段，每个阶段都有对应的一个先进先出的回调队列


## 二、流程

上节讲到事件循环分成了六个阶段，对应如下：

 ![](https://static.vue-js.com/f2e34d80-c90e-11eb-ab90-d9ae814b240d.png)

- timers阶段：这个阶段执行timer（setTimeout、setInterval）的回调
- 定时器检测阶段(timers)：本阶段执行 timer 的回调，即 setTimeout、setInterval 里面的回调函数
- I/O事件回调阶段(I/O callbacks)：执行延迟到下一个循环迭代的 I/O 回调，即上一轮循环中未被执行的一些I/O回调
- 闲置阶段(idle, prepare)：仅系统内部使用
- 轮询阶段(poll)：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞
- 检查阶段(check)：setImmediate() 回调函数在这里执行
- 关闭事件回调阶段(close callback)：一些关闭的回调函数，如：socket.on('close', ...)

每个阶段对应一个队列，当事件循环进入某个阶段时, 将会在该阶段内执行回调，直到队列耗尽或者回调的最大数量已执行, 那么将进入下一个处理阶段

除了上述6个阶段，还存在`process.nextTick`，其不属于事件循环的任何一个阶段，它属于该阶段与下阶段之间的过渡, 即本阶段执行结束, 进入下一个阶段前, 所要执行的回调，类似插队

流程图如下所示：

 ![](https://static.vue-js.com/fbe731d0-c90e-11eb-ab90-d9ae814b240d.png)

在`Node`中，同样存在宏任务和微任务，与浏览器中的事件循环相似

微任务对应有：

- next tick queue：process.nextTick
- other queue：Promise的then回调、queueMicrotask

宏任务对应有：

- timer queue：setTimeout、setInterval
- poll queue：IO事件
- check queue：setImmediate
- close queue：close事件

其执行顺序为：

- next tick microtask queue
- other microtask queue
- timer queue
- poll queue
- check queue
- close queue



## 三、题目

通过上面的学习，下面开始看看题目

```js
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

console.log('script start')

setTimeout(function () {
    console.log('setTimeout0')
}, 0)

setTimeout(function () {
    console.log('setTimeout2')
}, 300)

setImmediate(() => console.log('setImmediate'));

process.nextTick(() => console.log('nextTick1'));

async1();

process.nextTick(() => console.log('nextTick2'));

new Promise(function (resolve) {
    console.log('promise1')
    resolve();
    console.log('promise2')
}).then(function () {
    console.log('promise3')
})

console.log('script end')
```

分析过程：

- 先找到同步任务，输出script start
- 遇到第一个 setTimeout，将里面的回调函数放到 timer 队列中
- 遇到第二个 setTimeout，300ms后将里面的回调函数放到 timer 队列中
- 遇到第一个setImmediate，将里面的回调函数放到 check 队列中
- 遇到第一个 nextTick，将其里面的回调函数放到本轮同步任务执行完毕后执行

- 执行 async1函数，输出 async1 start
- 执行 async2 函数，输出 async2，async2 后面的输出 async1 end进入微任务，等待下一轮的事件循环
- 遇到第二个，将其里面的回调函数放到本轮同步任务执行完毕后执行
- 遇到 new Promise，执行里面的立即执行函数，输出 promise1、promise2
- then里面的回调函数进入微任务队列
- 遇到同步任务，输出 script end
- 执行下一轮回到函数，先依次输出 nextTick 的函数，分别是 nextTick1、nextTick2
- 然后执行微任务队列，依次输出 async1 end、promise3
- 执行timer 队列，依次输出 setTimeout0
- 接着执行 check  队列，依次输出 setImmediate
- 300ms后，timer 队列存在任务，执行输出 setTimeout2

执行结果如下：

```
script start
async1 start
async2
promise1
promise2
script end
nextTick1
nextTick2
async1 end
promise3
setTimeout0
setImmediate
setTimeout2
```

最后有一道是关于`setTimeout`与`setImmediate`的输出顺序

```js
setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});
```

输出情况如下：

```js
情况一：
setTimeout
setImmediate

情况二：
setImmediate
setTimeout
```

分析下流程：

- 外层同步代码一次性全部执行完，遇到异步API就塞到对应的阶段
- 遇到`setTimeout`，虽然设置的是0毫秒触发，但实际上会被强制改成1ms，时间到了然后塞入`times`阶段
- 遇到`setImmediate`塞入`check`阶段
- 同步代码执行完毕，进入Event Loop
- 先进入`times`阶段，检查当前时间过去了1毫秒没有，如果过了1毫秒，满足`setTimeout`条件，执行回调，如果没过1毫秒，跳过
- 跳过空的阶段，进入check阶段，执行`setImmediate`回调

这里的关键在于这1ms，如果同步代码执行时间较长，进入`Event Loop`的时候1毫秒已经过了，`setTimeout`先执行，如果1毫秒还没到，就先执行了`setImmediate`


## 参考文献

- https://segmentfault.com/a/1190000012258592
- https://juejin.cn/post/6844904100195205133
- https://vue3js.cn/interview/


# QUESTION：说说 Node 文件查找的优先级以及 Require 方法的文件查找策略?

 ![](https://static.vue-js.com/15913530-c9ba-11eb-ab90-d9ae814b240d.png)



## 一、模块规范

`NodeJS`对`CommonJS`进行了支持和实现，让我们在开发`node`的过程中可以方便的进行模块化开发：

- 在Node中每一个js文件都是一个单独的模块
- 模块中包括CommonJS规范的核心变量：exports、module.exports、require
- 通过上述变量进行模块化开发

而模块化的核心是导出与导入，在`Node`中通过`exports`与`module.exports`负责对模块中的内容进行导出，通过`require`函数导入其他模块（自定义模块、系统模块、第三方库模块）中的内容



## 二、查找策略

`require`方法接收一下几种参数的传递：

- 原生模块：http、fs、path等
- 相对路径的文件模块：./mod或../mod
- 绝对路径的文件模块：/pathtomodule/mod
- 目录作为模块：./dirname
- 非原生模块的文件模块：mod

`require`参数较为简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同，如下图：

 ![](https://static.vue-js.com/33ae8ef0-c9ba-11eb-85f6-6fac77c0c9b3.png)

从上图可以看见，文件模块存在缓存区，寻找模块路径的时候都会优先从缓存中加载已经存在的模块



### 原生模块

而像原生模块这些，通过`require `方法在解析文件名之后，优先检查模块是否在原生模块列表中，如果在则从原生模块中加载



### 绝对路径、相对路径

如果`require`绝对路径的文件，则直接查找对应的路径，速度最快

相对路径的模块则相对于当前调用`require`的文件去查找

如果按确切的文件名没有找到模块，则 `NodeJs` 会尝试带上 `.js`、`.json `或 `.node `拓展名再加载


### 目录作为模块

默认情况是根据根目录中`package.json`文件的`main`来指定目录模块，如：

```json
{ "name" : "some-library",
  "main" : "main.js" }
```

如果这是在` ./some-library node_modules `目录中，则 `require('./some-library')` 会试图加载 `./some-library/main.js`

如果目录里没有 `package.json`文件，或者 `main`入口不存在或无法解析，则会试图加载目录下的 `index.js` 或 `index.node` 文件





### 非原生模块

在每个文件中都存在`module.paths`，表示模块的搜索路径，`require`就是根据其来寻找文件

在`window`下输出如下：

```js
[ 'c:\\nodejs\\node_modules',
'c:\\node_modules' ]
```

可以看出`module path`的生成规则为：从当前文件目录开始查找`node_modules`目录；然后依次进入父目录，查找父目录下的`node_modules`目录，依次迭代，直到根目录下的`node_modules`目录

当都找不到的时候，则会从系统`NODE_PATH`环境变量查找

#### 举个例子：

如果在`/home/ry/projects/foo.js`文件里调用了 `require('bar.js')`，则 Node.js 会按以下顺序查找：

- /home/ry/projects/node_modules/bar.js
- /home/ry/node_modules/bar.js
- /home/node_modules/bar.js
- /node_modules/bar.js

这使得程序本地化它们的依赖，避免它们产生冲突



## 三、总结

通过上面模块的文件查找策略之后，总结下文件查找的优先级：

- 缓存的模块优先级最高

- 如果是内置模块，则直接返回，优先级仅次缓存的模块
- 如果是绝对路径 / 开头，则从根目录找
- 如果是相对路径 ./开头，则从当前require文件相对位置找
- 如果文件没有携带后缀，先从js、json、node按顺序查找
- 如果是目录，则根据 package.json的main属性值决定目录下入口文件，默认情况为 index.js
- 如果文件为第三方模块，则会引入 node_modules 文件，如果不在当前仓库文件中，则自动从上级递归查找，直到根目录



## 参考文献

- http://nodejs.cn/api/modules.html#modules_file_modules
- https://blog.csdn.net/qq_36801250/article/details/106352686
- https://www.cnblogs.com/samve/p/10805908.html

# QUESTION：说说对中间件概念的理解，如何封装 node 中间件？

 ![](https://static.vue-js.com/614ae480-cce4-11eb-ab90-d9ae814b240d.png)

## 一、是什么

中间件（Middleware）是介于应用系统和系统软件之间的一类软件，它使用系统软件所提供的基础服务（功能），衔接网络上应用系统的各个部分或不同的应用，能够达到资源共享、功能共享的目的

在`NodeJS`中，中间件主要是指封装`http`请求细节处理的方法

例如在`express`、`koa`等`web`框架中，中间件的本质为一个回调函数，参数包含请求对象、响应对象和执行下一个中间件的函数

 ![](https://static.vue-js.com/6a6ed3f0-cce4-11eb-85f6-6fac77c0c9b3.png)

在这些中间件函数中，我们可以执行业务逻辑代码，修改请求和响应对象、返回响应数据等操作



## 二、封装

`koa`是基于`NodeJS`当前比较流行的`web`框架，本身支持的功能并不多，功能都可以通过中间件拓展实现。通过添加不同的中间件，实现不同的需求，从而构建一个 `Koa` 应用

`Koa` 中间件采用的是洋葱圈模型，每次执行下一个中间件传入两个参数：

- ctx ：封装了request 和  response 的变量
- next ：进入下一个要执行的中间件的函数

 ![](https://static.vue-js.com/7507b020-cce4-11eb-ab90-d9ae814b240d.png)



下面就针对`koa`进行中间件的封装：

`Koa `的中间件就是函数，可以是` async` 函数，或是普通函数

```js
// async 函数
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 普通函数
app.use((ctx, next) => {
  const start = Date.now();
  return next().then(() => {
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});
```

下面则通过中间件封装`http`请求过程中几个常用的功能：

### token校验

```js
module.exports = (options) => async (ctx, next) {
  try {
    // 获取 token
    const token = ctx.header.authorization
    if (token) {
      try {
          // verify 函数验证 token，并获取用户相关信息
          await verify(token)
      } catch (err) {
        console.log(err)
      }
    }
    // 进入下一个中间件
    await next()
  } catch (err) {
    console.log(err)
  }
}
```

### 日志模块

```js
const fs = require('fs')
module.exports = (options) => async (ctx, next) => {
  const startTime = Date.now()
  const requestTime = new Date()
  await next()
  const ms = Date.now() - startTime;
  let logout = `${ctx.request.ip} -- ${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${ms}ms`;
  // 输出日志文件
  fs.appendFileSync('./log.txt', logout + '\n')
}
```

`Koa`存在很多第三方的中间件，如`koa-bodyparser`、`koa-static`等

下面再来看看它们的大体的简单实现：

### koa-bodyparser

`koa-bodyparser` 中间件是将我们的 `post` 请求和表单提交的查询字符串转换成对象，并挂在 `ctx.request.body` 上，方便我们在其他中间件或接口处取值

```js
// 文件：my-koa-bodyparser.js
const querystring = require("querystring");

module.exports = function bodyParser() {
    return async (ctx, next) => {
        await new Promise((resolve, reject) => {
            // 存储数据的数组
            let dataArr = [];

            // 接收数据
            ctx.req.on("data", data => dataArr.push(data));

            // 整合数据并使用 Promise 成功
            ctx.req.on("end", () => {
                // 获取请求数据的类型 json 或表单
                let contentType = ctx.get("Content-Type");

                // 获取数据 Buffer 格式
                let data = Buffer.concat(dataArr).toString();

                if (contentType === "application/x-www-form-urlencoded") {
                    // 如果是表单提交，则将查询字符串转换成对象赋值给 ctx.request.body
                    ctx.request.body = querystring.parse(data);
                } else if (contentType === "applaction/json") {
                    // 如果是 json，则将字符串格式的对象转换成对象赋值给 ctx.request.body
                    ctx.request.body = JSON.parse(data);
                }

                // 执行成功的回调
                resolve();
            });
        });

        // 继续向下执行
        await next();
    };
};
```



### koa-static

 `koa-static` 中间件的作用是在服务器接到请求时，帮我们处理静态文件

```js
const fs = require("fs");
const path = require("path");
const mime = require("mime");
const { promisify } = require("util");

// 将 stat 和 access 转换成 Promise
const stat = promisify(fs.stat);
const access = promisify(fs.access)

module.exports = function (dir) {
    return async (ctx, next) => {
        // 将访问的路由处理成绝对路径，这里要使用 join 因为有可能是 /
        let realPath = path.join(dir, ctx.path);

        try {
            // 获取 stat 对象
            let statObj = await stat(realPath);

            // 如果是文件，则设置文件类型并直接响应内容，否则当作文件夹寻找 index.html
            if (statObj.isFile()) {
                ctx.set("Content-Type", `${mime.getType()};charset=utf8`);
                ctx.body = fs.createReadStream(realPath);
            } else {
                let filename = path.join(realPath, "index.html");

                // 如果不存在该文件则执行 catch 中的 next 交给其他中间件处理
                await access(filename);

                // 存在设置文件类型并响应内容
                ctx.set("Content-Type", "text/html;charset=utf8");
                ctx.body = fs.createReadStream(filename);
            }
        } catch (e) {
            await next();
        }
    }
}
```





## 三、总结

在实现中间件时候，单个中间件应该足够简单，职责单一，中间件的代码编写应该高效，必要的时候通过缓存重复获取数据

`koa`本身比较简洁，但是通过中间件的机制能够实现各种所需要的功能，使得`web`应用具备良好的可拓展性和组合性

通过将公共逻辑的处理编写在中间件中，可以不用在每一个接口回调中做相同的代码编写，减少了冗杂代码，过程就如装饰者模式


## 参考文献

- https://segmentfault.com/a/1190000017897279
- https://www.jianshu.com/p/81b6ebc0dd85
- https://baike.baidu.com/item/%E4%B8%AD%E9%97%B4%E4%BB%B6

# QUESTION：如何实现jwt鉴权机制？说说你的思路

 ![](https://static.vue-js.com/efff62b0-cd88-11eb-ab90-d9ae814b240d.png)



## 一、是什么

JWT（JSON Web Token），本质就是一个字符串书写规范，如下图，作用是用来在用户和服务器之间传递安全可靠的信息

![](https://static.vue-js.com/052904c0-cd89-11eb-ab90-d9ae814b240d.png)

在目前前后端分离的开发过程中，使用`token`鉴权机制用于身份验证是最常见的方案，流程如下：

- 服务器当验证用户账号和密码正确的时候，给用户颁发一个令牌，这个令牌作为后续用户访问一些接口的凭证
- 后续访问会根据这个令牌判断用户时候有权限进行访问

`Token`，分成了三部分，头部（Header）、载荷（Payload）、签名（Signature），并以`.`进行拼接。其中头部和载荷都是以`JSON`格式存放数据，只是进行了编码

 ![](https://static.vue-js.com/1175f990-cd89-11eb-85f6-6fac77c0c9b3.png)



### header

每个JWT都会带有头部信息，这里主要声明使用的算法。声明算法的字段名为`alg`，同时还有一个`typ`的字段，默认`JWT`即可。以下示例中算法为HS256

```json
{  "alg": "HS256",  "typ": "JWT" }
```

因为JWT是字符串，所以我们还需要对以上内容进行Base64编码，编码后字符串如下：

```tex
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```



### payload

载荷即消息体，这里会存放实际的内容，也就是`Token`的数据声明，例如用户的`id`和`name`，默认情况下也会携带令牌的签发时间`iat`，通过还可以设置过期时间，如下：

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

同样进行Base64编码后，字符串如下：

```tex
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
```



### Signature

签名是对头部和载荷内容进行签名，一般情况，设置一个`secretKey`，对前两个的结果进行`HMACSHA25`算法，公式如下：

```js
Signature = HMACSHA256(base64Url(header)+.+base64Url(payload),secretKey)
```

一旦前面两部分数据被篡改，只要服务器加密用的密钥没有泄露，得到的签名肯定和之前的签名不一致



## 二、如何实现

`Token`的使用分成了两部分：

- 生成token：登录成功的时候，颁发token
- 验证token：访问某些资源或者接口时，验证token



### 生成 token

借助第三方库`jsonwebtoken`，通过`jsonwebtoken` 的 `sign` 方法生成一个 `token`：

- 第一个参数指的是 Payload

- 第二个是秘钥，服务端特有

- 第三个参数是 option，可以定义 token 过期时间

```js
const crypto = require("crypto"),
  jwt = require("jsonwebtoken");
// TODO:使用数据库
// 这里应该是用数据库存储，这里只是演示用
let userList = [];

class UserController {
  // 用户登录
  static async login(ctx) {
    const data = ctx.request.body;
    if (!data.name || !data.password) {
      return ctx.body = {
        code: "000002",
        message: "参数不合法"
      }
    }
    const result = userList.find(item => item.name === data.name && item.password === crypto.createHash('md5').update(data.password).digest('hex'))
    if (result) {
      // 生成token
      const token = jwt.sign(
        {
          name: result.name
        },
        "test_token", // secret
        { expiresIn: 60 * 60 } // 过期时间：60 * 60 s
      );
      return ctx.body = {
        code: "0",
        message: "登录成功",
        data: {
          token
        }
      };
    } else {
      return ctx.body = {
        code: "000002",
        message: "用户名或密码错误"
      };
    }
  }
}

module.exports = UserController;
```

在前端接收到`token`后，一般情况会通过`localStorage`进行缓存，然后将`token`放到`HTTP `请求头`Authorization` 中，关于`Authorization` 的设置，前面要加上 Bearer ，注意后面带有空格

```js
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.common['Authorization'] = 'Bearer ' + token; // 留意这里的 Authorization
  return config;
})
```



### 校验token

使用 `koa-jwt` 中间件进行验证，方式比较简单

```js
/ 注意：放在路由前面
app.use(koajwt({
  secret: 'test_token'
}).unless({ // 配置白名单
  path: [/\/api\/register/, /\/api\/login/]
}))
```

- secret 必须和 sign 时候保持一致
- 可以通过 unless 配置接口白名单，也就是哪些 URL 可以不用经过校验，像登陆/注册都可以不用校验
- 校验的中间件需要放在需要校验的路由前面，无法对前面的 URL 进行校验

获取`token`用户的信息方法如下：

```js
router.get('/api/userInfo',async (ctx,next) =>{
    const authorization =  ctx.header.authorization // 获取jwt
    const token = authorization.replace('Beraer ','')
    const result = jwt.verify(token,'test_token')
    ctx.body = result
```



注意：上述的`HMA256`加密算法为单秘钥的形式，一旦泄露后果非常的危险

在分布式系统中，每个子系统都要获取到秘钥，那么这个子系统根据该秘钥可以发布和验证令牌，但有些服务器只需要验证令牌

这时候可以采用非对称加密，利用私钥发布令牌，公钥验证令牌，加密算法可以选择`RS256`


## 三、优缺点

优点：

- json具有通用性，所以可以跨语言
- 组成简单，字节占用小，便于传输
- 服务端无需保存会话信息，很容易进行水平扩展
- 一处生成，多处使用，可以在分布式系统中，解决单点登录问题
- 可防护CSRF攻击

缺点：

- payload部分仅仅是进行简单编码，所以只能用于存储逻辑必需的非敏感信息
- 需要保护好加密密钥，一旦泄露后果不堪设想
- 为避免token被劫持，最好使用https协议



## 参考文献

- http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html
- https://blog.wangjunfeng.com/post/golang-jwt/
- https://vue3js.cn/interview/

# QUESTION：如何实现文件上传？说说你的思路

 ![](https://static.vue-js.com/248a5580-ce60-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

文件上传在日常开发中应用很广泛，我们发微博、发微信朋友圈都会用到了图片上传功能

因为浏览器限制，浏览器不能直接操作文件系统的，需要通过浏览器所暴露出来的统一接口，由用户主动授权发起来访问文件动作，然后读取文件内容进指定内存里，最后执行提交请求操作，将内存里的文件内容数据上传到服务端，服务端解析前端传来的数据信息后存入文件里

对于文件上传，我们需要设置请求头为`content-type:multipart/form-data`

> multipart互联网上的混合资源，就是资源由多种元素组成，form-data表示可以使用HTML Forms 和 POST 方法上传文件

结构如下：

```http
POST /t2/upload.do HTTP/1.1
User-Agent: SOHUWapRebot
Accept-Language: zh-cn,zh;q=0.5
Accept-Charset: GBK,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Content-Length: 60408
Content-Type:multipart/form-data; boundary=ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
Host: w.sohu.com

--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
Content-Disposition: form-data; name="city"

Santa colo
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
Content-Disposition: form-data;name="desc"
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

...
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
Content-Disposition: form-data;name="pic"; filename="photo.jpg"
Content-Type: application/octet-stream
Content-Transfer-Encoding: binary

... binary data of the jpg ...
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC--
```

`boundary`表示分隔符，如果要上传多个表单项，就要使用`boundary`分割，每个表单项由`———XXX`开始，以`———XXX`结尾

而`xxx`是即时生成的字符串，用以确保整个分隔符不会在文件或表单项的内容中出现

每个表单项必须包含一个 `Content-Disposition` 头，其他的头信息则为可选项， 比如 `Content-Type`

`Content-Disposition` 包含了 `type `和 一个名字为` name `的 `parameter`，`type` 是 `form-data`，`name `参数的值则为表单控件（也即 field）的名字，如果是文件，那么还有一个 `filename `参数，值就是文件名

```kotlin
Content-Disposition: form-data; name="user"; filename="logo.png"
```

至于使用`multipart/form-data`，是因为文件是以二进制的形式存在，其作用是专门用于传输大型二进制数据，效率高



### 二、如何实现

关于文件的上传的上传，我们可以分成两步骤：

- 文件的上传
- 文件的解析



### 文件上传

传统前端文件上传的表单结构如下：

```html
<form action="http://localhost:8080/api/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file" id="file" value="" multiple="multiple" />
    <input type="submit" value="提交"/>
</form>
```

`action` 就是我们的提交到的接口，`enctype="multipart/form-data"` 就是指定上传文件格式，`input` 的 `name` 属性一定要等于`file`



### 文件解析

在服务器中，这里采用`koa2`中间件的形式解析上传的文件数据，分别有下面两种形式：

- koa-body
- koa-multer


#### koa-body

安装依赖

```cmd
npm install koa-body
```

引入`koa-body`中间件

```js
const koaBody = require('koa-body');
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}));
```

获取上传的文件

```js
const file = ctx.request.files.file; // 获取上传文件
```

获取文件数据后，可以通过`fs`模块将文件保存到指定目录

```js
router.post('/uploadfile', async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return ctx.body = "上传成功！";
});
```



#### koa-multer

安装依赖：

```cmd
npm install koa-multer
```

使用 `multer` 中间件实现文件上传

```js
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage
});

const fileRouter = new Router();

fileRouter.post("/upload", upload.single('file'), (ctx, next) => {
  console.log(ctx.req.file); // 获取文件
})

app.use(fileRouter.routes());
```





## 参考文献

- https://segmentfault.com/a/1190000037411957
- https://www.jianshu.com/p/29e38bcc8a1d

# QUESTION：如果让你来设计一个分页功能, 你会怎么设计? 前后端如何交互?

 ![](https://static.vue-js.com/54b0a390-cf14-11eb-85f6-6fac77c0c9b3.png)



## 一、是什么

在我们做数据查询的时候，如果数据量很大，比如几万条数据，放在一个页面显示的话显然不友好，这时候就需要采用分页显示的形式，如每次只显示10条数据

![](https://static.vue-js.com/6070e8c0-cf14-11eb-85f6-6fac77c0c9b3.png)

要实现分页功能，实际上就是从结果集中显示第1~10条记录作为第1页，显示第11~20条记录作为第2页，以此类推

因此，分页实际上就是从结果集中截取出第M~N条记录


## 二、如何实现

前端实现分页功能，需要后端返回必要的数据，如总的页数，总的数据量，当前页，当前的数据

```js
{
 "totalCount": 1836,   // 总的条数
 "totalPages": 92,  // 总页数
 "currentPage": 1   // 当前页数
 "data": [     // 当前页的数据
   {
 ...
   }
]
```

后端采用`mysql`作为数据的持久性存储

前端向后端发送目标的页码`page`以及每页显示数据的数量`pageSize`，默认情况每次取10条数据，则每一条数据的起始位置`start`为：

```js
const start = (page - 1) * pageSize
```

当确定了`limit`和`start`的值后，就能够确定`SQL`语句：

```JS
const sql = `SELECT * FROM record limit ${pageSize} OFFSET ${start};`
```

上诉`SQL`语句表达的意思为：截取从`start`到`start`+`pageSize`之间（左闭右开）的数据

关于查询数据总数的`SQL`语句为，`record`为表名：

```mysql
SELECT COUNT(*) FROM record
```

因此后端的处理逻辑为：

- 获取用户参数页码数page和每页显示的数目 pageSize ，其中page 是必须传递的参数，pageSize为可选参数，默认为10
- 编写 SQL 语句，利用 limit 和 OFFSET 关键字进行分页查询
- 查询数据库，返回总数据量、总页数、当前页、当前页数据给前端

代码如下所示：

```js
router.all('/api', function (req, res, next) {
  var param = '';
  // 获取参数
  if (req.method == "POST") {
    param = req.body;
  } else {
    param = req.query || req.params;
  }
  if (param.page == '' || param.page == null || param.page == undefined) {
    res.end(JSON.stringify({ msg: '请传入参数page', status: '102' }));
    return;
  }
  const pageSize = param.pageSize || 10;
  const start = (param.page - 1) * pageSize;
  const sql = `SELECT * FROM record limit ${pageSize} OFFSET ${start};`
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query(sql, function (err, results) {
      connection.release();
      if (err) {
        throw err
      } else {
        // 计算总页数
        var allCount = results[0][0]['COUNT(*)'];
        var allPage = parseInt(allCount) / 20;
        var pageStr = allPage.toString();
        // 不能被整除
        if (pageStr.indexOf('.') > 0) {
          allPage = parseInt(pageStr.split('.')[0]) + 1;
        }
        var list = results[1];
        res.end(JSON.stringify({ msg: '操作成功', status: '200', totalPages: allPage, currentPage: param.page, totalCount: allCount, data: list }));
      }
    })
  })
});
```



## 三、总结

通过上面的分析，可以看到分页查询的关键在于，要首先确定每页显示的数量`pageSize`，然后根据当前页的索引`pageIndex`（从1开始），确定`LIMIT`和`OFFSET`应该设定的值：

- LIMIT 总是设定为 pageSize
- OFFSET 计算公式为 pageSize * (pageIndex - 1)

确定了这两个值，就能查询出第 `N`页的数据


## 参考文献

- https://www.liaoxuefeng.com/wiki/1177760294764384/1217864791925600
- https://vue3js.cn/interview/


# QUESTION：Node性能如何进行监控以及优化？

 ![](https://static.vue-js.com/bb37dae0-d179-11eb-ab90-d9ae814b240d.png)

## 一、 是什么

`Node`作为一门服务端语言，性能方面尤为重要，其衡量指标一般有如下：

- CPU
- 内存
- I/O
- 网络


### CPU

主要分成了两部分：

- CPU负载：在某个时间段内，占用以及等待CPU的进程总数
- CPU使用率：CPU时间占用状况，等于 1 - 空闲CPU时间(idle time) / CPU总时间

这两个指标都是用来评估系统当前CPU的繁忙程度的量化指标

`Node`应用一般不会消耗很多的`CPU`，如果`CPU`占用率高，则表明应用存在很多同步操作，导致异步任务回调被阻塞



### 内存指标

内存是一个非常容易量化的指标。 内存占用率是评判一个系统的内存瓶颈的常见指标。 对于Node来说，内部内存堆栈的使用状态也是一个可以量化的指标

```js
// /app/lib/memory.js
const os = require('os');
// 获取当前Node内存堆栈情况
const { rss, heapUsed, heapTotal } = process.memoryUsage();
// 获取系统空闲内存
const sysFree = os.freemem();
// 获取系统总内存
const sysTotal = os.totalmem();

module.exports = {
  memory: () => {
    return {
      sys: 1 - sysFree / sysTotal,  // 系统内存占用率
      heap: heapUsed / headTotal,   // Node堆内存占用率
      node: rss / sysTotal,         // Node占用系统内存的比例
    }
  }
}
```

- rss：表示node进程占用的内存总量。
- heapTotal：表示堆内存的总量。
- heapUsed：实际堆内存的使用量。
- external ：外部程序的内存使用量，包含Node核心的C++程序的内存使用量

在`Node`中，一个进程的最大内存容量为1.5GB。因此我们需要减少内存泄露



### 磁盘 I/O

硬盘的` IO` 开销是非常昂贵的，硬盘 IO 花费的 CPU 时钟周期是内存的 164000 倍

内存 `IO `比磁盘` IO` 快非常多，所以使用内存缓存数据是有效的优化方法。常用的工具如 `redis`、`memcached `等

并不是所有数据都需要缓存，访问频率高，生成代价比较高的才考虑是否缓存，也就是说影响你性能瓶颈的考虑去缓存，并且而且缓存还有缓存雪崩、缓存穿透等问题要解决



## 二、如何监控

关于性能方面的监控，一般情况都需要借助工具来实现

这里采用`Easy-Monitor 2.0`，其是轻量级的 `Node.js` 项目内核性能监控 + 分析工具，在默认模式下，只需要在项目入口文件 `require` 一次，无需改动任何业务代码即可开启内核级别的性能监控分析

使用方法如下：

在你的项目入口文件中按照如下方式引入，当然请传入你的项目名称：

```js
const easyMonitor = require('easy-monitor');
easyMonitor('你的项目名称');
```

打开你的浏览器，访问 `http://localhost:12333` ，即可看到进程界面

关于定制化开发、通用配置项以及如何动态更新配置项详见官方文档



## 三、如何优化

关于`Node`的性能优化的方式有：

- 使用最新版本Node.js
- 正确使用流 Stream
- 代码层面优化
- 内存管理优化



### 使用最新版本Node.js

每个版本的性能提升主要来自于两个方面：

- V8 的版本更新
- Node.js 内部代码的更新优化



### 正确使用流 Stream

在`Node`中，很多对象都实现了流，对于一个大文件可以通过流的形式发送，不需要将其完全读入内存

```js
const http = require('http');
const fs = require('fs');

// bad
http.createServer(function (req, res) {
    fs.readFile(__dirname + '/data.txt', function (err, data) {
        res.end(data);
    });
});

// good
http.createServer(function (req, res) {
    const stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(res);
});
```



### 代码层面优化

合并查询，将多次查询合并一次，减少数据库的查询次数

```js
// bad
for user_id in userIds
     let account = user_account.findOne(user_id)

// good
const user_account_map = {}   // 注意这个对象将会消耗大量内存。
user_account.find(user_id in user_ids).forEach(account){
    user_account_map[account.user_id] =  account
}
for user_id in userIds
    var account = user_account_map[user_id]
```



### 内存管理优化

在 V8 中，主要将内存分为新生代和老生代两代：

- 新生代：对象的存活时间较短。新生对象或只经过一次垃圾回收的对象
- 老生代：对象存活时间较长。经历过一次或多次垃圾回收的对象

若新生代内存空间不够，直接分配到老生代

通过减少内存占用，可以提高服务器的性能。如果有内存泄露，也会导致大量的对象存储到老生代中，服务器性能会大大降低

如下面情况：

```js
const buffer = fs.readFileSync(__dirname + '/source/index.htm');

app.use(
    mount('/', async (ctx) => {
        ctx.status = 200;
        ctx.type = 'html';
        ctx.body = buffer;
        leak.push(fs.readFileSync(__dirname + '/source/index.htm'));
    })
);

const leak = [];
```

`leak`的内存非常大，造成内存泄露，应当避免这样的操作，通过减少内存使用，是提高服务性能的手段之一

而节省内存最好的方式是使用池，其将频用、可复用对象存储起来，减少创建和销毁操作

例如有个图片请求接口，每次请求，都需要用到类。若每次都需要重新new这些类，并不是很合适，在大量请求时，频繁创建和销毁这些类，造成内存抖动

使用对象池的机制，对这种频繁需要创建和销毁的对象保存在一个对象池中。每次用到该对象时，就取对象池空闲的对象，并对它进行初始化操作，从而提高框架的性能





## 参考文献

- https://segmentfault.com/a/1190000039327565
- https://zhuanlan.zhihu.com/p/50055740
- https://segmentfault.com/a/1190000010231628



# webpack
# QUESTION：说说你对webpack的理解？解决了什么问题？

 ![](https://static.vue-js.com/898ed570-a578-11eb-85f6-6fac77c0c9b3.png)

## 一、背景

`Webpack` 最初的目标是实现前端项目的模块化，旨在更高效地管理和维护项目中的每一个资源

#### 模块化

最早的时候，我们会通过文件划分的形式实现模块化，也就是将每个功能及其相关状态数据各自单独放到不同的` JS` 文件中

约定每个文件是一个独立的模块，然后再将这些`js`文件引入到页面，一个`script`标签对应一个模块，然后调用模块化的成员

```html
<script src="module-a.js"></script>
<script src="module-b.js"></script>
```

但这种模块弊端十分的明显，模块都是在全局中工作，大量模块成员污染了环境，模块与模块之间并没有依赖关系、维护困难、没有私有空间等问题

项目一旦变大，上述问题会尤其明显

随后，就出现了命名空间方式，规定每个模块只暴露一个全局对象，然后模块的内容都挂载到这个对象中

```js
window.moduleA = {
  method1: function () {
    console.log('moduleA#method1')
  }
}
```

这种方式也并没有解决第一种方式的依赖等问题

再后来，我们使用立即执行函数为模块提供私有空间，通过参数的形式作为依赖声明，如下

```js
// module-a.js
(function ($) {
  var name = 'module-a'

  function method1 () {
    console.log(name + '#method1')
    $('body').animate({ margin: '200px' })
  }

  window.moduleA = {
    method1: method1
  }
})(jQuery)
```

上述的方式都是早期解决模块的方式，但是仍然存在一些没有解决的问题。例如，我们是用过`script`标签在页面引入这些模块的，这些模块的加载并不受代码的控制，时间一久维护起来也十分的麻烦

理想的解决方式是，在页面中引入一个` JS `入口文件，其余用到的模块可以通过代码控制，按需加载进来

除了模块加载的问题以外，还需要规定模块化的规范，如今流行的则是`CommonJS `、`ES Modules`


## 二、问题

从后端渲染的`JSP`、`PHP`，到前端原生`JavaScript`，再到`jQuery`开发，再到目前的三大框架`Vue`、`React`、`Angular`

开发方式，也从`javascript`到后面的`es5`、`es6、7、8、9、10`，再到`typescript`，包括编写`CSS`的预处理器`less`、`scss`等

现代前端开发已经变得十分的复杂，所以我们开发过程中会遇到如下的问题：

- 需要通过模块化的方式来开发
- 使用一些高级的特性来加快我们的开发效率或者安全性，比如通过ES6+、TypeScript开发脚本逻辑，通过sass、less等方式来编写css样式代码
- 监听文件的变化来并且反映到浏览器上，提高开发的效率
- JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问题
- 开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化

而`webpack`恰巧可以解决以上问题


## 三、是什么

`webpack` 是一个用于现代` JavaScript `应用程序的静态模块打包工具

- 静态模块

这里的静态模块指的是开发阶段，可以被 `webpack` 直接引用的资源（可以直接被获取打包进`bundle.js`的资源）

当 `webpack `处理应用程序时，它会在内部构建一个依赖图，此依赖图对应映射到项目所需的每个模块（不再局限`js`文件），并生成一个或多个 `bundle`

 ![](https://static.vue-js.com/9ce194a0-a578-11eb-85f6-6fac77c0c9b3.png)

#### `webpack`的能力：

**编译代码能力**，提高效率，解决浏览器兼容问题
![](https://static.vue-js.com/c5c2d360-a592-11eb-ab90-d9ae814b240d.png)
**模块整合能力**，提高性能，可维护性，解决浏览器频繁请求文件的问题
![](https://static.vue-js.com/d306d260-a592-11eb-ab90-d9ae814b240d.png)
**万物皆可模块能力**，项目维护性增强，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制
![](https://static.vue-js.com/e3c5a040-a592-11eb-ab90-d9ae814b240d.png)

## 参考文献
- https://webpack.docschina.org/concepts/
- https://zhuanlan.zhihu.com/p/267875652

# QUESTION：说说webpack的构建流程?

![](https://static.vue-js.com/96cf6840-a658-11eb-85f6-6fac77c0c9b3.png)

## 一、运行流程

`webpack` 的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来

在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条`webpack`机制中，去改变`webpack`的运作，使得整个系统扩展性良好

从启动到结束会依次执行以下三大步骤：

- 初始化流程：从配置文件和 `Shell` 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数
- 编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理
- 输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统

 ![](https://static.vue-js.com/b566d400-a658-11eb-85f6-6fac77c0c9b3.png)


### 初始化流程

从配置文件和 `Shell` 语句中读取与合并参数，得出最终的参数

配置文件默认下为`webpack.config.js`，也或者通过命令的形式指定配置文件，主要作用是用于激活`webpack`的加载项和插件

关于文件配置内容分析，如下注释：

```js
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
  // 入口文件，是模块构建的起点，同时每一个入口文件对应最后生成的一个 chunk。
  entry: './path/to/my/entry/file.js'，
  // 文件路径指向(可加快打包过程)。
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  // 生成文件，是模块构建的终点，包括输出文件与输出路径。
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  // 这里配置了处理各模块的 loader ，包括 css 预处理 loader ，es6 编译 loader，图片处理 loader。
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    noParse: [pathToReact]
  },
  // webpack 各插件对象，在 webpack 的事件流中执行对应的方法。
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
```

`webpack` 将 `webpack.config.js` 中的各个配置项拷贝到 `options` 对象中，并加载用户配置的 ` plugins`

完成上述步骤之后，则开始初始化`Compiler`编译对象，该对象掌控者`webpack`声明周期，不执行具体的任务，只是进行一些调度工作

```js
class Compiler extends Tapable {
    constructor(context) {
        super();
        this.hooks = {
            beforeCompile: new AsyncSeriesHook(["params"]),
            compile: new SyncHook(["params"]),
            afterCompile: new AsyncSeriesHook(["compilation"]),
            make: new AsyncParallelHook(["compilation"]),
            entryOption: new SyncBailHook(["context", "entry"])
            // 定义了很多不同类型的钩子
        };
        // ...
    }
}

function webpack(options) {
  var compiler = new Compiler();
  ...// 检查options,若watch字段为true,则开启watch线程
  return compiler;
}
...
```

`Compiler` 对象继承自 `Tapable`，初始化时定义了很多钩子函数



### 编译构建流程

根据配置中的 `entry` 找出所有的入口文件

```js
module.exports = {
  entry: './src/file.js'
}
```

初始化完成后会调用`Compiler`的`run`来真正启动`webpack`编译构建流程，主要流程如下：

- `compile` 开始编译
- `make` 从入口点分析模块及其依赖的模块，创建这些模块对象
- `build-module` 构建模块
- `seal` 封装构建结果
- `emit` 把各个chunk输出到结果文件



#### compile 编译

执行了`run`方法后，首先会触发`compile`，主要是构建一个`Compilation`对象

该对象是编译阶段的主要执行者，主要会依次下述流程：执行模块创建、依赖收集、分块、打包等主要任务的对象



#### make 编译模块

当完成了上述的`compilation`对象后，就开始从`Entry`入口文件开始读取，主要执行`_addModuleChain()`函数，如下：

```js
_addModuleChain(context, dependency, onModule, callback) {
   ...
   // 根据依赖查找对应的工厂函数
   const Dep = /** @type {DepConstructor} */ (dependency.constructor);
   const moduleFactory = this.dependencyFactories.get(Dep);

   // 调用工厂函数NormalModuleFactory的create来生成一个空的NormalModule对象
   moduleFactory.create({
       dependencies: [dependency]
       ...
   }, (err, module) => {
       ...
       const afterBuild = () => {
        this.processModuleDependencies(module, err => {
         if (err) return callback(err);
         callback(null, module);
           });
    };

       this.buildModule(module, false, null, null, err => {
           ...
           afterBuild();
       })
   })
}
```

过程如下：

`_addModuleChain`中接收参数`dependency`传入的入口依赖，使用对应的工厂函数`NormalModuleFactory.create`方法生成一个空的`module`对象

回调中会把此`module`存入`compilation.modules`对象和`dependencies.module`对象中，由于是入口文件，也会存入`compilation.entries`中

随后执行`buildModule`进入真正的构建模块`module`内容的过程



#### build module 完成模块编译

这里主要调用配置的`loaders`，将我们的模块转成标准的`JS`模块

在用` Loader` 对一个模块转换完后，使用 `acorn` 解析转换后的内容，输出对应的抽象语法树（`AST`），以方便 `Webpack `后面对代码的分析

从配置的入口模块开始，分析其 `AST`，当遇到` require `等导入其它模块语句时，便将其加入到依赖的模块列表，同时对新找出的依赖模块递归分析，最终搞清所有模块的依赖关系



### 输出流程

#### seal 输出资源

`seal`方法主要是要生成`chunks`，对`chunks`进行一系列的优化操作，并生成要输出的代码

`webpack` 中的 `chunk` ，可以理解为配置在 `entry` 中的模块，或者是动态引入的模块

根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 `Chunk`，再把每个 `Chunk` 转换成一个单独的文件加入到输出列表



#### emit 输出完成

在确定好输出内容后，根据配置确定输出的路径和文件名

```js
output: {
    path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
}
```

在 `Compiler` 开始生成文件前，钩子 `emit` 会被执行，这是我们修改最终文件的最后一个机会

从而`webpack`整个打包过程则结束了



### 小结

 ![](https://static.vue-js.com/d77fc560-a658-11eb-85f6-6fac77c0c9b3.png)





## 参考文献

- https://github.com/Cosen95/blog/issues/48
- https://developer.aliyun.com/article/61047

# QUESTION：说说webpack中常见的Loader？解决了什么问题？

 ![](https://static.vue-js.com/5660fc40-a6ff-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么
`loader` 用于对模块的"源代码"进行转换，在 `import` 或"加载"模块时预处理文件

`webpack`做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。如下图所示：

 ![](https://static.vue-js.com/7b8d9640-a6ff-11eb-ab90-d9ae814b240d.png)

在`webpack`内部中，任何文件都是模块，不仅仅只是`js`文件

默认情况下，在遇到`import`或者`require`加载模块的时候，`webpack`只支持对`js` 和 `json` 文件打包

像`css`、`sass`、`png`等这些类型的文件的时候，`webpack`则无能为力，这时候就需要配置对应的`loader`进行文件内容的解析

在加载模块的时候，执行顺序如下：

 ![](https://static.vue-js.com/9c2c43b0-a6ff-11eb-85f6-6fac77c0c9b3.png)



当 `webpack` 碰到不识别的模块的时候，`webpack` 会在配置的中查找该文件解析规则



关于配置`loader`的方式有三种：

- 配置方式（推荐）：在 webpack.config.js文件中指定 loader
- 内联方式：在每个 import 语句中显式指定 loader
- CLI 方式：在 shell 命令中指定它们


### 配置方式

关于`loader`的配置，我们是写在`module.rules`属性中，属性介绍如下：

- `rules`是一个数组的形式，因此我们可以配置很多个`loader`

- 每一个`loader`对应一个对象的形式，对象属性`test` 为匹配的规则，一般情况为正则表达式

- 属性`use`针对匹配到文件类型，调用对应的 `loader` 进行处理

代码编写，如下形式：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```



## 二、特性

这里继续拿上述代码，来讲讲`loader`的特性

从上述代码可以看到，在处理`css`模块的时候，`use`属性中配置了三个`loader`分别处理`css`文件

因为`loader `支持链式调用，链中的每个` loader `会处理之前已处理过的资源，最终变为`js`代码。顺序为相反的顺序执行，即上述执行方式为`sass-loader`、`css-loader`、`style-loader`

除此之外，`loader`的特性还有如下：

- loader 可以是同步的，也可以是异步的
- loader 运行在 Node.js 中，并且能够执行任何操作
- 除了常见的通过 `package.json` 的 `main` 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 `loader` 字段直接引用一个模块
- 插件(plugin)可以为 loader 带来更多特性
- loader 能够产生额外的任意文件

可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言翻译和更多其他特性





## 三、常见的loader

在页面开发过程中，我们经常性加载除了`js`文件以外的内容，这时候我们就需要配置响应的`loader`进行加载

常见的`loader`如下：

- style-loader: 将css添加到DOM的内联样式标签style里
- css-loader :允许将css文件通过require的方式引入，并返回css代码
- less-loader: 处理less
- sass-loader: 处理sass
- postcss-loader: 用postcss来处理CSS
- autoprefixer-loader: 处理CSS3属性前缀，已被弃用，建议直接使用postcss
- file-loader: 分发文件到output目录并返回相对路径
- url-loader: 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url
- html-minify-loader: 压缩HTML
- babel-loader :用babel来转换ES6文件到ES



下面给出一些常见的`loader`的使用：

### css-loader

分析 `css` 模块之间的关系，并合成⼀个 `css`

```bash
npm install --save-dev css-loader
```

```js
rules: [
  ...,
 {
  test: /\.css$/,
    use: {
      loader: "css-loader",
      options: {
     // 启用/禁用 url() 处理
     url: true,
     // 启用/禁用 @import 处理
     import: true,
        // 启用/禁用 Sourcemap
        sourceMap: false
      }
    }
 }
]
```

如果只通过`css-loader`加载文件，这时候页面代码设置的样式并没有生效

原因在于，`css-loader`只是负责将`.css`文件进行一个解析，而并不会将解析后的`css`插入到页面中

如果我们希望再完成插入`style`的操作，那么我们还需要另外一个`loader`，就是`style-loader`



### style-loader

把 `css-loader` 生成的内容，用 `style` 标签挂载到页面的 `head` 中

```bash
npm install --save-dev style-loader
```

```js
rules: [
  ...,
 {
  test: /\.css$/,
    use: ["style-loader", "css-loader"]
 }
]
```

同一个任务的 `loader` 可以同时挂载多个，处理顺序为：从右到左，从下往上





### less-loader

开发中，我们也常常会使用`less`、`sass`、`stylus`预处理器编写`css`样式，使开发效率提高，这里需要使用`less-loader`

```cmd
npm install less-loader -D
```

```js
rules: [
  ...,
 {
  test: /\.css$/,
    use: ["style-loader", "css-loader","less-loader"]
 }
]
```



### raw-loader

在 `webpack `中通过 `import `方式导入文件内容，该`loader `并不是内置的，所以首先要安装

```bash
npm install --save-dev raw-loader
```

然后在 webpack.config.js 中进行配置

```javascript
module.exports = {
  ...,
  module: {
      rules: [
      {
        test: /\.(txt|md)$/,
        use: 'raw-loader'
     }
    ]
 }
}
```



### file-loader

把识别出的资源模块，移动到指定的输出⽬目录，并且返回这个资源在输出目录的地址(字符串)

```bash
npm install --save-dev file-loader
```

```javascript
rules: [
  ...,
 {
  test: /\.(png|jpe?g|gif)$/,
    use: {
      loader: "file-loader",
      options: {
        // placeholder 占位符 [name] 源资源模块的名称
        // [ext] 源资源模块的后缀
        name: "[name]_[hash].[ext]",
        //打包后的存放位置
        outputPath: "./images",
        // 打包后文件的 url
        publicPath: './images',
      }
    }
 }
]
```



### url-loader

可以处理理 `file-loader` 所有的事情，但是遇到图片格式的模块，可以选择性的把图片转成 `base64`  格式的字符串，并打包到 `js` 中，对小体积的图片比较合适，大图片不合适。

```bash
npm install --save-dev url-loader
```

```javascript
rules: [
  ...,
 {
  test: /\.(png|jpe?g|gif)$/,
    use: {
      loader: "url-loader",
      options: {
        // placeholder 占位符 [name] 源资源模块的名称
        // [ext] 源资源模块的后缀
        name: "[name]_[hash].[ext]",
        //打包后的存放位置
        outputPath: "./images"
        // 打包后文件的 url
        publicPath: './images',
        // 小于 100 字节转成 base64 格式
        limit: 100
      }
    }
 }
]
```


## 参考文献

- https://webpack.docschina.org/concepts/loaders/
- https://segmentfault.com/a/1190000018680530
- https://vue3js.cn/interview/


# QUESTION：说说webpack中常见的Plugin？解决了什么问题？

 ![](https://static.vue-js.com/8d3978a0-a7c2-11eb-85f6-6fac77c0c9b3.png)



## 一、是什么
`Plugin`（Plug-in）是一种计算机应用程序，它和主应用程序互相交互，以提供特定的功能

是一种遵循一定规范的应用程序接口编写出来的程序，只能运行在程序规定的系统下，因为其需要调用原纯净系统提供的函数库或者数据

`webpack`中的`plugin`也是如此，`plugin`赋予其各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 `webpack` 的不同阶段（钩子 / 生命周期），贯穿了`webpack`整个编译周期

![](https://static.vue-js.com/9a04ec40-a7c2-11eb-ab90-d9ae814b240d.png)

目的在于解决`loader` 无法实现的其他事

### 配置方式

这里讲述文件的配置方式，一般情况，通过配置文件导出对象中`plugins`属性传入`new`实例对象。如下所示：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 访问内置的插件
module.exports = {
  ...
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
```



## 二、特性

其本质是一个具有`apply`方法`javascript`对象

`apply` 方法会被 `webpack compiler `调用，并且在整个编译生命周期都可以访问 `compiler `对象

```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack 构建过程开始！');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```

`compiler hook` 的 `tap `方法的第一个参数，应是驼峰式命名的插件名称

关于整个编译生命周期钩子，有如下：

- entry-option ：初始化 option
- run
- compile： 真正开始的编译，在创建 compilation 对象之前
- compilation ：生成好了 compilation 对象
- make 从 entry 开始递归分析依赖，准备对每个模块进行 build
- after-compile： 编译 build 过程结束
- emit ：在将内存中 assets 内容写到磁盘文件夹之前
- after-emit ：在将内存中 assets 内容写到磁盘文件夹之后
- done： 完成所有的编译过程
- failed： 编译失败的时候



## 三、常见的Plugin

常见的`plugin`有如图所示：

![](https://static.vue-js.com/bd749400-a7c2-11eb-85f6-6fac77c0c9b3.png)



下面介绍几个常用的插件用法：

### HtmlWebpackPlugin

在打包结束后，⾃动生成⼀个 `html` ⽂文件，并把打包生成的` js` 模块引⼊到该 `html` 中

```bash
npm install --save-dev html-webpack-plugin
```

```js
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
 ...
  plugins: [
     new HtmlWebpackPlugin({
       title: "My App",
       filename: "app.html",
       template: "./src/html/index.html"
     })
  ]
};
```

```html
<!--./src/html/index.html-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><%=htmlWebpackPlugin.options.title%></title>
</head>
<body>
    <h1>html-webpack-plugin</h1>
</body>
</html>
```

在 `html` 模板中，可以通过 `<%=htmlWebpackPlugin.options.XXX%>` 的方式获取配置的值

更多的配置可以自寻查找



### clean-webpack-plugin

删除（清理）构建目录

```bash
npm install --save-dev clean-webpack-plugin
```

```js
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
 ...
  plugins: [
    ...,
    new CleanWebpackPlugin(),
    ...
  ]
}
```



### mini-css-extract-plugin

提取 `CSS` 到一个单独的文件中

```bash
npm install --save-dev mini-css-extract-plugin
```

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
 ...,
  module: {
   rules: [
    {
     test: /\.s[ac]ss$/,
     use: [
      {
       loader: MiniCssExtractPlugin.loader
     },
          'css-loader',
          'sass-loader'
        ]
   }
   ]
 },
  plugins: [
    ...,
    new MiniCssExtractPlugin({
     filename: '[name].css'
    }),
    ...
  ]
}
```



### DefinePlugin

允许在编译时创建配置的全局对象，是一个`webpack`内置的插件，不需要安装

```js
const { DefinePlugun } = require('webpack')

module.exports = {
 ...
    plugins:[
        new DefinePlugin({
            BASE_URL:'"./"'
        })
    ]
}
```

这时候编译`template`模块的时候，就能通过下述形式获取全局对象

```html
<link rel="icon" href="<%= BASE_URL%>favicon.ico>"
```





### copy-webpack-plugin

复制文件或目录到执行区域，如`vue`的打包过程中，如果我们将一些文件放到`public`的目录下，那么这个目录会被复制到`dist`文件夹中

```cmd
npm install copy-webpack-plugin -D
```

```js
new CopyWebpackPlugin({
    parrerns:[
        {
            from:"public",
            globOptions:{
                ignore:[
                    '**/index.html'
                ]
            }
        }
    ]
})
```

复制的规则在`patterns`属性中设置：

- from：设置从哪一个源中开始复制
- to：复制到的位置，可以省略，会默认复制到打包的目录下

- globOptions：设置一些额外的选项，其中可以编写需要忽略的文件



## 参考文献
- https://webpack.docschina.org/concepts/plugins/
- https://baike.baidu.com/item/Plugin
- https://segmentfault.com/a/1190000018695134
- https://vue3js.cn/interview

# QUESTION：说说Loader和Plugin的区别？编写Loader，Plugin的思路？

![](https://static.vue-js.com/93042280-a894-11eb-ab90-d9ae814b240d.png)

## 一、区别

前面两节我们有提到`Loader`与`Plugin`对应的概念，先来回顾下

- loader 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中
- plugin 赋予了 webpack 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，目的是解决 loader 无法实现的其他事

从整个运行时机上来看，如下图所示：

![](https://static.vue-js.com/9a04ec40-a7c2-11eb-ab90-d9ae814b240d.png)

可以看到，两者在运行时机上的区别：

-  loader 运行在打包文件之前
-  plugins 在整个编译周期都起作用

在` Webpack` 运行的生命周期中会广播出许多事件，`Plugin` 可以监听这些事件，在合适的时机通过` Webpack `提供的 `API `改变输出结果

对于`loader`，实质是一个转换器，将A文件进行编译形成B文件，操作的是文件，比如将`A.scss`或`A.less`转变为`B.css`，单纯的文件转换过程



## 二、编写loader

在编写 `loader` 前，我们首先需要了解 `loader` 的本质

其本质为函数，函数中的 `this` 作为上下文会被 `webpack` 填充，因此我们不能将 `loader`设为一个箭头函数

函数接受一个参数，为 `webpack` 传递给 `loader` 的文件源内容

函数中 `this` 是由 `webpack` 提供的对象，能够获取当前 `loader` 所需要的各种信息

函数中有异步操作或同步操作，异步操作通过 `this.callback` 返回，返回值要求为 `string` 或者 `Buffer`

代码如下所示：

```js
// 导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function(source) {
    const content = doSomeThing2JsString(source);

    // 如果 loader 配置了 options 对象，那么this.query将指向 options
    const options = this.query;

    // 可以用作解析其他模块路径的上下文
    console.log('this.context');

    /*
     * this.callback 参数：
     * error：Error | null，当 loader 出错时向外抛出一个 error
     * content：String | Buffer，经过 loader 编译后需要导出的内容
     * sourceMap：为方便调试生成的编译后内容的 source map
     * ast：本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST，进而省去重复生成 AST 的过程
     */
    this.callback(null, content); // 异步
    return content; // 同步
}
```

一般在编写`loader`的过程中，保持功能单一，避免做多种功能

如` less `文件转换成 `css `文件也不是一步到位，而是 `less-loader`、`css-loader`、` style-loader `几个 `loader `的链式调用才能完成转换



## 三、编写plugin

由于`webpack`基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件，就可以在特定的阶段执行自己的插件任务

在之前也了解过，`webpack`编译会创建两个核心对象：

- compiler：包含了 webpack 环境的所有的配置信息，包括 options，loader 和 plugin，和 webpack 整个生命周期相关的钩子
- compilation：作为 plugin 内置事件回调函数的参数，包含了当前的模块资源、编译生成资源、变化的文件以及被跟踪依赖的状态信息。当检测到一个文件变化，一次新的 Compilation 将被创建

如果自己要实现`plugin`，也需要遵循一定的规范：

- 插件必须是一个函数或者是一个包含 `apply` 方法的对象，这样才能访问`compiler`实例
- 传给每个插件的 `compiler` 和 `compilation` 对象都是同一个引用，因此不建议修改
- 异步的事件需要在插件处理完任务时调用回调函数通知 `Webpack` 进入下一个流程，不然会卡住



实现`plugin`的模板如下：

```js
class MyPlugin {
    // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply (compiler) {
    // 找到合适的事件钩子，实现自己的插件功能
    compiler.hooks.emit.tap('MyPlugin', compilation => {
        // compilation: 当前打包构建流程的上下文
        console.log(compilation);

        // do something...
    })
  }
}
```

在 `emit` 事件发生时，代表源文件的转换和组装已经完成，可以读取到最终将输出的资源、代码块、模块及其依赖，并且可以修改输出资源的内容


## 参考文献

- https://webpack.docschina.org/api/loaders/
- https://webpack.docschina.org/api/compiler-hooks/
- https://segmentfault.com/a/1190000039877943
- https://vue3js.cn/interview

# QUESTION：说说webpack的热更新是如何做到的？原理是什么？

 ![](https://static.vue-js.com/a076da40-acd4-11eb-85f6-6fac77c0c9b3.png)



### 一、是什么

`HMR `全称 `Hot Module Replacement`，可以理解为模块热替换，指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用

例如，我们在应用运行过程中修改了某个模块，通过自动刷新会导致整个应用的整体刷新，那页面中的状态信息都会丢失

如果使用的是 `HMR`，就可以实现只将修改的模块实时替换至应用中，不必完全刷新整个应用

在`webpack`中配置开启热模块也非常的简单，如下代码：

```js
const webpack = require('webpack')
module.exports = {
  // ...
  devServer: {
    // 开启 HMR 特性
    hot: true
    // hotOnly: true
  }
}
```

通过上述这种配置，如果我们修改并保存`css`文件，确实能够以不刷新的形式更新到页面中

但是，当我们修改并保存`js`文件之后，页面依旧自动刷新了，这里并没有触发热模块

所以，`HMR `并不像 `Webpack` 的其他特性一样可以开箱即用，需要有一些额外的操作

我们需要去指定哪些模块发生更新时进行`HRM`，如下代码：

```js
if(module.hot){
    module.hot.accept('./util.js',()=>{
        console.log("util.js更新了")
    })
}
```



## 二、实现原理

首先来看看一张图，如下：

 ![](https://static.vue-js.com/adc05780-acd4-11eb-ab90-d9ae814b240d.png)

- Webpack Compile：将 JS 源代码编译成 bundle.js
- HMR Server：用来将热更新的文件输出给 HMR Runtime
- Bundle Server：静态资源文件服务器，提供文件访问路径
- HMR Runtime：socket服务器，会被注入到浏览器，更新文件的变化
- bundle.js：构建输出的文件
- 在HMR Runtime 和 HMR Server之间建立 websocket，即图上4号线，用于实时更新文件变化

上面图中，可以分成两个阶段：

- 启动阶段为上图 1 - 2 - A - B

在编写未经过`webpack`打包的源代码后，`Webpack Compile` 将源代码和 `HMR Runtime` 一起编译成 `bundle `文件，传输给` Bundle Server` 静态资源服务器

- 更新阶段为上图 1 - 2 - 3 - 4

当某一个文件或者模块发生变化时，`webpack `监听到文件变化对文件重新编译打包，编译生成唯一的` hash `值，这个`hash `值用来作为下一次热更新的标识

根据变化的内容生成两个补丁文件：`manifest`（包含了 `hash` 和 `chundId `，用来说明变化的内容）和` chunk.js` 模块

由于`socket`服务器在`HMR Runtime` 和 `HMR Server`之间建立 `websocket`链接，当文件发生改动的时候，服务端会向浏览器推送一条消息，消息包含文件改动后生成的`hash`值，如下图的`h`属性，作为下一次热更细的标识

 ![](https://static.vue-js.com/05a0edf0-ad4a-11eb-85f6-6fac77c0c9b3.png)

在浏览器接受到这条消息之前，浏览器已经在上一次` socket` 消息中已经记住了此时的` hash` 标识，这时候我们会创建一个 `ajax` 去服务端请求获取到变化内容的 `manifest` 文件

`mainfest`文件包含重新`build`生成的`hash`值，以及变化的模块，对应上图的`c`属性

浏览器根据 `manifest` 文件获取模块变化的内容，从而触发`render`流程，实现局部模块更新

 ![](https://static.vue-js.com/0e7b7850-ad4a-11eb-ab90-d9ae814b240d.png)



## 三、总结

关于`webpack`热模块更新的总结如下：

- 通过`webpack-dev-server`创建两个服务器：提供静态资源的服务（express）和Socket服务
- express server 负责直接提供静态资源的服务（打包后的资源直接被浏览器请求和解析）
- socket server 是一个 websocket 的长连接，双方可以通信
- 当 socket server 监听到对应的模块发生变化时，会生成两个文件.json（manifest文件）和.js文件（update chunk）
- 通过长连接，socket server 可以直接将这两个文件主动发送给客户端（浏览器）
- 浏览器拿到两个新的文件后，通过HMR runtime机制，加载这两个文件，并且针对修改的模块进行更新



## 参考文献

- https://zhuanlan.zhihu.com/p/138446061
- https://github.com/Jocs/jocs.github.io/issues/15
- https://juejin.cn/post/6844904134697549832
- https://vue3js.cn/interview/

# QUESTION：说说webpack proxy工作原理？为什么能解决跨域?

 ![](https://static.vue-js.com/5b871600-ace5-11eb-85f6-6fac77c0c9b3.png)



## 一、是什么

`webpack proxy`，即`webpack`提供的代理服务

基本行为就是接收客户端发送的请求后转发给其他服务器

其目的是为了便于开发者在开发模式下解决跨域问题（浏览器安全策略限制）

想要实现代理首先需要一个中间服务器，`webpack`中提供服务器的工具为`webpack-dev-server`

#### webpack-dev-server
`webpack-dev-server`是 `webpack` 官方推出的一款开发工具，将自动编译和自动刷新浏览器等一系列对开发友好的功能全部集成在了一起

目的是为了提高开发者日常的开发效率，**只适用在开发阶段**

关于配置方面，在`webpack`配置对象属性中通过`devServer`属性提供，如下：

```js
// ./webpack.config.js
const path = require('path')

module.exports = {
    // ...
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'https://api.github.com'
            }
        }
        // ...
    }
}
```

`devServetr`里面`proxy`则是关于代理的配置，该属性为对象的形式，对象中每一个属性就是一个代理的规则匹配

属性的名称是需要被代理的请求路径前缀，一般为了辨别都会设置前缀为` /api`，值为对应的代理匹配规则，对应如下：

- target：表示的是代理到的目标地址
- pathRewrite：默认情况下，我们的 /api-hy 也会被写入到URL中，如果希望删除，可以使用pathRewrite
- secure：默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false
- changeOrigin：它表示是否更新代理后请求的 headers 中host地址





## 二、工作原理

 `proxy`工作原理实质上是利用`http-proxy-middleware` 这个`http`代理中间件，实现请求转发给其他服务器

举个例子：

在开发阶段，本地地址为`http://localhost:3000`，该浏览器发送一个前缀带有`/api`标识的请求到服务端获取数据，但响应这个请求的服务器只是将请求转发到另一台服务器中

```js
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true}));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```



## 三、跨域

在开发阶段， `webpack-dev-server` 会启动一个本地开发服务器，所以我们的应用在开发阶段是独立运行在 `localhost `的一个端口上，而后端服务又是运行在另外一个地址上

所以在开发阶段中，由于浏览器同源策略的原因，当本地访问后端就会出现跨域请求的问题

通过设置`webpack proxy`实现代理请求后，相当于浏览器与服务端中添加一个代理者

当本地发送请求的时候，代理服务器响应该请求，并将请求转发到目标服务器，目标服务器响应数据后再将数据返回给代理服务器，最终再由代理服务器将数据响应给本地

 ![](https://static.vue-js.com/65b5e5c0-ace5-11eb-85f6-6fac77c0c9b3.png)

在代理服务器传递数据给本地浏览器的过程中，两者同源，并不存在跨域行为，这时候浏览器就能正常接收数据

注意：**服务器与服务器之间请求数据并不会存在跨域行为，跨域行为是浏览器安全策略限制**


## 参考文献

- https://webpack.docschina.org/configuration/dev-server/#devserverproxy

# QUESTION：说说如何借助webpack来优化前端性能？

 ![](https://static.vue-js.com/15e1ace0-aee4-11eb-ab90-d9ae814b240d.png)



## 一、背景

随着前端的项目逐渐扩大，必然会带来的一个问题就是性能

尤其在大型复杂的项目中，前端业务可能因为一个小小的数据依赖，导致整个页面卡顿甚至奔溃

一般项目在完成后，会通过`webpack`进行打包，利用`webpack`对前端项目性能优化是一个十分重要的环节



## 二、如何优化



通过`webpack`优化前端的手段有：

- JS代码压缩
- CSS代码压缩
- Html文件代码压缩
- 文件大小压缩
- 图片压缩
- Tree Shaking
- 代码分离
- 内联 chunk



### JS代码压缩

`terser`是一个`JavaScript`的解释、绞肉机、压缩机的工具集，可以帮助我们压缩、丑化我们的代码，让`bundle`更小

在`production`模式下，`webpack` 默认就是使用 `TerserPlugin` 来处理我们的代码的。如果想要自定义配置它，配置方法如下：

```js
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    ...
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true // 电脑cpu核数-1
            })
        ]
    }
}
```

属性介绍如下：

-  extractComments：默认值为true，表示会将注释抽取到一个单独的文件中，开发阶段，我们可设置为 false ，不保留注释
-  parallel：使用多进程并发运行提高构建的速度，默认值是true，并发运行的默认数量： os.cpus().length - 1
-  terserOptions：设置我们的terser相关的配置：
  - compress：设置压缩相关的选项，mangle：设置丑化相关的选项，可以直接设置为true
  - mangle：设置丑化相关的选项，可以直接设置为true
  - toplevel：底层变量是否进行转换
  - keep_classnames：保留类的名称
  - keep_fnames：保留函数的名称



### CSS代码压缩

`CSS`压缩通常是去除无用的空格等，因为很难去修改选择器、属性的名称、值等

CSS的压缩我们可以使用另外一个插件：`css-minimizer-webpack-plugin`

```cmd
npm install css-minimizer-webpack-plugin -D
```

配置方法如下：

```js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    // ...
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                parallel: true
            })
        ]
    }
}
```





### Html文件代码压缩

使用`HtmlWebpackPlugin`插件来生成`HTML`的模板时候，通过配置属性`minify`进行`html`优化

```js
module.exports = {
    ...
    plugin:[
        new HtmlwebpackPlugin({
            ...
            minify:{
                minifyCSS:false, // 是否压缩css
                collapseWhitespace:false, // 是否折叠空格
                removeComments:true // 是否移除注释
            }
        })
    ]
}
```

设置了`minify`，实际会使用另一个插件`html-minifier-terser`



### 文件大小压缩

对文件的大小进行压缩，减少`http`传输过程中宽带的损耗

```js
npm install compression-webpack-plugin -D
```

```js
new ComepressionPlugin({
    test:/\.(css|js)$/,  // 哪些文件需要压缩
    threshold:500, // 设置文件多大开始压缩
    minRatio:0.7, // 至少压缩的比例
    algorithm:"gzip", // 采用的压缩算法
})
```





### 图片压缩

一般来说在打包之后，一些图片文件的大小是远远要比 `js` 或者 `css` 文件要来的大，所以图片压缩较为重要

配置方法如下：

```js
module: {
  rules: [
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            // 压缩 jpeg 的配置
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // 使用 imagemin**-optipng 压缩 png，enable: false 为关闭
            optipng: {
              enabled: false,
            },
            // 使用 imagemin-pngquant 压缩 png
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            // 压缩 gif 的配置
            gifsicle: {
              interlaced: false,
            },
            // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
            webp: {
              quality: 75
            }
          }
        }
      ]
    },
  ]
}
```





### Tree Shaking

`Tree Shaking` 是一个术语，在计算机中表示消除死代码，依赖于`ES Module`的静态语法分析（不执行任何的代码，可以明确知道模块的依赖关系）

在`webpack`实现`Trss shaking`有两种不同的方案：

- usedExports：通过标记某些函数是否被使用，之后通过Terser来进行优化的
- sideEffects：跳过整个模块/文件，直接查看该文件是否有副作用

两种不同的配置方案， 有不同的效果



#### usedExports

配置方法也很简单，只需要将`usedExports`设为`true`

```js
module.exports = {
    ...
    optimization:{
        usedExports
    }
}
```

使用之后，没被用上的代码在`webpack`打包中会加入`unused harmony export mul`注释，用来告知 `Terser` 在优化时，可以删除掉这段代码

 如下面`sum`函数没被用到，`webpack`打包会添加注释，`terser`在优化时，则将该函数去掉

 ![](https://static.vue-js.com/21b2e200-aee4-11eb-85f6-6fac77c0c9b3.png)





#### sideEffects

`sideEffects`用于告知`webpack compiler`哪些模块时有副作用，配置方法是在`package.json`中设置`sideEffects`属性

如果`sideEffects`设置为false，就是告知`webpack`可以安全的删除未用到的`exports`

如果有些文件需要保留，可以设置为数组的形式

```js
"sideEffecis":[
    "./src/util/format.js",
    "*.css" // 所有的css文件
]
```



上述都是关于`javascript`的`tree shaking`，`css`同样也能够实现`tree shaking`

#### css tree shaking

`css`进行`tree shaking`优化可以安装`PurgeCss`插件

```cmd
npm install purgecss-plugin-webpack -D
```

```js
const PurgeCssPlugin = require('purgecss-webpack-plugin')
module.exports = {
    ...
    plugins:[
        new PurgeCssPlugin({
            path:glob.sync(`${path.resolve('./src')}/**/*`), {nodir:true}// src里面的所有文件
            satelist:function(){
                return {
                    standard:["html"]
                }
            }
        })
    ]
}
```

- paths：表示要检测哪些目录下的内容需要被分析，配合使用glob
- 默认情况下，Purgecss会将我们的html标签的样式移除掉，如果我们希望保留，可以添加一个safelist的属性



### 代码分离

将代码分离到不同的`bundle`中，之后我们可以按需加载，或者并行加载这些文件

默认情况下，所有的`JavaScript`代码（业务代码、第三方依赖、暂时没有用到的模块）在首页全部都加载，就会影响首页的加载速度

代码分离可以分出出更小的`bundle`，以及控制资源加载优先级，提供代码的加载性能

这里通过`splitChunksPlugin`来实现，该插件`webpack`已经默认安装和集成，只需要配置即可

默认配置中，chunks仅仅针对于异步（async）请求，我们可以设置为initial或者all

```js
module.exports = {
    ...
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    }
}
```

`splitChunks`主要属性有如下：

- Chunks，对同步代码还是异步代码进行处理
- minSize： 拆分包的大小, 至少为minSize，如何包的大小不超过minSize，这个包不会拆分
- maxSize： 将大于maxSize的包，拆分为不小于minSize的包
-  minChunks：被引入的次数，默认是1



### 内联chunk

可以通过`InlineChunkHtmlPlugin`插件将一些`chunk`的模块内联到`html`，如`runtime`的代码（对模块进行解析、加载、模块信息相关的代码），代码量并不大，但是必须加载的

```js
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    ...
    plugin:[
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin,[/runtime.+\.js/]
}
```





### 三、总结

关于`webpack`对前端性能的优化，可以通过文件体积大小入手，其次还可通过分包的形式、减少http请求次数等方式，实现对前端性能的优化


## 参考文献

- https://zhuanlan.zhihu.com/p/139498741
- https://vue3js.cn/interview/

# QUESTION：如何提高webpack的构建速度？

 ![](https://static.vue-js.com/3a1b8620-b01b-11eb-85f6-6fac77c0c9b3.png)

## 一、背景

随着我们的项目涉及到页面越来越多，功能和业务代码也会随着越多，相应的 `webpack` 的构建时间也会越来越久

构建时间与我们日常开发效率密切相关，当我们本地开发启动 `devServer` 或者 `build` 的时候，如果时间过长，会大大降低我们的工作效率

所以，优化`webpack` 构建速度是十分重要的环节


## 二、如何优化

常见的提升构建速度的手段有如下：

- 优化 loader 配置
- 合理使用 resolve.extensions
- 优化 resolve.modules
- 优化 resolve.alias
- 使用 DLLPlugin 插件
- 使用 cache-loader
- terser 启动多线程
- 合理使用 sourceMap





### 优化loader配置

在使用`loader`时，可以通过配置`include`、`exclude`、`test`属性来匹配文件，接触`include`、`exclude`规定哪些匹配应用`loader`

如采用 ES6 的项目为例，在配置 `babel-loader `时，可以这样：

```js
module.exports = {
  module: {
    rules: [
      {
        // 如果项目源码中只有 js 文件就不要写成 /\.jsx?$/，提升正则表达式性能
        test: /\.js$/,
        // babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
        use: ['babel-loader?cacheDirectory'],
        // 只对项目根目录下的 src 目录中的文件采用 babel-loader
        include: path.resolve(__dirname, 'src'),
      },
    ]
  },
};
```



### 合理使用 resolve.extensions

在开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库， `resolve`可以帮助`webpack`从每个 `require/import` 语句中，找到需要引入到合适的模块代码

通过`resolve.extensions`是解析到文件时自动添加拓展名，默认情况如下：

```js
module.exports = {
    ...
    extensions:[".warm",".mjs",".js",".json"]
}
```

当我们引入文件的时候，若没有文件后缀名，则会根据数组内的值依次查找

当我们配置的时候，则不要随便把所有后缀都写在里面，这会调用多次文件的查找，这样就会减慢打包速度



### 优化 resolve.modules

`resolve.modules` 用于配置 `webpack` 去哪些目录下寻找第三方模块。默认值为`['node_modules']`，所以默认会从`node_modules`中查找文件
当安装的第三方模块都放在项目根目录下的 `./node_modules `目录下时，所以可以指明存放第三方模块的绝对路径，以减少寻找，配置如下：

```
module.exports = {
  resolve: {
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    // 其中 __dirname 表示当前工作目录，也就是项目根目录
    modules: [path.resolve(__dirname, 'node_modules')]
  },
};
```



### 优化 resolve.alias

`alias`给一些常用的路径起一个别名，特别当我们的项目目录结构比较深的时候，一个文件的路径可能是`./../../`的形式

通过配置`alias`以减少查找过程

```js
module.exports = {
    ...
    resolve:{
        alias:{
            "@":path.resolve(__dirname,'./src')
        }
    }
}
```





### 使用 DLLPlugin 插件

`DLL`全称是 动态链接库，是为软件在winodw种实现共享函数库的一种实现方式，而Webpack也内置了DLL的功能，为的就是可以共享，不经常改变的代码，抽成一个共享的库。这个库在之后的编译过程中，会被引入到其他项目的代码中

使用步骤分成两部分：

- 打包一个 DLL 库
- 引入 DLL 库

#### 打包一个 DLL 库

`webpack`内置了一个`DllPlugin`可以帮助我们打包一个DLL的库文件

```js
module.exports = {
    ...
    plugins:[
        new webpack.DllPlugin({
            name:'dll_[name]',
            path:path.resolve(__dirname,"./dll/[name].mainfest.json")
        })
    ]
}
```



#### 引入 DLL 库

使用 `webpack` 自带的 `DllReferencePlugin` 插件对 `mainfest.json` 映射文件进行分析，获取要使用的`DLL`库

然后再通过`AddAssetHtmlPlugin`插件，将我们打包的`DLL`库引入到`Html`模块中

```js
module.exports = {
    ...
    new webpack.DllReferencePlugin({
        context:path.resolve(__dirname,"./dll/dll_react.js"),
        mainfest:path.resolve(__dirname,"./dll/react.mainfest.json")
    }),
    new AddAssetHtmlPlugin({
        outputPath:"./auto",
        filepath:path.resolve(__dirname,"./dll/dll_react.js")
    })
}
```



### 使用 cache-loader

在一些性能开销较大的 `loader `之前添加 `cache-loader`，以将结果缓存到磁盘里，显著提升二次构建速度

保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 `loader` 使用此` loader`

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.ext$/,
                use: ['cache-loader', ...loaders],
                include: path.resolve('src'),
            },
        ],
    },
};
```



### terser 启动多线程

使用多进程并行运行来提高构建速度

```js
module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};
```



### 合理使用 sourceMap

打包生成  `sourceMap` 的时候，如果信息越详细，打包速度就会越慢。对应属性取值如下所示：

![](https://static.vue-js.com/11647af0-b01d-11eb-85f6-6fac77c0c9b3.png)





### 三、总结

可以看到，优化`webpack`构建的方式有很多，主要可以从优化搜索时间、缩小文件搜索范围、减少不必要的编译等方面入手


## 参考文献

- https://github.com/ly2011/blog/issues/44
- https://xie.infoq.cn/article/541418eb82a674741a0ad8865
- https://zhuanlan.zhihu.com/p/139498741
- https://vue3js.cn/interview

# QUESTION：与webpack类似的工具还有哪些？区别？

![](https://static.vue-js.com/8ed8d520-b1a4-11eb-85f6-6fac77c0c9b3.png)

## 一、模块化工具
模块化是一种处理复杂系统分解为更好的可管理模块的方式

可以用来分割，组织和打包应用。每个模块完成一个特定的子功能，所有的模块按某种方法组装起来，成为一个整体(`bundle`)

在前端领域中，并非只有`webpack`这一款优秀的模块打包工具，还有其他类似的工具，例如`Rollup`、`Parcel`、`snowpack`，以及最近风头无两的`Vite`

通过这些模块打包工具，能够提高我们的开发效率，减少开发成本

这里没有提及`gulp`、`grunt`是因为它们只是定义为构建工具，不能类比

### Rollup

`Rollup` 是一款 `ES Modules` 打包器，从作用上来看，`Rollup` 与 `Webpack` 非常类似。不过相比于 `Webpack`，`Rollup `要小巧的多

现在很多我们熟知的库都都使用它进行打包，比如：`Vue`、`React`和`three.js`等

举个例子：

```js
// ./src/messages.js
export default {
  hi: 'Hey Guys, I am zce~'
}

// ./src/logger.js
export const log = msg => {
  console.log('---------- INFO ----------')
  console.log(msg)
  console.log('--------------------------')
}

export const error = msg => {
  console.error('---------- ERROR ----------')
  console.error(msg)
  console.error('---------------------------')
}

// ./src/index.js
import { log } from './logger'
import messages from './messages'
log(messages.hi)
```

然后通过`rollup`进行打包

```js
$ npx rollup ./src/index.js --file ./dist/bundle.js
```

打包结果如下图![](https://static.vue-js.com/8fe07830-b143-11eb-85f6-6fac77c0c9b3.png)

可以看到，代码非常简洁，完成不像`webpack`那样存在大量引导代码和模块函数

并且`error`方法由于没有被使用，输出的结果中并无`error`方法，可以看到，`rollup`默认开始`Tree-shaking` 优化输出结果

因此，可以看到`Rollup`的优点：

- 代码效率更简洁、效率更高
- 默认支持 Tree-shaking

但缺点也十分明显，加载其他类型的资源文件或者支持导入 `CommonJS` 模块，又或是编译 `ES` 新特性，这些额外的需求 `Rollup `需要使用插件去完成

综合来看，`rollup`并不适合开发应用使用，因为需要使用第三方模块，而目前第三方模块大多数使用`CommonJs`方式导出成员，并且`rollup`不支持`HMR`，使开发效率降低

但是在用于打包` JavaScript` 库时，`rollup`比 `webpack` 更有优势，因为其打包出来的代码更小、更快，其存在的缺点可以忽略





### Parcel

Parcel ，是一款完全零配置的前端打包器，它提供了 “傻瓜式” 的使用体验，只需了解简单的命令，就能构建前端应用程序

`Parcel` 跟 `Webpack` 一样都支持以任意类型文件作为打包入口，但建议使用`HTML`文件作为入口，该`HTML`文件像平时一样正常编写代码、引用资源。如下所示：

```js
<!-- ./src/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Parcel Tutorials</title>
</head>
<body>
  <script src="main.js"></script>
</body>
</html>
```

main.js文件通过`ES Moudle`方法导入其他模块成员

```js
// ./src/main.js
import { log } from './logger'
log('hello parcel')
// ./src/logger.js
export const log = msg => {
  console.log('---------- INFO ----------')
  console.log(msg)
}
```

运行之后，使用命令打包

```cmd
npx parcel src/index.html
```

执行命令后，`Parcel`不仅打包了应用，同时也启动了一个开发服务器，跟`webpack Dev Server`一样

跟`webpack`类似，也支持模块热替换，但用法更简单

同时，`Parcel`有个十分好用的功能：支持自动安装依赖，像`webpack`开发阶段突然使用安装某个第三方依赖，必然会终止`dev server`然后安装再启动。而`Parcel`则免了这繁琐的工作流程

同时，`Parcel`能够零配置加载其他类型的资源文件，无须像`webpack`那样配置对应的`loader`

打包命令如下：

```cmd
npx parcel src/index.html
```

由于打包过程是多进程同时工作，构建速度会比`Webpack` 快，输出文件也会被压缩，并且样式代码也会被单独提取到单个文件中

![](https://static.vue-js.com/ec17e7a0-b1a2-11eb-85f6-6fac77c0c9b3.png)

可以感受到，`Parcel `给开发者一种很大的自由度，只管去实现业务代码，其他事情用`Parcel`解决



### Snowpack

Snowpack，是一种闪电般快速的前端构建工具，专为现代`Web`设计，较复杂的打包工具（如`Webpack`或`Parcel`）的替代方案，利用`JavaScript`的本机模块系统，避免不必要的工作并保持流畅的开发体验

开发阶段，每次保存单个文件时，`Webpack`和`Parcel`都需要重新构建和重新打包应用程序的整个`bundle`。而`Snowpack`为你的应用程序每个文件构建一次，就可以永久缓存，文件更改时，`Snowpack`会重新构建该单个文件

下图给出`webpack`与`snowpack`打包区别：

 ![](https://static.vue-js.com/79197830-b1a3-11eb-85f6-6fac77c0c9b3.png)

在重新构建每次变更时没有任何的时间浪费，只需要在浏览器中进行HMR更新

### Vite

vite ，是一种新型前端构建工具，能够显著提升前端开发体验

它主要由两部分组成：

- 一个开发服务器，它基于 原生 ES 模块 提供了丰富的内建功能，如速度快到惊人的 [模块热更新HMR
- 一套构建指令，它使用 Rollup打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源

其作用类似`webpack `+ `webpack-dev-server`，其特点如下：

- 快速的冷启动
- 即时的模块热更新
- 真正的按需编译

`vite`会直接启动开发服务器，不需要进行打包操作，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快

利用现代浏览器支持`ES Module`的特性，当浏览器请求某个模块的时候，再根据需要对模块的内容进行编译，这种方式大大缩短了编译时间

原理图如下所示：

 ![](https://static.vue-js.com/9f2eed30-b143-11eb-85f6-6fac77c0c9b3.png)

在热模块`HMR`方面，当修改一个模块的时候，仅需让浏览器重新请求该模块即可，无须像`webpack`那样需要把该模块的相关依赖模块全部编译一次，效率更高



### webpack

相比上述的模块化工具，`webpack`大而全，很多常用的功能做到开箱即用。有两大最核心的特点：**一切皆模块**和**按需加载**

与其他构建工具相比，有如下优势：

- 智能解析：对 CommonJS 、 AMD 、ES6 的语法做了兼容
- 万物模块：对 js、css、图片等资源文件都支持打包
- 开箱即用：HRM、Tree-shaking等功能
- 代码分割：可以将代码切割成不同的 chunk，实现按需加载，降低了初始化时间
- 插件系统，具有强大的 Plugin 接口，具有更好的灵活性和扩展性
- 易于调试：支持 SourceUrls 和 SourceMaps
- 快速运行：webpack 使用异步 IO 并具有多级缓存，这使得 webpack 很快且在增量编译上更加快
- 生态环境好：社区更丰富，出现的问题更容易解决



## 参考文献

- https://zhuanlan.zhihu.com/p/95684686
- https://cn.vitejs.dev/guide/
- https://segmentfault.com/a/1190000039370642