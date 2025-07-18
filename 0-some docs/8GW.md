# JavaScript

## \1. Promise 的理解

Promise 是一种为了避免回调地狱的异步解决方案 2. Promise 是一种状态机： pending（进行中）、fulfilled（已成功）和rejected（已失败） 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

### 回调地狱

回调函数中嵌套回调函数的情况就叫做回调地狱。
回调地狱就是为是实现代码顺序执行而出现的一种操作，它会造成我们的代码可读性非常差，后期不好维护。

### 一、Promise是什么？

Promise是最早由社区提出和实现的一种解决异步编程的方案，比其他传统的解决方案（回调函数和事件）更合理和更强大。

ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。
ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。

### 二、Promise是为解决什么问题而产生的？

promise是为解决异步处理回调金字塔问题而产生的

### 三、Promise的两个特点

1、Promise对象的状态不受外界影响

1）pending 初始状态

2）fulfilled 成功状态

3）rejected 失败状态

Promise 有以上三种状态，只有异步操作的结果可以决定当前是哪一种状态，其他任何操作都无法改变这个状态

2、Promise的状态一旦改变，就不会再变，任何时候都可以得到这个结果，状态不可以逆，只能由 pending变成fulfilled或者由pending变成rejected

### 四、Promise的三个缺点

1）无法取消Promise,一旦新建它就会立即执行，无法中途取消
2）如果不设置回调函数，Promise内部抛出的错误，不会反映到外部
3）当处于pending状态时，无法得知目前进展到哪一个阶段，是刚刚开始还是即将完成

五、Promise在哪存放成功回调序列和失败回调序列？
1）onResolvedCallbacks 成功后要执行的回调序列 是一个数组

2）onRejectedCallbacks 失败后要执行的回调序列 是一个数组

以上两个数组存放在Promise 创建实例时给Promise这个类传的函数中，默认都是空数组。
每次实例then的时候 传入 onFulfilled 成功回调 onRejected 失败回调，如果此时的状态是pending 则将onFulfilled和onRejected push到对应的成功回调序列数组和失败回调序列数组中，如果此时的状态是fulfilled 则onFulfilled立即执行，如果此时的状态是rejected则onRejected立即执行

上述序列中的回调函数执行的时候 是有顺序的，即按照顺序依次执行

## \2. 箭头函数和普通函数的区别

箭头函数与普通函数的区别在于： 1、箭头函数没有this，所以需要通过查找作用域链来确定this的值，这就意味着如果箭头函数被非箭头函数包含，this绑定的就是最近一层非箭头函数的this， 2、箭头函数没有自己的arguments对象，但是可以访问外围函数的arguments对象 3、不能通过new关键字调用，同样也没有new.target值和原型

1、语法更加简洁、清晰
2、箭头函数不会创建自己的this，它只会从自己的作用域链的上一层继承this。
3、箭头函数继承而来的this指向永远不变
4、.call()/.apply()/.bind()无法改变箭头函数中this的指向
5、箭头函数不能作为构造函数使用
6、箭头函数没有自己的arguments，可以在箭头函数中使用rest参数代替arguments对象，来访问箭头函数的参数列表
7、箭头函数没有原型prototype
8、箭头函数不能用作Generator函数，不能使用yeild关键字
9、箭头函数不具有super，不具有new.target

## \3. ES6新特性

1、let（ let 允许创建块级作用域（最靠近的一个花括号内有效），不具备变量提升，不允许重复声明： ）、const（ const 允许创建块级作用域（最靠近的一个花括号内有效）、变量声明不提升、const 在声明时必须被赋值、声明时大写变量（默认规则）： ）、block作用域

2、箭头函数 ES6 中，箭头函数就是函数的一种简写形式，使用括号包裹参数，跟随一个 =>，紧接着是函数体：

3、函数默认参数值

ES6 中允许你对函数参数设置默认值：

4、对象超类

ES6 允许在对象中使用 super 方法：

5、Map VS WeakMap

ES6 中两种新的数据结构集：Map 和 WeakMap。事实上每个对象都可以看作是一个 Map。

一个对象由多个 key-val 对构成，在 Map 中，任何类型都可以作为对象的 key，如：

6、类

ES6 中有 class 语法。值得注意是，这里的 class 不是新的对象继承模型，它只是原型链的语法糖表现形式。

函数中使用 static 关键词定义构造函数的的方法和属性：

## \4. Var let const 的区别

共同点：都能声明变量

不同点：var 在ECMAScript 的所有版本中都可以使用，而const和let只能在ECMAScript6【ES2015】及更晚中使用

![image-20240221110919736](C:\Users\yaxin\AppData\Roaming\Typora\typora-user-images\image-20240221110919736.png)


**var**

ECMAScript6 增加了let 和 const 之后要尽可能少使用var。因为let 和 const 申明的变量有了更加明确的作用域、声明位置以及不变的值。
优先使用const来声明变量，只在提前知道未来会修改时，再使用let。
**let**

因为let作用域为块作用域！！！！【得要时刻记住这一点】
不能进行条件式声明
for循环使用let来声明迭代变量不会导致迭代变量外渗透。
**const**

声明时得直接初始化变量，且不能修改const声明的变量的值
该限制只适用于它指向的变量的引用，如果它一个对象的，则可以修改这个对象的内部的属性。

## \5. 实现继承的几种方式

原型链继承

父类的实例作为子类的原型

```JS
function Woman(){ 
}
Woman.prototype= new People();
Woman.prototype.name = 'haixia';
let womanObj = new Woman();
```

优点：

简单易于实现，父类的新增的实例与属性子类都能访问

缺点：

可以在子类中增加实例属性，如果要新增加原型属性和方法需要在new 父类构造函数的后面

无法实现多继承

创建子类实例时，不能向父类构造函数中传参数

借用构造函数继承（伪造对象、经典继承）

复制父类的实例属性给子类

```js
function Woman(name){
 //继承了People
  People.call(this); //People.call(this，'wangxiaoxia'); 
  this.name = name || 'renbo'
}
let womanObj = new Woman();
```

优点：

解决了子类构造函数向父类构造函数中传递参数

可以实现多继承（call或者apply多个父类）

缺点：

方法都在构造函数中定义，无法复用

不能继承原型属性/方法，只能继承父类的实例属性和方法

实例继承（原型式继承）

```js
function Wonman(name){
  let instance = new People();
  instance.name = name || 'wangxiaoxia';
  return instance;
}
let wonmanObj = new Wonman();
```

优点：

不限制调用方式

简单，易实现

缺点：不能多次继承

## \6. Null 和 undefined 的区别

undefined和null的区别：. ● undefined 表示一个变量没有被声明，或者被声明了但没有被赋值（未初始化），一个没有传入实参的形参变量的值为undefined，如果一个函数什么都不返回，则该函数默认返回undefined。. null 则表示"什么都没有"，即"空值"。. ●　Javascript将未赋值的变量默认值设为 undefined ；Javascript从来不会将变量设为 null 。. 它是用来让程序员表明某个用var声明的变量时没有值的；

## \7. Call bind apply的区别

**apply方法**
apply接受两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入，且当第一个参数为null、undefined的时候，默认指向window(在浏览器中)，使用apply方法改变this指向后原函数会立即执行，且此方法只是临时改变this指向一次。

**call方法**
call方法的第一个参数也是this的指向，后面传入的是一个参数列表（注意和apply传参的区别）。当一个参数为null或undefined的时候，表示指向window（在浏览器中），和apply一样，call也只是临时改变一次this指向，并立即执行。

**bind方法**
bind方法和call很相似，第一参数也是this的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入，call则必须一次性传入所有参数)，但是它改变this指向后不会立即执行，而是返回一个永久改变this指向的函数。

## \8. 前端缓存的理解 或者 前端数据持久化的理解

前端缓存分为HTTP缓存和浏览器缓存
其中HTTP缓存是在HTTP请求传输时用到的缓存，主要在服务器代码上设置；而浏览器缓存则主要由前端开发在前端js上进行设置。

缓存可以说是性能优化中简单高效的一种优化方式了。一个优秀的缓存策略可以缩短网页请求资源的距离，减少延迟，并且由于缓存文件可以重复利用，还可以减少带宽，降低网络负荷。

 对于一个数据请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤。浏览器缓存可以帮助我们在第一和第三步骤中优化性能。比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据。

