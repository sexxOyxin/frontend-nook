跨域其实是浏览器的行为，服务请求成功发送了数据也成功返回了，但是因为浏览器的安全策略所以拿不到信息。

#### 01 js 35

##### 1 数据类型

1.基本类型 `6种`
**u are so nb**
Undefined 【类型只有一个值，就是undefined，其他类型的解释也同理也同理】
String 【字符串不可变：字符串值创建后就不会被改变 str[0]='w' 这种不生效 let a = '1' a = a + 'wwww' 这种是变量赋值生成了新的字符串 a字符串值内容从来没有被修改 **作为a字符串的内容永远不会修改了，只是作为变量的a是可以被重新赋值的**】
Symbol 【唯一标识符、对象私有属性， forin jsonstringify objectkeys 都不会遍历，但是作为数组foreach会遍历到 symbol可以加一些额外的属性的 迭代器之类的 】
Null 【表示一个空对象指针】
Number 【特殊值 NaN 不是数值 本来要返回的数值操作失败 而不是抛出错误】
Boolean 布尔值

2.引用类型 - 统称为object `多种`
Object
Array
Function
Date
RegExp
Map
Set

3.存储上的区别
基础类型存在栈中，引用类型存在堆中。
const obj1 = {};
const obj2 = obj1;
obj2.name = 'obj2';
// 这时候obj1也被修改了。堆内存对象在栈内存的引用地址被赋值给了obj2，所以1和2指向的是同一个堆内存。

##### 2数据结构
数组
栈-后进先出-像水杯一样
队列-先进先出-排队/管道
链表-当数组实际使用慢可以考虑链表
字典-键值对-类似object
散列表-哈希表-位置和对象一一对应

##### 3数组常用方法
不会影响原数组的加粗
增 push unshift splice **concat**
删 pop shift splice **slice**
改 splice
查 indexOf includes find
排 sort reverse
转换 join
迭代遍历 some every forEach filter map
**o**
splice 三个参数，开始位置，删除数量，插入的元素
slice 创建一个包含原有数组中一个或多个元素的新数组 [从几开始，开区间结束)
影响原变量的都是返回新数组长度、删除的元素，不影响的都是返回修改后的新数组

##### 4字符串常用方法
字符串创建后就不会被修改
增 concat + ${}
删 slice substr-从几开始,个数 substring
改 trim trimLeft trimRight repeat padStart padEnd toLowerCase toUpperCase
查 indexOf charAt startWith includes
转换 split
正则模板匹配 search replace match

##### 5类型转换机制
显示/强制转换 Number() String() parseInt(不管四舍五入的) Boolean()
隐式/自动转换 比较、算术运算、需要布尔值的条件处

##### 6 等于和全等
NaN==NaN //false
Object.is(NaN,NaN) // 这样可以判断为true的
需要注意一点，后续判断null或undefined的时候如下：
```js
if(a == null)
   ||
if(a === null || a === undefined)
```

##### 7 深浅拷贝
[text](question/01-深浅拷贝.html)
**浅拷贝**：因为数据类型分基本类型和引用类型，并且两者的存放方式不同，所以浅拷贝指的是拷贝了基本类型的值和引用类型的内存地址。浅拷贝是一层。

**深拷贝**：主要是针对带有引用类型的对象，深拷贝会开辟一个新的栈，两个对象属性完全相同，但是对应的内存地址不同。

代码例子在[text](question/01-深浅拷贝.html)

##### 8闭包
闭包 - 可以在内层函数中访问外层函数的作用域
- 创建私有变量
- 延长生命周期
```js
const init = () => {
   const name = 'outside';
   const init2 = () => {
      console.log(name); // 可以访问到外部函数的变量
   };
   init2();
};
init();
```

函数柯里化 - 避免调用有相同参数的函数 + 更好的复用
eg1.计算长方形面积，但是可能会遇到一边固定为某一个长度的情况
```js
const area = (width, height) => {
   return width * height;
};
area(10*1)
area(10*6)
area(10*5)
...
const curryArea = (width) => {
   return height => width * height;
};
const widthTen = curryArea(10);
widthTen(1)
widthTen(6)
widthTen(5)
```
eg2. 两个计数器互不影响，用闭包来定义公共的函数
```js
const makeCounter = () => {
   let count = 0;
   return {
      value: () => count,
      increment: () => count += 1,
      decrement: () => count -= 1,
   }
};
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1.value()); // 0
counter1.increment();
counter2.increment();
counter2.increment();
console.log(counter2.value()); // 2
```
eg3.在创建新的对象或者类的时候，方法关联到对象的原型上
```js
function MyObject() {
     this.name = name.toString();
  this.getName = function() {
    return this.name;
  }; // false
}
MyObject.prototype.getName = function() {
  return this.name;
}; // true
```

