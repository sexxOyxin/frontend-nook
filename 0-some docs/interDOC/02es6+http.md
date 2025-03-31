# es6
# QUESTION：说说var、let、const之间的区别

![](https://static.vue-js.com/d2aba2e0-50f7-11eb-85f6-6fac77c0c9b3.png)

## 一、var

在ES5中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量

注意：顶层对象，在浏览器环境指的是`window`对象，在 `Node` 指的是`global`对象

```js
var a = 10;
console.log(window.a) // 10
```

使用`var`声明的变量存在变量提升的情况

```js
console.log(a) // undefined
var a = 20
```

在编译阶段，编译器会将其变成以下执行

```js
var a
console.log(a)
a = 20
```

使用`var`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明

```js
var a = 20
var a = 30
console.log(a) // 30
```

在函数中使用使用`var`声明变量时候，该变量是局部的

```js
var a = 20
function change(){
    var a = 30
}
change()
console.log(a) // 20
```

而如果在函数内不使用`var`，该变量是全局的

```js
var a = 20
function change(){
   a = 30
}
change()
console.log(a) // 30
```

## 二、let

`let`是`ES6`新增的命令，用来声明变量

用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效

```js
{
    let a = 20
}
console.log(a) // ReferenceError: a is not defined.
```

不存在变量提升

```js
console.log(a) // 报错ReferenceError
let a = 2
```

这表示在声明它之前，变量`a`是不存在的，这时如果用到它，就会抛出一个错误

只要块级作用域内存在`let`命令，这个区域就不再受外部影响

```js
var a = 123
if (true) {
    a = 'abc' // ReferenceError
    let a;
}
```

使用`let`声明变量前，该变量都不可用，也就是大家常说的“暂时性死区”

最后，`let`不允许在相同作用域中重复声明

```js
let a = 20
let a = 30
// Uncaught SyntaxError: Identifier 'a' has already been declared
```

注意的是相同作用域，下面这种情况是不会报错的

```js
let a = 20
{
    let a = 30
}
```

因此，我们不能在函数内部重新声明参数

```js
function func(arg) {
  let arg;
}
func()
// Uncaught SyntaxError: Identifier 'arg' has already been declared
```

## 三、const

`const`声明一个只读的常量，一旦声明，常量的值就不能改变

```js
const a = 1
a = 3
// TypeError: Assignment to constant variable.
```

这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值

```js
const a;
// SyntaxError: Missing initializer in const declaration
```

如果之前用`var`或`let`声明过变量，再用`const`声明同样会报错

```js
var a = 20
let b = 20
const a = 30
const b = 30
// 都会报错
```

`const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量

对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变

```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

其它情况，`const`与`let`一致

## 四、区别

`var`、`let`、`const`三者区别可以围绕下面五点展开：

- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量
- 使用



### 变量提升

`var `声明的变量存在变量提升，即变量可以在声明之前调用，值为`undefined`

`let`和`const`不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错

```js
// var
console.log(a)  // undefined
var a = 10

// let
console.log(b)  // Cannot access 'b' before initialization
let b = 10

// const
console.log(c)  // Cannot access 'c' before initialization
const c = 10
```



### 暂时性死区

`var`不存在暂时性死区

`let`和`const`存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

```js
// var
console.log(a)  // undefined
var a = 10

// let
console.log(b)  // Cannot access 'b' before initialization
let b = 10

// const
console.log(c)  // Cannot access 'c' before initialization
const c = 10
```



### 块级作用域

`var`不存在块级作用域

`let`和`const`存在块级作用域

```js
// var
{
    var a = 20
}
console.log(a)  // 20

// let
{
    let b = 20
}
console.log(b)  // Uncaught ReferenceError: b is not defined

// const
{
    const c = 20
}
console.log(c)  // Uncaught ReferenceError: c is not defined
```



### 重复声明

`var`允许重复声明变量

`let`和`const`在同一作用域不允许重复声明变量

```js
// var
var a = 10
var a = 20 // 20

// let
let b = 10
let b = 20 // Identifier 'b' has already been declared

// const
const c = 10
const c = 20 // Identifier 'c' has already been declared
```



### 修改声明的变量

`var`和`let`可以

`const`声明一个只读的常量。一旦声明，常量的值就不能改变

```js
// var
var a = 10
a = 20
console.log(a)  // 20

//let
let b = 10
b = 20
console.log(b)  // 20

// const
const c = 10
c = 20
console.log(c) // Uncaught TypeError: Assignment to constant variable
```



### 使用
能用`const`的情况尽量使用`const`，其他情况下大多数使用`let`，避免使用`var`



## 参考文献

- https://es6.ruanyifeng.com/

# QUESTION：ES6中数组新增了哪些扩展？

 ![](https://static.vue-js.com/a156b8d0-53c5-11eb-85f6-6fac77c0c9b3.png)

## 一、扩展运算符的应用

ES6通过扩展元素符`...`，好比 `rest` 参数的逆运算，将一个数组转为用逗号分隔的参数序列

```js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```

主要用于函数调用的时候，将一个数组变为参数序列

```js
function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42
```

可以将某些数据结构转为数组

```js
[...document.querySelectorAll('div')]
```

能够更简单实现数组复制

```js
const a1 = [1, 2];
const [...a2] = a1;
// [1,2]
```

数组的合并也更为简洁了

```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

注意：通过扩展运算符实现的是浅拷贝，修改了引用指向的值，会同步反映到新数组

下面看个例子就清楚多了

```js
const arr1 = ['a', 'b',[1,2]];
const arr2 = ['c'];
const arr3  = [...arr1,...arr2]
arr[1][0] = 9999 // 修改arr1里面数组成员值
console.log(arr[3]) // 影响到arr3,['a','b',[9999,2],'c']
```

扩展运算符可以与解构赋值结合起来，用于生成数组

```js
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []
```

如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错

```js
const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错
```

可以将字符串转为真正的数组

```javascript
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```

定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组

```js
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];

let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]
```

如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错

```javascript
const obj = {a: 1, b: 2};
let arr = [...obj]; // TypeError: Cannot spread non-iterable object
```



## 二、构造函数新增的方法

关于构造函数，数组新增的方法有如下：

- Array.from()
- Array.of()

### Array.from()

将两类对象转为真正的数组：类似数组的对象和可遍历`（iterable）`的对象（包括 `ES6` 新增的数据结构 `Set` 和 `Map`）

```js
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组

```js
Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]
```



### Array.of()

用于将一组值，转换为数组

```js
Array.of(3, 11, 8) // [3,11,8]
```

没有参数的时候，返回一个空数组

当参数只有一个的时候，实际上是指定数组的长度

参数个数不少于 2 个时，`Array()`才会返回由参数组成的新数组

```js
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```



### 三、实例对象新增的方法

关于数组实例对象新增的方法有如下：

- copyWithin()
- find()、findIndex()
- fill()
- entries()，keys()，values()
- includes()
- flat()，flatMap()

### copyWithin()

将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组

参数如下：

- target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
- start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
- end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

```js
[1, 2, 3, 4, 5].copyWithin(0, 3) // 将从 3 号位直到数组结束的成员（4 和 5），复制到从 0 号位开始的位置，结果覆盖了原来的 1 和 2
// [4, 5, 3, 4, 5]
```



### find()、findIndex()

`find()`用于找出第一个符合条件的数组成员

参数是一个回调函数，接受三个参数依次为当前的值、当前的位置和原数组

```js
[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```

`findIndex`返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回`-1`

```javascript
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
```

这两个方法都可以接受第二个参数，用来绑定回调函数的`this`对象。

```js
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26
```



### fill()

使用给定值，填充一个数组

```javascript
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
```

还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置

```js
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
```

注意，如果填充的类型为对象，则是浅拷贝



### entries()，keys()，values()

`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历

```js
or (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
```



### includes()

用于判断数组是否包含给定的值

```js
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
```

方法的第二个参数表示搜索的起始位置，默认为`0`

参数为负数则表示倒数的位置

```js
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```



### flat()，flatMap()

将数组扁平化处理，返回一个新数组，对原数据没有影响

```js
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]
```

`flat()`默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将`flat()`方法的参数写成一个整数，表示想要拉平的层数，默认为1

```js
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
```

`flatMap()`方法对原数组的每个成员执行一个函数相当于执行`Array.prototype.map()`，然后对返回值组成的数组执行`flat()`方法。该方法返回一个新数组，不改变原数组

```js
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

`flatMap()`方法还可以有第二个参数，用来绑定遍历函数里面的`this`



### 四、数组的空位

数组的空位指，数组的某一个位置没有任何值

ES6 则是明确将空位转为`undefined`，包括`Array.from`、扩展运算符、`copyWithin()`、`fill()`、`entries()`、`keys()`、`values()`、`find()`和`findIndex()`

建议大家在日常书写中，避免出现空位





### 五、排序稳定性

将`sort()`默认设置为稳定的排序算法

```js
const arr = [
  'peach',
  'straw',
  'apple',
  'spork'
];

const stableSorting = (s1, s2) => {
  if (s1[0] < s2[0]) return -1;
  return 1;
};

arr.sort(stableSorting)
// ["apple", "peach", "straw", "spork"]
```

排序结果中，`straw`在`spork`的前面，跟原始顺序一致




## 参考文献

- https://es6.ruanyifeng.com/#docs/array


#  QUESTION：对象新增了哪些扩展？

![](https://static.vue-js.com/4da4dd40-5427-11eb-ab90-d9ae814b240d.png)



## 一、属性的简写

ES6中，当对象键名与对应值名相等的时候，可以进行简写

```js
const baz = {foo:foo}

// 等同于
const baz = {foo}
```

方法也能够进行简写

```js
const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
}
```

在函数内作为返回值，也会变得方便很多

```js
function getPoint() {
  const x = 1;
  const y = 10;
  return {x, y};
}

getPoint()
// {x:1, y:10}
```

注意：简写的对象方法不能用作构造函数，否则会报错

```js
const obj = {
  f() {
    this.foo = 'bar';
  }
};

new obj.f() // 报错
```



## 二、属性名表达式

ES6 允许字面量定义对象时，将表达式放在括号内

```js
let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"
```

表达式还可以用于定义方法名

```js
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};

obj.hello() // hi
```

注意，属性名表达式与简洁表示法，不能同时使用，会报错

```js
// 报错
const foo = 'bar';
const bar = 'abc';
const baz = { [foo] };

// 正确
const foo = 'bar';
const baz = { [foo]: 'abc'};
```

注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串`[object Object]`

```js
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

myObject // Object {[object Object]: "valueB"}
```



## 三、super关键字

`this`关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字`super`，指向当前对象的原型对象

```javascript
const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto); // 为obj设置原型对象
obj.find() // "hello"
```



## 四、扩展运算符的应用

在解构赋值中，未被读取的可遍历的属性，分配到指定的对象上面

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

注意：解构赋值必须是最后一个参数，否则会报错

解构赋值是浅拷贝

```js
let obj = { a: { b: 1 } };
let { ...x } = obj;
obj.a.b = 2; // 修改obj里面a属性中键值
x.a.b // 2，影响到了结构出来x的值
```

对象的扩展运算符等同于使用`Object.assign()`方法



## 五、属性的遍历

ES6 一共有 5 种方法可以遍历对象的属性。

- for...in：循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）

- Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名

- Object.getOwnPropertyNames(obj)：回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名

- Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名

- Reflect.ownKeys(obj)：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举

上述遍历，都遵守同样的属性遍历的次序规则：

- 首先遍历所有数值键，按照数值升序排列
- 其次遍历所有字符串键，按照加入时间升序排列
- 最后遍历所有 Symbol 键，按照加入时间升序排

```js
Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
// ['2', '10', 'b', 'a', Symbol()]
```





## 六、对象新增的方法

关于对象新增的方法，分别有以下：

- Object.is()
- Object.assign()
- Object.getOwnPropertyDescriptors()
- Object.setPrototypeOf()，Object.getPrototypeOf()
- Object.keys()，Object.values()，Object.entries()
- Object.fromEntries()



### Object.is()

严格判断两个值是否相等，与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身

```js
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```



### Object.assign()

`Object.assign()`方法用于对象的合并，将源对象`source`的所有可枚举属性，复制到目标对象`target`

`Object.assign()`方法的第一个参数是目标对象，后面的参数都是源对象

```javascript
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

注意：`Object.assign()`方法是浅拷贝，遇到同名属性会进行替换



### Object.getOwnPropertyDescriptors()

返回指定对象所有自身属性（非继承属性）的描述对象

```js
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }
```



### Object.setPrototypeOf()

`Object.setPrototypeOf`方法用来设置一个对象的原型对象

```js
Object.setPrototypeOf(object, prototype)

// 用法
const o = Object.setPrototypeOf({}, null);
```



### Object.getPrototypeOf()

用于读取一个对象的原型对象

```js
Object.getPrototypeOf(obj);
```



### Object.keys()

返回自身的（不含继承的）所有可遍历（enumerable）属性的键名的数组

```js
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]
```



### Object.values()

返回自身的（不含继承的）所有可遍历（enumerable）属性的键对应值的数组

```js
const obj = { foo: 'bar', baz: 42 };
Object.values(obj)
// ["bar", 42]
```



### Object.entries()

返回一个对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对的数组

```js
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]
```



### Object.fromEntries()

用于将一个键值对数组转为对象

```js
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }
```



## 参考文献

- https://es6.ruanyifeng.com/#docs/object

#  QUESTION：对象新增了哪些扩展？

![](https://static.vue-js.com/54a04a10-5569-11eb-85f6-6fac77c0c9b3.png)



## 一、参数

`ES6`允许为函数的参数设置默认值

```js
function log(x, y = 'World') {
  console.log(x, y);
}