强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程，强制缓存的情况主要有三种，如下：
①不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求

②存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存

③存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果

协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程
①协商缓存生效，返回304

②协商缓存失效，返回200和请求结果

## \9. 防抖和节流

**防抖（debounce）**
所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

**节流（throttle）**
**所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。**节流会稀释函数的执行频率。

对于节流，一般有两种方式可以实现，分别是时间戳版和定时器版

## \10. 闭包

### 1、变量作用域

要理解闭包，首先要理解 JavasSript 的特殊的变量作用域。

变量的作用域无非就两种：全局变量和局部变量。

JavasSript 语言的特别之处就在于：函数内部可以直接读取全局变量，但是在函数外部无法读取函数内部的局部变量。

**注意点：**在函数内部声明变量的时候，一定要使用 var 命令。如果不用的话，你实际上声明的是一个全局变量！

### 2、如何从外部读取函数内部的局部变量？

出于种种原因，我们有时候需要获取到函数内部的局部变量。但是，上面已经说过了，正常情况下，这是办不到的！只有通过变通的方法才能实现。

那就是在函数内部，再定义一个函数。

```js
function f1(){
    var n=999;
    function f2(){
        alert(n); // 999
    }
}
```

在上面的代码中，函数 f2 就被包括在函数 f1 内部，这时 f1 内部的所有局部变量，对 f2 都是可见的。但是反过来就不行，f2 内部的局部变量，对 f1 就是不可见的。

这就是 JavasSript 语言特有的"链式作用域"结构（chain scope），

子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

既然 f2 可以读取 f1 中的局部变量，那么只要把 f2 作为返回值，我们不就可以在 f1 外部读取它的内部变量了吗！

### 3、闭包的概念

上面代码中的 f2 函数，就是闭包。

各种专业文献的闭包定义都非常抽象，我的理解是: 闭包就是能够读取其他函数内部变量的函数。

由于在 JavaScript 中，只有函数内部的子函数才能读取局部变量，所以说，闭包可以简单理解成"定义在一个函数内部的函数"。

所以，在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

### 4、闭包的用途

闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中，不会在 f1 调用后被自动清除。

为什么会这样呢？原因就在于 f1 是 f2 的父函数，而 f2 被赋给了一个全局变量，这导致 f2 始终在内存中，而 f2 的存在依赖于 f1，因此 f1 也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。

这段代码中另一个值得注意的地方，就是 “nAdd=function(){n+=1}” 这一行，首先在 nAdd 前面没有使用 var 关键字，因此 nAdd 是一个全局变量，而不是局部变量。其次，nAdd 的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，所以 nAdd 相当于是一个 setter，可以在函数外部对函数内部的局部变量进行操作。

### 5、使用闭包的注意点

（1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
（2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值

## \11. 数组去重

### 一、利用ES6 Set去重（ES6中最常用）

```js
function unique (arr) {
  return Array.from(new Set(arr))
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。
```

### 二、利用for嵌套for，然后splice去重（ES5中最常用）

```js
function unique(arr){            
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        }
return arr;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
    //[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```

双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。

### 三、利用indexOf去重

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
   // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```

新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。

### 四、利用sort()

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
     var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```

利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。

### 六、利用includes

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重
```

### 七、利用hasOwnProperty

```js
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   //所有的都去重了
利用hasOwnProperty 判断是否存在对象属性
```

### 八、利用filter

```js
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
```

### 九、利用递归去重

```js
function unique(arr) {
        var array= arr;
        var len = array.length;

array.sort(function(a,b){   //排序后更加方便去重
    return a - b;
})

function loop(index){
    if(index >= 1){
        if(array[index] === array[index-1]){
            array.splice(index,1);
        }
        loop(index - 1);    //递归loop，然后数组去重
    }
}
loop(len-1);
return array;

}
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```

### 十、利用Map数据结构去重

```js
function arrayNonRepeatfy(arr) {
  let map = new Map();
  let array = new Array();  // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if(map .has(arr[i])) {  // 如果有该key值
      map .set(arr[i], true); 
    } else { 
      map .set(arr[i], false);   // 如果没有该key值
      array .push(arr[i]);
    }
  } 
  return array ;
}
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果
```

## \12. 深浅拷贝

深拷贝和浅拷贝是只针对Object和Array这样的引用数据类型的。

深拷贝和浅拷贝的示意图大致如下：