##### 9作用域链
全局作用域
函数作用域
块级作用域 - 大括号中的,for,if...

作用域链 - 先在当前使用该变量的作用域中寻找，找不到再到当前的上层作用域寻找，以此类推，直到找到该变量或者是到全局作用域。

##### 10原型链
原型是一个对象，可以为其他对象提供共享的属性和方法
当访问一个对象的属性时，它不仅在该对象上面搜索，还会搜索该对象的原型，以及原型的原型，依次向上搜索，直到找到匹配的属性或到达原型链的末尾，找不到返回undefined。
构造函数不能用箭头函数定义。

```js
对象.__proto__  // 通过对象获取隐式原型
对象的构造函数.__proto__  // 函数呀所以指向Function.prototype
对象的构造函数.prototype  // 通过对象的构造函数获取显示原型
对象.prototype  // undefined
对象.hasOwnProperty  // 判断属性是否属于对象本身
对象.constructor === 对象.__proto__.constructor?
对象的构造函数.constructor
对象 instanceof 构造函数  -  检查对象是不是后者构造函数的实例。第二个操作数是对象自己的构造函数成立； 第二个操作数是对象原型链上的某个对象的构造函数也成立

// 构造函数是对象的描述 对象是构造函数的实例
person1.__proto__ === Person.prototype
Person.__proto__ === Function.prototype
Person.prototype.__proto__ === Object.prototype
```

```js
const example = {};
example.prop = "exists";

// `hasOwnProperty` 仅对直接属性返回 true：
example.hasOwnProperty("prop"); // 返回 true
example.hasOwnProperty("toString"); // 返回 false

// 对于直接或继承的属性，`in` 运算符将返回 true：
"prop" in example; // 返回 true
"hasOwnProperty" in example; // 返回 true
```

##### 11继承 - 。。。
[text](question/01-继承.md)
继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码

- 原型链继承
- 构造函数继承（借助 call）
- 组合继承
- 原型式继承
- 寄生式继承
- 寄生组合式继承

##### 12this
是系统内置的只读变量
浏览器： 全局对象是 window，普通函数中的 this 默认指向 window，在事件处理程序中 this 指向触发事件的 DOM 元素。
Node.js： 全局对象是 global，而模块内部的 this 指向 module.exports，而不是 global。
严格模式： 在严格模式下，this 在函数内部为 undefined，无论是浏览器还是 Node.js。
ES6 模块： 在模块文件中，this 不会指向 module.exports，而是 undefined。
箭头函数： 箭头函数中的 this 继承自外部作用域的 this，无论在浏览器还是 Node.js 中。

###### function
function谁调用谁是this，this在执行过程中被确定了就不能改
this是在函数运行的时候产生的

绑定规则：
1、默认绑定 - 默认绑定是window，严格模式下this绑定到undefined
2、隐式绑定 - 作为某个对象的方法调用，不用管赋值是什么时候，只看调用，o.b.fn()，只看b，那没有的话this就是undefined
3、new绑定 - 通过new构建的实例，this指向这个实例对象；吐过遇到return则返回return的
```js
function Test () {
   this.x = 1;
}
const obj = new Test();
obj.x; // 1

function Test2 () {
   this.x = 1;
   return{} // 如果返回的是基本类型[null也算]，this还是指向实例对象的
}
const obj2 = new Test2();
obj2.x; // undefined，this指向了{}
```
4、显示绑定 - apply,call,bind

new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级
```js

function foo(something) {
    this.a = something;
}
var obj1 = {};
var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2

var baz = new bar( 3 ); // 这里new把this绑定给了baz实例，所以3只在baz上
console.log( obj1.a ); // 2
console.log( baz.a ); // 3
```