console.log('Hello') // Hello World
console.log('Hello', 'China') // Hello China
console.log('Hello', '') // Hello
```

函数的形参是默认声明的，不能使用`let`或`const`再次声明

```js
function foo(x = 5) {
    let x = 1; // error
    const x = 2; // error
}
```

参数默认值可以与解构赋值的默认值结合起来使用

```js
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined
```

上面的`foo`函数，当参数为对象的时候才能进行解构，如果没有提供参数的时候，变量`x`和`y`就不会生成，从而报错，这里设置默认值避免

```js
function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo() // undefined 5
```

参数默认值应该是函数的尾参数，如果不是非尾部的参数设置默认值，实际上这个参数是没发省略的

```javascript
function f(x = 1, y) {
  return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined]
f(, 1) // 报错
f(undefined, 1) // [1, 1]
```



## 二、属性

### 函数的length属性

`length`将返回没有指定默认值的参数个数

```js
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
```

`rest` 参数也不会计入`length`属性

```js
(function(...args) {}).length // 0
```

如果设置了默认值的参数不是尾参数，那么`length`属性也不再计入后面的参数了

```js
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1
```



### name属性

返回该函数的函数名

```js
var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"
```

如果将一个具名函数赋值给一个变量，则 `name`属性都返回这个具名函数原本的名字

```js
const bar = function baz() {};
bar.name // "baz"
```

`Function`构造函数返回的函数实例，`name`属性的值为`anonymous`

```javascript
(new Function).name // "anonymous"
```

`bind`返回的函数，`name`属性值会加上`bound`前缀

```javascript
function foo() {};
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "
```



## 三、作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域

等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的

下面例子中，`y=x`会形成一个单独作用域，`x`没有被定义，所以指向全局变量`x`

```js
let x = 1;

function f(y = x) {
  // 等同于 let y = x
  let x = 2;
  console.log(y);
}

f() // 1
```



## 四、严格模式

只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错

```js
// 报错
function doSomething(a, b = a) {
  'use strict';
  // code
}

// 报错
const doSomething = function ({a, b}) {
  'use strict';
  // code
};

// 报错
const doSomething = (...a) => {
  'use strict';
  // code
};

const obj = {
  // 报错
  doSomething({a, b}) {
    'use strict';
    // code
  }
};
```



## 五、箭头函数

使用“箭头”（`=>`）定义函数

```js
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分

```js
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用`return`语句返回

```js
var sum = (num1, num2) => { return num1 + num2; }
```

如果返回对象，需要加括号将对象包裹

```js
let getTempItem = id => ({ id: id, name: "Temp" });
```

注意点：

- 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象
- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误
- 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替
- 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数

## 参考文献
- https://es6.ruanyifeng.com/#docs/function


# QUESTION：你是怎么理解ES6新增Set、Map两种数据结构的？

 ![](https://static.vue-js.com/2b947d00-560c-11eb-85f6-6fac77c0c9b3.png)

如果要用一句来描述，我们可以说

`Set`是一种叫做集合的数据结构，`Map`是一种叫做字典的数据结构

什么是集合？什么又是字典？

- 集合
是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合

- 字典
是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同

区别？

- 共同点：集合、字典都可以存储不重复的值
- 不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储

## 一、Set

` Set`是`es6`新增的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值，我们一般称为集合

`Set`本身是一个构造函数，用来生成 Set 数据结构

```js
const s = new Set();
```



### 增删改查

`Set`的实例关于增删改查的方法：

- add()
- delete()

- has()
- clear()

### add()

添加某个值，返回 `Set` 结构本身

当添加实例中已经存在的元素，`set`不会进行处理添加

```js
s.add(1).add(2).add(2); // 2只被添加了一次
```

### delete()

删除某个值，返回一个布尔值，表示删除是否成功

```js
s.delete(1)
```

### has()

返回一个布尔值，判断该值是否为`Set`的成员

```js
s.has(2)
```

### clear()

清除所有成员，没有返回值

```js
s.clear()
```



### 遍历

`Set`实例遍历的方法有如下：

关于遍历的方法，有如下：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

`Set`的遍历顺序就是插入顺序

`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象

```javascript
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

`forEach()`用于对每个成员执行某种操作，没有返回值，键值、键名都相等，同样的`forEach`方法有第二个参数，用于绑定处理函数的`this`

```javascript
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
```

扩展运算符和` Set` 结构相结合实现数组或字符串去重

```javascript
// 数组
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; // [3, 5, 2]

// 字符串
let str = "352255";
let unique = [...new Set(str)].join(""); // "352"
```

实现并集、交集、和差集

```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```



## 二、Map

`Map`类型是键值对的有序列表，而键和值都可以是任意类型

`Map`本身是一个构造函数，用来生成 `Map` 数据结构

```js
const m = new Map()
```



### 增删改查

`Map` 结构的实例针对增删改查有以下属性和操作方法：

- size 属性
- set()
- get()
- has()
- delete()
- clear()

### size

`size`属性返回 Map 结构的成员总数。

```javascript
const map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
```



### set()

设置键名`key`对应的键值为`value`，然后返回整个 Map 结构

如果`key`已经有值，则键值会被更新，否则就新生成该键

同时返回的是当前`Map`对象，可采用链式写法

```javascript
const m = new Map();

m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined
m.set(1, 'a').set(2, 'b').set(3, 'c') // 链式操作
```



### get()

`get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`

```javascript
const m = new Map();

const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数

m.get(hello)  // Hello ES6!
```



### has()

`has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中

```javascript
const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition')     // true
m.has('years')       // false
m.has(262)           // true
m.has(undefined)     // true
```



### delete()

`delete`方法删除某个键，返回`true`。如果删除失败，返回`false`

```javascript
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false
```

### clear()

`clear`方法清除所有成员，没有返回值

```javascript
let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0
```



### 遍历

`Map `结构原生提供三个遍历器生成函数和一个遍历方法：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回所有成员的遍历器
- forEach()：遍历 Map 的所有成员

遍历顺序就是插入顺序

```javascript
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});
```

## 三、WeakSet 和 WeakMap

### WeakSet

创建`WeakSet`实例

```js
const ws = new WeakSet();
```

`WeakSet `可以接受一个具有 `Iterable `接口的对象作为参数

```js
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}
```

在`API`中`WeakSet`与`Set`有两个区别：

- 没有遍历操作的`API`
- 没有`size`属性

`WeakSet`只能成员只能是引用类型，而不能是其他类型的值

```js
let ws=new WeakSet();

// 成员不是引用类型
let weakSet=new WeakSet([2,3]);
console.log(weakSet) // 报错

// 成员为引用类型
let obj1={name:1}
let obj2={name:1}
let ws=new WeakSet([obj1,obj2]);
console.log(ws) //WeakSet {{…}, {…}}
```

`WeakSet `里面的引用只要在外部消失，它在 `WeakSet `里面的引用就会自动消失



### WeakMap

`WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合

在`API`中`WeakMap`与`Map`有两个区别：

- 没有遍历操作的`API`
- 没有`clear`清空方法

```javascript
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"
```

`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名

```javascript
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
```

`WeakMap`的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

举个场景例子：

在网页的 DOM 元素上添加数据，就可以使用`WeakMap`结构，当该 DOM 元素被清除，其所对应的`WeakMap`记录就会自动被移除

```javascript
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
```

注意：`WeakMap` 弱引用的只是键名，而不是键值。键值依然是正常引用

下面代码中，键值`obj`会在`WeakMap`产生新的引用，当你修改`obj`不会影响到内部

```js
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
```



## 参考文献

- https://es6.ruanyifeng.com/#docs/set-map


#  QUESTION：你是怎么理解ES6中 Promise的？使用场景？

![](https://static.vue-js.com/f033b160-5811-11eb-85f6-6fac77c0c9b3.png)



## 一、介绍

`Promise `，译为承诺，是异步编程的一种解决方案，比传统的解决方案（回调函数）更加合理和更加强大

在以往我们如果处理多层异步操作，我们往往会像下面那样编写我们的代码

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('得到最终结果: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

阅读上面代码，是不是很难受，上述形成了经典的回调地狱

现在通过`Promise`的改写上面的代码

```js
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('得到最终结果: ' + finalResult);
})
.catch(failureCallback);
```

瞬间感受到`promise`解决异步操作的优点：

- 链式操作减低了编码难度
- 代码可读性明显增强



下面我们正式来认识`promise`：

### 状态

`promise`对象仅有三种状态

- `pending`（进行中）
- `fulfilled`（已成功）
- `rejected`（已失败）

### 特点

- 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态
- 一旦状态改变（从`pending`变为`fulfilled`和从`pending`变为`rejected`），就不会再变，任何时候都可以得到这个结果



### 流程

认真阅读下图，我们能够轻松了解`promise`整个流程

 ![](https://static.vue-js.com/1b02ae90-58a9-11eb-85f6-6fac77c0c9b3.png)



## 二、用法

`Promise`对象是一个构造函数，用来生成`Promise`实例

```javascript
const promise = new Promise(function(resolve, reject) {});
```

`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`

- `resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”
- `reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”



### 实例方法

`Promise`构建出来的实例存在以下方法：

- then()
- catch()
- finally()



#### then()

`then`是实例状态发生改变时的回调函数，第一个参数是`resolved`状态的回调函数，第二个参数是`rejected`状态的回调函数

`then`方法返回的是一个新的`Promise`实例，也就是`promise`能链式书写的原因

```javascript
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
```



#### catch

`catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数

```javascript
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

`Promise `对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止

```javascript
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```

一般来说，使用`catch`方法代替`then()`第二个参数

`Promise `对象抛出的错误不会传递到外层代码，即不会有任何反应

```js
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
```

浏览器运行到这一行，会打印出错误提示`ReferenceError: x is not defined`，但是不会退出进程

`catch()`方法之中，还能再抛出错误，通过后面`catch`方法捕获到



#### finally()

`finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

```javascript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```



### 构造函数方法

`Promise`构造函数存在以下方法：

- all()
- race()
- allSettled()
- resolve()
- reject()
- try()



### all()

`Promise.all()`方法用于将多个 `Promise `实例，包装成一个新的 `Promise `实例

```javascript
const p = Promise.all([p1, p2, p3]);
```

接受一个数组（迭代对象）作为参数，数组成员都应为`Promise`实例

实例`p`的状态由`p1`、`p2`、`p3`决定，分为两种：

- 只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数
- 只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数

注意，如果作为参数的 `Promise` 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法

```javascript
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// ["hello", Error: 报错了]
```

如果`p2`没有自己的`catch`方法，就会调用`Promise.all()`的`catch`方法

```javascript
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// Error: 报错了
```



### race()

`Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例

```javascript
const p = Promise.race([p1, p2, p3]);
```

只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变

率先改变的 Promise 实例的返回值则传递给`p`的回调函数

```javascript
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

p
.then(console.log)
.catch(console.error);
```



### allSettled()

`Promise.allSettled()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例

只有等到所有这些参数实例都返回结果，不管是`fulfilled`还是`rejected`，包装实例才会结束

```javascript
const promises = [
  fetch('/api-1'),
  fetch('/api-2'),
  fetch('/api-3'),
];

await Promise.allSettled(promises);
removeLoadingIndicator();
```



#### resolve()

将现有对象转为 `Promise `对象

```javascript
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

参数可以分成四种情况，分别如下：

- 参数是一个 Promise 实例，`promise.resolve`将不做任何修改、原封不动地返回这个实例
- 参数是一个`thenable`对象，`promise.resolve`会将这个对象转为 `Promise `对象，然后就立即执行`thenable`对象的`then()`方法
- 参数不是具有`then()`方法的对象，或根本就不是对象，`Promise.resolve()`会返回一个新的 Promise 对象，状态为`resolved`
- 没有参数时，直接返回一个`resolved`状态的 Promise 对象



#### reject()

`Promise.reject(reason)`方法也会返回一个新的 Promise 实例，该实例的状态为`rejected`

```javascript
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```

`Promise.reject()`方法的参数，会原封不动地变成后续方法的参数

```javascript
Promise.reject('出错了')
.catch(e => {
  console.log(e === '出错了')
})
// true
```



## 三、使用场景

将图片的加载写成一个`Promise`，一旦加载完成，`Promise`的状态就发生变化

```javascript
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

通过链式操作，将多个渲染数据分别给个`then`，让其各司其职。或当下个异步请求依赖上个请求结果的时候，我们也能够通过链式操作友好解决问题

```js
// 各司其职
getInfo().then(res=>{
    let { bannerList } = res
    //渲染轮播图
    console.log(bannerList)
    return res
}).then(res=>{

    let { storeList } = res
    //渲染店铺列表
    console.log(storeList)
    return res
}).then(res=>{
    let { categoryList } = res
    console.log(categoryList)
    //渲染分类列表
    return res
})
```

通过`all()`实现多个请求合并在一起，汇总所有请求结果，只需设置一个`loading`即可

```js
function initLoad(){
    // loading.show() //加载loading
    Promise.all([getBannerList(),getStoreList(),getCategoryList()]).then(res=>{
        console.log(res)
        loading.hide() //关闭loading
    }).catch(err=>{
        console.log(err)
        loading.hide()//关闭loading
    })
}
//数据初始化
initLoad()
```

通过`race`可以设置图片请求超时

```js
//请求某个图片资源
function requestImg(){
    var p = new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
           resolve(img);
        }
        //img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"; 正确的
        img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg1";
    });
    return p;
}