![img](https://img-blog.csdnimg.cn/img_convert/6e13a5cbeab9aaf0a19bcbf88d9b2cde.png)

浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

![img](https://img-blog.csdnimg.cn/img_convert/99be079f8d87b2765e3148ac4bda302b.png)

## \13. 原型链

那什么是原型链呢？

简单理解就是原型组成的链，对象的__proto__它的是原型，而原型也是一个对象，也有__proto__属性，原型的__proto__又是原型的原型，就这样可以一直通过__proto__想上找，这就是原型链，当向上找找到Object的原型的时候，这条原型链就算到头了。

原型对象和实例之间有什么作用呢？

通过一个构造函数创建出来的多个实例，如果都要添加一个方法，给每个实例去添加并不是一个明智的选择。这时就该用上原型了。

在实例的原型上添加一个方法，这个原型的所有实例便都有了这个方法。

prototype:

prototype属性，它是函数所独有的，它是从一个函数指向一个对象。它的含义是函数的原型对象，也就是这个函数（其实所有函数都可以作为构造函数）所创建的实例的原型对象; 这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）;

proto:

proto 是原型链查询中实际用到的，它总是指向 prototype，换句话说就是指向构造函数的原型对象，它是**对象独有的。**注意，为什么Foo构造也有这个属性呢，因为再js的宇宙里万物皆对象，包括函数

constructor：

我们看到途中最中间灰色模块有一个constructor属性，这个又是做什么用的呢？**
**

每个函数都有一个原型对象，该原型对象有一个constructor属性，指向创建对象的函数本身。

此外，我们还可以使用constructor属性，所有的实例对象都可以访问constructor属性，constructor属性是创建实例对象的函数的引用。我们可以使用constructor属性验证实例的原型类型（与操作符instanceof非常类似）。

## \14. Require 和 import

require和import的区别
1.import在代码编译时被加载，所以必须放在文件开头，require在代码运行时被加载，所以require理论上可以运用在代码的任何地方，所以import性能更好。

2.import引入的对象被修改时，源对象也会被修改，相当于浅拷贝，require引入的对象被修改时，源对象不会被修改，官网称值拷贝，我们可以理解为深拷贝。



3.import有利于tree-shaking（移除JavaScript上下文中未引用的代码），require对tree-shaking不友好。 4.import会触发代码分割（把代码分离到不同的bundle中，然后可以按需加载或者并行加载这些文件），require不会触发。



5.import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法，require 是 AMD规范引入方式。

目前所有的引擎都还没有实现import，import最终都会被转码为require，在webpack打包中，import和require都会变为_webpack_require_。

# CSS

## \1. 常见的块级元素和行内块元素，以及它们有何不同

块级元素和内联元素的区别：
1.块级元素，宽度默认是它容器的100%,各占据一行，垂直方向排列；内联元素，都是同一行，水平方向排列；
2.块级元素，能容纳其他块元素或者内联元素；内联元素，只能容纳文本或其他内联元素；
3.块级元素中height，line-height以及margin和padding都可以控制；行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效
2.行内元素和块级元素有哪些
常见的内联元素：
a - 锚点
select - 项目选择
span - 常用内联容器，定义文本内区块
strong - 粗体强调
img - 图片
input - 输入框
label - 表格标签
textarea - 多行文本输入框
br - 换行

常见的块级元素
div
ul ,li 非排序列表
form - 交互表单
table - 表格
h1 -h6 标题
hr - 水平分隔线
p - 段落
dl -dt-dd - 定义列表
address - 地址
blockquote - 块引用
fieldset - form控制组

## \2. 常见选择器

标签选择器
HTML标签名称作为选择器

```html
//语法
标签名 {
	属性1:属性值1;
	属性2:属性值2;
	属性3:属性值3;
	...
}
```

类选择器

```html
//语法
.类名 {
	属性1.属性值1;
	属性2.属性值2;
	属性3.属性值3;
	...
}
```

id选择器

```html
#id名 {
	属性1:属性值1;
	...
}
```

口诀：样式#定义，结构id调用，只能调用一次，别人切勿使用

通配符选择器
选取页面中所有元素（标签）

```html
	{
	属性名1: 属性名1;
	...
	}
```

	CSS的复合选择器
	建立在基础选择器之上，对基础选择器进行组合形成的

后代选择器/包含选择器（重要）
<style>
	元素1 元素2 { 样式声明 }
</style>
#元素2只要包含在元素1里面即可，无论是儿子还是孙子

子选择器（重要）
只能选择某元素的最近一级的子元素

元素1>元素2 {样式声明}
1
并集选择器（重要）
可以选择多组标签为他们定义相同的样式，通常用于集体声明

标签1,标签2 {样式声明}
1
约定语法规范：并集选择器喜欢竖着写

伪类选择器
可以为某些选择器添加一些特殊的效果

链接伪类选择器
#写的时候按照顺序来
a:link	#选择未被访问的链接
a:visited	#选择所有已经被访问过的链接
a:hover		#选择鼠标指针位于其上的链接
a:active	#选择活动链接（鼠标按下未弹起的链接）

:foucus伪类选择器
用于选取获得焦点的表单元素

input:foucus {
	background-color: red;
}

## \3. px em 和 rem的区别

一、px是固定的像素，一旦设置了就无法因为适应页面大小而改变。

二、em和rem相对于px更具有灵活性，他们是相对长度单位，意思是长度不是定死了的，更适用于响应式布局。

三、em是相对于其父元素来设置字体大小的，一般都是以的“font-size”为基准。这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而Rem是相对于根元素，这样就意味着，我们只需要在根元素确定一个参考值

总之：对于em和rem的区别一句话概括：

em相对于父元素，rem相对于根元素。

## \4. 水平垂直居中的几种方法

### 1 使用flex布局

利用flex的alignItems:center垂直居中，justifycontent:center水平居中

### 2 利用相对定位和绝对定位的margin:auto

相对定位下，使用绝对定位将上下左右都设置为0，再设置margin:auto即可实现居中

### 3 利用相对定位和绝对定位，再加上外边距和平移的配合

相对定位下，使用绝对定位，利用margin偏移外容器的50%，再利用translate平移回补自身宽高的50%即可

### 4 利用textAlign和verticalAlign

利用textAlign:center实现行内元素的水平居中，再利用verticalAlign:middle实现行内元素的垂直居中，前提是要先加上伪元素并给设置高度为100%，用过elementUI的可以去看看其消息弹窗居中实现方式就是如此

### 5 其他

上面都是在未知外容器和自身宽高下实现水平垂直居中的，如果已知其宽高，可以有更多种简单的方式实现居中，其原理无非是利用绝对定位的top/left偏移、margin偏移、padding填充，在此就不分析了。还有就是单纯文字的居中利用lineHeight和textAlign即可实现。

## \5. 盒模型的理解

盒模型包括margin、border、padding、content四个部分，主要的设置属性是margin、border、padding。
盒子模型又分为两种W3C和IE盒子。

W3C的元素宽度=content的宽度
IE的元素宽度=content+padding+border



盒模型就是用来做容器，为了把内容打包和整理，为了不让页面显得杂乱无章。一个好的包装能够给用户不一样地体验。并且如果没有好的包装，再好的内容也不会也看下去的欲望。这就像一个干净整洁的桌面和堆满杂物的桌面给人的观感效果。
所以，合理灵活的应用好盒模型是前端的必要基础！！！

## \6. Flex布局

一、Flex 布局是什么？
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

二、基本概念
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

三、容器的属性
以下6个属性设置在容器上。

flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content

## \7. 怎么解决浮动中塌陷的问题

第一种：开启BFC

根据W3C的标准，在页面中元素都有一个隐含的属性 Block Formatting Context,简称BFC，默认是关闭的；

开启元素BFC后，元素将会具有以下特性：

父元素的垂直外边距不会和子元素重叠
开启BFC的元素不会被浮动元素所覆盖
开启BFC的元素可以包含浮动元素
开启BFC的方法：。

** overflow【常见，副作用最小】**

overflow设置为非visible的值。推荐使用hidden（副作用最小）

a) auto （溢出显示滚动条）

b) scroll （默认就显示滚动条）

c) hidden （溢出隐藏）[常用]

注：但在IE6及以下的浏览器中不支持BFC，所以使用这种方式不兼容IE6。在IE6中有类似BFC的隐含属性 hasLayout，开启方式很多，推荐使用zoom:1

第二种：在浮动元素后添加元素，并设置其clear属性

第三种：br元素的clear属性

br元素本身没有高度，所以也就不会存在IE低版本下最小高度问题。只需要在浮动元素下添加一句 :

※第四种：after伪类【各大公司推荐】

可以通过after伪类向元素的最后添加一个空白的块元素，然后对其清除浮动，和第二种方法原理相同，可达到相同的效果，而且不会在页面中添加多余的div，这是最推荐的方式，几乎没有副作用

## \8. CSS3新特性

CSS3 是 CSS 规范的最新版本，在 CSS2.1 的基础上增加了很多强大的新功能，以帮助开发人员解决一些实际面临的问题，并且不再需要非语义标签、复杂的 JavaScript 脚本以及图片。 例如，CSS3 支持圆角、多背景、透明度、阴影、动画、图表等功能。 CSS1 和 CSS2.1 都是单一的规范，其中 CSS1 主要定义了网页对象的基本样式，如字体、颜色、背景、边框等，CSS2 添加了高级概念，如浮动、定位、高级选择器（如子选择器、相邻选择器和通用选择器等）。 整个 CSS3 的规范发布不会因为部分存在争论而影响其他模块的推进。 对于浏览器来说，可以根据需要，决定哪些 CSS 功能被支持。

## \9. 前端常见的布局方式

### 一、静态布局

静态布局是最为原始的布局方式，没有什么技术性可言，往往是计算机行业刚刚入门的小白使用的布局方式。制作的网页上的元素尺寸一律以px为单位

布局特点： 页面上的布局是按最初写代码时候的布局方式进行布局的，常规的pc网站是进行设置了宽度值进行布局的，不会随着pc端的屏幕的大小而变化。
优点: 这种布局方式不管是对资深的前端开发工程师还是刚入门的小白来说都是最简单的，最让人容易以接受、学习的，没有我们所说的兼容性的问题。这种布局方式大多用在门户网站和企业的官网上，这些官网的设备的尺寸是固定的，这种布局方式往往是最简单的方法。
缺点： 不会随着pc端的屏幕大小而变化。

### 二、弹性布局（flexbox）

弹性布局可以简便、完整、响应的实现各种页面上的布局。与静态不同的是，使用em或rem单位（lem=16px，1rem=10px）进行相对布局，相对使用百分比更加方便、灵活，相应同时支持浏览器的字体大小调整和缩放的等正常显示。
优点：
1.适应性强，在做多种不同的屏幕分辨率不同的界面是非常使用。
2.随意按照宽度、比例划分元素的宽高。
3.可以轻松的改变元素的显示顺序。
4.网页布局实现快捷，维护起来更加容易。
如果做移动端时，如果客户对细微的之处的要求不高，使用弹性布局进行制作是最好的选择，一份css+一份js调节font-size搞定。
缺点： 浏览器兼容性较差，只能兼容到IE9及以上。

### 三、自适应布局（bootstrap）

自适应布局分别为不同屏幕不同分辨率定义布局，即是创建多个静态页面，每个静态页面对应一个屏幕分辨率的一个范围内。在改变不同的屏幕分辨率可以切换到不同的静态布局上，但是布局中的元素位置会发生改变，但是在每个静态布局中，页面中的元素不会随着窗口大小的调整发生变化。使用 @media 媒体查询给不同尺寸和介质的设备切换不同的样式。在优秀的响应范围设计下可以给适配范围内的设备最好的体验，在同一个设备下实际还是固定的布局。
优点：
1.对网站的复杂程度兼容性更大；
2.对开发工程师来说制作的成本代价更低；
3.代码执行效果更高效；
4.测试时更加容易，运营相对更加精准。
缺点： 在现如今的移动端设计百花齐放的时期之下，同一个网站往往需要为不同的设备制作不同的页面，不但会增加开发成本，还会因为客户的需求改变时，可能会改动多套代码、流程相比较来说较繁琐。