###### 箭头函数
箭头函数没有this
箭头函数的this永远是参照定义时候的上下文绑定this的
箭头函数适合在异步中使用，因为this永远跟着上下文，而不是调用的对象
```js
function Person(name) {
  this.name = name;
  // 普通函数：this会被调用时的上下文绑定
  this.greet = function() {
    console.log("Hello, " + this.name);
  };
  // 箭头函数：this会被定义时的上下文绑定
  this.sayName = () => {
    console.log("My name is " + this.name);
  };
}

const person = new Person("Alice");
// 使用普通函数
const greet = person.greet; // person.greet.bind(person)
greet();  // 输出：Hello, undefined
// 使用箭头函数
const sayName = person.sayName;
sayName();  // 输出：My name is Alice
```

##### 13执行上下文 & 执行栈 ??
js运行一定是运行在**执行上下文中**

全局执行上下文 - 只有一个，浏览器中是window
函数执行上下文 - 无数个，函数调用才会创建[并创建私有作用域，内部声明的变量外部访问不到]
Eval执行上下文 - 运行在eval函数中的代码？

生命周期：创建-执行-回收






##### 14事件模型
[text](question/01-事件流.html)
事件：html或浏览器中发生的教具操作 - 加载、点击事件
由于`DOM`是一个树结构，如果在父子节点绑定事件时候，当触发子节点的时候，就存在一个顺序问题，这就涉及到了事件流的概念

事件流三阶段：事件捕获[最不具体的节点先接受事件] - 处于目标阶段 - 事件冒泡阶段[从下往上的传播方式]

事件模型：
- 原始事件模型（DOM0级） - html中直接绑定或js绑定
   绑定速度快
   `DOM0`级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定速度太快，可能页面还未完全加载出来，以至于事件可能无法正常运行
   只支持冒泡，不支持捕获
   同一个类型的事件只能绑定一次，后面的事件会覆盖前面的
   删除dom0事件只需要给事件属性赋值为null
- 标准事件模型（DOM2级）
   过程：捕获[从document向下传播，看是否有监听函数addEventListener/移除removeEventListener，执行机制通过第三个传参来判断true就是在捕获过程中执行，反之冒泡] - 处理 - 冒泡[冒泡到document]

addEventListener监听的是dom事件，MutationObserver监听的是dom树。

##### 15typeof & instance of
typeof中需要注意的
typeof null 是 'object'
typeof 引用类型 只能分出来 object 和 function
△判断变量是否存在不要if(a)了，用typeof a !== 'undefined'，这样哪怕a不存在也不会报错

instance of
对象 instanceof 构造函数  -  检查对象是不是后者构造函数的实例。第二个操作数是对象自己的构造函数成立； 第二个操作数是对象原型链上的某个对象的构造函数也成立

区别：
返回值
instance不能判断基本数据类型
typeof不能判断一些其他的类型
Object.prototype.toString.call来判断类型吧

##### 16事件委托
事件委托在冒泡阶段
1、如果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件，如果给每个列表项一一都绑定一个函数，那对于内存消耗是非常大的，把点击事件绑定在父级元素`ul`上面，然后执行事件的时候再去匹配目标元素
2、用户能够随时动态的增加或者去除列表项元素，那么在每一次改变的时候都需要重新给新增的元素绑定事件，给即将删去的元素解绑事件

##### 17new
##### 18ajax
##### 19bind,call,apply
##### 20正则表达式
##### 21事件循环-线程
##### 22dom操作
##### 23bom理解
##### 24递归
##### 25内存泄漏
##### 26本地存储
##### 27函数式编程
##### 28函数缓存
##### 29精度丢失 0.1+0.2
##### 30防抖节流
##### 31可视区域
判断目标元素是不是在可视窗口之内。
**常用**：
- 图片懒加载
- 列表无限滚动
- 计算广告元素的曝光
- 可点击链接的预加载
**方法**：
- offsetTop、scrollTop
```js
el.offsetTop - document.documentElement.scrollTop <= viewPortHeight

function isInViewPortOfOne (el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop
    const top = offsetTop - scrollTop
    return top <= viewPortHeight
}
```
- getBoundingClientRect
el.getBoundingClientRect()，top、left大于等于0，bottom、right小于等于视窗高度
```js
function isInViewPort(element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const {
    top,
    right,
    bottom,
    left,
  } = element.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  );
}
```

- Intersection Observer
重叠观察者