//延时函数，用于给请求计时
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}

Promise
.race([requestImg(), timeout()])
.then(function(results){
    console.log(results);
})
.catch(function(reason){
    console.log(reason);
});
```

## 参考文献

- https://es6.ruanyifeng.com/#docs/promise


# QUESTION：你是怎么理解ES6中 Generator的？使用场景？

 ![](https://static.vue-js.com/7db499b0-5947-11eb-ab90-d9ae814b240d.png)

## 一、介绍

Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

回顾下上文提到的解决异步的手段：

- 回调函数
- promise

那么，上文我们提到`promsie`已经是一种比较流行的解决异步方案，那么为什么还出现`Generator`？甚至`async/await`呢？

该问题我们留在后面再进行分析，下面先认识下`Generator`

### Generator函数

执行 `Generator` 函数会返回一个遍历器对象，可以依次遍历 `Generator` 函数内部的每一个状态

形式上，`Generator `函数是一个普通函数，但是有两个特征：

- `function`关键字与函数名之间有一个星号
- 函数体内部使用`yield`表达式，定义不同的内部状态

```javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
```



## 二、使用

`Generator` 函数会返回一个遍历器对象，即具有`Symbol.iterator`属性，并且返回给自己

```javascript
function* gen(){
  // some code
}

var g = gen();

g[Symbol.iterator]() === g
// true
```

通过`yield`关键字可以暂停`generator`函数返回的遍历器对象的状态

```javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
```

上述存在三个状态：`hello`、`world`、`return`

通过`next`方法才会遍历到下一个内部状态，其运行逻辑如下：

- 遇到`yield`表达式，就暂停执行后面的操作，并将紧跟在`yield`后面的那个表达式的值，作为返回的对象的`value`属性值。
- 下一次调用`next`方法时，再继续往下执行，直到遇到下一个`yield`表达式
- 如果没有再遇到新的`yield`表达式，就一直运行到函数结束，直到`return`语句为止，并将`return`语句后面的表达式的值，作为返回的对象的`value`属性值。
- 如果该函数没有`return`语句，则返回的对象的`value`属性值为`undefined`

```javascript
hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```

`done`用来判断是否存在下个状态，`value`对应状态值

`yield`表达式本身没有返回值，或者说总是返回`undefined`

通过调用`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值

```javascript
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
```

正因为`Generator `函数返回`Iterator`对象，因此我们还可以通过`for...of`进行遍历
```javascript
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```

原生对象没有遍历接口，通过`Generator `函数为它加上这个接口，就能使用`for...of`进行遍历了

```javascript
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe
```



## 三、异步解决方案

回顾之前展开异步解决的方案：

- 回调函数
- Promise 对象
- generator 函数
- async/await



这里通过文件读取案例，将几种解决异步的方案进行一个比较：

### 回调函数

所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，再调用这个函数

```javascript
fs.readFile('/etc/fstab', function (err, data) {
  if (err) throw err;
  console.log(data);
  fs.readFile('/etc/shells', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
});
```

`readFile`函数的第三个参数，就是回调函数，等到操作系统返回了`/etc/passwd`这个文件以后，回调函数才会执行



### Promise

`Promise`就是为了解决回调地狱而产生的，将回调函数的嵌套，改成链式调用

```js
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};


readFile('/etc/fstab').then(data =>{
    console.log(data)
    return readFile('/etc/shells')
}).then(data => {
    console.log(data)
})
```

这种链式操作形式，使异步任务的两段执行更清楚了，但是也存在了很明显的问题，代码变得冗杂了，语义化并不强



### generator

`yield`表达式可以暂停函数执行，`next`方法用于恢复函数执行，这使得`Generator`函数非常适合将异步任务同步化

```javascript
const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```





### async/await

将上面`Generator`函数改成`async/await`形式，更为简洁，语义化更强了

```js
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```



### 区别：

通过上述代码进行分析，将`promise`、`Generator`、`async/await`进行比较：

- `promise`和`async/await`是专门用于处理异步操作的
- `Generator`并不是为异步而设计出来的，它还有其他功能（对象迭代、控制输出、部署`Interator`接口...）
- `promise`编写代码相比`Generator`、`async`更为复杂化，且可读性也稍差

- `Generator`、`async`需要与`promise`对象搭配处理异步情况
- `async`实质是`Generator`的语法糖，相当于会自动执行`Generator`函数
- `async`使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案



## 四、使用场景

`Generator`是异步解决的一种方案，最大特点则是将异步操作同步化表达出来

```js
function* loadUI() {
  showLoadingScreen();
  yield loadUIDataAsynchronously();
  hideLoadingScreen();
}
var loader = loadUI();
// 加载UI
loader.next()

// 卸载UI
loader.next()
```

包括`redux-saga `中间件也充分利用了`Generator`特性

```js
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
```

还能利用`Generator`函数，在对象上实现`Iterator`接口

```js
function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}

let myObj = { foo: 3, bar: 7 };

for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}

// foo 3
// bar 7
```



## 参考文献

- https://es6.ruanyifeng.com/#docs/generator-async