### 四、流式布局（fluid）

流式布局的布局方式是页面的元素的宽度按照屏幕的分辨率进行适配的调整，但是整体布局不变，也称之为栅栏系统。使用%百分比定义宽度，高度大都是用px来固定住，可以根据可视区域 (viewport) 和父元素的实时尺寸进行调整，尽可能的适应各种分辨率。往往配合 max-width/min-width 等属性控制尺寸流动范围以免过大或者过小影响阅读。
缺点： 屏幕大小变化时，页面元素也随之变化但是布局不变。这就会因为如果屏幕太大或太小都会布局时元素无法正常显示。

### 五、响应式布局

响应式布局是css3增加的新布局方式，该布局方式2010年提出来的一个概念，说白了就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。响应式布局可以为不同终端的用户提供更加舒适的界面和更好的用户体验，而且随着目前大屏幕移动设备的普及，用“大势所趋”来形容也不为过。响应式几乎成为优秀页面布局的标准。
设计方法： 媒体查询+流式布局。通常使用@media媒体查询，和网格系统配合相对布局单位进行布局，实际上说白了就是综合响应式等技术通过css给单一网页不同设备分辨率返回不式时的技术。
优点： 适应pc端和移动端，如果有足够的耐心，页面效果会很完美。
缺点：
1.只能适应主流的宽高；
2.如果匹配足够多的设备屏幕的大小，对于工程师来说工作量不小，设计更需要多个版本，工作量增大。

### 六、浮动布局

浮动布局进行调用浮动属性改变页面中元素的位置，浮动布局应该是目前各大网站用的最多的一种布局方式了，但是也特别复杂。浮动元素是脱离文档流的，但不脱离文本流。浮动元素有左浮动（float : left）和右浮动（float : right）两种

优点： 兼容性比较好
缺点： 浮动带来的影响比较多，页面宽度不够的时候会影响布局。

### 七、定位布局

定位布局时利用position属性控制页面元素设置一些不规则布局。

# HTML

## \1. HTML的语义化标签

## \2. 前端优化的解决方案

我们的优化原则有以下几个：

能缓存的，尽量强缓存。

引入外部资源时不要出现超时、404的状况。

减少HTTP请求数。

合理设置cookie的大小以及过期时间。

合理利用懒加载

网页内容的优化
1、懒加载数据。
首先根据标签的left和top属性判断是否显示在了屏幕中（如果显示在屏幕中，其left和top属性值应该是在0到窗口长宽之间）。
如果显示在屏幕中，则将src标签的内容替换为图片的url。

2、使用外部引入的css和js文件，并且引入的css和js越少越好（HTTP2.0不适用）。
这里可以使用webpack打包这些文件，也可以使用强缓存与协商缓存来缓存这些文件。

3、不要在中缩放图片。
img计算缩放也需要时间

4、避免重定向。
重定向会重新渲染网页。

5、尽量不要用iframe。
因为iframe会阻塞渲染。

6、使用base64编码将图片嵌入到样式表中，减少请求数（由于base64会比一般的图片大一点，只适用于那些体积比较小但是很常用的图片）。

7、使用雪碧图（精灵图）：
通过使用background-position：-xpx -ypx;来调整图片的位置，不过HTTP2不适用，原因为HTTP2实际上是多路复用的，只用一个TCP连接，所以多个图片的请求也是在同一个TCP连接里，这样能省下非常多的请求时间，但坏处就是单连接开销很大，如果要传多个大文件，就很麻烦。

8、要有网站小图标favicon.ico。

如果没有小图标，会引起404，拖慢网页加载进度。
9、能使用jpeg就不要用png，能使用png8就不要用png24。
（1）色彩丰富的、大的图片切成jpg的；
（2）尺寸小的，色彩不丰富的和背景透明的切成gif或者png8的；
（3）半透明的切成png24。

10、使用canvas压缩图片。

**css的优化**
1、避免使用@import。
使用@import相当于将引入的css放在了页面底部，因为使用@import引用的文件只有在引用它的那个css文件被下载、解析之后，浏览器才会知道还有另外一个css需要下载，这时才去下载，然后下载后开始解析、构建render tree等一系列操作。因此使用@import会拖慢渲染的过程。

2、将样式表放在head中。
如果放在body中，可能出现在浏览器下载好css样式表之前，组件就已经加载好了的情况，这可能会导致重新渲染。

3、避免使用css表达式。
如：expression((new Date()).getHours()%2 ? “#B8D4FF” : “#F08A00” );
解析表达式和计算都需要时间。

**JavaScript的优化**
1、尽量减少DOM访问。

2、使用事件代理（减少DOM操作）。

3、把脚本放在底部（加载脚本时会阻塞页面渲染）。

4、合理使用节流函数和防抖函数。

使用CDN优化加载速度
CDN即内容分发网络。它依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。

针对webpack打包优化
针对webpack打包优化主要是减少打包后的代码体积，主要的措施有：
1、进行tree-shaking
2、使用UglifyJS等插件压缩代码
3、分割代码、按需加载

我们可以使用webpack-bundle-analyzer这个插件来查看每部分代码的加载耗时，进而分析可以优化的地方

## \3. HTML5新特性

html5总的来说比html4多了十个新特性，但其不支持ie8及ie8以下版本的浏览器

一、语义标签

二、增强型表单

三、视频和音频

四、Canvas绘图

五、SVG绘图

六、地理定位

七、拖放API

八、WebWorker

九、WebStorage

十、WebSocket

详细地址 https://www.cnblogs.com/binguo666/p/10928907.html

## \4. 常见的浏览器兼容问题

1.不同浏览器的标签默认的外补丁（margin）和内补丁（padding）不同

解决方案：css里增加通配符*{margin：0；padding：0}

2.IE6双边距问题；在IE6中设置了float，同时又设置margin，就会出现边距问题

解决方案：设置display：inline；

3.当标签的高度设置小于10px，在IE6、IE7中会超出自己设置的高度

解决方案：设置display：inline；

4.图片默认有间距

解决方案：使用float为img布局

5.IE9以下浏览器不能使用opacity

解决方案：opacity：0.5；filter：alfha（opacity=50）；filter：progid：DXlmageTransform.Microsoft.Alfha(style=0,opacity=50);

6.边距重叠问题；

解决方案: 当相邻两个元素都设置了margin边距时，margin将取最大值，舍弃最小值；

7.cursor：hand显示手型在safari上不支持

解决方案：统一使用cursor：pointer；

8.两个块级元素，父元素设置了overflow：auto；子元素设置了position：relative；且高度大于父元素，在IE6、IE7会被隐藏而不是溢出；

解决方案：父级元素设置position：relative

9.const问题

说明：Firefox下，可以使用const关键字来定义常量；IE下，只能使用var关键字来定义常量。

解决方法：统一使用var关键字来定义常量。

10.event.srcElement问题

问题说明：IE下，event对象有srcElement属性，但是没有target属性；Firefox下，event对象有target属性，但是没有srcElement属性。

解决方法：使用srcObj = event.srcElement?event.srcElement:event.target;

11.事件绑定

IE:dom.attachEvent();

其他浏览器：dom.addEventListener();

标准浏览器采用事件捕获的方式对应IE的事件冒泡机制（即标准由最外元素至最内元素或者IE由最内元素到最外元素）最后标准方亦觉得IE这方面的比较合理，所以便将事件冒泡纳入了标准，这也是addEventListener第三个参数的由来，而且事件冒泡作为了默认值。

12.操作tr的html

在ie9以下，不能操作tr的innerHTML

13.ajax略有不同

IE：ActiveXObject

其他：xmlHttpReuest

14.对象宽高赋值问题

问题说明：FireFox中类似obj.style.height = imgObj.height的语句无效。

# CSS

1.cursor:hand VS cursor:pointerfirefox不支持hand，但ie支持pointer

解决方法: 统一使用pointer

2. innerText在IE中能正常工作，但在FireFox中却不行.

需用textContent。

3. CSS透明

IE：filter:progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60)。