**补充**
offsetTop：元素到offsetParent顶部的距离（当前元素顶部距离最近父元素顶部的距离）
offsetParent：距离元素最近的一个具有定位的祖宗元素（relative，absolute，fixed），若祖宗都不符合条件，offsetParent为body。
offsetLeft: 同上
offsetWidth = width + 左右padding + 左右boder
offsetHeight = height + 上下padding + 上下boder

clientWidth = width+左右padding
clientHeigh = height + 上下padding
clientTop = boder.top(上边框的宽度)
clientLeft = boder.left(左边框的宽度)

![图片示例](https://i-blog.csdnimg.cn/blog_migrate/4d727d5ec48871c2ba648db927dbd5d6.jpeg)

##### 32大文件上传
分片上传：按照分割规则，用file.slice将文件分割成大小相同的数据块；分片上传时返回上传的唯一标识按照串行或者并行发送各个数据块，如果失败了用断点续传只需要上传失败的部分；发送完后由服务器端判断数据是否完整并整合。
断点续传
[案例](question/01-大文件分片上传.html)

##### 33上拉加载下拉刷新
有一些现成的第三方库：iscroll、better-scroll
1、上拉加载 - 页面触底或快要触底时候的操作
`document.documentElement.clientHeight`
scrollTop-页面距离window的距离、clientHeight、scrollHeight 来解决这个问题
触底公式scrollTop+clientHeight>=scrollHeight
2、下拉刷新 - 页面在顶部时候的操作
用touchstart、touchmove、touchend事件解决
监听事件记录初始值 -》 监听移动事件记录滑动差值 -》 监听离开的事件
阶段：当滑动位置与初始位置的差值大于0时，提示下拉刷新操作，下拉到一定距离时，提示释放刷新，松手后提示正在进行更新

##### 34单点登录
Single Sign On 在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。
1、同域名下
2、不同域名
用户访问系统1，发现未登录，跳转至sso认证中心，并将自己的地址作为参数
认证中心发现用户未登录，引导用户到登录页面填写申请
认证中心校验用户信息，创建用户和sso认证中心的全局会话，同时创建令牌
认证中心带着令牌跳转回系统1
系统1拿到令牌校验去认证中心校验是否有效
有效，注册系统1，系统1使用该令牌和用户创建的对话为局部对话
用户要访问系统2
系统2发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数
sso认证中心发现用户已登录，跳转回系统2的地址，并附上令牌
系统2拿到令牌，去sso认证中心校验令牌是否有效
sso认证中心校验令牌，返回有效，注册系统2

##### 35web攻击
- SQL注入攻击
   攻击者通过在Web应用的输入字段（如表单、URL参数）中插入恶意SQL代码，来操作数据库。它可以让攻击者访问、修改、删除数据库中的数据，甚至完全控制数据库服务器
- XSS (Cross Site Scripting) 跨站脚本攻击
   定义：攻击者将恶意代码植入到提供给其它用户使用的页面中
   攻击者提交恶意代码[前端过滤用户输入] & 浏览器执行恶意代码[服务器端对输入进行处理]
   涉及方：攻击者、web应用、客户端
   目的：盗取存储在客户端的cookie或用于识别客户身份的敏感信息，在某些地方写script等html可以识别的代码
   类型：
      1 存储 - 恶意代码在数据库里，用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等
      2 反射 - 恶意代码在url中
      3 dom - 属于js自身的安全泄露，是浏览器完成的，前两种都属于服务端的
   预防：
- CSRF（Cross-site request forgery）跨站请求伪造
   定义：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求
   一般在第三方网站发生，冒用受害者的信息而不是直接窃取数据，方式可有超链接、图片url、cros、form提交等
   预防：
      通过增强自身网站针对csrf的防护能力，常用的防护方案
      阻止不明的外域访问：同源检测、Samesite Cookie
      提交时要求附加本域才能获取的信息：CSRF Token、双重Cookie验证
- DoS/DDoS（Denial of Service / Distributed Denial of Service）服务拒绝攻击
   通过大量的请求或者特定的请求方式让目标Web服务器或网络资源无法正常服务。DDoS是DoS的变种，通过分布式攻击源发起攻击，更难以防范。






















#### 02 es6 + http
#### 03 nodejs + webpack
#### 04 react
#### 05 ts + css
#### 06 git + system + design
#### 07 vue + vue3
#### 08 suanfa + xiaochengxu
#### 08 algorithm + mini program