# QUESTION：你是怎么理解ES6中Proxy的？使用场景?

 ![](https://static.vue-js.com/6f656e30-59f5-11eb-85f6-6fac77c0c9b3.png)



## 一、介绍

**定义：** 用于定义基本操作的自定义行为

**本质：** 修改的是程序默认形为，就形同于在编程语言层面上做修改，属于元编程`(meta programming)`

元编程（Metaprogramming，又译超编程，是指某类计算机程序的编写，这类计算机程序编写或者操纵其它程序（或者自身）作为它们的数据，或者在运行时完成部分本应在编译时完成的工作

一段代码来理解
```bash
#!/bin/bash
# metaprogram
echo '#!/bin/bash' >program
for ((I=1; I<=1024; I++)) do
    echo "echo $I" >>program
done
chmod +x program
```
这段程序每执行一次能帮我们生成一个名为`program`的文件，文件内容为1024行`echo`，如果我们手动来写1024行代码，效率显然低效

- 元编程优点：与手工编写全部代码相比，程序员可以获得更高的工作效率，或者给与程序更大的灵活度去处理新的情形而无需重新编译

`Proxy` 亦是如此，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）


## 二、用法

`Proxy`为 构造函数，用来生成 `Proxy `实例

```javascript
var proxy = new Proxy(target, handler)
```

### 参数

`target`表示所要拦截的目标对象（任何类型的对象，包括原生数组，函数，甚至另一个代理））

`handler`通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 `p` 的行为



### handler解析

关于`handler`拦截属性，有如下：

- get(target,propKey,receiver)：拦截对象属性的读取
- set(target,propKey,value,receiver)：拦截对象属性的设置
- has(target,propKey)：拦截`propKey in proxy`的操作，返回一个布尔值
- deleteProperty(target,propKey)：拦截`delete proxy[propKey]`的操作，返回一个布尔值
- ownKeys(target)：拦截`Object.keys(proxy)`、`for...in`等循环，返回一个数组
- getOwnPropertyDescriptor(target, propKey)：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象
- defineProperty(target, propKey, propDesc)：拦截`Object.defineProperty(proxy, propKey, propDesc）`，返回一个布尔值
- preventExtensions(target)：拦截`Object.preventExtensions(proxy)`，返回一个布尔值
- getPrototypeOf(target)：拦截`Object.getPrototypeOf(proxy)`，返回一个对象
- isExtensible(target)：拦截`Object.isExtensible(proxy)`，返回一个布尔值
- setPrototypeOf(target, proto)：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作





### Reflect

若需要在`Proxy`内部调用对象的默认行为，建议使用`Reflect`，其是`ES6`中操作对象而提供的新 `API`

基本特点：

- 只要`Proxy`对象具有的代理方法，`Reflect`对象全部具有，以静态方法的形式存在
- 修改某些`Object`方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回`false`）
- 让`Object`操作都变成函数行为



下面我们介绍`proxy`几种用法：

### get()

`get`接受三个参数，依次为目标对象、属性名和 `proxy` 实例本身，最后一个参数可选

```javascript
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    return Reflect.get(target,propKey)
  }
});

proxy.name // "张三"
```

`get`能够对数组增删改查进行拦截，下面是试下你数组读取负数的索引

```js
function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
arr[-1] // c
```

注意：如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则会报错

```js
const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
});

const handler = {
  get(target, propKey) {
    return 'abc';
  }
};

const proxy = new Proxy(target, handler);

proxy.foo
// TypeError: Invariant check failed
```



### set()

`set`方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 `Proxy` 实例本身

假定`Person`对象有一个`age`属性，该属性应该是一个不大于 200 的整数，那么可以使用`Proxy`保证`age`的属性值符合要求

```js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

person.age // 100
person.age = 'young' // 报错
person.age = 300 // 报错
```

如果目标对象自身的某个属性，不可写且不可配置，那么`set`方法将不起作用

```javascript
const obj = {};
Object.defineProperty(obj, 'foo', {
  value: 'bar',
  writable: false,
});

const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = 'baz';
  }
};

const proxy = new Proxy(obj, handler);
proxy.foo = 'baz';
proxy.foo // "bar"
```

注意，严格模式下，`set`代理如果没有返回`true`，就会报错

```javascript
'use strict';
const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver;
    // 无论有没有下面这一行，都会报错
    return false;
  }
};
const proxy = new Proxy({}, handler);
proxy.foo = 'bar';
// TypeError: 'set' on proxy: trap returned falsish for property 'foo'
```



### deleteProperty()

`deleteProperty`方法用于拦截`delete`操作，如果这个方法抛出错误或者返回`false`，当前属性就无法被`delete`命令删除

```javascript
var handler = {
  deleteProperty (target, key) {
    invariant(key, 'delete');
    Reflect.deleteProperty(target,key)
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`无法删除私有属性`);
  }
}

var target = { _prop: 'foo' };
var proxy = new Proxy(target, handler);
delete proxy._prop
// Error: 无法删除私有属性
```

注意，目标对象自身的不可配置（configurable）的属性，不能被`deleteProperty`方法删除，否则报错



### 取消代理

```
Proxy.revocable(target, handler);
```

## 三、使用场景

`Proxy`其功能非常类似于设计模式中的代理模式，常用功能如下：

- 拦截和监视外部对对象的访问
- 降低函数或类的复杂度
- 在复杂操作前对操作进行校验或对所需资源进行管理



使用 `Proxy` 保障数据类型的准确性

```js
let numericDataStore = { count: 0, amount: 1234, total: 14 };
numericDataStore = new Proxy(numericDataStore, {
    set(target, key, value, proxy) {
        if (typeof value !== 'number') {
            throw Error("属性只能是number类型");
        }
        return Reflect.set(target, key, value, proxy);
    }
});

numericDataStore.count = "foo"
// Error: 属性只能是number类型

numericDataStore.count = 333
// 赋值成功
```

声明了一个私有的 `apiKey`，便于 `api` 这个对象内部的方法调用，但不希望从外部也能够访问 `api._apiKey`

```js
let api = {
    _apiKey: '123abc456def',
    getUsers: function(){ },
    getUser: function(userId){ },
    setUser: function(userId, config){ }
};
const RESTRICTED = ['_apiKey'];
api = new Proxy(api, {
    get(target, key, proxy) {
        if(RESTRICTED.indexOf(key) > -1) {
            throw Error(`${key} 不可访问.`);
        } return Reflect.get(target, key, proxy);
    },
    set(target, key, value, proxy) {
        if(RESTRICTED.indexOf(key) > -1) {
            throw Error(`${key} 不可修改`);
        } return Reflect.get(target, key, value, proxy);
    }
});

console.log(api._apiKey)
api._apiKey = '987654321'
// 上述都抛出错误
```

还能通过使用`Proxy`实现观察者模式

观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行

`observable`函数返回一个原始对象的 `Proxy` 代理，拦截赋值操作，触发充当观察者的各个函数

```javascript
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}
```

观察者函数都放进`Set`集合，当修改`obj`的值，在会`set`函数中拦截，自动执行`Set`所有的观察者



## 参考文献

- https://es6.ruanyifeng.com/#docs/proxy
- https://vue3js.cn/es6

# QUESTION：你是怎么理解ES6中Module的？使用场景？

 ![](https://static.vue-js.com/b6d19be0-5adb-11eb-ab90-d9ae814b240d.png)



## 一、介绍

模块，（Module），是能够单独命名并独立地完成一定功能的程序语句的**集合（即程序代码和数据结构的集合体）**。

两个基本的特征：外部特征和内部特征

- 外部特征是指模块跟外部环境联系的接口（即其他模块或程序调用该模块的方式，包括有输入输出参数、引用的全局变量）和模块的功能

- 内部特征是指模块的内部环境具有的特点（即该模块的局部数据和程序代码）

### 为什么需要模块化

- 代码抽象
- 代码封装
- 代码复用
- 依赖管理

如果没有模块化，我们代码会怎样？

- 变量和方法不容易维护，容易污染全局作用域
- 加载资源的方式通过script标签从上到下。
- 依赖的环境主观逻辑偏重，代码较多就会比较复杂。
- 大型项目资源难以维护，特别是多人合作的情况下，资源的引入会让人奔溃

因此，需要一种将` JavaScript `程序模块化的机制，如

- CommonJs (典型代表：node.js早期)
- AMD (典型代表：require.js)
- CMD (典型代表：sea.js)


### AMD

`Asynchronous ModuleDefinition`（AMD），异步模块定义，采用异步方式加载模块。所有依赖模块的语句，都定义在一个回调函数中，等到模块加载完成之后，这个回调函数才会运行

代表库为`require.js`

```js
/** main.js 入口文件/主模块 **/
// 首先用config()指定各模块路径和引用名
require.config({
  baseUrl: "js/lib",
  paths: {
    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
    "underscore": "underscore.min",
  }
});
// 执行基本操作
require(["jquery","underscore"],function($,_){
  // some code here
});
```



### CommonJs

`CommonJS` 是一套 `Javascript` 模块规范，用于服务端

```js
// a.js
module.exports={ foo , bar}

// b.js
const { foo,bar } = require('./a.js')
```

其有如下特点：

- 所有代码都运行在模块作用域，不会污染全局作用域
- 模块是同步加载的，即只有加载完成，才能执行后面的操作
- 模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存
- `require`返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值


既然存在了`AMD`以及`CommonJs`机制，`ES6`的`Module`又有什么不一样？

ES6 在语言标准的层面上，实现了`Module`，即模块功能，完全可以取代 `CommonJS `和 `AMD `规范，成为浏览器和服务器通用的模块解决方案

`CommonJS` 和` AMD` 模块，都只能在运行时确定这些东西。比如，`CommonJS `模块就是对象，输入时必须查找对象属性

```javascript
// CommonJS模块
let { stat, exists, readfile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

`ES6`设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量

```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上述代码，只加载3个方法，其他方法不加载，即 `ES6` 可以在编译时就完成模块加载

由于编译加载，使得静态分析成为可能。包括现在流行的`typeScript`也是依靠静态分析实现功能



## 二、使用

`ES6`模块内部自动采用了严格模式，这里就不展开严格模式的限制，毕竟这是`ES5`之前就已经规定好

模块功能主要由两个命令构成：

- `export`：用于规定模块的对外接口
- `import`：用于输入其他模块提供的功能



### export

一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用`export`关键字输出该变量

```javascript
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

或
// 建议使用下面写法，这样能瞬间确定输出了哪些变量
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };
```

输出函数或类

```js
export function multiply(x, y) {
  return x * y;
};
```

通过`as`可以进行输出变量的重命名

```js
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```



### import

使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块

```javascript
// main.js
import { firstName, lastName, year } from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
```

同样如果想要输入变量起别名，通过`as`关键字

```javascript
import { lastName as surname } from './profile.js';
```

当加载整个模块的时候，需要用到星号`*`

```js
// circle.js
export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}

// main.js
import * as circle from './circle';
console.log(circle)   // {area:area,circumference:circumference}
```

输入的变量都是只读的，不允许修改，但是如果是对象，允许修改属性

```js
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
a = {}; // Syntax Error : 'a' is read-only;
```

不过建议即使能修改，但我们不建议。因为修改之后，我们很难差错

`import`后面我们常接着`from`关键字，`from`指定模块文件的位置，可以是相对路径，也可以是绝对路径

```js
import { a } from './a';
```

如果只有一个模块名，需要有配置文件，告诉引擎模块的位置

```javascript
import { myMethod } from 'util';
```

在编译阶段，`import`会提升到整个模块的头部，首先执行

```javascript
foo();

import { foo } from 'my_module';
```

多次重复执行同样的导入，只会执行一次

```js
import 'lodash';
import 'lodash';
```

上面的情况，大家都能看到用户在导入模块的时候，需要知道加载的变量名和函数，否则无法加载

如果不需要知道变量名或函数就完成加载，就要用到`export default`命令，为模块指定默认输出

```js
// export-default.js
export default function () {
    console.log('foo');
}
```

加载该模块的时候，`import`命令可以为该函数指定任意名字

```js
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```



### 动态加载

允许您仅在需要时动态加载模块，而不必预先加载所有模块，这存在明显的性能优势

这个新功能允许您将`import()`作为函数调用，将其作为参数传递给模块的路径。 它返回一个 `promise`，它用一个模块对象来实现，让你可以访问该对象的导出

```js
import('/modules/myModule.mjs')
  .then((module) => {
    // Do something with the module.
  });
```



### 复合写法

如果在一个模块之中，先输入后输出同一个模块，`import`语句可以与`export`语句写在一起

```javascript
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
```

同理能够搭配`as`、`*`搭配使用



## 三、使用场景

如今，`ES6`模块化已经深入我们日常项目开发中，像`vue`、`react`项目搭建项目，组件化开发处处可见，其也是依赖模块化实现

`vue`组件

```js
<template>
  <div class="App">
      组件化开发 ---- 模块化
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```

`react`组件

```js
function App() {
  return (
    <div className="App">
		组件化开发 ---- 模块化
    </div>
  );
}

export default App;
```

包括完成一些复杂应用的时候，我们也可以拆分成各个模块

## 参考文献
- https://macsalvation.net/the-history-of-js-module/
- https://es6.ruanyifeng.com/#docs/module

# QUESTION：你是怎么理解ES6中 Decorator 的？使用场景？

 ![](https://static.vue-js.com/7df43560-5ba5-11eb-85f6-6fac77c0c9b3.png)

## 一、介绍

Decorator，即装饰器，从名字上很容易让我们联想到装饰者模式

简单来讲，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。

`ES6`中`Decorator`功能亦如此，其本质也不是什么高大上的结构，就是一个普通的函数，用于扩展类属性和类方法

这里定义一个士兵，这时候他什么装备都没有

```js
class soldier{
}
```

定义一个得到 AK 装备的函数，即装饰器

```js
function strong(target){
    target.AK = true
}
```

使用该装饰器对士兵进行增强

```js
@strong
class soldier{
}
```

这时候士兵就有武器了

```js
soldier.AK // true
```

上述代码虽然简单，但也能够清晰看到了使用`Decorator`两大优点：

- 代码可读性变强了，装饰器命名相当于一个注释
- 在不改变原有代码情况下，对原来功能进行扩展



## 二、用法

`Docorator`修饰对象为下面两种：

- 类的装饰
- 类属性的装饰

### 类的装饰

当对类本身进行装饰的时候，能够接受一个参数，即类本身

将装饰器行为进行分解，大家能够有个更深入的了解

```js
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```

下面`@testable`就是一个装饰器，`target`就是传入的类，即`MyTestableClass`，实现了为类添加静态属性

```js
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true
```

如果想要传递参数，可以在装饰器外层再封装一层函数

```js
function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false
```



### 类属性的装饰

当对类属性进行装饰的时候，能够接受三个参数：

- 类的原型对象
- 需要装饰的属性名
- 装饰属性名的描述对象

首先定义一个`readonly`装饰器

```js
function readonly(target, name, descriptor){
  descriptor.writable = false; // 将可写属性设为false
  return descriptor;
}
```

使用`readonly`装饰类的`name`方法

```javascript
class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}
```

相当于以下调用

```js
readonly(Person.prototype, 'name', descriptor);
```

如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行

```javascript
function dec(id){
    console.log('evaluated', id);
    return (target, property, descriptor) =>console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
```

外层装饰器`@dec(1)`先进入，但是内层装饰器`@dec(2)`先执行



### 注意

装饰器不能用于修饰函数，因为函数存在变量声明情况

```js
var counter = 0;

var add = function () {
  counter++;
};

@add
function foo() {
}
```

编译阶段，变成下面

```js
var counter;
var add;

@add
function foo() {
}

counter = 0;

add = function () {
  counter++;
};
```

意图是执行后`counter`等于 1，但是实际上结果是`counter`等于 0



## 三、使用场景

基于`Decorator`强大的作用，我们能够完成各种场景的需求，下面简单列举几种：

使用`react-redux`的时候，如果写成下面这种形式，既不雅观也很麻烦

```js
class MyReactComponent extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);
```

通过装饰器就变得简洁多了

```js
@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}
```

将`mixins`，也可以写成装饰器，让使用更为简洁了

```js
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list);
  };
}

// 使用
const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // "foo"
```



下面再讲讲`core-decorators.js`几个常见的装饰器

#### @antobind

`autobind`装饰器使得方法中的`this`对象，绑定原始对象

```javascript
import { autobind } from 'core-decorators';

class Person {
  @autobind
  getPerson() {
    return this;
  }
}

let person = new Person();
let getPerson = person.getPerson;

getPerson() === person;
// true
```



#### @readonly

`readonly`装饰器使得属性或方法不可写

```javascript
import { readonly } from 'core-decorators';

class Meal {
  @readonly
  entree = 'steak';
}

var dinner = new Meal();
dinner.entree = 'salmon';
// Cannot assign to read only property 'entree' of [object Object]
```





#### @deprecate

`deprecate`或`deprecated`装饰器在控制台显示一条警告，表示该方法将废除

```javascript
import { deprecate } from 'core-decorators';

class Person {
  @deprecate
  facepalm() {}

  @deprecate('功能废除了')
  facepalmHard() {}
}

let person = new Person();

person.facepalm();
// DEPRECATION Person#facepalm: This function will be removed in future versions.

person.facepalmHard();
// DEPRECATION Person#facepalmHard: 功能废除了

```



## 参考文献

- https://es6.ruanyifeng.com/#docs/decorator


# http

# QUESTION：什么是HTTP? HTTP 和 HTTPS 的区别?

 ![](https://static.vue-js.com/f50c71f0-b20b-11eb-ab90-d9ae814b240d.png)

## 一、HTTP

`HTTP` (HyperText Transfer Protocol)，即超文本运输协议，是实现网络通信的一种规范

 ![](https://static.vue-js.com/fda119b0-b20b-11eb-85f6-6fac77c0c9b3.png)

在计算机和网络世界有，存在不同的协议，如广播协议、寻址协议、路由协议等等......

而`HTTP`是一个传输协议，即将数据由A传到B或将B传输到A，并且 A 与 B 之间能够存放很多第三方，如： A<=>X<=>Y<=>Z<=>B

传输的数据并不是计算机底层中的二进制包，而是完整的、有意义的数据，如HTML 文件, 图片文件, 查询结果等超文本，能够被上层应用识别

在实际应用中，`HTTP`常被用于在`Web`浏览器和网站服务器之间传递信息，以明文方式发送内容，不提供任何方式的数据加密

特点如下：

- 支持客户/服务器模式

- 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快
- 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记
- 无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间
- 无状态：HTTP协议无法根据之前的状态进行本次的请求处理





## 二、HTTPS

在上述介绍`HTTP`中，了解到`HTTP`传递信息是以明文的形式发送内容，这并不安全。而`HTTPS`出现正是为了解决`HTTP`不安全的特性

为了保证这些隐私数据能加密传输，让`HTTP`运行安全的`SSL/TLS`协议上，即 HTTPS = HTTP + SSL/TLS，通过 `SSL`证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密

`SSL` 协议位于` TCP/IP` 协议与各种应用层协议之间，浏览器和服务器在使用 `SSL` 建立连接时需要选择一组恰当的加密算法来实现安全通信，为数据通讯提供安全支持

 ![](https://static.vue-js.com/078c50c0-b20c-11eb-ab90-d9ae814b240d.png)

流程图如下所示：

 ![](https://static.vue-js.com/0e409fc0-b20c-11eb-85f6-6fac77c0c9b3.png)

- 首先客户端通过URL访问服务器建立SSL连接
- 服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端
- 客户端的服务器开始协商SSL连接的安全等级，也就是信息加密的等级
- 客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站
- 服务器利用自己的私钥解密出会话密钥
- 服务器利用会话密钥加密与客户端之间的通信



## 三、区别

- HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理，相对更安全
- HTTP 和 HTTPS 使用连接方式不同，默认端口也不一样，HTTP是80，HTTPS是443
- HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP
- HTTPS需要SSL，SSL 证书需要钱，功能越强大的证书费用越高





## 参考文献

- https://www.cnblogs.com/klb561/p/10289199.html
- https://www.jianshu.com/p/205c0fc51c97
- https://vue3js.cn/interview

# QUESTION：为什么说HTTPS比HTTP安全? HTTPS是如何保证安全的？

 ![](https://static.vue-js.com/b5512250-b2ff-11eb-ab90-d9ae814b240d.png)

## 一、安全特性

在上篇文章中，我们了解到`HTTP`在通信过程中，存在以下问题：

- 通信使用明文（不加密），内容可能被窃听
- 不验证通信方的身份，因此有可能遭遇伪装

而`HTTPS`的出现正是解决这些问题，`HTTPS`是建立在`SSL`之上，其安全性由`SSL`来保证

在采用`SSL`后，`HTTP`就拥有了`HTTPS`的加密、证书和完整性保护这些功能

 > SSL(Secure Sockets Layer 安全套接字协议),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议

 ![](https://static.vue-js.com/cb559400-b2ff-11eb-85f6-6fac77c0c9b3.png)





## 二、如何做

`SSL `的实现这些功能主要依赖于三种手段：

- 对称加密：采用协商的密钥对数据加密
- 非对称加密：实现身份认证和密钥协商
- 摘要算法：验证信息的完整性
- 数字签名：身份验证


### 对称加密

对称加密指的是加密和解密使用的秘钥都是同一个，是对称的。只要保证了密钥的安全，那整个通信过程就可以说具有了机密性

 ![](https://static.vue-js.com/e3f040f0-b2ff-11eb-ab90-d9ae814b240d.png)



### 非对称加密

非对称加密，存在两个秘钥，一个叫公钥，一个叫私钥。两个秘钥是不同的，公钥可以公开给任何人使用，私钥则需要保密

公钥和私钥都可以用来加密解密，但公钥加密后只能用私钥解
密，反过来，私钥加密后也只能用公钥解密

 ![](https://static.vue-js.com/d9603e60-b2ff-11eb-ab90-d9ae814b240d.png)



### 混合加密

在`HTTPS`通信过程中，采用的是对称加密+非对称加密，也就是混合加密

在对称加密中讲到，如果能够保证了密钥的安全，那整个通信过程就可以说具有了机密性

而`HTTPS`采用非对称加密解决秘钥交换的问题

具体做法是发送密文的一方使用对方的公钥进行加密处理“对称的密钥”，然后对方用自己的私钥解密拿到“对称的密钥”

 ![](https://static.vue-js.com/f375f290-b2ff-11eb-85f6-6fac77c0c9b3.png)

这样可以确保交换的密钥是安全的前提下，使用对称加密方式进行通信

#### 举个例子：

网站秘密保管私钥，在网上任意分发公钥，你想要登录网站只要用公钥加密就行了，密文只能由私钥持有者才能解密。而黑客因为没有私钥，所以就无法破解密文



上述的方法解决了数据加密，在网络传输过程中，数据有可能被篡改，并且黑客可以伪造身份发布公钥，如果你获取到假的公钥，那么混合加密也并无多大用处，你的数据扔被黑客解决

因此，在上述加密的基础上仍需加上完整性、身份验证的特性，来实现真正的安全，实现这一功能则是摘要算法

### 摘要算法

实现完整性的手段主要是摘要算法，也就是常说的散列函数、哈希函数

可以理解成一种特殊的压缩算法，它能够把任意长度的数据“压缩”成固定长度、而且独一无二的“摘要”字符串，就好像是给这段数据生成了一个数字“指纹”

 ![](https://static.vue-js.com/12798da0-b300-11eb-85f6-6fac77c0c9b3.png)

摘要算法保证了“数字摘要”和原文是完全等价的。所以，我们只要在原文后附上它的摘要，就能够保证数据的完整性

比如，你发了条消息：“转账 1000 元”，然后再加上一个 SHA-2 的摘要。网站收到后也计算一下消息的摘要，把这两份“指纹”做个对比，如果一致，就说明消息是完整可信的，没有被修改

 ![](https://static.vue-js.com/023790e0-b300-11eb-ab90-d9ae814b240d.png)



### 数字签名

数字签名能确定消息确实是由发送方签名并发出来的，因为别人假冒不了发送方的签名

原理其实很简单，就是用私钥加密，公钥解密

签名和公钥一样完全公开，任何人都可以获取。但这个签名只有用私钥对应的公钥才能解开，拿到摘要后，再比对原文验证完整性，就可以像签署文件一样证明消息确实是你发的

 ![](https://static.vue-js.com/21aa6880-b300-11eb-85f6-6fac77c0c9b3.png)



和消息本身一样，因为谁都可以发布公钥，我们还缺少防止黑客伪造公钥的手段，也就是说，怎么判断这个公钥就是你的公钥

这时候就需要一个第三方，就是证书验证机构

### CA验证机构

数字证书认证机构处于客户端与服务器双方都可信赖的第三方机构的立场

CA 对公钥的签名认证要求包括序列号、用途、颁发者、有效时间等等，把这些打成一个包再签名，完整地证明公钥关联的各种信息，形成“数字证书”

流程如下图：

 ![](https://static.vue-js.com/395648a0-b300-11eb-85f6-6fac77c0c9b3.png)

- 服务器的运营人员向数字证书认证机构提出公开密钥的申请
- 数字证书认证机构在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名
- 然后分配这个已签名的公开密钥，并将该公开密钥放入公钥证书后绑定在一起
- 服务器会将这份由数字证书认证机构颁发的数字证书发送给客户端，以进行非对称加密方式通信

接到证书的客户端可使用数字证书认证机构的公开密钥，对那张证书上的数字签名进行验证，一旦验证通过，则证明：

- 认证服务器的公开密钥的是真实有效的数字证书认证机构
- 服务器的公开密钥是值得信赖的



## 三、总结

可以看到，`HTTPS`与`HTTP`虽然只差一个`SSL`，但是通信安全得到了大大的保障，通信的四大特性都以解决，解决方式如下：

- 机密性：混合算法
- 完整性：摘要算法
- 身份认证：数字签名
- 不可否定：数字签名

同时引入第三方证书机构，确保公开秘钥的安全性


## 参考文献

- https://zhuanlan.zhihu.com/p/100657391
- https://juejin.cn/post/6844903830987997197#heading-7
- https://cloud.tencent.com/developer/article/1748862

# QUESTION：如何理解UDP 和 TCP? 区别? 应用场景?

 ![](https://static.vue-js.com/85ad65b0-b393-11eb-ab90-d9ae814b240d.png)


## 一、UDP

UDP（User Datagram Protocol），用户数据包协议，是一个简单的**面向数据报的通信协议**，即对应用层交下来的报文，不合并，不拆分，只是在其上面加上首部后就交给了下面的网络层

也就是说无论应用层交给`UDP`多长的报文，它统统发送，一次发送一个报文

而对接收方，接到后直接去除首部，交给上面的应用层就完成任务

`UDP`报头包括4个字段，每个字段占用2个字节（即16个二进制位），标题短，开销小

 ![](https://static.vue-js.com/928e5d20-b393-11eb-ab90-d9ae814b240d.png)



特点如下：

- UDP 不提供复杂的控制机制，利用 IP 提供面向无连接的通信服务
- 传输途中出现丢包，UDP 也不负责重发
- 当包的到达顺序出现乱序时，UDP没有纠正的功能。
- 并且它是将应用程序发来的数据在收到的那一刻，立即按照原样发送到网络上的一种机制。即使是出现网络拥堵的情况，UDP 也无法进行流量控制等避免网络拥塞行为



## 二、TCP

TCP（Transmission Control Protocol），传输控制协议，是一种可靠、**面向字节流的通信协议**，把上面应用层交下来的数据看成无结构的字节流来发送

可以想象成流水形式的，发送方TCP会将数据放入“蓄水池”（缓存区），等到可以发送的时候就发送，不能发送就等着，TCP会根据当前网络的拥塞状态来确定每个报文段的大小

`TCP`报文首部有20个字节，额外开销大

 ![](https://static.vue-js.com/a0010d40-b393-11eb-ab90-d9ae814b240d.png)



特点如下：

- TCP充分地实现了数据传输时各种控制功能，可以进行丢包时的重发控制，还可以对次序乱掉的分包进行顺序控制。而这些在 UDP 中都没有。
- 此外，TCP 作为一种面向有连接的协议，只有在确认通信对端存在时才会发送数据，从而可以控制通信流量的浪费。
- 根据 TCP 的这些机制，在 IP 这种无连接的网络上也能够实现高可靠性的通信（ 主要通过检验和、序列号、确认应答、重发控制、连接管理以及窗口控制等机制实现）



## 三、区别

`UDP`与`TCP`两者的都位于传输层，如下图所示：

 ![](https://static.vue-js.com/a92bda80-b393-11eb-ab90-d9ae814b240d.png)

两者区别如下表所示：

|          | TCP                              | UDP                            |
| -------- | -------------------------------- | ------------------------------ |
| 可靠性   | 可靠                             | 不可靠                         |
| 连接性   | 面向连接                         | 无连接                         |
| 报文     | 面向字节流                       | 面向报文                       |
| 效率     | 传输效率低                       | 传输效率高                     |
| 双共性   | 全双工                           | 一对一、一对多、多对一、多对多 |
| 流量控制 | 滑动窗口                         | 无                             |
| 拥塞控制 | 慢开始、拥塞避免、快重传、快恢复 | 无                             |
| 传输效率 | 慢                               | 快                             |

- TCP 是面向连接的协议，建立连接3次握手、断开连接四次挥手，UDP是面向无连接，数据传输前后不连接连接，发送端只负责将数据发送到网络，接收端从消息队列读取
- TCP 提供可靠的服务，传输过程采用流量控制、编号与确认、计时器等手段确保数据无差错，不丢失。UDP 则尽可能传递数据，但不保证传递交付给对方
- TCP 面向字节流，将应用层报文看成一串无结构的字节流，分解为多个TCP报文段传输后，在目的站重新装配。UDP协议面向报文，不拆分应用层报文，只保留报文边界，一次发送一个报文，接收方去除报文首部后，原封不动将报文交给上层应用

- TCP 只能点对点全双工通信。UDP 支持一对一、一对多、多对一和多对多的交互通信

两者应用场景如下图：

 ![](https://static.vue-js.com/b6cdd800-b393-11eb-ab90-d9ae814b240d.png)

可以看到，TCP 应用场景适用于对效率要求低，对准确性要求高或者要求有链接的场景，而UDP 适用场景为对效率要求高，对准确性要求低的场景


## 参考文献
- https://zh.wikipedia.org
- https://www.shangmayuan.com/a/a1e3ceb218284cefb95de7fd.html
- https://segmentfault.com/a/1190000021815671
- https://vue3js.cn/interview

# QUESTION：如何理解OSI七层模型?

 ![](https://static.vue-js.com/e2e1b910-b61e-11eb-ab90-d9ae814b240d.png)

## 一、是什么

OSI （Open System Interconnect）模型全称为开放式通信系统互连参考模型，是国际标准化组织 ( ISO ) 提出的一个试图使各种计算机在世界范围内互连为网络的标准框架

`OSI `将计算机网络体系结构划分为七层，每一层实现各自的功能和协议，并完成与相邻层的接口通信。即每一层扮演固定的角色，互不打扰


## 二、划分

`OSI`主要划分了七层，如下图所示：

 ![](https://static.vue-js.com/eb1b2170-b61e-11eb-ab90-d9ae814b240d.png)


### 应用层

应用层位于 OSI 参考模型的第七层，其作用是通过应用程序间的交互来完成特定的网络应用

该层协议定义了应用进程之间的交互规则，通过不同的应用层协议为不同的网络应用提供服务。例如域名系统 `DNS`，支持万维网应用的 `HTTP` 协议，电子邮件系统采用的 `SMTP `协议等

在应用层交互的数据单元我们称之为报文



### 表示层

表示层的作用是使通信的应用程序能够解释交换数据的含义，其位于 `OSI `参考模型的第六层，向上为应用层提供服务，向下接收来自会话层的服务

该层提供的服务主要包括数据压缩，数据加密以及数据描述，使应用程序不必担心在各台计算机中表示和存储的内部格式差异



### 会话层

会话层就是负责建立、管理和终止表示层实体之间的通信会话

该层提供了数据交换的定界和同步功能，包括了建立检查点和恢复方案的方法



### 传输层

传输层的主要任务是为两台主机进程之间的通信提供服务，处理数据包错误、数据包次序，以及其他一些关键传输问题

传输层向高层屏蔽了下层数据通信的细节。因此，它是计算机通信体系结构中关键的一层

其中，主要的传输层协议是`TCP`和`UDP`





### 网络层

两台计算机之间传送数据时其通信链路往往不止一条，所传输的信息甚至可能经过很多通信子网

网络层的主要任务就是选择合适的网间路由和交换节点，确保数据按时成功传送

在发送数据时，网络层把传输层产生的报文或用户数据报封装成分组和包，向下传输到数据链路层

在网络层使用的协议是无连接的网际协议（Internet Protocol）和许多路由协议，因此我们通常把该层简单地称为 IP 层



### 数据链路层

数据链路层通常也叫做链路层，在物理层和网络层之间。两台主机之间的数据传输，总是在一段一段的链路上传送的，这就需要使用专门的链路层协议

在两个相邻节点之间传送数据时，数据链路层将网络层交下来的 `IP `数据报组装成帧，在两个相邻节点间的链路上传送帧

每一帧的数据可以分成：报头`head`和数据`data`两部分:

- head 标明数据发送者、接受者、数据类型，如 MAC地址
- data 存储了计算机之间交互的数据

通过控制信息我们可以知道一个帧的起止比特位置，此外，也能使接收端检测出所收到的帧有无差错，如果发现差错，数据链路层能够简单的丢弃掉这个帧，以避免继续占用网络资源



### 物理层

作为` OSI` 参考模型中最低的一层，物理层的作用是实现计算机节点之间比特流的透明传送

该层的主要任务是确定与传输媒体的接口的一些特性（机械特性、电气特性、功能特性，过程特性）

该层主要是和硬件有关，与软件关系不大





## 三、传输过程

数据在各层之间的传输如下图所示：

 ![](https://static.vue-js.com/f3a89d40-b61e-11eb-85f6-6fac77c0c9b3.png)

- 应用层报文被传送到运输层
- 在最简单的情况下，运输层收取到报文并附上附加信息，该首部将被接收端的运输层使用
- 应用层报文和运输层首部信息一道构成了运输层报文段。附加的信息可能包括：允许接收端运输层向上向适当的应用程序交付报文的信息以及差错检测位信息。该信息让接收端能够判断报文中的比特是否在途中已被改变
- 运输层则向网络层传递该报文段，网络层增加了如源和目的端系统地址等网络层首部信息，生成了网络层数据报
- 网络层数据报接下来被传递给链路层，在数据链路层数据包添加发送端 MAC 地址和接收端 MAC 地址后被封装成数据帧
- 在物理层数据帧被封装成比特流，之后通过传输介质传送到对端
- 对端再一步步解开封装，获取到传送的数据





## 参考文献
- https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B
- https://zhuanlan.zhihu.com/p/32059190
- https://leetcode-cn.com/leetbook/detail/networks-interview-highlights/
- https://vue3js.cn/interview

# QUESTION：如何理解TCP/IP协议?

 ![](https://static.vue-js.com/4f69a930-b647-11eb-85f6-6fac77c0c9b3.png)



## 一、是什么

TCP/IP，**传输控制协议**/**网际协议**，是指能够在多个不同网络间实现信息传输的协议簇

- TCP（传输控制协议）

一种面向连接的、可靠的、基于字节流的传输层通信协议

- IP（网际协议）

用于封包交换数据网络的协议

TCP/IP协议不仅仅指的是`TCP `和`IP`两个协议，而是指一个由`FTP`、`SMTP`、`TCP`、`UDP`、`IP`等协议构成的协议簇，

只是因为在`TCP/IP`协议中`TCP`协议和`IP`协议最具代表性，所以通称为TCP/IP协议族（英语：TCP/IP Protocol Suite，或TCP/IP Protocols）


## 二、划分

TCP/IP协议族按层次分别了五层体系或者四层体系

五层体系的协议结构是综合了 OSI 和 TCP/IP 优点的一种协议，包括应用层、传输层、网络层、数据链路层和物理层

五层协议的体系结构只是为介绍网络原理而设计的，实际应用还是 TCP/IP 四层体系结构，包括应用层、传输层、网络层（网际互联层）、网络接口层

如下图所示：

 ![](https://static.vue-js.com/5bb93610-b647-11eb-85f6-6fac77c0c9b3.png)



### 五层体系

#### 应用层

`TCP/IP` 模型将 `OSI `参考模型中的会话层、表示层和应用层的功能合并到一个应用层实现，通过不同的应用层协议为不同的应用提供服务

如：`FTP`、`Telnet`、`DNS`、`SMTP` 等



#### 传输层

该层对应于 OSI 参考模型的传输层，为上层实体提供源端到对端主机的通信功能

传输层定义了两个主要协议：传输控制协议（TCP）和用户数据报协议（UDP）

其中面向连接的 TCP 协议保证了数据的传输可靠性，面向无连接的 UDP 协议能够实现数据包简单、快速地传输



#### 网络层

负责为分组网络中的不同主机提供通信服务，并通过选择合适的路由将数据传递到目标主机

在发送数据时，网络层把运输层产生的报文段或用户数据封装成分组或包进行传送



#### 数据链路层

数据链路层在两个相邻节点传输数据时，将网络层交下来的IP数据报组装成帧，在两个相邻节点之间的链路上传送帧



#### 物理层

保数据可以在各种物理媒介上进行传输，为数据的传输提供可靠的环境



### 四层体系

TCP/IP 的四层结构则如下表所示：

| 层次名称   | 单位   | 功 能                                                     | 协 议                                                        |
| ---------- | ------ | --------------------------------------------------------- | ------------------------------------------------------------ |
| 网络接口层 | 帧     | 负责实际数据的传输，对应OSI参考模型的下两层               | HDLC（高级链路控制协议）PPP（点对点协议） SLIP（串行线路接口协议） |
| 网络层     | 数据报 | 负责网络间的寻址数据传输，对应OSI参考模型的第三层         | IP（网际协议） ICMP（网际控制消息协议）ARP（地址解析协议） RARP（反向地址解析协议） |
| 传输层     | 报文段 | 负责提供可靠的传输服务，对应OSI参考模型的第四层           | TCP（控制传输协议） UDP（用户数据报协议）                    |
| 应用层     |        | 负责实现一切与应用程序相关的功能，对应OSI参考模型的上三层 | FTP（文件传输协议） HTTP（超文本传输协议） DNS（域名服务器协议）SMTP（简单邮件传输协议）NFS（网络文件系统协议） |



## 三、总结

OSI 参考模型与 TCP/IP 参考模型区别如下：

相同点：

- OSI 参考模型与 TCP/IP 参考模型都采用了层次结构
- 都能够提供面向连接和无连接两种通信服务机制

不同点：

- OSI 采用的七层模型； TCP/IP 是四层或五层结构
- TCP/IP 参考模型没有对网络接口层进行细分，只是一些概念性的描述； OSI 参考模型对服务和协议做了明确的区分
- OSI 参考模型虽然网络划分为七层，但实现起来较困难。TCP/IP 参考模型作为一种简化的分层结构是可以的

- TCP/IP协议去掉表示层和会话层的原因在于会话层、表示层、应用层都是在应用程序内部实现的，最终产出的是一个应用数据包，而应用程序之间是几乎无法实现代码的抽象共享的，这也就造成 `OSI` 设想中的应用程序维度的分层是无法实现的



三种模型对应关系如下图所示：

![](https://static.vue-js.com/3fbff4d0-b647-11eb-ab90-d9ae814b240d.png)





## 参考文献
- https://zh.wikipedia.org/wiki/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F
- https://zhuanlan.zhihu.com/p/103162095
- https://segmentfault.com/a/1190000039204681
- https://leetcode-cn.com/leetbook/detail/networks-interview-highlights/
- https://vue3js.cn/interview

# QUESTION：DNS协议 是什么？说说DNS 完整的查询过程?

 ![](https://static.vue-js.com/88081710-b78f-11eb-ab90-d9ae814b240d.png)



## 一、是什么

DNS（Domain Names System），域名系统，是互联网一项服务，是进行域名和与之相对应的 IP 地址进行转换的服务器

简单来讲，`DNS`相当于一个翻译官，负责将域名翻译成`ip`地址

- IP 地址：一长串能够唯一地标记网络上的计算机的数字
- 域名：是由一串用点分隔的名字组成的 Internet 上某一台计算机或计算机组的名称，用于在数据传输时对计算机的定位标识

 ![](https://static.vue-js.com/965a03a0-b78f-11eb-ab90-d9ae814b240d.png)





## 二、域名

域名是一个具有层次的结构，从上到下一次为根域名、顶级域名、二级域名、三级域名...

 ![](https://static.vue-js.com/9f112780-b78f-11eb-85f6-6fac77c0c9b3.png)

例如`www.xxx.com`，`www`为三级域名、`xxx`为二级域名、`com`为顶级域名，系统为用户做了兼容，域名末尾的根域名`.`一般不需要输入

在域名的每一层都会有一个域名服务器，如下图：

 ![](https://static.vue-js.com/f40e0090-b7a4-11eb-85f6-6fac77c0c9b3.png)

除此之外，还有电脑默认的本地域名服务器



## 三、查询方式

DNS 查询的方式有两种：

- 递归查询：如果 A 请求 B，那么 B 作为请求的接收者一定要给 A 想要的答案

 ![](https://static.vue-js.com/a73be9e0-b78f-11eb-85f6-6fac77c0c9b3.png)

- 迭代查询：如果接收者 B 没有请求者 A 所需要的准确内容，接收者 B 将告诉请求者 A，如何去获得这个内容，但是自己并不去发出请求

 ![](https://static.vue-js.com/b023e1c0-b78f-11eb-85f6-6fac77c0c9b3.png)



## 四、域名缓存

在域名服务器解析的时候，使用缓存保存域名和`IP`地址的映射

计算机中`DNS`的记录也分成了两种缓存方式：

- 浏览器缓存：浏览器在获取网站域名的实际 IP 地址后会对其进行缓存，减少网络请求的损耗
- 操作系统缓存：操作系统的缓存其实是用户自己配置的 `hosts` 文件



## 五、查询过程

解析域名的过程如下：

- 首先搜索浏览器的 DNS 缓存，缓存中维护一张域名与 IP 地址的对应表
- 若没有命中，则继续搜索操作系统的 DNS 缓存
- 若仍然没有命中，则操作系统将域名发送至本地域名服务器，本地域名服务器采用递归查询自己的 DNS 缓存，查找成功则返回结果
- 若本地域名服务器的 DNS 缓存没有命中，则本地域名服务器向上级域名服务器进行迭代查询
  - 首先本地域名服务器向根域名服务器发起请求，根域名服务器返回顶级域名服务器的地址给本地服务器
  - 本地域名服务器拿到这个顶级域名服务器的地址后，就向其发起请求，获取权限域名服务器的地址
  - 本地域名服务器根据权限域名服务器的地址向其发起请求，最终得到该域名对应的 IP 地址

- 本地域名服务器将得到的 IP 地址返回给操作系统，同时自己将 IP 地址缓存起来

- 操作系统将 IP 地址返回给浏览器，同时自己也将 IP 地址缓存起

- 至此，浏览器就得到了域名对应的 IP 地址，并将 IP 地址缓存起

流程如下图所示：

 ![](https://static.vue-js.com/bec3c740-b78f-11eb-ab90-d9ae814b240d.png)



## 参考文献
- https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F
- https://www.cnblogs.com/jmilkfan-fanguiju/p/12789677.html
- https://segmentfault.com/a/1190000039039275
- https://vue3js.cn/interview

# QUESTION：如何理解CDN？说说实现原理？

![](https://static.vue-js.com/437ae0f0-b86b-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

CDN (全称 Content Delivery Network)，即内容分发网络

构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。`CDN` 的关键技术主要有内容存储和分发技术

简单来讲，`CDN`就是根据用户位置分配最近的资源

于是，用户在上网的时候不用直接访问源站，而是访问离他“最近的”一个 CDN 节点，术语叫**边缘节点**，其实就是缓存了源站内容的代理服务器。如下图：

 ![](https://static.vue-js.com/4f0289f0-b86b-11eb-85f6-6fac77c0c9b3.png)



## 二、原理分析

在没有应用`CDN`时，我们使用域名访问某一个站点时的路径为
> 用户提交域名→浏览器对域名进行解释→`DNS` 解析得到目的主机的IP地址→根据IP地址访问发出请求→得到请求数据并回复

应用`CDN`后，`DNS` 返回的不再是 `IP` 地址，而是一个`CNAME`(Canonical Name ) 别名记录，指向`CDN`的全局负载均衡

`CNAME`实际上在域名解析的过程中承担了中间人（或者说代理）的角色，这是`CDN`实现的关键

#### 负载均衡系统

由于没有返回`IP`地址，于是本地`DNS`会向负载均衡系统再发送请求  ，则进入到`CDN`的全局负载均衡系统进行智能调度：

- 看用户的 IP 地址，查表得知地理位置，找相对最近的边缘节点
- 看用户所在的运营商网络，找相同网络的边缘节点

- 检查边缘节点的负载情况，找负载较轻的节点
- 其他，比如节点的“健康状况”、服务能力、带宽、响应时间等

结合上面的因素，得到最合适的边缘节点，然后把这个节点返回给用户，用户就能够就近访问`CDN`的缓存代理

整体流程如下图：

 ![](https://static.vue-js.com/588d7890-b86b-11eb-85f6-6fac77c0c9b3.png)



#### 缓存代理

缓存系统是 `CDN `的另一个关键组成部分，缓存系统会有选择地缓存那些最常用的那些资源

其中有两个衡量`CDN`服务质量的指标：

- 命中率：用户访问的资源恰好在缓存系统里，可以直接返回给用户，命中次数与所有访问次数之比
- 回源率：缓存里没有，必须用代理的方式回源站取，回源次数与所有访问次数之比

缓存系统也可以划分出层次，分成一级缓存节点和二级缓存节点。一级缓存配置高一些，直连源站，二级缓存配置低一些，直连用户

回源的时候二级缓存只找一级缓存，一级缓存没有才回源站，可以有效地减少真正的回源

现在的商业 `CDN`命中率都在 90% 以上，相当于把源站的服务能力放大了 10 倍以上



## 三、总结
`CDN` 目的是为了改善互联网的服务质量，通俗一点说其实就是提高访问速度

`CDN` 构建了全国、全球级别的专网，让用户就近访问专网里的边缘节点，降低了传输延迟，实现了网站加速

通过`CDN`的负载均衡系统，智能调度边缘节点提供服务，相当于`CDN`服务的大脑，而缓存系统相当于`CDN`的心脏，缓存命中直接返回给用户，否则回源



## 参考文献

- https://zh.wikipedia.org/wiki/內容傳遞網路
- https://juejin.cn/post/6844903890706661389#heading-5
- https://blog.csdn.net/lxx309707872/article/details/109078783

# QUESTION：说说 HTTP1.0/1.1/2.0 的区别?

 ![](https://static.vue-js.com/e167a580-b93a-11eb-ab90-d9ae814b240d.png)

## 一、HTTP1.0
`HTTP`协议的第二个版本，第一个在通讯中指定版本号的HTTP协议版本

`HTTP 1.0` 浏览器与服务器只保持短暂的连接，每次请求都需要与服务器建立一个`TCP`连接

服务器完成请求处理后立即断开`TCP`连接，服务器不跟踪每个客户也不记录过去的请求

简单来讲，每次与服务器交互，都需要新开一个连接

 ![](https://static.vue-js.com/efff4da0-b93a-11eb-85f6-6fac77c0c9b3.png)

例如，解析`html`文件，当发现文件中存在资源文件的时候，这时候又创建单独的链接

最终导致，一个`html`文件的访问包含了多次的请求和响应，每次请求都需要创建连接、关系连接

这种形式明显造成了性能上的缺陷

如果需要建立长连接，需要设置一个非标准的Connection字段 `Connection: keep-alive`


## 二、HTTP1.1

在`HTTP1.1`中，默认支持长连接（`Connection: keep-alive`），即在一个TCP连接上可以传送多个`HTTP`请求和响应，减少了建立和关闭连接的消耗和延迟

建立一次连接，多次请求均由这个连接完成

 ![](https://static.vue-js.com/22db2b90-b93b-11eb-ab90-d9ae814b240d.png)

这样，在加载`html`文件的时候，文件中多个请求和响应就可以在一个连接中传输

同时，`HTTP 1.1`还允许客户端不用等待上一次请求结果返回，就可以发出下一次请求，但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容，这样也显著地减少了整个下载过程所需要的时间

同时，`HTTP1.1`在`HTTP1.0`的基础上，增加更多的请求头和响应头来完善的功能，如下：

- 引入了更多的缓存控制策略，如If-Unmodified-Since, If-Match, If-None-Match等缓存头来控制缓存策略
- 引入range，允许值请求资源某个部分
- 引入host，实现了在一台WEB服务器上可以在同一个IP地址和端口号上使用不同的主机名来创建多个虚拟WEB站点

并且还添加了其他的请求方法：`put`、`delete`、`options`...





## 三、HTTP2.0

而`HTTP2.0`在相比之前版本，性能上有很大的提升，如添加了一个特性：

- 多路复用
- 二进制分帧
- 首部压缩
- 服务器推送



### 多路复用

`HTTP/2` 复用`TCP`连接，在一个连接里，客户端和浏览器都可以**同时**发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了”队头堵塞”

 ![](https://static.vue-js.com/313f1980-b93b-11eb-85f6-6fac77c0c9b3.png)

上图中，可以看到第四步中`css`、`js`资源是同时发送到服务端



### 二进制分帧

帧是`HTTP2`通信中最小单位信息

`HTTP/2` 采用二进制格式传输数据，而非 `HTTP 1.x `的文本格式，解析起来更高效

将请求和响应数据分割为更小的帧，并且它们采用二进制编码

`HTTP2 `中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流

每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装，这也是多路复用同时发送数据的实现条件



### 首部压缩

`HTTP/2`在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送

首部表在`HTTP/2`的连接存续期内始终存在，由客户端和服务器共同渐进地更新

例如：下图中的两个请求， 请求一发送了所有的头部字段，第二个请求则只需要发送差异数据，这样可以减少冗余数据，降低开销

 ![](https://static.vue-js.com/3c536740-b93b-11eb-ab90-d9ae814b240d.png)

### 服务器推送

`HTTP2`引入服务器推送，允许服务端推送资源给客户端

服务器会顺便把一些客户端需要的资源一起推送到客户端，如在响应一个页面请求中，就可以随同页面的其它资源

免得客户端再次创建连接发送请求到服务器端获取

这种方式非常合适加载静态资源

 ![](https://static.vue-js.com/47130550-b93b-11eb-85f6-6fac77c0c9b3.png)



## 四、总结

HTTP1.0：

- 浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接

HTTP1.1：

- 引入了持久连接，即TCP连接默认不关闭，可以被多个请求复用
- 在同一个TCP连接里面，客户端可以同时发送多个请求
- 虽然允许复用TCP连接，但是同一个TCP连接里面，所有的数据通信是按次序进行的，服务器只有处理完一个请求，才会接着处理下一个请求。如果前面的处理特别慢，后面就会有许多请求排队等着
- 新增了一些请求方法
- 新增了一些请求头和响应头

HTTP2.0：

- 采用二进制格式而非文本格式
- 完全多路复用，而非有序并阻塞的、只需一个连接即可实现并行
- 使用报头压缩，降低开销
- 服务器推送





## 参考文献
- https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE#HTTP/1.0
- https://www.jianshu.com/p/52d86558ca57
- https://segmentfault.com/a/1190000016496448
- https://zhuanlan.zhihu.com/p/26559480

# QUESTION：说说HTTP 常见的状态码有哪些，适用场景？

 ![](https://static.vue-js.com/038831d0-bbc9-11eb-ab90-d9ae814b240d.png)

## 一、是什么

HTTP状态码（英语：HTTP Status Code），用以表示网页服务器超文本传输协议响应状态的3位数字代码

它由 RFC 2616规范定义的，并得到 `RFC 2518`、`RFC 2817`、`RFC 2295`、`RFC 2774`与 `RFC 4918`等规范扩展

简单来讲，`http`状态码的作用是服务器告诉客户端当前请求响应的状态，通过状态码就能判断和分析服务器的运行状态



## 二、分类

状态码第一位数字决定了不同的响应状态，有如下：

- 1 表示消息
- 2 表示成功
- 3 表示重定向
- 4 表示请求错误
- 5 表示服务器错误



### 1xx

代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束

常见的有：

- 100（客户端继续发送请求，这是临时响应）：这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求完成后向客户端发送一个最终响应
- 101：服务器根据客户端的请求切换协议，主要用于websocket或http2升级





### 2xx

代表请求已成功被服务器接收、理解、并接受

常见的有：

- 200（成功）：请求已成功，请求所希望的响应头或数据体将随此响应返回
- 201（已创建）：请求成功并且服务器创建了新的资源

- 202（已创建）：服务器已经接收请求，但尚未处理
- 203（非授权信息）：服务器已成功处理请求，但返回的信息可能来自另一来源
- 204（无内容）：服务器成功处理请求，但没有返回任何内容
- 205（重置内容）：服务器成功处理请求，但没有返回任何内容
- 206（部分内容）：服务器成功处理了部分请求



### 3xx

表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向

常见的有：

- 300（多种选择）：针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择
- 301（永久移动）：请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置
- 302（临时移动）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求
- 303（查看其他位置）：请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码

- 305 （使用代理）： 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理
- 307 （临时重定向）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求



### 4xx

代表了客户端看起来可能发生了错误，妨碍了服务器的处理

常见的有：

- 400（错误请求）： 服务器不理解请求的语法
- 401（未授权）： 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
- 403（禁止）： 服务器拒绝请求
- 404（未找到）： 服务器找不到请求的网页
- 405（方法禁用）： 禁用请求中指定的方法
- 406（不接受）： 无法使用请求的内容特性响应请求的网页
- 407（需要代理授权）： 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理
- 408（请求超时）： 服务器等候请求时发生超时



### 5xx

表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生

常见的有：

- 500（服务器内部错误）：服务器遇到错误，无法完成请求
- 501（尚未实施）：服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码
- 502（错误网关）： 服务器作为网关或代理，从上游服务器收到无效响应
- 503（服务不可用）： 服务器目前无法使用（由于超载或停机维护）
- 504（网关超时）： 服务器作为网关或代理，但是没有及时从上游服务器收到请求
- 505（HTTP 版本不受支持）： 服务器不支持请求中所用的 HTTP 协议版本



## 三、适用场景

下面给出一些状态码的适用场景：

- 100：客户端在发送POST数据给服务器前，征询服务器情况，看服务器是否处理POST的数据，如果不处理，客户端则不上传POST数据，如果处理，则POST上传数据。常用于POST大数据传输

- 206：一般用来做断点续传，或者是视频文件等大文件的加载

- 301：永久重定向会缓存。新域名替换旧域名，旧的域名不再使用时，用户访问旧域名时用301就重定向到新的域名

- 302：临时重定向不会缓存，常用 于未登陆的用户访问用户中心重定向到登录页面
- 304：协商缓存，告诉客户端有缓存，直接使用缓存中的数据，返回页面的只有头部信息，是没有内容部分
- 400：参数有误，请求无法被服务器识别
- 403：告诉客户端进制访问该站点或者资源，如在外网环境下，然后访问只有内网IP才能访问的时候则返回
- 404：服务器找不到资源时，或者服务器拒绝请求又不想说明理由时
- 503：服务器停机维护时，主动用503响应请求或 nginx 设置限速，超过限速，会返回503

- 504：网关超时




## 参考文献

- https://zh.wikipedia.org/wiki/HTTP状态码
- https://kebingzao.com/2018/10/05/http-status-code/
- https://vue3js.cn/interview

# QUESTION：说一下 GET 和 POST 的区别？

 ![](https://static.vue-js.com/6e8d19e0-bc3d-11eb-ab90-d9ae814b240d.png)



## 一、是什么

`GET`和`POST`，两者是`HTTP`协议中发送请求的方法

#### GET

`GET`方法请求一个指定资源的表示形式，使用GET的请求应该只被用于获取数据

#### POST
`POST`方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或**副作用**

本质上都是`TCP`链接，并无差别

但是由于`HTTP`的规定和浏览器/服务器的限制，导致他们在应用过程中会体现出一些区别

## 二、区别

从`w3schools`得到的标准答案的区别如下：

- GET在浏览器回退时是无害的，而POST会再次提交请求。
- GET产生的URL地址可以被Bookmark，而POST不可以。
- GET请求会被浏览器主动cache，而POST不会，除非手动设置。
- GET请求只能进行url编码，而POST支持多种编码方式。
- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
- GET请求在URL中传送的参数是有长度限制的，而POST没有。
- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
- GET参数通过URL传递，POST放在Request body中


### 参数位置

貌似从上面看到`GET`与`POST`请求区别非常大，但两者实质并没有区别

无论 `GET `还是 `POST`，用的都是同一个传输层协议，所以在传输上没有区别

当不携带参数的时候，两者最大的区别为第一行方法名不同

> POST /uri HTTP/1.1 \r\n
>
> GET /uri HTTP/1.1 \r\n

当携带参数的时候，我们都知道`GET`请求是放在`url`中，`POST`则放在`body`中

`GET` 方法简约版报文是这样的

```
GET /index.html?name=qiming.c&age=22 HTTP/1.1
Host: localhost
```

`POST `方法简约版报文是这样的

```
POST /index.html HTTP/1.1
Host: localhost
Content-Type: application/x-www-form-urlencoded

name=qiming.c&age=22
```

注意：这里只是约定，并不属于`HTTP`规范，相反的，我们可以在`POST`请求中`url`中写入参数，或者`GET`请求中的`body`携带参数


### 参数长度

`HTTP `协议没有` Body `和 `URL` 的长度限制，对 `URL `限制的大多是浏览器和服务器的原因

`IE`对`URL`长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系统的支持

这里限制的是整个`URL`长度，而不仅仅是参数值的长度

服务器处理长` URL` 要消耗比较多的资源，为了性能和安全考虑，会给 `URL` 长度加限制

### 安全

`POST `比` GET` 安全，因为数据在地址栏上不可见

然而，从传输的角度来说，他们都是不安全的，因为` HTTP` 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文

只有使用`HTTPS`才能加密安全


### 数据包

对于`GET`方式的请求，浏览器会把`http header`和`data`一并发送出去，服务器响应200（返回数据）

对于`POST`，浏览器先发送`header`，服务器响应100 `continue`，浏览器再发送`data`，服务器响应200 ok

并不是所有浏览器都会在`POST`中发送两次包，`Firefox`就只发送一次



## 参考文献

- https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd
- https://blog.fundebug.com/2019/02/22/compare-http-method-get-and-post/
- https://www.w3school.com.cn/tags/html_ref_httpmethods.asp
- https://vue3js.cn/interview

# QUESTION：说说 HTTP 常见的请求头有哪些? 作用？

 ![](https://static.vue-js.com/964abb00-bc69-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

HTTP头字段（HTTP header fields）,是指在超文本传输协议（HTTP）的请求和响应消息中的消息头部分

它们定义了一个超文本传输协议事务中的操作参数

HTTP头部字段可以自己根据需要定义，因此可能在 `Web `服务器和浏览器上发现非标准的头字段

下面是一个`HTTP`请求的请求头：

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```


## 二、分类

常见的请求字段如下表所示：

| 字段名            | 说明                                                         | 示例                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Accept            | 能够接受的回应内容类型（Content-Types）                      | Accept: text/plain                                           |
| Accept-Charset    | 能够接受的字符集                                             | Accept-Charset: utf-8                                        |
| Accept-Encoding   | 能够接受的编码方式列表                                       | Accept-Encoding: gzip, deflate                               |
| Accept-Language   | 能够接受的回应内容的自然语言列表                             | Accept-Language: en-US                                       |
| Authorization     | 用于超文本传输协议的认证的认证信息                           | Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==            |
| Cache-Control     | 用来指定在这次的请求/响应链中的所有缓存机制 都必须 遵守的指令 | Cache-Control: no-cache                                      |
| Connection        | 该浏览器想要优先使用的连接类型                               | Connection: keep-alive Connection: Upgrade                   |
| Cookie            | 服务器通过 Set- Cookie （下文详述）发送的一个 超文本传输协议Cookie | Cookie: $Version=1; Skin=new;                                |
| Content-Length    | 以 八位字节数组 （8位的字节）表示的请求体的长度              | Content-Length: 348                                          |
| Content-Type      | 请求体的 多媒体类型                                          | Content-Type: application/x-www-form-urlencoded              |
| Date              | 发送该消息的日期和时间                                       | Date: Tue, 15 Nov 1994 08:12:31 GMT                          |
| Expect            | 表明客户端要求服务器做出特定的行为                           | Expect: 100-continue                                         |
| Host              | 服务器的域名(用于虚拟主机 )，以及服务器所监听的传输控制协议端口号 | Host: en.wikipedia.org:80 Host: en.wikipedia.org             |
| If-Match          | 仅当客户端提供的实体与服务器上对应的实体相匹配时，才进行对应的操作。主要作用时，用作像 PUT 这样的方法中，仅当从用户上次更新某个资源以来，该资源未被修改的情况下，才更新该资源 | If-Match: "737060cd8c284d8af7ad3082f209582d"                 |
| If-Modified-Since | 允许在对应的内容未被修改的情况下返回304未修改                | If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT             |
| If-None-Match     | 允许在对应的内容未被修改的情况下返回304未修改                | If-None-Match: "737060cd8c284d8af7ad3082f209582d"            |
| If-Range          | 如果该实体未被修改过，则向我发送我所缺少的那一个或多个部分；否则，发送整个新的实体 | If-Range: "737060cd8c284d8af7ad3082f209582d"                 |
| Range             | 仅请求某个实体的一部分                                       | Range: bytes=500-999                                         |
| User-Agent        | 浏览器的浏览器身份标识字符串                                 | User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0 |
| Origin            | 发起一个针对 跨来源资源共享 的请求                           | Origin: http://www.example-social-network.com                |





## 三、使用场景

通过配合请求头和响应头，可以满足一些场景的功能实现：

### 协商缓存

协商缓存是利用的是`【Last-Modified，If-Modified-Since】`和`【ETag、If-None-Match】`这两对请求头响应头来管理的

`Last-Modified` 表示本地文件最后修改日期，浏览器会在request header加上`If-Modified-Since`（上次返回的`Last-Modified`的值），询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来

`Etag`就像一个指纹，资源变化都会导致`ETag`变化，跟最后修改时间没有关系，`ETag`可以保证每一个资源是唯一的

`If-None-Match`的header会将上次返回的`Etag`发送给服务器，询问该资源的`Etag`是否有更新，有变动就会发送新的资源回来

而强制缓存不需要发送请求到服务端，根据请求头`expires`和`cache-control`判断是否命中强缓存

强制缓存与协商缓存的流程图如下所示：

 ![](https://static.vue-js.com/a4065b00-bc69-11eb-85f6-6fac77c0c9b3.png)



### 会话状态

`cookie`，类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据，通过响应头`set-cookie`决定

作为一段一般不超过 4KB 的小型文本数据，它由一个名称（Name）、一个值（Value）和其它几个用于控制 `Cookie `有效期、安全性、使用范围的可选属性组成

`Cookie` 主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等



## 参考文献

- https://zh.wikipedia.org/wiki/HTTP头字段
- https://github.com/amandakelake/blog/issues/41

# QUESTION：说说地址栏输入 URL 敲下回车后发生了什么?

 ![](https://static.vue-js.com/11bf1f20-bdf4-11eb-85f6-6fac77c0c9b3.png)


## 一、简单分析

简单的分析，从输入 `URL`到回车后发生的行为如下：

- URL解析
- DNS 查询
- TCP 连接
- HTTP 请求
- 响应请求
- 页面渲染


## 二、详细分析

### URL解析

首先判断你输入的是一个合法的` URL` 还是一个待搜索的关键词，并且根据你输入的内容进行对应操作

`URL`的解析第过程中的第一步，一个`url`的结构解析如下：

 ![](https://static.vue-js.com/27a0c690-bdf4-11eb-ab90-d9ae814b240d.png)



### DNS查询

在之前文章中讲过`DNS`的查询，这里就不再讲述了

整个查询过程如下图所示：

 ![](https://static.vue-js.com/330fb770-bdf4-11eb-85f6-6fac77c0c9b3.png)

最终，获取到了域名对应的目标服务器`IP`地址



### TCP连接

在之前文章中，了解到`tcp`是一种面向有连接的传输层协议

在确定目标服务器服务器的`IP`地址后，则经历三次握手建立`TCP`连接，流程如下：

 ![](https://static.vue-js.com/ad750790-bdf4-11eb-85f6-6fac77c0c9b3.png)





### 发送 http 请求

当建立`tcp`连接之后，就可以在这基础上进行通信，浏览器发送 `http` 请求到目标服务器

请求的内容包括：

- 请求行
- 请求头
- 请求主体

 ![](https://static.vue-js.com/bbcb60f0-bdf4-11eb-ab90-d9ae814b240d.png)



### 响应请求

当服务器接收到浏览器的请求之后，就会进行逻辑操作，处理完成之后返回一个`HTTP`响应消息，包括：

- 状态行
- 响应头
- 响应正文

 ![](https://static.vue-js.com/c5fe0140-bdf4-11eb-ab90-d9ae814b240d.png)

在服务器响应之后，由于现在`http`默认开始长连接`keep-alive`，当页面关闭之后，`tcp`链接则会经过四次挥手完成断开



### 页面渲染

当浏览器接收到服务器响应的资源后，首先会对资源进行解析：

- 查看响应头的信息，根据不同的指示做对应处理，比如重定向，存储cookie，解压gzip，缓存资源等等
- 查看响应头的 Content-Type的值，根据不同的资源类型采用不同的解析方式

关于页面的渲染过程如下：

- 解析HTML，构建 DOM 树
- 解析 CSS ，生成 CSS 规则树
- 合并 DOM 树和 CSS 规则，生成 render 树
- 布局 render 树（ Layout / reflow ），负责各元素尺寸、位置的计算
- 绘制 render 树（ paint ），绘制页面像素信息
- 浏览器会将各层的信息发送给 GPU，GPU 会将各层合成（ composite ），显示在屏幕上

 ![](https://static.vue-js.com/db7bddd0-bdf4-11eb-85f6-6fac77c0c9b3.png)



## 参考文献

- https://github.com/febobo/web-interview/issues/141
- https://zhuanlan.zhihu.com/p/80551769

# QUESTION：说说TCP为什么需要三次握手和四次挥手？

 ![](https://static.vue-js.com/ef4696a0-beb9-11eb-ab90-d9ae814b240d.png)

## 一、三次握手

三次握手（Three-way Handshake）其实就是指建立一个TCP连接时，需要客户端和服务器总共发送3个包

主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备

过程如下：

- 第一次握手：客户端给服务端发一个 SYN 报文，并指明客户端的初始化序列号 ISN(c)，此时客户端处于  SYN_SENT 状态
- 第二次握手：服务器收到客户端的 SYN 报文之后，会以自己的 SYN 报文作为应答，为了确认客户端的 SYN，将客户端的 ISN+1作为ACK的值，此时服务器处于 SYN_RCVD  的状态
- 第三次握手：客户端收到 SYN 报文之后，会发送一个 ACK 报文，值为服务器的ISN+1。此时客户端处于 ESTABLISHED 状态。服务器收到 ACK 报文之后，也处于 ESTABLISHED  状态，此时，双方已建立起了连接

 ![](https://static.vue-js.com/fb489fc0-beb9-11eb-85f6-6fac77c0c9b3.png)

上述每一次握手的作用如下：

- 第一次握手：客户端发送网络包，服务端收到了
  这样服务端就能得出结论：客户端的发送能力、服务端的接收能力是正常的。
- 第二次握手：服务端发包，客户端收到了
  这样客户端就能得出结论：服务端的接收、发送能力，客户端的接收、发送能力是正常的。不过此时服务器并不能确认客户端的接收能力是否正常
- 第三次握手：客户端发包，服务端收到了。
  这样服务端就能得出结论：客户端的接收、发送能力正常，服务器自己的发送、接收能力也正常

通过三次握手，就能确定双方的接收和发送能力是正常的。之后就可以正常通信了


### 为什么不是两次握手?

如果是两次握手，发送端可以确定自己发送的信息能对方能收到，也能确定对方发的包自己能收到，但接收端只能确定对方发的包自己能收到 无法确定自己发的包对方能收到

并且两次握手的话, 客户端有可能因为网络阻塞等原因会发送多个请求报文，延时到达的请求又会与服务器建立连接，浪费掉许多服务器的资源



## 二、四次挥手

`tcp`终止一个连接，需要经过四次挥手

过程如下：

- 第一次挥手：客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于  FIN_WAIT1 状态，停止发送数据，等待服务端的确认
- 第二次挥手：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT状态
- 第三次挥手：如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号。此时服务端处于 `LAST_ACK` 的状态
- 第四次挥手：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 +1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态

 ![](https://static.vue-js.com/0a3ebb90-beba-11eb-85f6-6fac77c0c9b3.png)



### 四次挥手原因

服务端在收到客户端断开连接`Fin`报文后，并不会立即关闭连接，而是先发送一个`ACK`包先告诉客户端收到关闭连接的请求，只有当服务器的所有报文发送完毕之后，才发送`FIN`报文断开连接，因此需要四次挥手





## 三、总结

一个完整的三次握手四次挥手如下图所示：

 ![](https://static.vue-js.com/65941490-beba-11eb-85f6-6fac77c0c9b3.png)



## 参考文献

- https://zhuanlan.zhihu.com/p/53374516
- https://segmentfault.com/a/1190000020610336

# QUESTION：说说对WebSocket的理解？应用场景？

 ![](https://static.vue-js.com/a358a8c0-c0f1-11eb-ab90-d9ae814b240d.png)

## 一、是什么

WebSocket，是一种网络传输协议，位于`OSI`模型的应用层。可在单个`TCP`连接上进行全双工通信，能更好的节省服务器资源和带宽并达到实时通迅

客户端和服务器只需要完成一次握手，两者之间就可以创建持久性的连接，并进行双向数据传输

 ![](https://static.vue-js.com/ad386e20-c0f1-11eb-85f6-6fac77c0c9b3.png)

从上图可见，`websocket`服务器与客户端通过握手连接，连接成功后，两者都能主动的向对方发送或接受数据

而在`websocket`出现之前，开发实时`web`应用的方式为轮询

不停地向服务器发送 HTTP 请求，问有没有数据，有数据的话服务器就用响应报文回应。如果轮询的频率比较高，那么就可以近似地实现“实时通信”的效果

轮询的缺点也很明显，反复发送无效查询请求耗费了大量的带宽和 `CPU `资源



## 二、特点



### 全双工

通信允许数据在两个方向上同时传输，它在能力上相当于两个单工通信方式的结合

例如指 A→B 的同时 B→A ，是瞬时同步的



### 二进制帧

采用了二进制帧结构，语法、语义与 HTTP 完全不兼容，相比`http/2`，`WebSocket `更侧重于“实时通信”，而`HTTP/2` 更侧重于提高传输效率，所以两者的帧结构也有很大的区别

不像 `HTTP/2` 那样定义流，也就不存在多路复用、优先级等特性

自身就是全双工，也不需要服务器推送





### 协议名

引入`ws`和`wss`分别代表明文和密文的`websocket`协议，且默认端口使用80或443，几乎与`http`一致

```http
ws://www.chrono.com
ws://www.chrono.com:8080/srv
wss://www.chrono.com:445/im?user_id=xxx
```



### 握手

`WebSocket `也要有一个握手过程，然后才能正式收发数据

客户端发送数据格式如下：

```http
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Origin: http://example.com
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

- Connection：必须设置Upgrade，表示客户端希望连接升级
- Upgrade：必须设置Websocket，表示希望升级到Websocket协议
- Sec-WebSocket-Key：客户端发送的一个 base64 编码的密文，用于简单的认证秘钥。要求服务端必须返回一个对应加密的“Sec-WebSocket-Accept应答，否则客户端会抛出错误，并关闭连接
- Sec-WebSocket-Version ：表示支持的Websocket版本

服务端返回的数据格式：

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=Sec-WebSocket-Protocol: chat
```

- HTTP/1.1 101 Switching Protocols：表示服务端接受 WebSocket 协议的客户端连接
- Sec-WebSocket-Accep：验证客户端请求报文，同样也是为了防止误连接。具体做法是把请求头里“Sec-WebSocket-Key”的值，加上一个专用的 UUID，再计算摘要



### 优点

- 较少的控制开销：数据包头部协议较小，不同于http每次请求需要携带完整的头部
- 更强的实时性：相对于HTTP请求需要等待客户端发起请求服务端才能响应，延迟明显更少
- 保持创连接状态：创建通信后，可省略状态信息，不同于HTTP每次请求需要携带身份验证
- 更好的二进制支持：定义了二进制帧，更好处理二进制内容
- 支持扩展：用户可以扩展websocket协议、实现部分自定义的子协议
- 更好的压缩效果：Websocket在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率



## 二、应用场景

基于`websocket`的事实通信的特点，其存在的应用场景大概有：

- 弹幕
- 媒体聊天
- 协同编辑
- 基于位置的应用
- 体育实况更新
- 股票基金报价实时更新



## 参考文献

- https://zh.wikipedia.org/wiki/WebSocket
- https://www.oschina.net/translate/9-killer-uses-for-websockets
- https://vue3js.cn/interview