FF：opacity:0.6。

4. css中的width和padding

在IE7和FF中width宽度不包括padding，在Ie6中包括padding.

5. FF和IEBOX模型解释不一致导致相差2px

详细地址 常见的浏览器兼容 - 知乎 (zhihu.com)

# Vue

## \1. Vuex

1.1 关于VueX
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。

状态管理模式。

把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！这就是“状态管理模式”。

应用场景有：单页应用中，组件之间的数据状态。 应用实例： 1、购物车功能； 2、下单页面有选择优惠券按钮，点击进入优惠券页面，选择后返回到下单页，数据会绑定回来，显示已选择的优惠券； 3、登录状态等等

Vuex有哪几种属性？
有五种，分别是 State、 Getter、Mutation 、Action、 Module

Vuex的State特性
1、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data

2、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新

3、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

Vuex的Getter特性
1、getters 可以对State进行计算操作，它就是Store的计算属性

2、虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用

3、如果一个状态只在一个组件内使用，是可以不用getters

Vuex的Mutation特性
Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。

Vuex的Module特性
Module 可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。

使用Vuex的好处？
1、多层嵌套的组件、兄弟组件间的状态会更好管理维护。 2、缓存一些当前要使用请求远程或本地的数据集（刷新后会自己销毁）。 3、有了第二条，就可以减少向服务器的请求，节省资源。如果你的用户足够多，那么每多出一个请求，对公司来说，都是一大笔钱。 4、对开发者来说，如果你的项目足够复杂，团队的规模也不仅是一个人，数据集中处理更利于程序的稳定和维护

## \2. 双向绑定的原理

MVC模式
以往的MVC模式是单向绑定，即Model绑定到View，当我们用JavaScript代码更新Model时，View就会自动更新



MVVM模式
MVVM模式就是Model–View–ViewModel模式。它实现了View的变动，自动反映在 ViewModel，反之亦然。对于双向绑定的理解，就是用户更新了View，Model的数据也自动被更新了，这种情况就是双向绑定。再说细点，就是在单向绑定的基础上给可输入元素input、textare等添加了change(input)事件,(change事件触发，View的状态就被更新了)来动态修改model。



双向绑定原理
vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的

我们已经知道实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令（如v-model，v-on）对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。

## \3. 组件间传递数据

父组件向子组件传递数据，使用props属性；子组件向父组件中传递数据，在子组件中使用$emit派发事件，父组件中使用v-on
监听事件；缺点：组件嵌套层次多的话，传递数据比较麻烦。
祖先组件通过依赖注入(inject / provide)的方式，向其所有子孙后代传递数据；缺点：无法监听数据修改的来源，不支持响应式。
通过属性$root / $parent / $children /
ref，访问根组件、父级组件、子组件中的数据；缺点：要求组件之间要有传递性。
通过事件总线(event bus)的方式，可以实现任意两个组件间进行数据传递；缺点：不支持响应式，这个概念是vue1.0版本中的，现在已经废弃。
通过 VueJs 的状态管理模式 Vuex，实现多个组件进行数据共享，推荐使用这种方式进行项目中各组件间的数据传递。

## \4. Vue项目优化

Vue 项目性能优化实践 - 知乎 (zhihu.com)

## \5. MVVM和MVC

MVC模式

以往的MVC模式是单向绑定，即Model绑定到View，当我们用JavaScript代码更新Model时，View就会自动更新



MVVM模式

MVVM模式就是Model–View–ViewModel模式。它实现了View的变动，自动反映在 ViewModel，反之亦然。对于双向绑定的理解，就是用户更新了View，Model的数据也自动被更新了，这种情况就是双向绑定。再说细点，就是在单向绑定的基础上给可输入元素input、textare等添加了change(input)事件,(change事件触发，View的状态就被更新了)来动态修改model。



在MVVM框架下视图和模型是不能直接通信的，只能通过ViewModel进行交互，它能够监听到数据的变化，然后通知视图进行自动更新，而当用户操作视图时，VM也能监听到视图的变化，然后通知数据做相应改动，这实际上就实现了数据的双向绑定。并且V和VM可以进行通信。

MVVM模式的优点:

低耦合:View可以独立于Model变化和修改,一个ViewModel可以绑定到不同的View上,当View变化的时候Model可以不变,当Model变化的时候View也可以不变。

可重用性: 可以把一些视图逻辑放在一个ViewModel里面,让很多View重用这段视图逻辑。

独立开发: 开发人员可以专注于业务逻辑和数据的开发,设计人员可以专注于页面的设计。

mvc与mvvm的区别：
MVC和MVVM的区别并不是VM完全取代了C，ViewModel存在目的在于抽离Controller中展示的业务逻辑，而不是替代Controller，其它视图操作业务等还是应该放在Controller中实现。也就是说MVVM实现的是业务逻辑组件的重用。

- MVC中Controller演变成MVVM中的ViewModel

-MVVM通过数据来显示视图层而不是节点操作

-MVVM主要解决了MVC中大量的dom操作使页面渲染性能降低，加载速度变慢，影响用户体验等问题。

## \6. Computed和Watch

computed 和 watch 区分使用场景
computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；

watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

运用场景：

当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

## \7. V-for 和 v-if同时使用的问题

v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
（1）v-for 遍历必须为 item 添加 key

在列表数据进行遍历渲染时，需要为每一项 item 设置唯一 key 值，方便 Vue.js 内部机制精准找到该条列表数据。当 state 更新时，新的状态值和旧的状态值对比，较快地定位到 diff 。

（2）v-for 遍历避免同时使用 v-if

v-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候，必要情况下应该替换成 computed 属性

## \8. 什么时候使用$.nextTick()

你在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中。原因是什么呢，原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。
在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
原因是，Vue是异步执行dom更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOm操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。
当你设置 vm.someData = ‘new value’，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的DOM更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。

## \9. 路由的原理

1. 何为前端路由？
路由（Router）这个概念最先是后端出现的，是用来跟后端服务器进行交互的一种方式，通过不同的路径，来请求不同的资源，请求不同的页面是路由的其中一种功能。

前端随着 ajax 的流行，数据请求可以在不刷新浏览器的情况下进行。异步交互体验中最盛行的就是 SPA —— 单页应用。单页应用不仅仅是在页面交互时无刷新的，连页面跳转都是无刷新的，为了实现单页应用，所以就有了前端路由。

2. 前端Router基本功能
一个基本的前端路由至少应该提供以下功能：

前端Router可以控制浏览器的 history，使的浏览器不会在 URL 发生改变时刷新整个页面。
前端Router需要维护一个 URL 历史栈，通过这个栈可以返回之前页面，进入下一个页面。
前端路由实现原理就是匹配不同的 url 路径，进行解析，然后动态的渲染出区域 html 内容。但是这样存在一个问题，就是 url 每次变化的时候，都会造成页面的刷新。那解决问题的思路便是在改变 url 的情况下，保证页面的不刷新。目前 Router有两种实现方式 History 和 hash。

History 和 Hash 对比
hash 使用 # 后面的内容模拟一个完整路径，不太美观。
hash 在请求时不会发送给服务器，用户手动刷新页面，后端接受到了也是同一个地址。
History 直接修改浏览器 URL，用户手动刷新页面，后端接受到是不同的地址，需要后端做处理跳转到统一的html页面

## \10. 常用的事件修饰符

①.stop:阻止冒泡
–对于嵌套的两级,如果子父级元素都存在click事件,点击子级元素会触发父级元素的事件;如果子级元素设置@click.stop的话就不会触发父级的click事件
②.prevent:阻止默认行为
–对于如<a href=“www.baidu.com” @click.prevent=“linkMethod”>百度自带事件的,添加prevent事件后,href跳转路径将不会触发
③.self:仅绑定元素自身触发,防止事件冒泡
–对于嵌套的两级,如果子父级元素都存在click事件,点击子级元素会触发父级元素的事件;如果父级元素设置@click.self的话就不会被子级元素的click事件影响
④.once: 事件只触发一次(常用表单提交)
⑤.passive: 滚动事件的默认行为 (即滚动行为) 将会立即触发,不能和.prevent 一起使用,浏览器内核线程在每个事件执行时查询prevent,造成卡顿,使用passive将会跳过内核线程查询,进而提升流畅度
⑥.capture: 对于冒泡事件,且存在多个冒泡事件时,存在该修饰符的会优先执行,如果有多个,则从外到内执行
⑦.native: 将vue组件转换为一个普通的HTML标签,如果该修饰符用在普通html标签上是不起任何作用的

# 浏览器原理相关

## \1. 常用HTTP请求

1、GET方法

GET方法用于使用给定的URI从给定服务器中检索信息，即从指定资源中请求数据。使用GET方法的请求应该只是检索数据，并且不应对数据产生其他影响。

在GET请求的URL中发送查询字符串（名称/值对），需要这样写：

`/test/demo_form.php?name1=value1&name2=value2`
1
说明：

GET请求是可以缓存的，我们可以从浏览器历史记录中查找到GET请求，还可以把它收藏到书签中；且GET请求有长度限制，仅用于请求数据（不修改）。

注：因GET请求的不安全性，在处理敏感数据时，绝不可以使用GET请求。

2、POST方法

POST方法用于将数据发送到服务器以创建或更新资源，它要求服务器确认请求中包含的内容作为由URI区分的Web资源的另一个下属。

POST请求永远不会被缓存，且对数据长度没有限制；我们无法从浏览器历史记录中查找到POST请求。

3、HEAD方法

HEAD方法与GET方法相同，但没有响应体，仅传输状态行和标题部分。这对于恢复相应头部编写的元数据非常有用，而无需传输整个内容。

4、PUT方法

PUT方法用于将数据发送到服务器以创建或更新资源，它可以用上传的内容替换目标资源中的所有当前内容。

它会将包含的元素放在所提供的URI下，如果URI指示的是当前资源，则会被改变。如果URI未指示当前资源，则服务器可以使用该URI创建资源。

5、DELETE方法

DELETE方法用来删除指定的资源，它会删除URI给出的目标资源的所有当前内容。

6、CONNECT方法

CONNECT方法用来建立到给定URI标识的服务器的隧道；它通过简单的TCP / IP隧道更改请求连接，通常实使用解码的HTTP代理来进行SSL编码的通信（HTTPS）。

7、OPTIONS方法

OPTIONS方法用来描述了目标资源的通信选项，会返回服务器支持预定义URL的HTTP策略。

8、TRACE方法

TRACE方法用于沿着目标资源的路径执行消息环回测试；它回应收到的请求，以便客户可以看到中间服务器进行了哪些（假设任何）进度或增量。

## \2. Get和Post的区别

GET方法
GET是获取的意思，顾名思义就是获取信息。

GET是默认的HTTP请求方法。

GET方法把参数通过key/value形式存放在URL里面，如果参数是英文数字原样显示，如果是中文或者其他字符加密（Base64）URL长度一般有限制所以GET方法的参数长度不能太长。由于参数显示再地址栏所以不安全，一般需要保密的请求不使用GET。

POST方法
POST是邮件的意思，顾名思义就像一封信一样将参数放在信封里面传输。它用于修改服务器上的数据，一般这些数据是应该保密的，就像信件一样，信的内容只能收信的人看见。例入当用户输入账号和密码登录时账号和密码作为参数通过HTTP请求传输到服务器，这时候肯定不能用GET方法将账号密码直接显示再URL上，这时候就应该用POST方法保证数据的保密性。

POST和GET的区别
GET提交的数据放在URL中，POST则不会。这是最显而易见的差别。这点意味着GET更不安全（POST也不安全，因为HTTP是明文传输抓包就能获取数据内容，要想安全还得加密）
GET回退浏览器无害，POST会再次提交请求（GET方法回退后浏览器再缓存中拿结果，POST每次都会创建新资源）
GET提交的数据大小有限制（是因为浏览器对URL的长度有限制，GET本身没有限制），POST没有
GET可以被保存为书签，POST不可以。这一点也能感受到。
GET能被缓存，POST不能
GET只允许ASCII字符，POST没有限制
GET会保存再浏览器历史记录中，POST不会。这点也能感受到。
总之，两者之间没有本质区别，区别就在于数据存储的位置。各自有适用环境，根据需求选择合适的方法即可。

## \3. 跨域的解决办法

### 同源策略

同源策略，它是由Netscape提出的一个著名的安全策略。现在所有支持JavaScript 的浏览器都会使用这个策略来对脚本和请求进行校验，若不同源，则禁止使用。

同源的定义
那如果判断是否同源？主要根据三个维度，域名，协议，端口三个都相同才算同源。
举个 ：
| 页面 A                        | 页面 B                             | 是否同源 | 说明        |
| --------------------------- | -------------------------------- | ---- | --------- |
| `https://alpha.deepfos.com` | `https://alpha.deepfos.com`      | ✅ 是  | 完全一样      |
| `https://alpha.deepfos.com` | `https://beta.deepfos.com`       | ❌ 否  | 子域不同      |
| `https://alpha.deepfos.com` | `http://alpha.deepfos.com`       | ❌ 否  | 协议不同      |
| `https://alpha.deepfos.com` | `https://alpha.deepfos.com:8080` | ❌ 否  | 端口不同      |
| `https://deepfos.com`       | `https://alpha.deepfos.com`      | ❌ 否  | 主域一样但子域不同 |

网站A网站B结果http://www.zhenai.com http://i.z.com不同源，域名不同
http://www.zhenai.com http://www.z.cn不同源，域名不同
http://www.zhenai.com https://www.z.com不同源，协议不同
http://www.zhenai.com http://www.z.com:3000不同源，端口不同(默认端口80)

同源策略的作用
①无法用js读取非同源的Cookie、LocalStorage 和 IndexDB
这个主要是为了防止恶意网站通过js获取用户其他网站的cookie等用户信息。

②无法用js获取非同源的DOM
防止恶意网站通过iframe获取页面dom，从而窃取页面的信息。

③无法用js发送非同源的AJAX请求
防止恶意的请求攻击服务器窃取数据信息。

那是不是说非同源的请求就无法实现呢？也不是，这就引出了我们本文主要阐述的解决跨域请求问题的方法。

### jsonp

jsonp能实现跨域是利用了img、script和link标签自身的跨域能力。
我们知道当img或者script中的src是一个链接的时候，浏览器会请求这个链接获取资源，那么这个链接如果是跨域的，浏览器也会请求，从而达到了跨域请求的一个功能。

用法
var script = document.createElement('script');
script.src = 'http://localhost:3000/api/test.do?a=1&b=2&callback=cb';
$('body').append(script);

function cb(res){
    // do something
    console.log(res)
}

可以看到，我们创建一个script标签，将src改成我们要请求的接口，并将script添加在body中，那么当浏览器解析到这个script时，会想src对应的服务器发送一个get请求，并将参数带过去。
然后当浏览器接收到服务端返回的数据，就会触发参数中callbak对应的回调函数cb，从而完成整个get请求。

优点
简单粗暴

缺点
①只支持get请求
②需要后台配合，将返回结果包装成callback(res)的形式

防范
那如果黑客植入script脚本通过jsonp的方式对服务器进行攻击，怎么办？
可以通过页面设置的内容安全协议csp进行防范。

### cors跨域

cors 是一个W3C标准,全称是"跨域资源共享"（Cross-origin resource sharing），它允许浏览器向跨源服务器发送XMLHttpRequest请求，从而克服了 AJAX 只能同源使用的限制
cors 需要浏览器和服务器同时支持，整个 CORS通信过程，都是浏览器自动完成不需要用户参与，对于开发者来说，cors的代码和正常的 ajax 没有什么差别，浏览器一旦发现跨域请求，就会添加一些附加的头信息
但是，cors不支持ie10及以下版本。

#### 简单请求和复杂请求

浏览器将cors请求分为简单请求和复杂请求。
简单请求则直接发送请求到服务器，只请求一次。
而复杂请求在正式请求前都会有预检请求，在浏览器中都能看到有OPTIONS请求，用于向服务器请求权限信息的，需要请求两次。

那如何区分是简单请求还是复杂请求呢？

#### 简单请求

简单请求必须要同时满足下面三个条件：

请求方式只能是：GET、POST、HEAD
HTTP请求头限制这几种字段：Accept、Accept-Language、Content-Language、Content-Type、Last-Event-ID
Content-type只能取：application/x-www-form-urlencoded、multipart/form-data、text/plain
content-type的类型
类型描述application/json消息主体是序列化后的 JSON 字符串application/x-www-form-urlencoded数据被编码为键值对。这是标准的编码格式multipart/form-data需要在表单中进行文件上传时，就需要使用该格式。常见的媒体格式是上传文件之时使用的text/plain数据以纯文本形式(text/json/xml/html)进行编码，其中不含任何控件或格式字符

application/json：

作用： 告诉服务器请求的主题内容是json格式的字符串，服务器端会对json字符串进行解析，
好处： 前端人员不需要关心数据结构的复杂度，只要是标准的json格式就能提交成功。
application/x-www-form-urlencoded：是Jquery的Ajax请求默认方式

作用：在请求发送过程中会对数据进行序列化处理，以键值对形式？key1=value1&key2=value2的方式发送到服务器。
好处： 所有浏览器都支持。

#### 复杂请求

不满足简单请求的条件，那么就是复杂请求。
复杂请求会在正式请求发送之前，先发一个预检请求进行校验，校验通过后才能进行正式请求。
举个
浏览器现在要发送一个put的复杂请求，那么在put请求发送之前，浏览器先发送一个options请求。
options请求头信息：

OPTIONS /cors HTTP/1.1
Origin: localhost:3000
Access-Control-Request-Method: PUT // 表示使用的什么HTTP请求方法
Access-Control-Request-Headers: X-Custom-Header // 表示浏览器发送的自定义字段
Host: localhost:3000
Accept-Language: zh-CN,zh;q=0.9
Connection: keep-alive
User-Agent: Mozilla/5.0...

服务器收到options请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应
options响应头信息

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://localhost:3000 // 表示http://localhost:3000可以访问数据
Access-Control-Allow-Methods: GET, POST, PUT      
Access-Control-Allow-Headers: X-Custom-Header    
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

当options请求通过之后发出正式的HTTP请求，倘若options请求不通过，则服务器不允许此次访问,从而抛出错误

options请求通过之后的,浏览器发出发请求

PUT /cors HTTP/1.1
Origin: http://api.zhenai.com
Host: api.alice.com
X-Custom-Header: value
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...

#### options请求缓存

那这样的话，如果页面存在大量的复杂请求，岂不是每个请求前面都要进行一次options的请求，那不会造成大量资源的浪费么？
如果基于cors请求的方法来解决跨域问题，那么复杂请求之前是需要进行一个options的请求的，但我们可以通过对options请求进行缓存来减轻请求的压力。

在options请求中，我们可以通过设置响应头的参数Access-Control-Max-Age来对结果进行缓存
比如： Access-Control-Max-Age: 600 表示对options检验结果进行十分钟的缓存

url变化会导致缓存失效,需要重新验证options请求的返回值
预检不关心post data
header变化，如果是去掉了自定义的header使得请求变成简单请求，不会发送options请求。如果是增加其他的header，是会重新验证Access-Control-Allow-Headers的值。
cookie变化，只要后端允许发送cookie，cookie值变化不会导致缓存失效。
该字段的兼容性如下：



### nginx

nginx解决跨域的问题跟之前的方法有所不同，它是通过服务器的方向代理，将前端访问域名跟后端服务域名映射到同源的地址下，从而实现前端服务和后端服务的同源，那自然不存在跨域的问题了。
举个 ：
前端服务：http://localhost:3000，
前端页面路由：http://localhost:3000/page.html，
后端服务：http://localhost:3001，
后端接口路由：http://localhost:3001/api/test.do
可以看出，两个服务处于跨域的状态
通过nginx的配置进行反向代理，即可实现前后端服务同源，如下：

server
{
    listen 80;
    server_name localhost;

    location = / {
        proxy_pass http://localhost:3000;
    }

   location /api {
        proxy_pass http://localhost:3001;

        #指定允许跨域的方法，*代表所有
        add_header Access-Control-Allow-Methods *;
    
        #预检命令的缓存，如果不缓存每次会发送两次请求
        add_header Access-Control-Max-Age 3600;
        #带cookie请求需要加上这个字段，并设置为true
        add_header Access-Control-Allow-Credentials true;
    
        #表示允许这个域跨域调用（客户端发送请求的域名和端口） 
        #$http_origin动态获取请求客户端请求的域   不用*的原因是带cookie的请求不支持*号
        add_header Access-Control-Allow-Origin $http_origin;
    
        #表示请求头的字段 动态获取
        add_header Access-Control-Allow-Headers 
        $http_access_control_request_headers;
    
        #OPTIONS预检命令，预检命令通过时才发送请求
        #检查请求的类型是不是预检命令
        if ($request_method = OPTIONS){
            return 200;
        }
   }
}


其实nginx不仅仅只是用于解决跨域问题，而是涉及到很多服务器资源分配的处理，在此就不详细探讨了。

### vue proxyTable

其实，在我们主流使用的MVVM框架中，配置项里面也提供解决跨域问题的能力，继续举个 ，以vue2.x为例，我们可以通过在config/index.js中添加配置项实现跨域请求：

proxyTable: {
    '/apis': {
        // 测试环境
        target: 'http://www.zhenai.com/',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            '^/apis': ''   //需要rewrite重写的,
        } 
    }             
}


### 原理

其实原理很简单，就是在我们使用npm run dev命中，启动了一个node服务，然后将前端发出的请求发送到node服务，再将该服务转发到原本的后台服务，在这过程中实现了一层代理，由一个node服务发送一个请求到另外一个后台服务，自然也没有了浏览器所限制的跨域问题。

## \4. URL输出到页面的全过程

1 浏览器根据请求的 URL 交给 DNS 域名解析，找到真实 IP ，向服务器发起请求；

2 服务器交给后台处理完成后返回数据，浏览器接收⽂件（ HTML、JS、CSS 、图象等）；

3 浏览器对加载到的资源（ HTML、JS、CSS 等）进⾏语法解析，建立相应的内部数据结构 （如 HTML 的 DOM）；

4 载⼊解析到的资源⽂件，渲染页面，完成。
————————————————

客户端网址中输入url
将输入的url发送到DNS获得该域名对应的WEB服务器的ip地址
客户端游览器与WEB服务器建立TCP连接
客户端游览器向WEB服务器发送HTTP或HTTPS请求
WEB服务器响应请求，返回指定的URL数据或错误信息
客户端拿到WEB服务器的数据后解析源文件，进行页面排版，显示基础页面
分析页面中的超链接，渲染页面
————————————————

详细简版：
1 从浏览器接收 url 到开启⽹络请求线程（这⼀部分可以展开浏览器的机制以及进程与线程 之间的关系）

2 开启⽹络线程到发出⼀个完整的 HTTP 请求（这⼀部分涉及到dns查询， TCP/IP 请求，五层因特⽹协议栈等知识）

3 从服务器接收到请求到对应后台接收到请求（这⼀部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）

4 后台和前台的 HTTP 交互（这⼀部分包括 HTTP 头部、响应码、报⽂结构、 cookie 等知 识，可以提下静态资源 的 cookie 优化，以及编码解码，如 gzip 压缩等）

6 单独拎出来的缓存问题， HTTP 的缓存（这部分包括http缓存头部， ETag ， catchcontrol 等）
浏览器接收到 HTTP 数据包后的解析流程（解析 html、 词法分析然后解析成 dom 树、解析 css ⽣成 css 规则树、合并成 render 树，然后 layout 、 painting 渲染、复合图层的合成、 GPU 绘制、外链资源的处理、 loaded 和 DOMContentLoaded 等）

7 CSS 的可视化格式模型（元素的渲染规则，如包含块，控制框， BFC ， IFC 等概念）
JS 引擎解析过程（ JS 的解释阶段，预处理阶段，执⾏阶段⽣成执⾏上下⽂， VO ，作 ⽤域链、回收机制等等）

8 其它（可以拓展不同的知识模块，如跨域，web安全， hybrid 模式等等内容）

## \5. 常用的请求状态码

### 500 内部服务器错误

Internal Server Error 500内部服务器错误，服务器遇到未知无法解决的问题。

一般情况下，出现500响应状态的原因有很多种，但是主要的是“程序代码和服务器配置”两个问题。相对于代码而言，就是对站点进行升级，网页改版，新增加了一些常用的插件。就比如WordPress插件的版本可能就需要更高版本的PHP才能兼容。

而相对服务器而言的话，更多的是在系统版本升级导致，就比如最开始使用的是Windows Server 2003，后期想要升级2008、2012等版本的时候配置稍有不慎就会导致Internal Server Error 500。

### 404 请求错误

Not Found 404 错误请求，因发送的请求语法错误,服务器无法正常读取。

相信绝大多数的人都见过404的状态码，当用户试图请求Web服务器上一个不存在的资源时，就会触发Not Found404。出现404状态码可能是链接失效导致，也有可能是URL拼写错误，还有可能是因为Web服务器将所请求的资源移到了其他的地方。一般的网站都会设置自定义页面以防链接失效所产生不良的影响。

### 403 禁止访问

Forbidden 403 禁止访问，客户端没有权利访问所请求内容,服务器拒绝本次请求。

状态码403通常代表客户端错误，是指的服务器端有能力处理该请求，但是拒绝授权访问。这个状态码类似于401，但是进入该状态后不能再继续进行验证，该访问是长期禁止的，并且与应用逻辑密切相关，比如密码不正确等。

### 400 错误请求

Bad Request 400 错误请求，因发送的请求语法错误,服务器无法正常读取。

状态码400表示该语法无效，服务器无法理解该请求。客服端不应该在未经修改的情况下重复此请求。一般会因为前端提交数据的字段名称，或者是字段类型和后台的实体类不一致，导致无法封装。

### 401 未经授权

Unauthorized 401 未经授权，需要身份验证后才能获取所请求的内容,类似于403错误.不同点是.401错误后,只要正确输入帐号密码,验证即可通过。

状态码401就是Web服务器认为，客户端发送的HTTP数据流浪是正确的，但是进入URL资源的时候需要身份验证，而客户端尚未提供相关的验证信息，或者是已提供但是没有通过验证。这也是通常所知的“HTTP基本验证”。

### 200 请求成功

200 OK 请求成功，表示已经请求成功，默认情况下的状态码为200的响应就可以被缓存了。

不同请求方式对于请求成功的意义如下：

GET: 已经取得资源，并将资源添加到响应的消息体中。
HEAD: 响应的消息体为头部信息。
POST: 响应的消息体中包含此次请求的结果。
TRACE: 响应的消息体中包含服务器接收到的请求信息。

PUT 和 DELETE 的请求成功通常并不是响应200OK的状态码而是 204No Content 表示无内容(或者 201Created表示一个资源首次被创建成功)。

### 206 部分内容

Partial Content 206 部分内容，当客户端通过使用range头字段进行文件分段下载时使用该状态码。

状态码206表示服务器已经成功处理了部分GET请求。类似于FlashGet或者迅雷这类的HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。

### 301 永久重定向

Moved Permanently 301 永久移动，该状态码表示所请求的URI资源路径已经改变,新的URL会在响应的Location:头字段里找到。

尽管标准要求浏览器在收到该响应并进行重定向时不应该修改http method和body，但是有一些浏览器可能会有问题。所以最好是在应对GET 或 HEAD 方法时使用301，其他情况使用308 来替代301。

### 302 临时重定向

Found 302临时移动，该状态码表示所请求的URI资源路径临时改变,并且还可能继续改变.因此客户端在以后访问时还得继续使用该URI.新的URL会在响应的Location:头字段里找到。

即使规范要求浏览器在重定向时保证请求方法和请求主体不变，但并不是所有的用户代理都会遵循这一点，你依然可以看到有缺陷的软件的存在。所以推荐仅在响应 GET 或 HEAD 方法时采用 302 状态码，而在其他时候使用 307 Temporary Redirect 来替代，因为在这些场景下方法变换是明确禁止的。

### 502 无效网关

Bad Gateway 502 网关错误，服务器作为网关且从上游服务器获取到了一个无效的HTTP响应。

### 404 请求错误

Not Found 404 错误请求，因发送的请求语法错误,服务器无法正常读取。

相信绝大多数的人都见过404的状态码，当用户试图请求Web服务器上一个不存在的资源时，就会触发Not Found404。出现404状态码可能是链接失效导致，也有可能是URL拼写错误，还有可能是因为Web服务器将所请求的资源移到了其他的地方。一般的网站都会设置自定义页面以防链接失效所产生不良的影响。

### 403 禁止访问

Forbidden 403 禁止访问，客户端没有权利访问所请求内容,服务器拒绝本次请求。

状态码403通常代表客户端错误，是指的服务器端有能力处理该请求，但是拒绝授权访问。这个状态码类似于401，但是进入该状态后不能再继续进行验证，该访问是长期禁止的，并且与应用逻辑密切相关，比如密码不正确等。

### 400 错误请求

Bad Request 400 错误请求，因发送的请求语法错误,服务器无法正常读取。

状态码400表示该语法无效，服务器无法理解该请求。客服端不应该在未经修改的情况下重复此请求。一般会因为前端提交数据的字段名称，或者是字段类型和后台的实体类不一致，导致无法封装。

### 401 未经授权

Unauthorized 401 未经授权，需要身份验证后才能获取所请求的内容,类似于403错误.不同点是.401错误后,只要正确输入帐号密码,验证即可通过。

状态码401就是Web服务器认为，客户端发送的HTTP数据流浪是正确的，但是进入URL资源的时候需要身份验证，而客户端尚未提供相关的验证信息，或者是已提供但是没有通过验证。这也是通常所知的“HTTP基本验证”。

### 200 请求成功

200 OK 请求成功，表示已经请求成功，默认情况下的状态码为200的响应就可以被缓存了。

不同请求方式对于请求成功的意义如下：

GET: 已经取得资源，并将资源添加到响应的消息体中。
HEAD: 响应的消息体为头部信息。
POST: 响应的消息体中包含此次请求的结果。
TRACE: 响应的消息体中包含服务器接收到的请求信息。

PUT 和 DELETE 的请求成功通常并不是响应200OK的状态码而是 204No Content 表示无内容(或者 201Created表示一个资源首次被创建成功)。

### 206 部分内容

Partial Content 206 部分内容，当客户端通过使用range头字段进行文件分段下载时使用该状态码。

状态码206表示服务器已经成功处理了部分GET请求。类似于FlashGet或者迅雷这类的HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。

### 301 永久重定向

Moved Permanently 301 永久移动，该状态码表示所请求的URI资源路径已经改变,新的URL会在响应的Location:头字段里找到。

尽管标准要求浏览器在收到该响应并进行重定向时不应该修改http method和body，但是有一些浏览器可能会有问题。所以最好是在应对GET 或 HEAD 方法时使用301，其他情况使用308 来替代301。

### 302 临时重定向

Found 302临时移动，该状态码表示所请求的URI资源路径临时改变,并且还可能继续改变.因此客户端在以后访问时还得继续使用该URI.新的URL会在响应的Location:头字段里找到。

即使规范要求浏览器在重定向时保证请求方法和请求主体不变，但并不是所有的用户代理都会遵循这一点，你依然可以看到有缺陷的软件的存在。所以推荐仅在响应 GET 或 HEAD 方法时采用 302 状态码，而在其他时候使用 307 Temporary Redirect 来替代，因为在这些场景下方法变换是明确禁止的。

### 502 无效网关

Bad Gateway 502 网关错误，服务器作为网关且从上游服务器获取到了一个无效的HTTP响应。

bad gateway502代表您所访问的网站出了问题，因为502 Bad Gateway 服务器作为网关或者代理时，是为了完成访问下一个服务器，但该服务器返回了非法的应答。也许是暂时的，也许是永久的。建议大家稍等一下再从新访问试试。
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：https://blog.csdn.net/m0_50861631/article/details/123313909