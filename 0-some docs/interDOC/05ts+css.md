# ts
# QUESTION：说说你对 TypeScript 的理解？与 JavaScript 的区别？

![](https://static.vue-js.com/58cd3580-0950-11ec-8e64-91fdec0f05a1.png)

## 一、是什么

`TypeScript` 是 `JavaScript` 的类型的超集，支持`ES6`语法，支持面向对象编程的概念，如类、接口、继承、泛型等

> 超集，不得不说另外一个概念，子集，怎么理解这两个呢，举个例子，如果一个集合 A 里面的的所有元素集合 B 里面都存在，那么我们可以理解集合 B 是集合 A 的超集，集合 A 为集合 B 的子集

![](https://static.vue-js.com/61c2c1f0-0950-11ec-a752-75723a64e8f5.png)

其是一种静态类型检查的语言，提供了类型注解，在代码编译阶段就可以检查出数据类型的错误

同时扩展了` JavaScript` 的语法，所以任何现有的` JavaScript` 程序可以不加改变的在 `TypeScript` 下工作

为了保证兼容性，`TypeScript` 在编译阶段需要编译器编译成纯 `JavaScript` 来运行，是为大型应用之开发而设计的语言，如下：

`ts` 文件如下：

```ts
const hello: string = "Hello World!";
console.log(hello);
```

编译文件后：

```js
const hello = "Hello World!";
console.log(hello);
```

## 二、特性

`TypeScript` 的特性主要有如下：

- **类型批注和编译时类型检查** ：在编译时批注变量类型
- **类型推断**：ts 中没有批注变量类型会自动推断变量的类型
- **类型擦除**：在编译过程中批注的内容和接口会在运行时利用工具擦除
- **接口**：ts 中用接口来定义对象类型
- **枚举**：用于取值被限定在一定范围内的场景
- **Mixin**：可以接受任意类型的值
- **泛型编程**：写代码时使用一些以后才指定的类型
- **名字空间**：名字只在该区域内有效，其他区域可重复使用该名字而不冲突
- **元组**：元组合并了不同类型的对象，相当于一个可以装不同类型数据的数组
- ...

### 类型批注

通过类型批注提供在编译时启动类型检查的静态类型，这是可选的，而且可以忽略而使用 `JavaScript` 常规的动态类型

```tsx
function Add(left: number, right: number): number {
  return left + right;
}
```

对于基本类型的批注是 `number`、`bool` 和 `string`，而弱或动态类型的结构则是 `any` 类型

### 类型推断

当类型没有给出时，TypeScript 编译器利用类型推断来推断类型，如下：

```ts
let str = "string";
```

变量 `str` 被推断为字符串类型，这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时

如果缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 `any` 类型

### 接口

接口简单来说就是用来描述对象的类型 数据的类型有 `number`、`null`、` string` 等数据格式，对象的类型就是用接口来描述的

```tsx
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: "Tom",
  age: 25,
};
```

## 三、区别

- TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法
- TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译
- TypeScript 文件的后缀名 .ts （.ts，.tsx，.dts），JavaScript 文件是 .js
- 在编写 TypeScript 的文件的时候就会自动编译成 js 文件

更多的区别如下图所示：

![](https://static.vue-js.com/6b544040-0950-11ec-8e64-91fdec0f05a1.png)

## 参考文献

- [https://zhuanlan.zhihu.com/p/140012915](https://zhuanlan.zhihu.com/p/140012915)
- [https://www.jianshu.com/p/c8aaba6e8ce0](https://www.jianshu.com/p/c8aaba6e8ce0)
- [https://www.cnblogs.com/powertoolsteam/p/13500668.html](https://www.cnblogs.com/powertoolsteam/p/13500668.html)


# QUESTION：说说 typescript 的数据类型有哪些？

 ![](https://static.vue-js.com/d88f9450-0998-11ec-a752-75723a64e8f5.png)



## 一、是什么

`typescript` 和 `javascript`几乎一样，拥有相同的数据类型，另外在`javascript`基础上提供了更加实用的类型供开发使用

在开发阶段，可以为明确的变量定义为某种类型，这样`typescript`就能在编译阶段进行类型检查，当类型不合符预期结果的时候则会出现错误提示



## 二、有哪些

`typescript` 的数据类型主要有如下：

- boolean（布尔类型）
- number（数字类型）
- string（字符串类型）
- array（数组类型）
- tuple（元组类型）
- enum（枚举类型）
- any（任意类型）
- null 和 undefined 类型
- void 类型
- never 类型
- object 对象类型



### boolean

布尔类型

```tsx
let flag:boolean = true;
// flag = 123; // 错误
flag = false;  //正确
```



### number

数字类型，和`javascript`一样，`typescript`的数值类型都是浮点数，可支持二进制、八进制、十进制和十六进制

```tsx
let num:number = 123;
// num = '456'; // 错误
num = 456;  //正确
```

进制表示：

```tsx
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
```



### string

字符串类型，和`JavaScript`一样，可以使用双引号（`"`）或单引号（`'`）表示字符串

```tsx
let str:string = 'this is ts';
str = 'test';
```

作为超集，当然也可以使用模版字符串``进行包裹，通过 ${} 嵌入变量

```tsx
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }
```



### array

数组类型，跟`javascript`一致，通过`[]`进行包裹，有两种写法：

方式一：元素类型后面接上 `[]`

 ```tsx
  let arr:string[] = ['12', '23'];
  arr = ['45', '56'];
 ```

方式二：使用数组泛型，`Array<元素类型>`：

  ```tsx
  let arr:Array<number> = [1, 2];
  arr = ['45', '56'];
  ```



### tuple

元祖类型，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

```tsx
let tupleArr:[number, string, boolean];
tupleArr = [12, '34', true]; //ok
typleArr = [12, '34'] // no ok
```

赋值的类型、位置、个数需要和定义（生明）的类型、位置、个数一致



### enum

`enum`类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字

```tsx
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```



### any

可以指定任何类型的值，在编程阶段还不清楚类型的变量指定一个类型，不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查，这时候可以使用`any`类型

使用`any`类型允许被赋值为任意类型，甚至可以调用其属性、方法

```tsx
let num:any = 123;
num = 'str';
num = true;
```

定义存储各种类型数据的数组时，示例代码如下：

```tsx
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
```





### null 和 和 undefined

在` JavaScript` 中 `null `表示 "什么都没有"，是一个只有一个值的特殊类型，表示一个空对象引用，而`undefined`表示一个没有设置值的变量

默认情况下`null`和`undefined`是所有类型的子类型， 就是说你可以把 `null `和 `undefined `赋值给 `number `类型的变量

```tsx
let num:number | undefined; // 数值类型 或者 undefined
console.log(num); // 正确
num = 123;
console.log(num); // 正确
```

但是`ts`配置了`--strictNullChecks`标记，`null`和`undefined`只能赋值给`void`和它们各自



### void

用于标识方法返回值的类型，表示该方法没有返回值。

```tsx
function hello(): void {
    alert("Hello Runoob");
}
```


### never

`never`是其他类型 （包括` null `和 `undefined`）的子类型，可以赋值给任何类型，代表从不会出现的值

但是没有类型是 never 的子类型，这意味着声明 `never` 的变量只能被 `never` 类型所赋值。

`never` 类型一般用来指定那些总是会抛出异常、无限循环

```tsx
let a:never;
a = 123; // 错误的写法

a = (() => { // 正确的写法
  throw new Error('错误');
})()

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
```





### object

对象类型，非原始类型，常见的形式通过`{}`进行包裹

```tsx
let obj:object;
obj = {name: 'Wang', age: 25};
```



## 三、总结

和`javascript`基本一致，也分成：

- 基本类型
- 引用类型

在基础类型上，`typescript`增添了`void`、`any`、`emum`等原始类型



## 参考文献

- https://www.tslang.cn/docs/handbook/basic-types.html

# QUESTION：说说你对 TypeScript 中枚举类型的理解？应用场景？


 ![](https://static.vue-js.com/76173bf0-0b0c-11ec-a752-75723a64e8f5.png)



## 一、是什么

枚举是一个被命名的整型常数的集合，用于声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型

通俗来说，枚举就是一个对象的所有可能取值的集合

在日常生活中也很常见，例如表示星期的SUNDAY、MONDAY、TUESDAY、WEDNESDAY、THURSDAY、FRIDAY、SATURDAY就可以看成是一个枚举

枚举的说明与结构和联合相似，其形式为：

```txt
enum 枚举名{
    标识符①[=整型常数],
    标识符②[=整型常数],
    ...
    标识符N[=整型常数],
}枚举变量;
```



## 二、使用

枚举的使用是通过`enum`关键字进行定义，形式如下：

```ts
enum xxx { ... }
```

声明关键字为枚举类型的方式如下：

```ts
// 声明d为枚举类型Direction
let d: Direction;
```





类型可以分成：

- 数字枚举
- 字符串枚举

- 异构枚举



### 数字枚举

当我们声明一个枚举类型是,虽然没有给它们赋值,但是它们的值其实是默认的数字类型,而且默认从0开始依次累加:

```ts
enum Direction {
    Up,   // 值默认为 0
    Down, // 值默认为 1
    Left, // 值默认为 2
    Right // 值默认为 3
}

console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
```

如果我们将第一个值进行赋值后，后面的值也会根据前一个值进行累加1：

```ts
enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right); // 10 11 12 13
```





### 字符串枚举

```ts
枚举类型的值其实也可以是字符串类型：

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction['Right'], Direction.Up); // Right Up
```

如果设定了一个变量为字符串之后，后续的字段也需要赋值字符串，否则报错：

```ts
enum Direction {
 Up = 'UP',
 Down, // error TS1061: Enum member must have initializer
 Left, // error TS1061: Enum member must have initializer
 Right // error TS1061: Enum member must have initializer
}
```





### 异构枚举

即将数字枚举和字符串枚举结合起来混合起来使用，如下：

```ts
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

通常情况下我们很少会使用异构枚举



### 本质

现在一个枚举的案例如下：

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```

通过编译后，`javascript`如下：

```ts
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
```

上述代码可以看到， `Direction[Direction["Up"] = 0] = "Up"`可以分成

- Direction["Up"] = 0
- Direction[0] = "Up"

所以定义枚举类型后，可以通过正反映射拿到对应的值，如下：

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up === 0); // true
console.log(Direction[0]); // Up
```

并且多处定义的枚举是可以进行合并操作，如下：

```ts
enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

enum Direction {
    Center = 1
}
```

编译后，`js`代码如下：

```js
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
(function (Direction) {
    Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
```

可以看到，`Direction`对象属性回叠加



## 三、应用场景

就拿回生活的例子，后端返回的字段使用 0 - 6 标记对应的日期，这时候就可以使用枚举可提高代码可读性，如下：

```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```

包括后端日常返回0、1 等等状态的时候，我们都可以通过枚举去定义，这样可以提高代码的可读性，便于后续的维护


## 参考文献
- https://zh.wikipedia.org/wiki/%E6%9E%9A%E4%B8%BE
- https://www.jianshu.com/p/b9e1caa4dd98
- https://juejin.cn/post/6844904112669065224#heading-30


# QUESTION：说说你对 TypeScript 中接口的理解？应用场景？



 ![](https://static.vue-js.com/193389b0-0b2b-11ec-8e64-91fdec0f05a1.png)



## 一、是什么

**接口**是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的**类**去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法

简单来讲，一个接口所描述的是一个对象相关的属性和方法，但并不提供具体创建此对象实例的方法

`typescript`的核心功能之一就是对类型做检测，虽然这种检测方式是“鸭式辨型法”，而接口的作用就是为为这些类型命名和为你的代码或第三方代码定义一个约定



## 二、使用方式

接口定义如下：

```ts
interface interface_name {
}
```

例如有一个函数，这个函数接受一个 `User` 对象，然后返回这个 `User` 对象的 `name` 属性:

```ts
const getUserName = (user) => user.name
```

可以看到，参数需要有一个`user`的`name`属性，可以通过接口描述`user`参数的结构

```ts
interface User {
    name: string
    age: number
}

const getUserName = (user: User) => user.name
```

这些属性并不一定全部实现，上述传入的对象必须拥有`name`和`age`属性，否则`typescript`在编译阶段会报错，如下图：

 ![](https://static.vue-js.com/25d3a790-0b2b-11ec-a752-75723a64e8f5.png)

如果不想要`age`属性的话，这时候可以采用**可选属性**，如下表示：

```ts
interface User {
    name: string
    age?: number
}
```

这时候`age`属性则可以是`number`类型或者`undefined`类型

有些时候，我们想要一个属性变成只读属性，在`typescript`只需要使用`readonly`声明，如下：

```ts
interface User {
    name: string
    age?: number
    readonly isMale: boolean
}
```

当我们修改属性的时候，就会出现警告，如下所示：

 ![](https://static.vue-js.com/2f6d3c30-0b2b-11ec-8e64-91fdec0f05a1.png)

这是属性中有一个函数，可以如下表示：

```ts
interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say: (words: string) => string
}
```

如果传递的对象不仅仅是上述的属性，这时候可以使用：

- 类型推断

```
interface User {
    name: string
    age: number
}

const getUserName = (user: User) => user.name
getUserName({color: 'yellow'} as User)
```

- 给接口添加字符串**索引签名**

```ts
interface User {
    name: string
    age: number
    [propName: string]: any;
}
```

接口还能实现继承，如下图：

 ![](https://static.vue-js.com/38a41760-0b2b-11ec-8e64-91fdec0f05a1.png)

也可以继承多个，父类通过逗号隔开，如下：

```ts
interface Father {
    color: String
}

interface Mother {
    height: Number
}

interface Son extends Father,Mother{
    name: string
    age: Number
}
```



## 三、应用场景

例如在`javascript`中定义一个函数，用来获取用户的姓名和年龄：

```js
const getUserInfo = function(user) {
    // ...
    return name: ${user.name}, age: ${user.age}
}
```

如果多人开发的都需要用到这个函数的时候，如果没有注释，则可能出现各种运行时的错误，这时候就可以使用接口定义参数变量：

```ts
// 先定义一个接口
interface IUser {
  name: string;
  age: number;
}

const getUserInfo = (user: IUser): string => {
  return `name: ${user.name}, age: ${user.age}`;
};

// 正确的调用
getUserInfo({name: "koala", age: 18});
```
包括后面讲到类的时候也会应用到接口


## 参考文献

- https://www.tslang.cn/docs/handbook/interfaces.html


# QUESTION：说说你对 TypeScript 中类的理解？应用场景？

 ![](https://static.vue-js.com/e4c19060-0cb4-11ec-a752-75723a64e8f5.png)



## 一、是什么
类（Class）是面向对象程序设计（OOP，Object-Oriented Programming）实现信息封装的基础

> 类是一种用户定义的引用数据类型，也称类类型

传统的面向对象语言基本都是基于类的，`JavaScript` 基于原型的方式让开发者多了很多理解成本

在 `ES6` 之后，`JavaScript` 拥有了 `class` 关键字，虽然本质依然是构造函数，但是使用起来已经方便了许多

但是` JavaScript` 的` class `依然有一些特性还没有加入，比如修饰符和抽象类

`TypeScript` 的 `class`  支持面向对象的所有特性，比如 类、接口等



## 二、使用方式

定义类的关键字为 `class`，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：

- **字段** ： 字段是类里面声明的变量。字段表示对象的有关数据。
- **构造函数**： 类实例化时调用，可以为类的对象分配内存。
- **方法**： 方法为对象要执行的操作

如下例子：

```ts
class Car {
    // 字段
    engine:string;

    // 构造函数
    constructor(engine:string) {
        this.engine = engine
    }

    // 方法
    disp():void {
        console.log("发动机为 :   "+this.engine)
    }
}
```

### 继承

类的继承使用过`extends`的关键字

```ts
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

`Dog`是一个 派生类，它派生自 `Animal` 基类，派生类通常被称作子类，基类通常被称作 超类

`Dog`类继承了`Animal`类，因此实例`dog`也能够使用`Animal`类`move`方法



同样，类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写，通过`super`关键字是对父类的直接引用，该关键字可以引用父类的属性和方法，如下：

```ts
class PrinterClass {
   doPrint():void {
      console.log("父类的 doPrint() 方法。")
   }
}

class StringPrinter extends PrinterClass {
   doPrint():void {
      super.doPrint() // 调用父类的函数
      console.log("子类的 doPrint()方法。")
   }
}
```







### 修饰符

可以看到，上述的形式跟`ES6`十分的相似，`typescript`在此基础上添加了三种修饰符：

- 公共 public：可以自由的访问类程序里定义的成员
- 私有 private：只能够在该类的内部进行访问
- 受保护 protect：除了在该类的内部可以访问，还可以在子类中仍然可以访问



### 私有修饰符

只能够在该类的内部进行访问，实例对象并不能够访问

 ![](https://static.vue-js.com/f57365f0-0cb4-11ec-a752-75723a64e8f5.png)

并且继承该类的子类并不能访问，如下图所示：

 ![](https://static.vue-js.com/0072cc20-0cb5-11ec-8e64-91fdec0f05a1.png)



### 受保护修饰符

跟私有修饰符很相似，实例对象同样不能访问受保护的属性，如下：

 ![](https://static.vue-js.com/09e72580-0cb5-11ec-a752-75723a64e8f5.png)

有一点不同的是 `protected` 成员在子类中仍然可以访问

 ![](https://static.vue-js.com/137f81a0-0cb5-11ec-8e64-91fdec0f05a1.png)





除了上述修饰符之外，还有只读**修饰符**

#### 只读修饰符

通过`readonly`关键字进行声明，只读属性必须在声明时或构造函数里被初始化，如下：

 ![](https://static.vue-js.com/1e848d20-0cb5-11ec-8e64-91fdec0f05a1.png)



除了实例属性之外，同样存在静态属性

### 静态属性

这些属性存在于类本身上面而不是类的实例上，通过`static`进行定义，访问这些属性需要通过 类型.静态属性 的这种形式访问，如下所示：

```ts
class Square {
    static width = '100px'
}

console.log(Square.width) // 100px
```



上述的类都能发现一个特点就是，都能够被实例化，在 `typescript`中，还存在一种抽象类



### 抽象类

抽象类做为其它派生类的基类使用，它们一般不会直接被实例化，不同于接口，抽象类可以包含成员的实现细节

`abstract `关键字是用于定义抽象类和在抽象类内部定义抽象方法，如下所示：

```ts
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
```

这种类并不能被实例化，通常需要我们创建子类去继承，如下：

```ts
class Cat extends Animal {

    makeSound() {
        console.log('miao miao')
    }
}

const cat = new Cat()

cat.makeSound() // miao miao
cat.move() // roaming the earch...
```



## 三、应用场景

除了日常借助类的特性完成日常业务代码，还可以将类（class）也可以作为接口，尤其在 `React` 工程中是很常用的，如下：

```ts
export default class Carousel extends React.Component<Props, State> {}
```

由于组件需要传入 `props` 的类型 `Props` ，同时有需要设置默认 `props` 即 `defaultProps`，这时候更加适合使用`class`作为接口

先声明一个类，这个类包含组件 `props` 所需的类型和初始值：

```ts
// props的类型
export default class Props {
  public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
  public speed: number = 500
  public height: number = 160
  public animation: string = 'easeInOutQuad'
  public isAuto: boolean = true
  public autoPlayInterval: number = 4500
  public afterChange: () => {}
  public beforeChange: () => {}
  public selesctedColor: string
  public showDots: boolean = true
}
```

当我们需要传入 `props` 类型的时候直接将 `Props` 作为接口传入，此时 `Props` 的作用就是接口，而当需要我们设置`defaultProps`初始值的时候，我们只需要:

```ts
public static defaultProps = new Props()
```

`Props` 的实例就是 `defaultProps` 的初始值，这就是 `class `作为接口的实际应用，我们用一个 `class` 起到了接口和设置初始值两个作用，方便统一管理，减少了代码量



## 参考文献

- https://www.tslang.cn/docs/handbook/classes.html
- https://www.runoob.com/typescript/ts-class.html

# QUESTION：说说你对 TypeScript 中函数的理解？与 JavaScript 函数的区别？



 ![](https://static.vue-js.com/3f1c1390-0d42-11ec-a752-75723a64e8f5.png)

## 一、是什么

函数是` JavaScript` 应用程序的基础，帮助我们实现抽象层、模拟类、信息隐藏和模块

在` TypeScript` 里，虽然已经支持类、命名空间和模块，但函数仍然是主要定义行为的方式，`TypeScript` 为 `JavaScript` 函数添加了额外的功能，丰富了更多的应用场景

函数类型在 `TypeScript` 类型系统中扮演着非常重要的角色，它们是可组合系统的核心构建块


## 二、使用方式

跟`javascript` 定义函数十分相似，可以通过`funciton` 关键字、箭头函数等形式去定义，例如下面一个简单的加法函数：

```ts
const add = (a: number, b: number) => a + b
```

上述只定义了函数的两个参数类型，这个时候整个函数虽然没有被显式定义，但是实际上` TypeScript` 编译器是能够通过类型推断到这个函数的类型，如下图所示：

 ![](https://static.vue-js.com/4b3415b0-0d42-11ec-8e64-91fdec0f05a1.png)

当鼠标放置在第三行`add`函数名的时候，会出现完整的函数定义类型，通过`:` 的形式来定于参数类型，通过 `=>` 连接参数和返回值类型

当我们没有提供函数实现的情况下，有两种声明函数类型的方式，如下所示：

```ts
// 方式一
type LongHand = {
  (a: number): number;
};

// 方式二
type ShortHand = (a: number) => number;
```

当存在函数重载时，只能使用方式一的形式



### 可选参数

当函数的参数可能是不存在的，只需要在参数后面加上 `?` 代表参数可能不存在，如下：

```ts
const add = (a: number, b?: number) => a + (b ? b : 0)
```

这时候参数`b`可以是`number`类型或者`undefined`类型，即可以传一个`number`类型或者不传都可以



### 剩余类型

剩余参数与`JavaScript`的语法类似，需要用 `...` 来表示剩余参数

如果剩余参数 `rest` 是一个由`number`类型组成的数组，则如下表示：

```ts
const add = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)
```



### 函数重载

允许创建数项名称相同但输入输出类型或个数不同的子程序，它可以简单地称为一个单独功能可以执行多项任务的能力

关于`typescript`函数重载，必须要把精确的定义放在前面，最后函数实现时，需要使用 `|`操作符或者`?`操作符，把所有可能的输入类型全部包含进去，用于具体实现

这里的函数重载也只是多个函数的声明，具体的逻辑还需要自己去写，`typescript`并不会真的将你的多个重名 `function `的函数体进行合并

例如我们有一个add函数，它可以接收 `string`类型的参数进行拼接，也可以接收 `number` 类型的参数进行相加，如下：

```ts
// 上边是声明
function add (arg1: string, arg2: string): string
function add (arg1: number, arg2: number): number
// 因为我们在下边有具体函数的实现，所以这里并不需要添加 declare 关键字

// 下边是实现
function add (arg1: string | number, arg2: string | number) {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return arg1 + arg2
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1 + arg2
  }
}
```



## 三、区别

从上面可以看到：

- 从定义的方式而言，typescript 声明函数需要定义参数类型或者声明返回值类型
- typescript 在参数中，添加可选参数供使用者选择
- typescript 增添函数重载功能，使用者只需要通过查看函数声明的方式，即可知道函数传递的参数个数以及类型

## 参考文献

- https://www.tslang.cn/docs/handbook/functions.html
- https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD
- https://jkchao.github.io/typescript-book-chinese/typings/functions.html#%E9%87%8D%E8%BD%BD


# QUESTION：说说你对 TypeScript 中泛型的理解？应用场景？


 ![](https://static.vue-js.com/5bb5f1d0-0e17-11ec-8e64-91fdec0f05a1.png)

## 一、是什么

泛型程序设计（generic programming）是程序设计语言的一种风格或范式

泛型允许我们在强类型程序设计语言中编写代码时使用一些以后才指定的类型，在实例化时作为参数指明这些类型
在`typescript`中，定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性

假设我们用一个函数，它可接受一个 `number` 参数并返回一个` number` 参数，如下写法：

```ts
function returnItem (para: number): number {
    return para
}
```

如果我们打算接受一个 `string` 类型，然后再返回 `string`类型，则如下写法：

```ts
function returnItem (para: string): string {
    return para
}
```

上述两种编写方式，存在一个最明显的问题在于，代码重复度比较高

虽然可以使用 `any`类型去替代，但这也并不是很好的方案，因为我们的目的是接收什么类型的参数返回什么类型的参数，即在运行时传入参数我们才能确定类型

这种情况就可以使用泛型，如下所示：

```ts
function returnItem<T>(para: T): T {
    return para
}
```

可以看到，泛型给予开发者创造灵活、可重用代码的能力



## 二、使用方式

泛型通过`<>`的形式进行表述，可以声明：

- 函数

- 接口
- 类



### 函数声明

声明函数的形式如下：

```ts
function returnItem<T>(para: T): T {
    return para
}
```

定义泛型的时候，可以一次定义**多个类型参数**，比如我们可以同时定义泛型 `T` 和 泛型 `U`：

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
```





### 接口声明

声明接口的形式如下：

```ts
interface ReturnItemFn<T> {
    (para: T): T
}
```

那么当我们想传入一个number作为参数的时候，就可以这样声明函数:

```ts
const returnItem: ReturnItemFn<number> = para => para
```

###

### 类声明

使用泛型声明类的时候，既可以作用于类本身，也可以作用与类的成员函数

下面简单实现一个元素同类型的栈结构，如下所示：

```ts
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}
```

使用方式如下：

```ts
const stack = new Stacn<number>()
```

如果上述只能传递 `string` 和 `number` 类型，这时候就可以使用 `<T extends xx>` 的方式猜实现**约束泛型**，如下所示：

 ![](https://static.vue-js.com/67d212a0-0e17-11ec-8e64-91fdec0f05a1.png)





除了上述的形式，泛型更高级的使用如下：

例如要设计一个函数，这个函数接受两个参数，一个参数为对象，另一个参数为对象上的属性，我们通过这两个参数返回这个属性的值

这时候就设计到泛型的索引类型和约束类型共同实现

### 索引类型、约束类型

索引类型 `keyof T` 把传入的对象的属性类型取出生成一个联合类型，这里的泛型 U 被约束在这个联合类型中，如下所示：

```ts
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key] // ok
}
```

上述为什么需要使用泛型约束，而不是直接定义第一个参数为 `object`类型，是因为默认情况 `object` 指的是`{}`，而我们接收的对象是各种各样的，一个泛型来表示传入的对象类型，比如 `T extends object`

使用如下图所示：

 ![](https://static.vue-js.com/74fcbd40-0e17-11ec-a752-75723a64e8f5.png)





### 多类型约束

例如如下需要实现两个接口的类型约束：

```ts
interface FirstInterface {
  doSomething(): number
}

interface SecondInterface {
  doSomethingElse(): string
}

```

可以创建一个接口继承上述两个接口，如下：

```ts
interface ChildInterface extends FirstInterface, SecondInterface {

}
```

正确使用如下：

```ts
class Demo<T extends ChildInterface> {
  private genericProperty: T

  constructor(genericProperty: T) {
    this.genericProperty = genericProperty
  }
  useT() {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse()
  }
}
```

通过泛型约束就可以达到多类型约束的目的



## 三、应用场景

通过上面初步的了解，后述在编写 `typescript` 的时候，定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性的时候，这种情况下就可以使用泛型

灵活的使用泛型定义类型，是掌握`typescript` 必经之路



## 参考文献

- https://www.tslang.cn/docs/handbook/generics.html


# QUESTION：说说你对 TypeScript 中高级类型的理解？有哪些？

 ![](https://static.vue-js.com/bda521e0-1065-11ec-8e64-91fdec0f05a1.png)

## 一、是什么

除了`string`、`number`、`boolean` 这种基础类型外，在 `typescript` 类型声明中还存在一些高级的类型应用

这些高级类型，是`typescript`为了保证语言的灵活性，所使用的一些语言特性。这些特性有助于我们应对复杂多变的开发场景

## 二、有哪些

常见的高级类型有如下：

- 交叉类型
- 联合类型
- 类型别名
- 类型索引
- 类型约束
- 映射类型
- 条件类型


### 交叉类型

通过 `&` 将多个类型合并为一个类型，包含了所需的所有类型的特性，本质上是一种并的操作

语法如下：

```ts
T & U
```

适用于对象合并场景，如下将声明一个函数，将两个对象合并成一个对象并返回：

```ts
function extend<T , U>(first: T, second: U) : T & U {
    let result: <T & U> = {}
    for (let key in first) {
        result[key] = first[key]
    }
    for (let key in second) {
        if(!result.hasOwnProperty(key)) {
            result[key] = second[key]
        }
    }
    return result
}
```





### 联合类型

联合类型的语法规则和逻辑 “或” 的符号一致，表示其类型为连接的多个类型中的任意一个，本质上是一个交的关系

语法如下：

```ts
T | U
```

例如 `number` | `string` | `boolean` 的类型只能是这三个的一种，不能共存

如下所示：

```ts
function formatCommandline(command: string[] | string) {
  let line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }
}
```



### 类型别名

类型别名会给一个类型起个新名字，类型别名有时和接口很像，但是可以作用于原始值、联合类型、元组以及其它任何你需要手写的类型

可以使用 `type SomeName = someValidTypeAnnotation`的语法来创建类型别名：

```ts
type some = boolean | string

const b: some = true // ok
const c: some = 'hello' // ok
const d: some = 123 // 不能将类型“123”分配给类型“some”
```

此外类型别名可以是泛型:

```ts
type Container<T> = { value: T };
```

也可以使用类型别名来在属性里引用自己：

```ts
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}
```

可以看到，类型别名和接口使用十分相似，都可以描述一个对象或者函数

两者最大的区别在于，`interface `只能用于定义对象类型，而 `type` 的声明方式除了对象之外还可以定义交叉、联合、原始类型等，类型声明的方式适用范围显然更加广泛





### 类型索引

`keyof` 类似于 `Object.keys` ，用于获取一个接口中 Key 的联合类型。

```ts
interface Button {
    type: string
    text: string
}

type ButtonKeys = keyof Button
// 等效于
type ButtonKeys = "type" | "text"
```





### 类型约束

通过关键字 `extend` 进行约束，不同于在 `class` 后使用 `extends` 的继承作用，泛型内使用的主要作用是对泛型加以约束

```ts
type BaseType = string | number | boolean

// 这里表示 copy 的参数
// 只能是字符串、数字、布尔这几种基础类型
function copy<T extends BaseType>(arg: T): T {
  return arg
}
```

类型约束通常和类型索引一起使用，例如我们有一个方法专门用来获取对象的值，但是这个对象并不确定，我们就可以使用 `extends` 和 `keyof` 进行约束。

```ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const obj = { a: 1 }
const a = getValue(obj, 'a')
```



### 映射类型

通过 `in` 关键字做类型的映射，遍历已有接口的 `key` 或者是遍历联合类型，如下例子：

```ts
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface Obj {
  a: string
  b: string
}

type ReadOnlyObj = Readonly<Obj>
```

上述的结构，可以分成这些步骤：

- keyof T：通过类型索引 keyof 的得到联合类型 'a' | 'b'
- P in keyof T 等同于 p in 'a' | 'b'，相当于执行了一次 forEach 的逻辑，遍历 'a' | 'b'

所以最终`ReadOnlyObj`的接口为下述：

```ts
interface ReadOnlyObj {
    readonly a: string;
    readonly b: string;
}
```



### 条件类型

条件类型的语法规则和三元表达式一致，经常用于一些类型不确定的情况。

```ts
T extends U ? X : Y
```

上面的意思就是，如果 T 是 U 的子集，就是类型 X，否则为类型 Y



## 三、总结

可以看到，如果只是掌握了 `typeScript` 的一些基础类型，可能很难游刃有余的去使用 `typeScript`，需要了解一些`typescript`的高阶用法

并且`typescript`在版本的迭代中新增了很多功能，需要不断学习与掌握



## 参考文献

- https://www.tslang.cn/docs/handbook/advanced-types.html
- https://juejin.cn/post/6844904003604578312
- https://zhuanlan.zhihu.com/p/103846208

# QUESTION：说说你对 TypeScript 装饰器的理解？应用场景？

 ![](https://static.vue-js.com/f8905dd0-111c-11ec-8e64-91fdec0f05a1.png)



## 一、是什么
装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上

是一种在不改变原类和使用继承的情况下，动态地扩展对象功能

同样的，本质也不是什么高大上的结构，就是一个普通的函数，`@expression` 的形式其实是`Object.defineProperty`的语法糖

`expression `求值后必须也是一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入


## 二、使用方式

由于`typescript`是一个实验性特性，若要使用，需要在`tsconfig.json`文件启动，如下：

```ts
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

`typescript`装饰器的使用和`javascript`基本一致



类的装饰器可以装饰：

- 类

- 方法/属性
- 参数

- 访问器



### 类装饰

例如声明一个函数 `addAge` 去给 Class 的属性 `age` 添加年龄.

```ts
function addAge(constructor: Function) {
  constructor.prototype.age = 18;
}

@addAge
class Person{
  name: string;
  age!: number;
  constructor() {
    this.name = 'huihui';
  }
}

let person = new Person();

console.log(person.age); // 18
```

上述代码，实际等同于以下形式：

```ts
Person = addAge(function Person() { ... });
```

上述可以看到，当装饰器作为修饰类的时候，会把构造器传递进去。 `constructor.prototype.age` 就是在每一个实例化对象上面添加一个 `age` 属性



### 方法/属性装饰

同样，装饰器可以用于修饰类的方法，这时候装饰器函数接收的参数变成了：

- target：对象的原型
- propertyKey：方法的名称
- descriptor：方法的属性描述符

可以看到，这三个属性实际就是`Object.defineProperty`的三个参数，如果是类的属性，则没有传递第三个参数

如下例子：

```ts
// 声明装饰器修饰方法/属性
function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log("prop " + propertyKey);
  console.log("desc " + JSON.stringify(descriptor) + "\n\n");
  descriptor.writable = false;
};

function property(target: any, propertyKey: string) {
  console.log("target", target)
  console.log("propertyKey", propertyKey)
}

class Person{
 @property
 name: string;
 constructor() {
   this.name = 'huihui';
 }

 @method
 say(){
   return 'instance method';
 }

 @method
 static run(){
   return 'static method';
 }
}

const xmz = new Person();

// 修改实例方法say
xmz.say = function() {
 return 'edit'
}
```

输出如下图所示：

 ![](https://static.vue-js.com/e96bc1b0-114d-11ec-8e64-91fdec0f05a1.png)



### 参数装饰

接收3个参数，分别是：

- target ：当前对象的原型
- propertyKey ：参数的名称
- index：参数数组中的位置

```ts
function logParameter(target: Object, propertyName: string, index: number) {
  console.log(target);
  console.log(propertyName);
  console.log(index);
}

class Employee {
  greet(@logParameter message: string): string {
      return `hello ${message}`;
  }
}
const emp = new Employee();
emp.greet('hello');
```

输入如下图：

 ![](https://static.vue-js.com/f2f32de0-114d-11ec-a752-75723a64e8f5.png)



### 访问器装饰

使用起来方式与方法装饰一致，如下：

```ts

function modification(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log("prop " + propertyKey);
  console.log("desc " + JSON.stringify(descriptor) + "\n\n");
};

class Person{
 _name: string;
 constructor() {
   this._name = 'huihui';
 }

 @modification
 get name() {
   return this._name
 }
}
```





### 装饰器工厂

如果想要传递参数，使装饰器变成类似工厂函数，只需要在装饰器函数内部再函数一个函数即可，如下：

```ts
function addAge(age: number) {
  return function(constructor: Function) {
    constructor.prototype.age = age
  }
}

@addAge(10)
class Person{
  name: string;
  age!: number;
  constructor() {
    this.name = 'huihui';
  }
}

let person = new Person();
```



### 执行顺序

当多个装饰器应用于一个声明上，将由上至下依次对装饰器表达式求值，求值的结果会被当作函数，由下至上依次调用，例如如下：

```ts
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}

// 输出
f(): evaluated
g(): evaluated
g(): called
f(): called
```





## 三、应用场景

可以看到，使用装饰器存在两个显著的优点：

- 代码可读性变强了，装饰器命名相当于一个注释
- 在不改变原有代码情况下，对原来功能进行扩展

后面的使用场景中，借助装饰器的特性，除了提高可读性之后，针对已经存在的类，可以通过装饰器的特性，在不改变原有代码情况下，对原来功能进行扩展



## 参考文献

- https://www.tslang.cn/docs/handbook/decorators.html
- https://juejin.cn/post/6844903876605280269#heading-5

# QUESTION：说说对 TypeScript 中命名空间与模块的理解？区别？

 ![](https://static.vue-js.com/9378d760-137e-11ec-8e64-91fdec0f05a1.png)


## 一、模块

`TypeScript` 与` ECMAScript` 2015 一样，任何包含顶级 `import` 或者 `export` 的文件都被当成一个模块

相反地，如果一个文件不带有顶级的`import`或者`export`声明，那么它的内容被视为全局可见的

例如我们在在一个 `TypeScript` 工程下建立一个文件 `1.ts`，声明一个变量`a`，如下：

```ts
const a = 1
```

然后在另一个文件同样声明一个变量`a`，这时候会出现错误信息

 ![](https://static.vue-js.com/a239d970-137e-11ec-a752-75723a64e8f5.png)

提示重复声明`a`变量，但是所处的空间是全局的

如果需要解决这个问题，则通过`import`或者`export`引入模块系统即可，如下：

```ts
const a = 10;

export default a
```

在`typescript`中，`export`关键字可以导出变量或者类型，用法与`es6`模块一致，如下：

```ts
export const a = 1
export type Person = {
    name: String
}
```

通过`import` 引入模块，如下：

```ts
import { a, Person } from './export';
```



## 二、命名空间

命名空间一个最明确的目的就是解决重名问题

命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的

这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中

`TypeScript` 中命名空间使用 `namespace` 来定义，语法格式如下：

```ts
namespace SomeNameSpaceName {
   export interface ISomeInterfaceName {      }
   export class SomeClassName {      }
}
```

以上定义了一个命名空间 `SomeNameSpaceName`，如果我们需要在外部可以调用 `SomeNameSpaceName` 中的类和接口，则需要在类和接口添加 `export` 关键字

使用方式如下：

```ts
SomeNameSpaceName.SomeClassName
```

命名空间本质上是一个对象，作用是将一系列相关的全局变量组织到一个对象的属性，如下：

```ts
namespace Letter {
  export let a = 1;
  export let b = 2;
  export let c = 3;
  // ...
  export let z = 26;
}
```

编译成`js`如下：

```js
var Letter;
(function (Letter) {
    Letter.a = 1;
    Letter.b = 2;
    Letter.c = 3;
    // ...
    Letter.z = 26;
})(Letter || (Letter = {}));
```





## 三、区别

- 命名空间是位于全局命名空间下的一个普通的带有名字的  JavaScript  对象，使用起来十分容易。但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中

- 像命名空间一样，模块可以包含代码和声明。 不同的是模块可以声明它的依赖

- 在正常的TS项目开发过程中并不建议用命名空间，但通常在通过 d.ts 文件标记 js 库类型的时候使用命名空间，主要作用是给编译器编写代码的时候参考使用


## 参考文献

- https://www.tslang.cn/docs/handbook/modules.html
- https://www.tslang.cn/docs/handbook/namespaces.html
- https://www.tslang.cn/docs/handbook/namespaces-and-modules.html


# QUESTION：说说如何在 React 项目中应用 TypeScript？

![](https://static.vue-js.com/a98974e0-13bc-11ec-a752-75723a64e8f5.png)

## 一、前言

单独的使用 `TypeScript` 并不会导致学习成本很高，但是绝大部分前端开发者的项目都是依赖于框架的

例如与 `Vue`、`React` 这些框架结合使用的时候，会有一定的门槛

使用 `TypeScript` 编写 `React` 代码，除了需要 `TypeScript` 这个库之外，还需要安装 `@types/react`、`@types/react-dom`

```bash
npm i @types/react -s

npm i @types/react-dom -s
```

至于上述使用 `@types` 的库的原因在于，目前非常多的 `JavaScript` 库并没有提供自己关于 `TypeScript` 的声明文件

所以，`ts` 并不知道这些库的类型以及对应导出的内容，这里 `@types` 实际就是社区中的 `DefinitelyTyped` 库，定义了目前市面上绝大多数的 `JavaScript` 库的声明

所以下载相关的 `JavaScript` 对应的 `@types` 声明时，就能够使用使用该库对应的类型定义

## 二、使用方式

在编写 `React` 项目的时候，最常见的使用的组件就是：

- 无状态组件
- 有状态组件
- 受控组件

### 无状态组件

主要作用是用于展示 `UI`，如果使用 `js` 声明，则如下所示：

```jsx
import * as React from "React";

export const Logo = (props) => {
  const { logo, className, alt } = props;

  return <img src={logo} className={className} alt={alt} />;
};
```

但这时候 `ts` 会出现报错提示，原因在于没有定义 `porps` 类型，这时候就可以使用 `interface` 接口去定义 `porps` 即可，如下：

```tsx
import * as React from "React";

interface IProps {
  logo?: string;
  className?: string;
  alt?: string;
}

export const Logo = (props: IProps) => {
  const { logo, className, alt } = props;

  return <img src={logo} className={className} alt={alt} />;
};
```

但是我们都知道 `props` 里面存在 `children` 属性，我们不可能每个 `porps` 接口里面定义多一个 `children`，如下：

```ts
interface IProps {
  logo?: string;
  className?: string;
  alt?: string;
  children?: ReactNode;
}
```

更加规范的写法是使用 `React` 里面定义好的 `FC` 属性，里面已经定义好 `children` 类型，如下：

```tsx
export const Logo: React.FC<IProps> = (props) => {
  const { logo, className, alt } = props;

  return <img src={logo} className={className} alt={alt} />;
};
```

- React.FC 显式地定义了返回类型，其他方式是隐式推导的

- React.FC 对静态属性：displayName、propTypes、defaultProps 提供了类型检查和自动补全
- React.FC 为 children 提供了隐式的类型（ReactElement | null）

### 有状态组件

可以是一个类组件且存在 `props` 和 `state` 属性

如果使用 `TypeScript` 声明则如下所示：

```tsx
import * as React from "React";

interface IProps {
  color: string;
  size?: string;
}
interface IState {
  count: number;
}
class App extends React.Component<IProps, IState> {
  public state = {
    count: 1,
  };
  public render() {
    return <div>Hello world</div>;
  }
}
```

上述通过泛型对 `props`、`state` 进行类型定义，然后在使用的时候就可以在编译器中获取更好的智能提示

关于 `Component` 泛型类的定义，可以参考下 React 的类型定义文件 `node_modules/@types/React/index.d.ts`，如下所示：

```ts
class Component<P, S> {
  readonly props: Readonly<{ children?: ReactNode }> & Readonly<P>;

  state: Readonly<S>;
}
```

从上述可以看到，`state` 属性也定义了可读类型，目的是为了防止直接调用 `this.state` 更新状态

### 受控组件

受控组件的特性在于元素的内容通过组件的状态 `state` 进行控制

由于组件内部的事件是合成事件，不等同于原生事件，

例如一个 `input` 组件修改内部的状态，常见的定义的时候如下所示：

```ts
private updateValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ itemText: e.target.value })
}
```

常用 `Event` 事件对象类型：

- ClipboardEvent<T = Element> 剪贴板事件对象
- DragEvent<T = Element> 拖拽事件对象
- ChangeEvent<T = Element> Change 事件对象
- KeyboardEvent<T = Element> 键盘事件对象
- MouseEvent<T = Element> 鼠标事件对象
- TouchEvent<T = Element> 触摸事件对象
- WheelEvent<T = Element> 滚轮事件对象
- AnimationEvent<T = Element> 动画事件对象
- TransitionEvent<T = Element> 过渡事件对象

`T` 接收一个 `DOM` 元素类型

## 三、总结

上述只是简单的在 `React` 项目使用 `TypeScript`，但在编写 `React` 项目的时候，还存在 `hooks`、默认参数、以及 `store` 等等......

`TypeScript` 在框架中使用的学习成本相对会更高，需要不断编写才能熟练

## 参考文献

- [https://juejin.cn/post/6952696734078369828](https://juejin.cn/post/6952696734078369828)
- [https://juejin.cn/post/6844903684422254606](https://juejin.cn/post/6844903684422254606)


# QUESTION：说说如何在Vue项目中应用TypeScript？



 ![](https://static.vue-js.com/cc658c10-1565-11ec-8e64-91fdec0f05a1.png)


## 一、前言
与link类似

在`VUE`项目中应用`typescript`，我们需要引入一个库`vue-property-decorator`，

其是基于`vue-class-component`库而来，这个库`vue`官方推出的一个支持使用`class`方式来开发`vue`单文件组件的库

主要的功能如下：

- methods 可以直接声明为类的成员方法
- 计算属性可以被声明为类的属性访问器
- 初始化的 data 可以被声明为类属性
- data、render 以及所有的 Vue 生命周期钩子可以直接作为类的成员方法
- 所有其他属性，需要放在装饰器中



## 二、使用

vue-property-decorator 主要提供了多个装饰器和一个函数:

- @Prop
- @PropSync
- @Model
- @Watch
- @Provide
- @Inject
- @ProvideReactive
- @InjectReactive
- @Emit
- @Ref
- @Component (由 vue-class-component 提供)
- Mixins (由 vue-class-component 提供)



### @Component

`Component`装饰器它注明了此类为一个`Vue`组件，因此即使没有设置选项也不能省略

如果需要定义比如 `name`、`components`、`filters`、`directives`以及自定义属性，就可以在`Component`装饰器中定义，如下：

```vue
import {Component,Vue} from 'vue-property-decorator';
import {componentA,componentB} from '@/components';

 @Component({
    components:{
        componentA,
        componentB,
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    }
})
export default class YourCompoent extends Vue{

}

```



### computed、data、methods

这里取消了组件的data和methods属性，以往data返回对象中的属性、methods中的方法需要直接定义在Class中，当做类的属性和方法

```ts
@Component
export default class HelloDecorator extends Vue {
    count: number = 123 // 类属性相当于以前的 data

    add(): number { // 类方法就是以前的方法
        this.count + 1
    }

    // 获取计算属性
    get total(): number {
      return this.count + 1
    }

    // 设置计算属性
    set total(param:number): void {
      this.count = param
    }
}

```



### @props

组件接收属性的装饰器，如下使用：

```js
import {Component,Vue,Prop} from vue-property-decorator;

@Component
export default class YourComponent extends Vue {
    @Prop(String)
    propA:string;

    @Prop([String,Number])
    propB:string|number;

    @Prop({
     type: String, // type: [String , Number]
     default: 'default value', // 一般为String或Number
      //如果是对象或数组的话。默认值从一个工厂函数中返回
      // defatult: () => {
      //     return ['a','b']
      // }
     required: true,
     validator: (value) => {
        return [
          'InProcess',
          'Settled'
        ].indexOf(value) !== -1
     }
    })
    propC:string;
}
```





### @watch

实际就是`Vue`中的监听器，如下：

```vue
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch('person')
  onPersonChanged2(val: Person, oldVal: Person) {}
}
```





### @emit

`vue-property-decorator` 提供的 `@Emit` 装饰器就是代替`Vue `中的事件的触发`$emit`，如下：

````TS
import {Vue, Component, Emit} from 'vue-property-decorator';
    @Component({})
    export default class Some extends Vue{
        mounted(){
            this.$on('emit-todo', function(n) {
                console.log(n)
            })
            this.emitTodo('world');
        }
        @Emit()
        emitTodo(n: string){
            console.log('hello');
        }
    }
````



## 三 、总结

可以看到上述`typescript`版本的`vue class`的语法与平时`javascript`版本使用起来还是有很大的不同，多处用到`class`与装饰器，但实际上本质是一致的，只有不断编写才会得心应手


# css
# QUESTION：说说你对盒子模型的理解?

![](https://static.vue-js.com/8d0e9ca0-8f9b-11eb-ab90-d9ae814b240d.png)


## 一、是什么
当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）

一个盒子由四个部分组成：`content`、`padding`、`border`、`margin`

![](https://static.vue-js.com/976789a0-8f9b-11eb-85f6-6fac77c0c9b3.png)

`content`，即实际内容，显示文本和图像

`boreder`，即边框，围绕元素内容的内边距的一条或多条线，由粗细、样式、颜色三部分组成

`padding`，即内边距，清除内容周围的区域，内边距是透明的，取值不能为负，受盒子的`background`属性影响

`margin`，即外边距，在元素外创建额外的空白，空白通常指不能放其他元素的区域

上述是一个从二维的角度观察盒子，下面再看看看三维图：

 ![](https://static.vue-js.com/b2548b00-8f9b-11eb-ab90-d9ae814b240d.png)



下面来段代码：

```html
<style>
  .box {
    width: 200px;
    height: 100px;
    padding: 20px;
  }
</style>
<div class="box">
  盒子模型
</div>
```

当我们在浏览器查看元素时，却发现元素的大小变成了`240px`

这是因为，在`CSS`中，盒子模型可以分成：

- W3C 标准盒子模型
- IE 怪异盒子模型

默认情况下，盒子模型为`W3C` 标准盒子模型


## 二、标准盒子模型

标准盒子模型，是浏览器默认的盒子模型

下面看看标准盒子模型的模型图：

 ![](https://static.vue-js.com/c0e1d2e0-8f9b-11eb-85f6-6fac77c0c9b3.png)

从上图可以看到：

- 盒子总宽度 = width + padding + border + margin;

- 盒子总高度 = height + padding + border + margin

也就是，`width/height` 只是内容高度，不包含 `padding` 和 `border `值

所以上面问题中，设置`width`为200px，但由于存在`padding`，但实际上盒子的宽度有240px

## 三、IE 怪异盒子模型

同样看看IE 怪异盒子模型的模型图：

 ![](https://static.vue-js.com/cfbb3ef0-8f9b-11eb-ab90-d9ae814b240d.png)

从上图可以看到：

- 盒子总宽度 = width + margin;

- 盒子总高度 = height + margin;

也就是，`width/height` 包含了 `padding `和 `border `值

## Box-sizing

CSS 中的 box-sizing 属性定义了引擎应该如何计算一个元素的总宽度和总高度

语法：
```css
box-sizing: content-box|border-box|inherit:
```

- content-box 默认值，元素的 width/height 不包含padding，border，与标准盒子模型表现一致
- border-box 元素的 width/height 包含 padding，border，与怪异盒子模型表现一致
- inherit 指定 box-sizing 属性的值，应该从父元素继承

回到上面的例子里，设置盒子为 border-box 模型

```html
<style>
  .box {
    width: 200px;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
<div class="box">
  盒子模型
</div>
```
这时候，就可以发现盒子的所占据的宽度为200px

## 参考文献
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing


# QUESTION：css选择器有哪些？优先级？哪些属性可以继承？

 ![](https://static.vue-js.com/f7dcd330-8fe1-11eb-85f6-6fac77c0c9b3.png)



## 一、选择器
CSS选择器是CSS规则的第一部分

它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式

选择器所选择的元素，叫做“选择器的对象”

我们从一个`Html`结构开始

```html
<div id="box">
    <div class="one">
        <p class="one_1">
        </p >
        <p class="one_1">
        </p >
    </div>
    <div class="two"></div>
    <div class="two"></div>
    <div class="two"></div>
</div>
```

关于`css`属性选择器常用的有：

- id选择器（#box），选择id为box的元素

- 类选择器（.one），选择类名为one的所有元素
- 标签选择器（div），选择标签为div的所有元素

- 后代选择器（#box div），选择id为box元素内部所有的div元素
- 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素
- 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素
- 群组选择器（div,p），选择div、p的所有元素



还有一些使用频率相对没那么多的选择器：

- 伪类选择器

```css
:link ：选择未被访问的链接
:visited：选取已被访问的链接
:active：选择活动链接
:hover ：鼠标指针浮动在上面的元素
:focus ：选择具有焦点的
:first-child：父元素的首个子元素
```

- 伪元素选择器

```css
:first-letter ：用于选取指定选择器的首字母
:first-line ：选取指定选择器的首行
:before : 选择器在被选元素的内容前面插入内容
:after : 选择器在被选元素的内容后面插入内容
```

- 属性选择器

```css
[attribute] 选择带有attribute属性的元素
[attribute=value] 选择所有使用attribute=value的元素
[attribute~=value] 选择attribute属性包含value的元素
[attribute|=value]：选择attribute属性以value开头的元素
```

在`CSS3`中新增的选择器有如下：

- 层次选择器（p~ul），选择前面有p元素的每个ul元素
- 伪类选择器

```css
:first-of-type 表示一组同级元素中其类型的第一个元素
:last-of-type 表示一组同级元素中其类型的最后一个元素
:only-of-type 表示没有同类型兄弟元素的元素
:only-child 表示没有任何兄弟的元素
:nth-child(n) 根据元素在一组同级中的位置匹配元素
:nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
:last-child 表示一组兄弟元素中的最后一个元素
:root 设置HTML文档
:empty 指定空的元素
:enabled 选择可用元素
:disabled 选择被禁用元素
:checked 选择选中的元素
:not(selector) 选择与 <selector> 不匹配的所有元素
```

- 属性选择器

```css
[attribute*=value]：选择attribute属性值包含value的所有元素
[attribute^=value]：选择attribute属性开头为value的所有元素
[attribute$=value]：选择attribute属性结尾为value的所有元素
```



## 二、优先级

相信大家对`CSS`选择器的优先级都不陌生：

> 内联 > ID选择器 > 类选择器 > 标签选择器

到具体的计算层⾯，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：

- 如果存在内联样式，那么 A = 1, 否则 A = 0

- B的值等于 ID选择器出现的次数

- C的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数

- D 的值等于 标签选择器 和 伪元素 出现的总次数

这里举个例子：

```css
#nav-global > ul > li > a.nav-link
```

套用上面的算法，依次求出 `A` `B` `C` `D` 的值：

- 因为没有内联样式 ，所以 A = 0

- ID选择器总共出现了1次， B = 1

- 类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1
- 标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3

上面算出的`A` 、 `B`、`C`、`D` 可以简记作：`(0, 1, 1, 3)`

知道了优先级是如何计算之后，就来看看比较规则：

- 从左往右依次进行比较 ，较大者优先级更高
- 如果相等，则继续往右移动一位进行比较
- 如果4位全部相等，则后面的会覆盖前面的

经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用`!important`



## 三、继承属性

在`css`中，继承是指的是给父元素设置一些属性，后代元素会自动拥有这些属性

关于继承属性，可以分成：

- 字体系列属性

```css
font:组合字体
font-family:规定元素的字体系列
font-weight:设置字体的粗细
font-size:设置字体的尺寸
font-style:定义字体的风格
font-variant:偏大或偏小的字体
```

- 文本系列属性

```css
text-indent：文本缩进
text-align：文本水平对刘
line-height：行高
word-spacing：增加或减少单词间的空白
letter-spacing：增加或减少字符间的空白
text-transform：控制文本大小写
direction：规定文本的书写方向
color：文本颜色
```

- 元素可见性

```css
visibility
```

- 表格布局属性

```css
caption-side：定位表格标题位置
border-collapse：合并表格边框
border-spacing：设置相邻单元格的边框间的距离
empty-cells：单元格的边框的出现与消失
table-layout：表格的宽度由什么决定
```

- 列表属性

```css
list-style-type：文字前面的小点点样式
list-style-position：小点点位置
list-style：以上的属性可通过这属性集合
```

- 引用

```css
quotes：设置嵌套引用的引号类型
```

- 光标属性

```css
cursor：箭头可以变成需要的形状
```

继承中比较特殊的几点：

- a 标签的字体颜色不能被继承

- h1-h6标签字体的大下也是不能被继承的



### 无继承的属性

- display

- 文本属性：vertical-align、text-decoration

- 盒子模型的属性：宽度、高度、内外边距、边框等

- 背景属性：背景图片、颜色、位置等

- 定位属性：浮动、清除浮动、定位position等

- 生成内容属性：content、counter-reset、counter-increment

- 轮廓样式属性：outline-style、outline-width、outline-color、outline

- 页面样式属性：size、page-break-before、page-break-after



## 参考文献

- https://www.html.cn/qa/css3/13444.html
- https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors


# QUESTION：说说em/px/rem/vh/vw区别?

![](https://static.vue-js.com/51b036e0-9131-11eb-85f6-6fac77c0c9b3.png)

## 一、介绍

传统的项目开发中，我们只会用到`px`、`%`、`em`这几个单位，它可以适用于大部分的项目开发，且拥有比较良好的兼容性

从`CSS3`开始，浏览器对计量单位的支持又提升到了另外一个境界，新增了`rem`、`vh`、`vw`、`vm`等一些新的计量单位

利用这些新的单位开发出比较良好的响应式页面，适应多种不同分辨率的终端，包括移动设备等

## 二、单位

在`css`单位中，可以分为长度单位、绝对单位，如下表所指示

| CSS单位      |                                        |
| ------------ | -------------------------------------- |
| 相对长度单位 | em、ex、ch、rem、vw、vh、vmin、vmax、% |
| 绝对长度单位 | cm、mm、in、px、pt、pc                 |

这里我们主要讲述px、em、rem、vh、vw



### px

px，表示像素，所谓像素就是呈现在我们显示器上的一个个小点，每个像素点都是大小等同的，所以像素为计量单位被分在了绝对长度单位中

有些人会把`px`认为是相对长度，原因在于在移动端中存在设备像素比，`px`实际显示的大小是不确定的

这里之所以认为`px`为绝对单位，在于`px`的大小和元素的其他属性无关

### em

em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（`1em = 16px`）

为了简化 `font-size` 的换算，我们需要在` css `中的 `body` 选择器中声明` font-size `= `62.5%`，这就使 em 值变为 `16px*62.5% = 10px`

这样 `12px = 1.2em`, `10px = 1em`, 也就是说只需要将你的原来的` px` 数值除以 10，然后换上 `em `作为单位就行了

特点：

- em 的值并不是固定的
- em 会继承父级元素的字体大小
- em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸
- 任意浏览器的默认字体高都是 16px



举个例子

```html
<div class="big">
    我是14px=1.4rem<div class="small">我是12px=1.2rem</div>
</div>
```

样式为

```css
<style>
    html {font-size: 10px;  } /*  公式16px*62.5%=10px  */
    .big{font-size: 1.4rem}
    .small{font-size: 1.2rem}
</style>
```

这时候`.big`元素的`font-size`为14px，而`.small`元素的`font-size`为12px





### rem

rem，相对单位，相对的只是HTML根元素`font-size`的值

同理，如果想要简化`font-size`的转化，我们可以在根元素`html`中加入`font-size: 62.5%`

```css
html {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */
```

这样页面中1rem=10px、1.2rem=12px、1.4rem=14px、1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助

特点：

- rem单位可谓集相对大小和绝对大小的优点于一身
- 和em不同的是rem总是相对于根元素，而不像em一样使用级联的方式来计算尺寸



### vh、vw

vw ，就是根据窗口的宽度，分成100等份，100vw就表示满宽，50vw就表示一半宽。（vw 始终是针对窗口的宽），同理，`vh`则为窗口的高度

这里的窗口分成几种情况：

- 在桌面端，指的是浏览器的可视区域

- 移动端指的就是布局视口

像`vw`、`vh`，比较容易混淆的一个单位是`%`，不过百分比宽泛的讲是相对于父元素：

- 对于普通定位元素就是我们理解的父元素
- 对于position: absolute;的元素是相对于已定位的父元素
- 对于position: fixed;的元素是相对于 ViewPort（可视窗口）



## 三、总结

**px**：绝对单位，页面按精确像素展示

**em**：相对单位，基准点为父节点字体的大小，如果自身定义了`font-size`按自身来计算，整个页面内`1em`不是一个固定的值

**rem**：相对单位，可理解为`root em`, 相对根节点`html`的字体大小来计算

**vh、vw**：主要用于页面视口大小布局，在页面布局上更加方便简单

# QUESTION：说说设备像素、css像素、设备独立像素、dpr、ppi 之间的区别？

 ![](https://static.vue-js.com/c4d9bfd0-91f2-11eb-85f6-6fac77c0c9b3.png)

## 一、背景

在`css`中我们通常使用px作为单位，在PC浏览器中`css`的1个像素都是对应着电脑屏幕的1个物理像素

这会造成一种错觉，我们会认为`css`中的像素就是设备的物理像素

但实际情况却并非如此，`css`中的像素只是一个抽象的单位，在不同的设备或不同的环境中，`css`中的1px所代表的设备物理像素是不同的

当我们做移动端开发时，同为1px的设置，在不同分辨率的移动设备上显示效果却有很大差异

这背后就涉及了css像素、设备像素、设备独立像素、dpr、ppi的概念

## 二、介绍

### CSS像素

CSS像素（css pixel, px）: 适用于web编程，在 CSS 中以 px 为后缀，是一个长度单位

在 CSS 规范中，长度单位可以分为两类，绝对单位以及相对单位

px是一个相对单位，相对的是设备像素（device pixel）

一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素

`CSS`像素又具有两个方面的相对性：

- 在同一个设备上，每1个 CSS 像素所代表的设备像素是可以变化的（比如调整屏幕的分辨率）
- 在不同的设备之间，每1个 CSS 像素所代表的设备像素是可以变化的（比如两个不同型号的手机）

在页面进行缩放操作也会 引起`css`中`px`的变化，假设页面放大一倍，原来的 1px 的东西变成 2px，在实际宽度不变的情况下1px 变得跟原来的 2px 的长度（长宽）一样了（元素会占据更多的设备像素）

假设原来需要 320px 才能填满的宽度现在只需要 160px

px会受到下面的因素的影响而变化：

- 每英寸像素（PPI）
- 设备像素比（DPR）


### 设备像素

设备像素（device pixels），又称为物理像素

指设备能控制显示的最小物理单位，不一定是一个小正方形区块，也没有标准的宽高，只是用于显示丰富色彩的一个“点”而已

可以参考公园里的景观变色彩灯，一个彩灯(物理像素)由红、蓝、绿小灯组成，三盏小灯不同的亮度混合出各种色彩

 ![](https://static.vue-js.com/cffc6570-91f2-11eb-ab90-d9ae814b240d.png)

从屏幕在工厂生产出的那天起，它上面设备像素点就固定不变了，单位为`pt`



### 设备独立像素

设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素

在`javaScript`中可以通过`window.screen.width/ window.screen.height` 查看

比如我们会说“电脑屏幕在 2560x1600分辨率下不适合玩游戏，我们把它调为 1440x900”，这里的“分辨率”（非严谨说法）指的就是设备独立像素

一个设备独立像素里可能包含1个或者多个物理像素点，包含的越多则屏幕看起来越清晰

至于为什么出现设备独立像素这种虚拟像素单位概念，下面举个例子：

iPhone 3GS 和 iPhone 4/4s 的尺寸都是 3.5 寸，但 iPhone 3GS 的分辨率是 320x480，iPhone 4/4s 的分辨率是 640x960

这意味着，iPhone 3GS 有 320 个物理像素，iPhone 4/4s 有 640 个物理像素

如果我们按照真实的物理像素进行布局，比如说我们按照 320 物理像素进行布局，到了 640 物理像素的手机上就会有一半的空白，为了避免这种问题，就产生了虚拟像素单位

我们统一 iPhone 3GS 和 iPhone 4/4s 都是 320 个虚拟像素，只是在 iPhone 3GS 上，最终 1 个虚拟像素换算成 1 个物理像素，在 iphone 4s 中，1 个虚拟像素最终换算成 2 个物理像素

至于 1 个虚拟像素被换算成几个物理像素，这个数值我们称之为设备像素比，也就是下面介绍的`dpr`


### dpr

dpr（device pixel ratio），设备像素比，代表设备独立像素到设备像素的转换关系，在`JavaScript`中可以通过 `window.devicePixelRatio` 获取

计算公式如下：

 ![](https://static.vue-js.com/dd45e2b0-91f2-11eb-ab90-d9ae814b240d.png)

当设备像素比为1:1时，使用1（1×1）个设备像素显示1个CSS像素

当设备像素比为2:1时，使用4（2×2）个设备像素显示1个CSS像素

当设备像素比为3:1时，使用9（3×3）个设备像素显示1个CSS像素

如下图所示：

![](https://static.vue-js.com/e63cceb0-91f2-11eb-ab90-d9ae814b240d.png)

当`dpr`为3，那么`1px`的`CSS`像素宽度对应`3px`的物理像素的宽度，1px的`CSS`像素高度对应`3px`的物理像素高度



### ppi

ppi （pixel per inch），每英寸像素，表示每英寸所包含的像素点数目，更确切的说法应该是像素密度。数值越高，说明屏幕能以更高密度显示图像

计算公式如下：

 ![](https://static.vue-js.com/f734adf0-91f2-11eb-ab90-d9ae814b240d.png)



## 三、总结

无缩放情况下，1个CSS像素等于1个设备独立像素

设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变

PC端中，1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下）

在移动端中，标准屏幕（160ppi）下 1个设备独立像素 = 1个设备像素

设备像素比（dpr） = 设备像素 / 设备独立像素

每英寸像素（ppi），值越大，图像越清晰



## 参考文献

- https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_pixel
- https://hijiangtao.github.io/2017/07/09/Device-Viewport-and-Pixel-Introduction/


# QUESTION：css中，有哪些方式可以隐藏页面元素？区别?

![](https://static.vue-js.com/ccf96f50-929a-11eb-ab90-d9ae814b240d.png)

## 一、前言

在平常的样式排版中，我们经常遇到将某个模块隐藏的场景

通过`css`隐藏元素的方法有很多种，它们看起来实现的效果是一致的

但实际上每一种方法都有一丝轻微的不同，这些不同决定了在一些特定场合下使用哪一种方法

## 二、实现方式

通过`css`实现隐藏元素方法有如下：

- display:none
- visibility:hidden
- opacity:0
- 设置height、width模型属性为0
- position:absolute
- clip-path

### display:none

设置元素的`display`为`none`是最常用的隐藏元素的方法

```css
.hide {
    display:none;
}
```

将元素设置为`display:none`后，元素在页面上将彻底消失

元素本身占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘

消失后，自身绑定的事件不会触发，也不会有过渡效果

特点：元素不可见，不占据空间，无法响应点击事件

### visibility:hidden

设置元素的`visibility`为`hidden`也是一种常用的隐藏元素的方法

从页面上仅仅是隐藏该元素，DOM结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘

```css
.hidden{
    visibility:hidden
}
```

给人的效果是隐藏了，所以他自身的事件不会触发

特点：元素不可见，占据页面空间，无法响应点击事件


### opacity:0

`opacity`属性表示元素的透明度，将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的

不会引发重排，一般情况下也会引发重绘

> 如果利用 animation 动画，对 opacity 做变化（animation会默认触发GPU加速），则只会触发 GPU 层面的 composite，不会触发重绘

```css
.transparent {
    opacity:0;
}
```

由于其仍然是存在于页面上的，所以他自身的的事件仍然是可以触发的，但被他遮挡的元素是不能触发其事件的

需要注意的是：其子元素不能设置opacity来达到显示的效果

特点：改变元素透明度，元素不可见，占据页面空间，可以响应点击事件



### 设置height、width属性为0

将元素的`margin`，`border`，`padding`，`height`和`width`等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其`overflow:hidden`来隐藏其子元素

```css
.hiddenBox {
    margin:0;
    border:0;
    padding:0;
    height:0;
    width:0;
    overflow:hidden;
}
```

特点：元素不可见，不占据页面空间，无法响应点击事件



### position:absolute

将元素移出可视区域

```css
.hide {
   position: absolute;
   top: -9999px;
   left: -9999px;
}
```

特点：元素不可见，不影响页面布局


### clip-path

通过裁剪的形式

```css
.hide {
  clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);
}
```

特点：元素不可见，占据页面空间，无法响应点击事件


### 小结

最常用的还是`display:none`和`visibility:hidden`，其他的方式只能认为是奇招，它们的真正用途并不是用于隐藏元素，所以并不推荐使用它们


## 三、区别

关于`display: none`、`  visibility: hidden`、`opacity: 0`的区别，如下表所示：

|                        | display: none | visibility: hidden | opacity: 0 |
| :--------------------- | :------------ | :----------------- | ---------- |
| 页面中                 | 不存在        | 存在               | 存在       |
| 重排                   | 会            | 不会               | 不会       |
| 重绘                   | 会            | 会                 | 不一定     |
| 自身绑定事件           | 不触发        | 不触发             | 可触发     |
| transition             | 不支持        | 支持               | 支持       |
| 子元素可复原           | 不能          | 能                 | 不能       |
| 被遮挡的元素可触发事件 | 能            | 能                 | 不能       |


## 参考文献

- https://www.cnblogs.com/a-cat/p/9039962.html

# QUESTION：谈谈你对BFC的理解？

![](https://static.vue-js.com/c3d68290-9511-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

我们在页面布局的时候，经常出现以下情况：

- 这个元素高度怎么没了？
- 这两栏布局怎么没法自适应？
- 这两个元素的间距怎么有点奇怪的样子？
- ......

原因是元素之间相互的影响，导致了意料之外的情况，这里就涉及到`BFC`概念

`BFC`（Block Formatting Context），即块级格式化上下文，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则：

- 内部的盒子会在垂直方向上一个接一个的放置
- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

`BFC`目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素


## 二、触发条件

触发`BFC`的条件包含不限于：

- 根元素，即HTML元素
- 浮动元素：float值为left、right
- overflow值不为 visible，为 auto、scroll、hidden
- display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
- position的值为absolute或fixed



## 三、应用场景

利用`BFC`的特性，我们将`BFC`应用在以下场景：

#### 防止margin重叠（塌陷）

```html
<style>
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p >
    <p>Hehe</p >
</body>
```

页面显示如下：

 ![](https://static.vue-js.com/d0ce3650-9511-11eb-85f6-6fac77c0c9b3.png)

两个`p`元素之间的距离为`100px`，发生了`margin`重叠（塌陷），以最大的为准，如果第一个P的`margin`为80的话，两个P之间的距离还是100，以最大的为准。

前面讲到，同一个`BFC`的俩个相邻的盒子的`margin`会发生重叠

可以在`p`外面包裹一层容器，并触发这个容器生成一个`BFC`，那么两个`p`就不属于同一个`BFC`，则不会出现`margin`重叠

```html
<style>
    .wrap {
        overflow: hidden;// 新的BFC
    }
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p >
    <div class="wrap">
        <p>Hehe</p >
    </div>
</body>
```

这时候，边距则不会重叠：

 ![](https://static.vue-js.com/dec44740-9511-11eb-85f6-6fac77c0c9b3.png)

#### 清除内部浮动

```html
<style>
    .par {
        border: 5px solid #fcc;
        width: 300px;
    }

    .child {
        border: 5px solid #f66;
        width:100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

页面显示如下：

 ![](https://static.vue-js.com/ec5d4410-9511-11eb-85f6-6fac77c0c9b3.png)

而`BFC`在计算高度时，浮动元素也会参与，所以我们可以触发`.par`元素生成`BFC`，则内部浮动元素计算高度时候也会计算

```css
.par {
    overflow: hidden;
}
```

实现效果如下：

 ![](https://static.vue-js.com/f6487b20-9511-11eb-ab90-d9ae814b240d.png)

#### 自适应多栏布局

这里举个两栏的布局

```html
<style>
    body {
        width: 300px;
        position: relative;
    }

    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }

    .main {
        height: 200px;
        background: #fcc;
    }
</style>
<body>
    <div class="aside"></div>
    <div class="main"></div>
</body>
```

效果图如下：

 ![](https://static.vue-js.com/ffb95210-9511-11eb-ab90-d9ae814b240d.png)

前面讲到，每个元素的左外边距与包含块的左边界相接触

因此，虽然`.aslide`为浮动元素，但是`main`的左边依然会与包含块的左边相接触

而`BFC`的区域不会与浮动盒子重叠

所以我们可以通过触发`main`生成`BFC`，以此适应两栏布局

```css
.main {
    overflow: hidden;
}
```

这时候，新的`BFC`不会与浮动的`.aside`元素重叠。因此会根据包含块的宽度，和`.aside`的宽度，自动变窄

效果如下：

 ![](https://static.vue-js.com/0a5f2690-9512-11eb-ab90-d9ae814b240d.png)



### 小结

可以看到上面几个案例，都体现了`BFC`实际就是页面一个独立的容器，里面的子元素不影响外面的元素

## 参考文献

- https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
- https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md


# QUESTION：元素水平垂直居中的方法有哪些？如果元素不定宽高呢？

 ![](https://static.vue-js.com/7b64c8d0-95f9-11eb-ab90-d9ae814b240d.png)

## 一、背景

在开发中经常遇到这个问题，即让某个元素的内容在水平和垂直方向上都居中，内容不仅限于文字，可能是图片或其他元素

居中是一个非常基础但又是非常重要的应用场景，实现居中的方法存在很多，可以将这些方法分成两个大类：

- 居中元素（子元素）的宽高已知
- 居中元素宽高未知



## 二、实现方式

实现元素水平垂直居中的方式：

- 利用定位+margin:auto

- 利用定位+margin:负值

- 利用定位+transform
- table布局
- flex布局
- grid布局



### 利用定位+margin:auto

先上代码：

```html
<style>
    .father{
        width:500px;
        height:300px;
        border:1px solid #0a3b98;
        position: relative;
    }
    .son{
        width:100px;
        height:40px;
        background: #f0a238;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

父级设置为相对定位，子级绝对定位 ，并且四个定位属性的值都设置了0，那么这时候如果子级没有设置宽高，则会被拉开到和父级一样宽高

这里子元素设置了宽高，所以宽高会按照我们的设置来显示，但是实际上子级的虚拟占位已经撑满了整个父级，这时候再给它一个`margin：auto`它就可以上下左右都居中了



### 利用定位+margin:负值

绝大多数情况下，设置父元素为相对定位， 子元素移动自身50%实现水平垂直居中

```html
<style>
    .father {
        position: relative;
        width: 200px;
        height: 200px;
        background: skyblue;
    }
    .son {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left:-50px;
        margin-top:-50px;
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

整个实现思路如下图所示：

 ![](https://static.vue-js.com/922dc300-95f9-11eb-ab90-d9ae814b240d.png)

- 初始位置为方块1的位置
- 当设置left、top为50%的时候，内部子元素为方块2的位置
- 设置margin为负数时，使内部子元素到方块3的位置，即中间位置

这种方案不要求父元素的高度，也就是即使父元素的高度变化了，仍然可以保持在父元素的垂直居中位置，水平方向上是一样的操作

但是该方案需要知道子元素自身的宽高，但是我们可以通过下面`transform`属性进行移动



### 利用定位+transform

实现代码如下：

```css
<style>
    .father {
        position: relative;
        width: 200px;
        height: 200px;
        background: skyblue;
    }
    .son {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

`translate(-50%, -50%)`将会将元素位移自己宽度和高度的-50%

这种方法其实和最上面被否定掉的margin负值用法一样，可以说是`margin`负值的替代方案，并不需要知道自身元素的宽高





### table布局

设置父元素为`display:table-cell`，子元素设置 `display: inline-block`。利用`vertical`和`text-align`可以让所有的行内块级元素水平垂直居中

```html
<style>
    .father {
        display: table-cell;
        width: 200px;
        height: 200px;
        background: skyblue;
        vertical-align: middle;
        text-align: center;
    }
    .son {
        display: inline-block;
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```



### flex弹性布局

还是看看实现的整体代码：

```html
<style>
    .father {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        background: skyblue;
    }
    .son {
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

`css3`中了`flex`布局，可以非常简单实现垂直水平居中

这里可以简单看看`flex`布局的关键属性作用：

- display: flex时，表示该容器内部的元素将按照flex进行布局

- align-items: center表示这些元素将相对于本容器水平居中
- justify-content: center也是同样的道理垂直居中



### grid网格布局

```html
<style>
    .father {
            display: grid;
            align-items:center;
            justify-content: center;
            width: 200px;
            height: 200px;
            background: skyblue;

        }
        .son {
            width: 10px;
            height: 10px;
            border: 1px solid red
        }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

这里看到，`gird`网格布局和`flex`弹性布局都简单粗暴



### 小结

上述方法中，不知道元素宽高大小仍能实现水平垂直居中的方法有：

- 利用定位+margin:auto
- 利用定位+transform
- flex布局
- grid布局



## 三、总结

根据元素标签的性质，可以分为：

- 内联元素居中布局
- 块级元素居中布局



### 内联元素居中布局

水平居中

- 行内元素可设置：text-align: center
- flex布局设置父元素：display: flex; justify-content: center

垂直居中

- 单行文本父元素确认高度：height === line-height
- 多行文本父元素确认高度：display: table-cell; vertical-align: middle



### 块级元素居中布局

水平居中

- 定宽: margin: 0 auto
- 绝对定位+left:50%+margin:负自身一半

垂直居中

- position: absolute设置left、top、margin-left、margin-top(定高)
- display: table-cell
- transform: translate(x, y)
- flex(不定高，不定宽)
- grid(不定高，不定宽)，兼容性相对比较差



## 参考文献

- https://juejin.cn/post/6844903982960214029#heading-10


# QUESTION：如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？

 ![](https://static.vue-js.com/f335d400-976e-11eb-85f6-6fac77c0c9b3.png)

## 一、背景

在日常布局中，无论是两栏布局还是三栏布局，使用的频率都非常高

### 两栏布局

两栏布局实现效果就是将页面分割成左右宽度不等的两列，宽度较小的列设置为固定宽度，剩余宽度由另一列撑满，

比如 `Ant Design` 文档，蓝色区域为主要内容布局容器，侧边栏为次要内容布局容器

> 这里称宽度较小的列父元素为次要布局容器，宽度较大的列父元素为主要布局容器

 ![](https://static.vue-js.com/fcb8ac50-976e-11eb-85f6-6fac77c0c9b3.png)

这种布局适用于内容上具有明显主次关系的网页



### 三栏布局

三栏布局按照左中右的顺序进行排列，通常中间列最宽，左右两列次之

大家最常见的就是`github`：

 ![](https://static.vue-js.com/0bf016e0-976f-11eb-ab90-d9ae814b240d.png)



## 二、两栏布局

两栏布局非常常见，往往是以一个定宽栏和一个自适应的栏并排展示存在

实现思路也非常的简单：

- 使用 float 左浮左边栏
- 右边模块使用 margin-left 撑出内容块做内容展示
- 为父级元素添加BFC，防止下方元素飞到上方内容

代码如下：

```html
<style>
    .box{
        overflow: hidden; 添加BFC
    }
    .left {
        float: left;
        width: 200px;
        background-color: gray;
        height: 400px;
    }
    .right {
        margin-left: 210px;
        background-color: lightgray;
        height: 200px;
    }
</style>
<div class="box">
    <div class="left">左边</div>
    <div class="right">右边</div>
</div>
```

还有一种更为简单的使用则是采取：flex弹性布局



### flex弹性布局

```html
<style>
    .box{
        display: flex;
    }
    .left {
        width: 100px;
    }
    .right {
        flex: 1;
    }
</style>
<div class="box">
    <div class="left">左边</div>
    <div class="right">右边</div>
</div>
```

`flex`可以说是最好的方案了，代码少，使用简单

注意的是，`flex`容器的一个默认属性值:`align-items: stretch;`

这个属性导致了列等高的效果。 为了让两个盒子高度自动，需要设置: `align-items: flex-start`


## 三、三栏布局

实现三栏布局中间自适应的布局方式有：

- 两边使用 float，中间使用 margin
- 两边使用 absolute，中间使用 margin
- 两边使用 float 和负 margin
- display: table 实现
- flex实现
- grid网格布局



### 两边使用 float，中间使用 margin

需要将中间的内容放在`html`结构最后，否则右侧会臣在中间内容的下方

实现代码如下：

```html
<style>
    .wrap {
        background: #eee;
        overflow: hidden; <!-- 生成BFC，计算高度时考虑浮动的元素 -->
        padding: 20px;
        height: 200px;
    }
    .left {
        width: 200px;
        height: 200px;
        float: left;
        background: coral;
    }
    .right {
        width: 120px;
        height: 200px;
        float: right;
        background: lightblue;
    }
    .middle {
        margin-left: 220px;
        height: 200px;
        background: lightpink;
        margin-right: 140px;
    }
</style>
<div class="wrap">
    <div class="left">左侧</div>
    <div class="right">右侧</div>
    <div class="middle">中间</div>
</div>
```

原理如下：

- 两边固定宽度，中间宽度自适应。
- 利用中间元素的margin值控制两边的间距
- 宽度小于左右部分宽度之和时，右侧部分会被挤下去

这种实现方式存在缺陷：

- 主体内容是最后加载的。

- 右边在主体内容之前，如果是响应式设计，不能简单的换行展示



### 两边使用 absolute，中间使用 margin

基于绝对定位的三栏布局：注意绝对定位的元素脱离文档流，相对于最近的已经定位的祖先元素进行定位。无需考虑HTML中结构的顺序

```html
<style>
  .container {
    position: relative;
  }

  .left,
  .right,
  .main {
    height: 200px;
    line-height: 200px;
    text-align: center;
  }

  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    background: green;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    background: green;
  }

  .main {
    margin: 0 110px;
    background: black;
    color: white;
  }
</style>

<div class="container">
  <div class="left">左边固定宽度</div>
  <div class="right">右边固定宽度</div>
  <div class="main">中间自适应</div>
</div>
```

实现流程：

- 左右两边使用绝对定位，固定在两侧。
- 中间占满一行，但通过 margin和左右两边留出10px的间隔





### 两边使用 float 和负 margin

```html
<style>
  .left,
  .right,
  .main {
    height: 200px;
    line-height: 200px;
    text-align: center;
  }

  .main-wrapper {
    float: left;
    width: 100%;
  }

  .main {
    margin: 0 110px;
    background: black;
    color: white;
  }

  .left,
  .right {
    float: left;
    width: 100px;
    margin-left: -100%;
    background: green;
  }

  .right {
    margin-left: -100px; /* 同自身宽度 */
  }
</style>

<div class="main-wrapper">
  <div class="main">中间自适应</div>
</div>
<div class="left">左边固定宽度</div>
<div class="right">右边固定宽度</div>
```

实现过程：

- 中间使用了双层标签，外层是浮动的，以便左中右能在同一行展示
- 左边通过使用负 margin-left:-100%，相当于中间的宽度，所以向上偏移到左侧
- 右边通过使用负 margin-left:-100px，相当于自身宽度，所以向上偏移到最右侧



缺点：

- 增加了 .main-wrapper 一层，结构变复杂
- 使用负 margin，调试也相对麻烦



### 使用 display: table 实现

`<table>` 标签用于展示行列数据，不适合用于布局。但是可以使用 `display: table` 来实现布局的效果

```html
<style>
  .container {
    height: 200px;
    line-height: 200px;
    text-align: center;
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  .left,
  .right,
  .main {
    display: table-cell;
  }

  .left,
  .right {
    width: 100px;
    background: green;
  }

  .main {
    background: black;
    color: white;
    width: 100%;
  }
</style>

<div class="container">
  <div class="left">左边固定宽度</div>
  <div class="main">中间自适应</div>
  <div class="right">右边固定宽度</div>
</div>
```

实现原理：

- 层通过 display: table设置为表格，设置 table-layout: fixed`表示列宽自身宽度决定，而不是自动计算。
- 内层的左中右通过 display: table-cell设置为表格单元。
- 左右设置固定宽度，中间设置 width: 100% 填充剩下的宽度





### 使用flex实现

利用`flex`弹性布局，可以简单实现中间自适应

代码如下：

```html

<style type="text/css">
    .wrap {
        display: flex;
        justify-content: space-between;
    }

    .left,
    .right,
    .middle {
        height: 100px;
    }

    .left {
        width: 200px;
        background: coral;
    }

    .right {
        width: 120px;
        background: lightblue;
    }

    .middle {
        background: #555;
        width: 100%;
        margin: 0 20px;
    }
</style>
<div class="wrap">
    <div class="left">左侧</div>
    <div class="middle">中间</div>
    <div class="right">右侧</div>
</div>
```

实现过程：

- 仅需将容器设置为`display:flex;`，
- 盒内元素两端对其，将中间元素设置为`100%`宽度，或者设为`flex:1`，即可填充空白
- 盒内元素的高度撑开容器的高度

优点：

- 结构简单直观
- 可以结合 flex的其他功能实现更多效果，例如使用 order属性调整显示顺序，让主体内容优先加载，但展示在中间



### grid网格布局

代码如下：

```html
<style>
    .wrap {
        display: grid;
        width: 100%;
        grid-template-columns: 300px auto 300px;
    }

    .left,
    .right,
    .middle {
        height: 100px;
    }

    .left {
        background: coral;
    }

    .right {
        background: lightblue;
    }

    .middle {
        background: #555;
    }
</style>
<div class="wrap">
    <div class="left">左侧</div>
    <div class="middle">中间</div>
    <div class="right">右侧</div>
</div>
```

跟`flex`弹性布局一样的简单

## 参考文献

- https://zhuqingguang.github.io/2017/08/16/adapting-two-layout/

- https://segmentfault.com/a/1190000008705541


# QUESTION：说说flexbox（弹性盒布局模型）,以及适用场景？

 ![](https://static.vue-js.com/ef25b0a0-9837-11eb-ab90-d9ae814b240d.png)



## 一、是什么

`Flexible Box` 简称 `flex`，意为”弹性布局”，可以简便、完整、响应式地实现各种页面布局

采用Flex布局的元素，称为`flex`容器`container`

它的所有子元素自动成为容器成员，称为`flex`项目`item`

 ![](https://static.vue-js.com/fbc5f590-9837-11eb-ab90-d9ae814b240d.png)

容器中默认存在两条轴，主轴和交叉轴，呈90度关系。项目默认沿主轴排列，通过`flex-direction`来决定主轴的方向

每根轴都有起点和终点，这对于元素的对齐非常重要



## 二、属性

关于`flex`常用的属性，我们可以划分为容器属性和容器成员属性

容器属性有：

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content



### flex-direction

决定主轴的方向(即项目的排列方向)

```css
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

属性对应如下：

- row（默认值）：主轴为水平方向，起点在左端
- row-reverse：主轴为水平方向，起点在右端
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿

如下图所示：

 ![](https://static.vue-js.com/0c9abc70-9838-11eb-ab90-d9ae814b240d.png)



### flex-wrap

弹性元素永远沿主轴排列，那么如果主轴排不下，通过`flex-wrap`决定容器内项目是否可换行

```css
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

属性对应如下：

- nowrap（默认值）：不换行
- wrap：换行，第一行在下方
- wrap-reverse：换行，第一行在上方

默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩



### flex-flow

是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```



### justify-content

定义了项目在主轴上的对齐方式

```css
.box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

属性对应如下：

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center：居中
- space-between：两端对齐，项目之间的间隔都相等
- space-around：两个项目两侧间隔相等

效果图如下：

 ![](https://static.vue-js.com/2d5ca950-9838-11eb-85f6-6fac77c0c9b3.png)



### align-items

定义项目在交叉轴上如何对齐

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

属性对应如下：

- flex-start：交叉轴的起点对齐
- flex-end：交叉轴的终点对齐
- center：交叉轴的中点对齐
- baseline: 项目的第一行文字的基线对齐
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度



### align-content

定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

```css
.box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

属性对应如吓：

- flex-start：与交叉轴的起点对齐
- flex-end：与交叉轴的终点对齐
- center：与交叉轴的中点对齐
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
- stretch（默认值）：轴线占满整个交叉轴

效果图如下：

 ![](https://static.vue-js.com/39bcb0f0-9838-11eb-ab90-d9ae814b240d.png)



容器成员属性如下：

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`



### order

定义项目的排列顺序。数值越小，排列越靠前，默认为0

```css
.item {
    order: <integer>;
}
```



### flex-grow

上面讲到当容器设为`flex-wrap: nowrap;`不换行的时候，容器宽度有不够分的情况，弹性元素会根据`flex-grow`来决定

定义项目的放大比例（容器宽度>元素总宽度时如何伸展）

默认为`0`，即如果存在剩余空间，也不放大

```css
.item {
    flex-grow: <number>;
}
```

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）

 ![](https://static.vue-js.com/48c8c5c0-9838-11eb-ab90-d9ae814b240d.png)

如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍

 ![](https://static.vue-js.com/5b822b20-9838-11eb-ab90-d9ae814b240d.png)

弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时无论`flex-grow`是什么值都不会生效



### flex-shrink

定义了项目的缩小比例（容器宽度<元素总宽度时如何收缩），默认为1，即如果空间不足，该项目将缩小

```css
.item {
    flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小

如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小

 ![](https://static.vue-js.com/658c5be0-9838-11eb-85f6-6fac77c0c9b3.png)

在容器宽度有剩余时，`flex-shrink`也是不会生效的





### flex-basis

设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在`flex-grow`和`flex-shrink`生效前的尺寸

浏览器根据这个属性，计算主轴是否有多余空间，默认值为`auto`，即项目的本来大小，如设置了`width`则元素尺寸由`width/height`决定（主轴方向），没有设置则由内容决定

 ```css
.item {
    flex-basis: <length> | auto; /* default auto */
}
 ```

当设置为0的是，会根据内容撑开

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间



### flex

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`，也是比较难懂的一个复合属性

 ```css
 .item {
   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
 }
 ```

一些属性有：

- flex: 1 = flex: 1 1 0%
- flex: 2 = flex: 2 1 0%
- flex: auto = flex: 1 1 auto
- flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩



`flex:1` 和 `flex:auto` 的区别，可以归结于`flex-basis:0`和`flex-basis:auto`的区别

当设置为0时（绝对弹性元素），此时相当于告诉`flex-grow`和`flex-shrink`在伸缩的时候不需要考虑我的尺寸

当设置为`auto`时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑

注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值



### align-self

允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性

默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`

```css
.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

效果图如下：

 ![](https://static.vue-js.com/6f8304a0-9838-11eb-85f6-6fac77c0c9b3.png)



## 三、应用场景

在以前的文章中，我们能够通过`flex`简单粗暴的实现元素水平垂直方向的居中，以及在两栏三栏自适应布局中通过`flex`完成，这里就不再展开代码的演示

包括现在在移动端、小程序这边的开发，都建议使用`flex`进行布局



## 参考文献
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
- http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html


# QUESTION：介绍一下grid网格布局

 ![](https://static.vue-js.com/4d73e3d0-9a94-11eb-85f6-6fac77c0c9b3.png)


## 一、是什么

`Grid` 布局即网格布局，是一个二维的布局方式，由纵横相交的两组网格线形成的框架性布局结构，能够同时处理行与列

擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系

 ![](https://static.vue-js.com/59680a40-9a94-11eb-85f6-6fac77c0c9b3.png)

这与之前讲到的`flex`一维布局不相同

设置`display:grid/inline-grid`的元素就是网格布局容器，这样就能出发浏览器渲染引擎的网格布局算法

```js
<div class="container">
    <div class="item item-1">
        <p class="sub-item"></p >
 </div>
    <div class="item item-2"></div>
    <div class="item item-3"></div>
</div>
```

上述代码实例中，`.container`元素就是网格布局容器，`.item`元素就是网格的项目，由于网格元素只能是容器的顶层子元素，所以`p`元素并不是网格元素

这里提一下，网格线概念，有助于下面对`grid-column`系列属性的理解

网格线，即划分网格的线，如下图所示：

 ![](https://static.vue-js.com/61be7080-9a94-11eb-ab90-d9ae814b240d.png)

上图是一个 2 x 3 的网格，共有3根水平网格线和4根垂直网格线


## 二、属性

同样，`Grid` 布局属性可以分为两大类：

- 容器属性，
- 项目属性



关于容器属性有如下：

### display 属性

文章开头讲到，在元素上设置`display：grid` 或 `display：inline-grid` 来创建一个网格容器

- display：grid 则该容器是一个块级元素

- display: inline-grid 则容器元素为行内元素



### grid-template-columns 属性，grid-template-rows 属性

`grid-template-columns` 属性设置列宽，`grid-template-rows` 属性设置行高

```css
.wrapper {
  display: grid;
  /*  声明了三列，宽度分别为 200px 200px 200px */
  grid-template-columns: 200px 200px 200px;
  grid-gap: 5px;
  /*  声明了两行，行高分别为 50px 50px  */
  grid-template-rows: 50px 50px;
}
```

以上表示固定列宽为 200px 200px 200px，行高为 50px 50px

上述代码可以看到重复写单元格宽高，通过使用`repeat()`函数，可以简写重复的值

- 第一个参数是重复的次数
- 第二个参数是重复的值

所以上述代码可以简写成

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,200px);
  grid-gap: 5px;
  grid-template-rows:repeat(2,50px);
}
```

除了上述的`repeact`关键字，还有：

- auto-fill：示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格

>`grid-template-columns: repeat(auto-fill, 200px)` 表示列宽是 200 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素

- fr：片段，为了方便表示比例关系

>`grid-template-columns: 200px 1fr 2fr` 表示第一个列宽设置为 200px，后面剩余的宽度分为两部分，宽度分别为剩余宽度的 1/3 和 2/3

- minmax：产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。第一个参数就是最小值，第二个参数就是最大值

>`minmax(100px, 1fr)`表示列宽不小于`100px`，不大于`1fr`

- auto：由浏览器自己决定长度

>`grid-template-columns: 100px auto 100px` 表示第一第三列为 100px，中间由浏览器决定长度



### grid-row-gap 属性， grid-column-gap 属性， grid-gap 属性

`grid-row-gap` 属性、`grid-column-gap` 属性分别设置行间距和列间距。`grid-gap` 属性是两者的简写形式

`grid-row-gap: 10px` 表示行间距是 10px

`grid-column-gap: 20px` 表示列间距是 20px

`grid-gap: 10px 20px` 等同上述两个属性



### grid-template-areas 属性

用于定义区域，一个区域由一个或者多个单元格组成

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

上面代码先划分出9个单元格，然后将其定名为`a`到`i`的九个区域，分别对应这九个单元格。

多个单元格合并成一个区域的写法如下

 ```css
 grid-template-areas: 'a a a'
                      'b b b'
                      'c c c';
 ```

上面代码将9个单元格分成`a`、`b`、`c`三个区域

如果某些区域不需要利用，则使用"点"（`.`）表示



### grid-auto-flow 属性

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。

顺序就是由`grid-auto-flow`决定，默认为行，代表"先行后列"，即先填满第一行，再开始放入第二行

 ![](https://static.vue-js.com/70fb3240-9a94-11eb-ab90-d9ae814b240d.png)

当修改成`column`后，放置变为如下：

![](https://static.vue-js.com/7c26ffa0-9a94-11eb-ab90-d9ae814b240d.png)



### justify-items 属性， align-items 属性， place-items 属性

`justify-items` 属性设置单元格内容的水平位置（左中右），`align-items` 属性设置单元格的垂直位置（上中下）

两者属性的值完成相同

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

属性对应如下：

- start：对齐单元格的起始边缘
- end：对齐单元格的结束边缘
- center：单元格内部居中
- stretch：拉伸，占满单元格的整个宽度（默认值）

`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式



### justify-content 属性， align-content 属性， place-content 属性

`justify-content`属性是整个内容区域在容器里面的水平位置（左中右），`align-content`属性是整个内容区域的垂直位置（上中下）

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

两个属性的写法完全相同，都可以取下面这些值：

- start - 对齐容器的起始边框
- end - 对齐容器的结束边框
- center - 容器内部居中

 ![](https://static.vue-js.com/9d1ec990-9a94-11eb-ab90-d9ae814b240d.png)

- space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍

- space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔

- space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

- stretch - 项目大小没有指定时，拉伸占据整个网格容器

 ![](https://static.vue-js.com/a620b210-9a94-11eb-85f6-6fac77c0c9b3.png)



### grid-auto-columns 属性和 grid-auto-rows 属性

有时候，一些项目的指定位置，在现有网格的外部，就会产生显示网格和隐式网格

比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。超出的部分就是隐式网格

而`grid-auto-rows`与`grid-auto-columns`就是专门用于指定隐式网格的宽高





关于项目属性，有如下：


### grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及grid-row-end 属性

指定网格项目所在的四个边框，分别定位在哪根网格线，从而指定项目的位置

- grid-column-start 属性：左边框所在的垂直网格线
- grid-column-end 属性：右边框所在的垂直网格线
- grid-row-start 属性：上边框所在的水平网格线
- grid-row-end 属性：下边框所在的水平网格线

举个例子：

```html
<style>
    #container{
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
    }
    .item-1 {
        grid-column-start: 2;
        grid-column-end: 4;
    }
</style>

<div id="container">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
</div>
```

通过设置`grid-column`属性，指定1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线

 ![](https://static.vue-js.com/b7925530-9a94-11eb-ab90-d9ae814b240d.png)





### grid-area 属性

`grid-area` 属性指定项目放在哪一个区域

```css
.item-1 {
  grid-area: e;
}
```

意思为将1号项目位于`e`区域

与上述讲到的`grid-template-areas`搭配使用



### justify-self 属性、align-self 属性以及 place-self 属性

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目

 ```css
 .item {
   justify-self: start | end | center | stretch;
   align-self: start | end | center | stretch;
 }
 ```

这两个属性都可以取下面四个值。

 - start：对齐单元格的起始边缘。
  - end：对齐单元格的结束边缘。
 - center：单元格内部居中。
 - stretch：拉伸，占满单元格的整个宽度（默认值）



## 三、应用场景

文章开头就讲到，`Grid`是一个强大的布局，如一些常见的 CSS 布局，如居中，两列布局，三列布局等等是很容易实现的，在以前的文章中，也有使用`Grid`布局完成对应的功能

关于兼容性问题，结果如下：

 ![](https://static.vue-js.com/c24a2b10-9a94-11eb-85f6-6fac77c0c9b3.png)

总体兼容性还不错，但在 IE 10 以下不支持

目前，`Grid`布局在手机端支持还不算太友好



## 参考文献

- https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout
- https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
- https://juejin.cn/post/6854573220306255880#heading-2

# QUESTION：CSS3新增了哪些新特性？

 ![](https://static.vue-js.com/d58f6df0-9b5e-11eb-ab90-d9ae814b240d.png)


## 一、是什么

`css`，即层叠样式表（Cascading Style Sheets）的简称，是一种标记语言，由浏览器解释执行用来使页面变得更美观

`css3`是`css`的最新标准，是向后兼容的，`CSS1/2 `的特性在` CSS3` 里都是可以使用的

而` CSS3` 也增加了很多新特性，为开发带来了更佳的开发体验


## 二、选择器

`css3`中新增了一些选择器，主要为如下图所示：

 ![](https://static.vue-js.com/e368cf20-9b5e-11eb-85f6-6fac77c0c9b3.png)



## 三、新样式

### 边框

`css3`新增了三个边框属性，分别是：

- border-radius：创建圆角边框
- box-shadow：为元素添加阴影

- border-image：使用图片来绘制边框



#### box-shadow

设置元素阴影，设置属性如下：

- 水平阴影
- 垂直阴影
- 模糊距离(虚实)
- 阴影尺寸(影子大小)
- 阴影颜色
- 内/外阴影

其中水平阴影和垂直阴影是必须设置的


### 背景

新增了几个关于背景的属性，分别是`background-clip`、`background-origin`、`background-size`和`background-break`



#### background-clip

用于确定背景画区，有以下几种可能的属性：

- background-clip: border-box; 背景从border开始显示
- background-clip: padding-box; 背景从padding开始显示
- background-clip: content-box; 背景显content区域开始显示
- background-clip: no-clip; 默认属性，等同于border-box

通常情况，背景都是覆盖整个元素的，利用这个属性可以设定背景颜色或图片的覆盖范围



#### background-origin

当我们设置背景图片时，图片是会以左上角对齐，但是是以`border`的左上角对齐还是以`padding`的左上角或者`content`的左上角对齐? `border-origin`正是用来设置这个的

- background-origin: border-box; 从border开始计算background-position
- background-origin: padding-box; 从padding开始计算background-position
- background-origin: content-box; 从content开始计算background-position

默认情况是`padding-box`，即以`padding`的左上角为原点



#### background-size

background-size属性常用来调整背景图片的大小，主要用于设定图片本身。有以下可能的属性：

- background-size: contain; 缩小图片以适合元素（维持像素长宽比）
- background-size: cover; 扩展元素以填补元素（维持像素长宽比）
- background-size: 100px 100px; 缩小图片至指定的大小
- background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包 含元素的尺寸



### background-break

元素可以被分成几个独立的盒子（如使内联元素span跨越多行），`background-break` 属性用来控制背景怎样在这些不同的盒子中显示

- background-break: continuous; 默认值。忽略盒之间的距离（也就是像元素没有分成多个盒子，依然是一个整体一样）
- background-break: bounding-box; 把盒之间的距离计算在内；
- background-break: each-box; 为每个盒子单独重绘背景



### 文字

### word-wrap

语法：`word-wrap: normal|break-word`

- normal：使用浏览器默认的换行
- break-all：允许在单词内换行



### text-overflow

` text-overflow`设置或检索当当前行超过指定容器的边界时如何显示，属性有两个值选择：

- clip：修剪文本
- ellipsis：显示省略符号来代表被修剪的文本



### text-shadow

`text-shadow`可向文本应用阴影。能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色



### text-decoration

CSS3里面开始支持对文字的更深层次的渲染，具体有三个属性可供设置：

- text-fill-color: 设置文字内部填充颜色

- text-stroke-color: 设置文字边界填充颜色

- text-stroke-width: 设置文字边界宽度



### 颜色

`css3`新增了新的颜色表示方式`rgba`与`hsla`

- rgba分为两部分，rgb为颜色值，a为透明度
- hala分为四部分，h为色相，s为饱和度，l为亮度，a为透明度



## 四、transition 过渡

`transition`属性可以被指定为一个或多个` CSS `属性的过渡效果，多个属性之间用逗号进行分隔，必须规定两项内容：

- 过度效果
- 持续时间

语法如下：

```css
transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
```

上面为简写模式，也可以分开写各个属性

```css
transition-property: width;
transition-duration: 1s;
transition-timing-function: linear;
transition-delay: 2s;
```



### 五、transform 转换

`transform`属性允许你旋转，缩放，倾斜或平移给定元素

`transform-origin`：转换元素的位置（围绕那个点进行转换），默认值为`(x,y,z):(50%,50%,0)`

使用方式：

- transform: translate(120px, 50%)：位移
- transform: scale(2, 0.5)：缩放
- transform: rotate(0.5turn)：旋转
- transform: skew(30deg, 20deg)：倾斜



### 六、animation 动画

动画这个平常用的也很多，主要是做一个预设的动画。和一些页面交互的动画效果，结果和过渡应该一样，让页面不会那么生硬

animation也有很多的属性

- animation-name：动画名称
- animation-duration：动画持续时间
- animation-timing-function：动画时间函数
- animation-delay：动画延迟时间
- animation-iteration-count：动画执行次数，可以设置为一个整数，也可以设置为infinite，意思是无限循环
- animation-direction：动画执行方向
- animation-paly-state：动画播放状态
- animation-fill-mode：动画填充模式



## 七、渐变

颜色渐变是指在两个颜色之间平稳的过渡，`css3`渐变包括

- linear-gradient：线性渐变

> background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

- radial-gradient：径向渐变

> linear-gradient(0deg, red, green);



## 八、其他

关于`css3`其他的新特性还包括`flex`弹性布局、`Grid`栅格布局，这两个布局在以前就已经讲过，这里就不再展示

除此之外，还包括多列布局、媒体查询、混合模式等等......



## 参考文献

- https://juejin.cn/post/6844903518520901639#heading-1

- https://www.w3school.com.cn/css/index.asp

# QUESTION：css3动画有哪些？

 ![](https://static.vue-js.com/d12e2380-9c0a-11eb-ab90-d9ae814b240d.png)



## 一、是什么

CSS动画（CSS Animations）是为层叠样式表建议的允许可扩展标记语言（XML）元素使用CSS的动画的模块

即指元素从一种样式逐渐过渡为另一种样式的过程

常见的动画效果有很多，如平移、旋转、缩放等等，复杂动画则是多个简单动画的组合

`css`实现动画的方式，有如下几种：

- transition 实现渐变动画
- transform 转变动画
- animation 实现自定义动画


## 二、实现方式

### transition 实现渐变动画

`transition`的属性如下：

- property:填写需要变化的css属性
- duration:完成过渡效果需要的时间单位(s或者ms)
- timing-function:完成效果的速度曲线
- delay: 动画效果的延迟触发时间

其中`timing-function`的值有如下：

| 值                            | 描述                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| linear                        | 匀速（等于 cubic-bezier(0,0,1,1)）                           |
| ease                          | 从慢到快再到慢（cubic-bezier(0.25,0.1,0.25,1)）              |
| ease-in                       | 慢慢变快（等于 cubic-bezier(0.42,0,1,1)）                    |
| ease-out                      | 慢慢变慢（等于 cubic-bezier(0,0,0.58,1)）                    |
| ease-in-out                   | 先变快再到慢（等于 cubic-bezier(0.42,0,0.58,1)），渐显渐隐效果 |
| cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值 |

注意：并不是所有的属性都能使用过渡的，如`display:none<->display:block`

举个例子，实现鼠标移动上去发生变化动画效果

```html
<style>
       .base {
            width: 100px;
            height: 100px;
            display: inline-block;
            background-color: #0EA9FF;
            border-width: 5px;
            border-style: solid;
            border-color: #5daf34;
            transition-property: width, height, background-color, border-width;
            transition-duration: 2s;
            transition-timing-function: ease-in;
            transition-delay: 500ms;
        }

        /*简写*/
        /*transition: all 2s ease-in 500ms;*/
        .base:hover {
            width: 200px;
            height: 200px;
            background-color: #5daf34;
            border-width: 10px;
            border-color: #3a8ee6;
        }
</style>
<div class="base"></div>
```

### transform 转变动画

包含四个常用的功能：

- translate：位移
- scale：缩放
- rotate：旋转
- skew：倾斜

一般配合`transition`过度使用

注意的是，`transform`不支持`inline`元素，使用前把它变成`block`

举个例子

```html
<style>
    .base {
        width: 100px;
        height: 100px;
        display: inline-block;
        background-color: #0EA9FF;
        border-width: 5px;
        border-style: solid;
        border-color: #5daf34;
        transition-property: width, height, background-color, border-width;
        transition-duration: 2s;
        transition-timing-function: ease-in;
        transition-delay: 500ms;
    }
    .base2 {
        transform: none;
        transition-property: transform;
        transition-delay: 5ms;
    }

    .base2:hover {
        transform: scale(0.8, 1.5) rotate(35deg) skew(5deg) translate(15px, 25px);
    }
</style>
 <div class="base base2"></div>
```

可以看到盒子发生了旋转，倾斜，平移，放大



### animation 实现自定义动画

`animation`是由 8 个属性的简写，分别如下：

| 属性                                   | 描述                                                         | 属性值                                        |
| -------------------------------------- | ------------------------------------------------------------ | --------------------------------------------- |
| animation-duration                     | 指定动画完成一个周期所需要时间，单位秒（s）或毫秒（ms），默认是 0 |                                               |
| animation-timing-function              | 指定动画计时函数，即动画的速度曲线，默认是 "ease"            | linear、ease、ease-in、ease-out、ease-in-out  |
| animation-delay                        | 指定动画延迟时间，即动画何时开始，默认是 0                   |                                               |
| animation-iteration-count              | 指定动画播放的次数，默认是 1                                 |                                               |
| animation-direction 指定动画播放的方向 | 默认是 normal                                                | normal、reverse、alternate、alternate-reverse |
| animation-fill-mode                    | 指定动画填充模式。默认是 none                                | forwards、backwards、both                     |
| animation-play-state                   | 指定动画播放状态，正在运行或暂停。默认是 running             | running、pauser                               |
| animation-name                         | 指定 @keyframes 动画的名称                                   |                                               |

`CSS` 动画只需要定义一些关键的帧，而其余的帧，浏览器会根据计时函数插值计算出来，

通过 `@keyframes` 来定义关键帧

因此，如果我们想要让元素旋转一圈，只需要定义开始和结束两帧即可：

```css
@keyframes rotate{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
```

`from` 表示最开始的那一帧，`to` 表示结束时的那一帧

也可以使用百分比刻画生命周期

```css
@keyframes rotate{
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
```

定义好了关键帧后，下来就可以直接用它了：

```css
animation: rotate 2s;
```





## 三、总结

| 属性               | 含义                                                         |
| ------------------ | ------------------------------------------------------------ |
| transition（过度） | 用于设置元素的样式过度，和animation有着类似的效果，但细节上有很大的不同 |
| transform（变形）  | 用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系，就相当于color一样用来设置元素的“外表” |
| translate（移动）  | 只是transform的一个属性值，即移动                            |
| animation（动画）  | 用于设置动画属性，他是一个简写的属性，包含6个属性            |



## 参考文献

- https://segmentfault.com/a/1190000022540857
- https://zh.m.wikipedia.org/wiki/CSS%E5%8A%A8%E7%94%BB
- https://vue3js.cn/interview

# QUESTION：怎么理解回流跟重绘？什么场景下会触发？

 ![](https://static.vue-js.com/1ed5d340-9cdc-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

在`HTML`中，每个元素都可以理解成一个盒子，在浏览器解析过程中，会涉及到回流与重绘：

- 回流：布局引擎会根据各种样式计算每个盒子在页面上的大小与位置

- 重绘：当计算好盒模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制

具体的浏览器解析渲染机制如下所示：

 ![](https://static.vue-js.com/2b56a950-9cdc-11eb-ab90-d9ae814b240d.png)

- 解析HTML，生成DOM树，解析CSS，生成CSSOM树

- 将DOM树和CSSOM树结合，生成渲染树(Render Tree)
- Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
- Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- Display:将像素发送给GPU，展示在页面上



在页面初始渲染阶段，回流不可避免的触发，可以理解成页面一开始是空白的元素，后面添加了新的元素使页面布局发生改变

当我们对 `DOM` 的修改引发了 `DOM `几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性，然后再将计算的结果绘制出来

当我们对 `DOM `的修改导致了样式的变化（`color`或`background-color`），却并未影响其几何属性时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式，这里就仅仅触发了重绘



## 二、如何触发

要想减少回流和重绘的次数，首先要了解回流和重绘是如何触发的

### 回流触发时机

回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流，如下面情况：

- 添加或删除可见的DOM元素
- 元素的位置发生变化
- 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代
- 页面一开始渲染的时候（这避免不了）
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）

还有一些容易被忽略的操作：获取一些特定属性的值

> offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight

这些属性有一个共性，就是需要通过即时计算得到。因此浏览器为了获取这些值，也会进行回流

除此还包括`getComputedStyle `方法，原理是一样的



### 重绘触发时机

触发回流一定会触发重绘

可以把页面理解为一个黑板，黑板上有一朵画好的小花。现在我们要把这朵从左边移到了右边，那我们要先确定好右边的具体位置，画好形状（回流），再画上它原有的颜色（重绘）

除此之外还有一些其他引起重绘行为：

- 颜色的修改

- 文本方向的修改
- 阴影的修改



### 浏览器优化机制

由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列

当你获取布局信息的操作的时候，会强制队列刷新，包括前面讲到的`offsetTop`等方法都会返回最新的数据

因此浏览器不得不清空队列，触发回流重绘来返回正确的值



## 三、如何减少

我们了解了如何触发回流和重绘的场景，下面给出避免回流的经验：

- 如果想设定元素的样式，通过改变元素的 `class` 类名 (尽可能在 DOM 树的最里层)
- 避免设置多项内联样式
- 应用元素的动画，使用 `position` 属性的 `fixed` 值或 `absolute` 值(如前文示例所提)
- 避免使用 `table` 布局，`table` 中每个元素的大小以及内容的改动，都会导致整个 `table` 的重新计算
- 对于那些复杂的动画，对其设置 `position: fixed/absolute`，尽可能地使元素脱离文档流，从而减少对其他元素的影响
- 使用css3硬件加速，可以让`transform`、`opacity`、`filters`这些动画不会引起回流重绘
- 避免使用 CSS 的 `JavaScript` 表达式

在使用 `JavaScript` 动态插入多个节点时, 可以使用`DocumentFragment`. 创建后一次插入. 就能避免多次的渲染性能

但有时候，我们会无可避免地进行回流或者重绘，我们可以更好使用它们

例如，多次修改一个把元素布局的时候，我们很可能会如下操作

```js
const el = document.getElementById('el')
for(let i=0;i<10;i++) {
    el.style.top  = el.offsetTop  + 10 + "px";
    el.style.left = el.offsetLeft + 10 + "px";
}
```

每次循环都需要获取多次`offset`属性，比较糟糕，可以使用变量的形式缓存起来，待计算完毕再提交给浏览器发出重计算请求

```js
// 缓存offsetLeft与offsetTop的值
const el = document.getElementById('el')
let offLeft = el.offsetLeft, offTop = el.offsetTop

// 在JS层面进行计算
for(let i=0;i<10;i++) {
  offLeft += 10
  offTop  += 10
}

// 一次性将计算结果应用到DOM上
el.style.left = offLeft + "px"
el.style.top = offTop  + "px"
```

我们还可避免改变样式，使用类名去合并样式

```js
const container = document.getElementById('container')
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'
```

使用类名去合并样式

```html
<style>
    .basic_style {
        width: 100px;
        height: 200px;
        border: 10px solid red;
        color: red;
    }
</style>
<script>
    const container = document.getElementById('container')
    container.classList.add('basic_style')
</script>
```

前者每次单独操作，都去触发一次渲染树更改（新浏览器不会），

都去触发一次渲染树更改，从而导致相应的回流与重绘过程

合并之后，等于我们将所有的更改一次性发出

我们还可以通过通过设置元素属性`display: none`，将其从页面上去掉，然后再进行后续操作，这些后续操作也不会触发回流与重绘，这个过程称为离线操作

```js
const container = document.getElementById('container')
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'
```

离线操作后

```js
let container = document.getElementById('container')
container.style.display = 'none'
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'
...（省略了许多类似的后续操作）
container.style.display = 'block'
```



## 参考文献

- https://juejin.cn/post/6844903942137053192

- https://segmentfault.com/a/1190000017329980


# QUESTION：什么是响应式设计？响应式设计的基本原理是什么？如何做？

 ![](https://static.vue-js.com/a57e2e40-9dba-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

响应式网站设计（Responsive Web design）是一种网络页面设计布局，页面的设计与开发应当根据用户行为以及设备环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整

描述响应式界面最著名的一句话就是“Content is like water”

大白话便是“如果将屏幕看作容器，那么内容就像水一样”

响应式网站常见特点：

- 同时适配PC + 平板 + 手机等

- 标签导航在接近手持终端设备时改变为经典的抽屉式导航

- 网站的布局会根据视口来调整模块的大小和位置

 ![](https://static.vue-js.com/ae68be30-9dba-11eb-85f6-6fac77c0c9b3.png)



## 二、实现方式

响应式设计的基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理，为了处理移动端，页面头部必须有`meta`声明`viewport`

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”>
```

属性对应如下：

- width=device-width: 是自适应手机屏幕的尺寸宽度

- maximum-scale:是缩放比例的最大值

- inital-scale:是缩放的初始化

- user-scalable:是用户的可以缩放的操作



实现响应式布局的方式有如下：

- 媒体查询
- 百分比
- vw/vh
- rem



### 媒体查询

`CSS3 `中的增加了更多的媒体查询，就像`if`条件表达式一样，我们可以设置不同类型的媒体条件，并根据对应的条件，给相应符合条件的媒体调用相对应的样式表

使用`@Media`查询，可以针对不同的媒体类型定义不同的样式，如：

```css
@media screen and (max-width: 1920px) { ... }
```

当视口在375px - 600px之间，设置特定字体大小18px

```css
@media screen (min-width: 375px) and (max-width: 600px) {
  body {
    font-size: 18px;
  }
}
```

通过媒体查询，可以通过给不同分辨率的设备编写不同的样式来实现响应式的布局，比如我们为不同分辨率的屏幕，设置不同的背景图片

比如给小屏幕手机设置@2x图，为大屏幕手机设置@3x图，通过媒体查询就能很方便的实现



### 百分比

通过百分比单位 " % " 来实现响应式的效果

 比如当浏览器的宽度或者高度发生变化时，通过百分比单位，可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果

`height`、`width`属性的百分比依托于父标签的宽高，但是其他盒子属性则不完全依赖父元素：

- 子元素的top/left和bottom/right如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度/宽度

- 子元素的padding如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width，而与父元素的height无关。

- 子元素的margin如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的width

- border-radius不一样，如果设置border-radius为百分比，则是相对于自身的宽度

可以看到每个属性都使用百分比，会照成布局的复杂度，所以不建议使用百分比来实现响应式





### vw/vh

`vw`表示相对于视图窗口的宽度，`vh`表示相对于视图窗口高度。 任意层级元素，在使用`vw`单位的情况下，`1vw`都等于视图宽度的百分之一

与百分比布局很相似，在以前文章提过与`%`的区别，这里就不再展开述说



### rem

在以前也讲到，`rem`是相对于根元素`html`的`font-size`属性，默认情况下浏览器字体大小为`16px`，此时`1rem = 16px`

可以利用前面提到的媒体查询，针对不同设备分辨率改变`font-size`的值，如下：

```css
@media screen and (max-width: 414px) {
  html {
    font-size: 18px
  }
}

@media screen and (max-width: 375px) {
  html {
    font-size: 16px
  }
}

@media screen and (max-width: 320px) {
  html {
    font-size: 12px
  }
}
```

为了更准确监听设备可视窗口变化，我们可以在`css`之前插入`script`标签，内容如下：

```js
//动态为根元素设置字体大小
function init () {
    // 获取屏幕宽度
    var width = document.documentElement.clientWidth
    // 设置根元素字体大小。此时为宽的10等分
    document.documentElement.style.fontSize = width / 10 + 'px'
}

//首次加载应用，设置一次
init()
// 监听手机旋转的事件的时机，重新设置
window.addEventListener('orientationchange', init)
// 监听手机窗口变化，重新设置
window.addEventListener('resize', init)
```

无论设备可视窗口如何变化，始终设置`rem`为`width`的1/10，实现了百分比布局

除此之外，我们还可以利用主流`UI`框架，如：`element ui`、`antd`提供的栅格布局实现响应式



### 小结

响应式设计实现通常会从以下几方面思考：

- 弹性盒子（包括图片、表格、视频）和媒体查询等技术
- 使用百分比布局创建流式布局的弹性UI，同时使用媒体查询限制元素的尺寸和内容变更范围
- 使用相对单位使得内容自适应调节
- 选择断点，针对不同断点实现不同布局和内容展示



## 三、总结

响应式布局优点可以看到：

- 面对不同分辨率设备灵活性强
- 能够快捷解决多设备显示适应问题

缺点：

- 仅适用布局、信息、框架并不复杂的部门类型网站
- 兼容各种设备工作量大，效率低下
- 代码累赘，会出现隐藏无用的元素，加载时间加长
- 其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果
- 一定程度上改变了网站原有的布局结构，会出现用户混淆的情况


## 参考文献
- https://baike.baidu.com/item/%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BD%91%E9%A1%B5%E8%AE%BE%E8%AE%A1
- https://juejin.cn/post/6844904082751111176
- https://vue3js.cn/interview

# QUESTION：如果要做优化，CSS提高性能的方法有哪些？

 ![](https://static.vue-js.com/c071c820-9fa3-11eb-ab90-d9ae814b240d.png)



## 一、前言

每一个网页都离不开`css`，但是很多人又认为，`css`主要是用来完成页面布局的，像一些细节或者优化，就不需要怎么考虑，实际上这种想法是不正确的

作为页面渲染和内容展现的重要环节，`css`影响着用户对整个网站的第一体验

因此，在整个产品研发过程中，`css`性能优化同样需要贯穿全程



## 二、实现方式



实现方式有很多种，主要有如下：

- 内联首屏关键CSS
- 异步加载CSS
- 资源压缩
- 合理使用选择器
- 减少使用昂贵的属性
- 不要使用@import

### 内联首屏关键CSS

在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联`css`关键代码能够使浏览器在下载完`html`后就能立刻渲染

而如果外部引用`css`代码，在解析`html`结构过程中遇到外部`css`文件，才会开始下载`css`代码，再渲染

所以，`CSS`内联使用使渲染时间提前

注意：但是较大的`css`代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式



### 异步加载CSS

在`CSS`文件请求、下载、解析完成之前，`CSS`会阻塞渲染，浏览器将不会渲染任何已处理的内容

前面加载内联代码后，后面的外部引用`css`则没必要阻塞浏览器渲染。这时候就可以采取异步加载的方案，主要有如下：

- 使用javascript将link标签插到head标签最后

```js
// 创建link标签
const myCSS = document.createElement( "link" );
myCSS.rel = "stylesheet";
myCSS.href = "mystyles.css";
// 插入到header的最后位置
document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
```

- 设置link标签media属性为noexis，浏览器会认为当前样式表不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完成后，将`media`的值设为`screen`或`all`，从而让浏览器开始解析CSS

```html
<link rel="stylesheet" href="mystyles.css" media="noexist" onload="this.media='all'">
```

- 通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet

```html
<link rel="alternate stylesheet" href="mystyles.css" onload="this.rel='stylesheet'">
```



### 资源压缩

利用`webpack`、`gulp/grunt`、`rollup`等模块化工具，将`css`代码进行压缩，使文件变小，大大降低了浏览器的加载时间



### 合理使用选择器

`css`匹配的规则是从右往左开始匹配，例如`#markdown .content h3`匹配规则如下：

- 先找到h3标签元素
- 然后去除祖先不是.content的元素
- 最后去除祖先不是#markdown的元素

如果嵌套的层级更多，页面中的元素更多，那么匹配所要花费的时间代价自然更高

所以我们在编写选择器的时候，可以遵循以下规则：

- 不要嵌套使用过多复杂选择器，最好不要三层以上
- 使用id选择器就没必要再进行嵌套
- 通配符和属性选择器效率最低，避免使用



### 减少使用昂贵的属性

在页面发生重绘的时候，昂贵属性如`box-shadow`/`border-radius`/`filter`/透明度/`:nth-child`等，会降低浏览器的渲染性能



### 不要使用@import

css样式文件有两种引入方式，一种是`link`元素，另一种是`@import`

`@import`会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时

而且多个`@import`可能会导致下载顺序紊乱

比如一个css文件`index.css`包含了以下内容：`@import url("reset.css")`

那么浏览器就必须先把`index.css`下载、解析和执行后，才下载、解析和执行第二个文件`reset.css`



### 其他

- 减少重排操作，以及减少不必要的重绘
- 了解哪些属性可以继承而来，避免对这些属性重复编写
- cssSprite，合成所有icon图片，用宽高加上backgroud-position的背景图方式显现出我们要的icon图，减少了http请求
- 把小的icon图片转成base64编码
- CSS3动画或者过渡尽量使用transform和opacity来实现动画，不要使用left和top属性



## 三、总结

`css`实现性能的方式可以从选择器嵌套、属性特性、减少`http`这三面考虑，同时还要注意`css`代码的加载顺序



## 参考文献
- https://www.zhihu.com/question/19886806
- https://juejin.cn/post/6844903649605320711#heading-1
- https://vue3js.cn/interview/

# QUESTION：如何实现单行／多行文本溢出的省略样式？

 ![](https://static.vue-js.com/ada8d840-a0e9-11eb-ab90-d9ae814b240d.png)


## 一、前言

在日常开发展示页面，如果一段文本的数量过长，受制于元素宽度的因素，有可能不能完全显示，为了提高用户的使用体验，这个时候就需要我们把溢出的文本显示成省略号

对于文本的溢出，我们可以分成两种形式：

- 单行文本溢出
- 多行文本溢出



## 二、实现方式



### 单行文本溢出省略

理解也很简单，即文本在一行内显示，超出部分以省略号的形式展现

实现方式也很简单，涉及的`css`属性有：

- text-overflow：规定当文本溢出时，显示省略符号来代表被修剪的文本
- white-space：设置文字在一行显示，不能换行
- overflow：文字长度超出限定宽度，则隐藏超出的内容

`overflow`设为`hidden`，普通情况用在块级元素的外层隐藏内部溢出元素，或者配合下面两个属性实现文本溢出省略

`white-space:nowrap`，作用是设置文本不换行，是`overflow:hidden`和`text-overflow：ellipsis`生效的基础

`text-overflow`属性值有如下：

- clip：当对象内文本溢出部分裁切掉
- ellipsis：当对象内文本溢出时显示省略标记（...）

`text-overflow`只有在设置了`overflow:hidden`和`white-space:nowrap`才能够生效的

举个例子

```html
<style>
    p{
        overflow: hidden;
        line-height: 40px;
        width:400px;
        height:40px;
        border:1px solid red;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
<p 这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本</p >
```

效果如下：

 ![](https://static.vue-js.com/bb3048e0-a0e9-11eb-85f6-6fac77c0c9b3.png)

可以看到，设置单行文本溢出较为简单，并且省略号显示的位置较好



### 多行文本溢出省略

多行文本溢出的时候，我们可以分为两种情况：

- 基于高度截断
- 基于行数截断



#### 基于高度截断

#### 伪元素 + 定位

核心的`css`代码结构如下：

- position: relative：为伪元素绝对定位
- overflow: hidden：文本溢出限定的宽度就隐藏内容）
- position: absolute：给省略号绝对定位
- line-height: 20px：结合元素高度,高度固定的情况下,设定行高, 控制显示行数
- height: 40px：设定当前元素高度
- ::after {} ：设置省略号样式

代码如下所示：

```html
<style>
    .demo {
        position: relative;
        line-height: 20px;
        height: 40px;
        overflow: hidden;
    }
    .demo::after {
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0 20px 0 10px;
    }
</style>

<body>
    <div class='demo'>这是一段很长的文本</div>
</body>
```

实现原理很好理解，就是通过伪元素绝对定位到行尾并遮住文字，再通过 `overflow: hidden` 隐藏多余文字

这种实现具有以下优点：

- 兼容性好，对各大主流浏览器有好的支持
- 响应式截断，根据不同宽度做出调整

一般文本存在英文的时候，可以设置`word-break: break-all`使一个单词能够在换行时进行拆分



#### 基于行数截断

纯`css`实现也非常简单，核心的`css`代码如下：

- -webkit-line-clamp: 2：用来限制在一个块元素显示的文本的行数，为了实现该效果，它需要组合其他的WebKit属性）
- display: -webkit-box：和1结合使用，将对象作为弹性伸缩盒子模型显示
- -webkit-box-orient: vertical：和1结合使用 ，设置或检索伸缩盒对象的子元素的排列方式
- overflow: hidden：文本溢出限定的宽度就隐藏内容
- text-overflow: ellipsis：多行文本的情况下，用省略号“…”隐藏溢出范围的文本

```html
<style>
    p {
        width: 400px;
        border-radius: 1px solid red;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
<p>
    这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本
    这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本
</p >
```

可以看到，上述使用了`webkit`的`CSS`属性扩展，所以兼容浏览器范围是`PC`端的`webkit`内核的浏览器，由于移动端大多数是使用`webkit`，所以移动端常用该形式

需要注意的是，如果文本为一段很长的英文或者数字，则需要添加`word-wrap: break-word`属性

还能通过使用`javascript`实现配合`css`，实现代码如下所示：

css结构如下：

```css
p {
    position: relative;
    width: 400px;
    line-height: 20px;
    overflow: hidden;

}
.p-after:after{
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -moz-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(left, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
}
```

javascript代码如下：

```js
$(function(){
 //获取文本的行高，并获取文本的高度，假设我们规定的行数是五行，那么对超过行数的部分进行限制高度，并加上省略号
   $('p').each(function(i, obj){
        var lineHeight = parseInt($(this).css("line-height"));
        var height = parseInt($(this).height());
        if((height / lineHeight) >3 ){
            $(this).addClass("p-after")
            $(this).css("height","60px");
        }else{
            $(this).removeClass("p-after");
        }
    });
})
```







## 参考文献

- https://www.zoo.team/article/text-overflow

- https://segmentfault.com/a/1190000017078153


# QUESTION：如何使用css完成视差滚动效果?

 ![](https://static.vue-js.com/1b2d33e0-a18d-11eb-85f6-6fac77c0c9b3.png)

## 一、是什么

视差滚动（Parallax Scrolling）是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验

我们可以把网页解刨成：背景层、内容层、悬浮层

 ![](https://static.vue-js.com/57c942a0-a1cc-11eb-85f6-6fac77c0c9b3.png)

当滚动鼠标滑轮的时候，各个图层以不同的速度移动，形成视觉差的效果

 ![image.png](https://static.vue-js.com/e57ab280-a1dd-11eb-ab90-d9ae814b240d.png)


## 二、实现方式


使用`css`形式实现视觉差滚动效果的方式有：

- background-attachment
- transform:translate3D


### background-attachment

作用是设置背景图像是否固定或者随着页面的其余部分滚动

值分别有如下：

- scroll：默认值，背景图像会随着页面其余部分的滚动而移动
- fixed：当页面的其余部分滚动时，背景图像不会移动
- inherit：继承父元素background-attachment属性的值

完成滚动视觉差就需要将`background-attachment`属性设置为`fixed`，让背景相对于视口固定。及时一个元素有滚动机制，背景也不会随着元素的内容而滚动

也就是说，背景一开始就已经被固定在初始的位置

核心的`css`代码如下：

```css
section {
    height: 100vh;
}

.g-img {
    background-image: url(...);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}
```

整体例子如下：

```html
<style>
div {
            height: 100vh;
            background: rgba(0, 0, 0, .7);
            color: #fff;
            line-height: 100vh;
            text-align: center;
            font-size: 20vh;
        }

        .a-img1 {
            background-image: url(https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg);
            background-attachment: fixed;
            background-size: cover;
            background-position: center center;
        }

        .a-img2 {
            background-image: url(https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg);
            background-attachment: fixed;
            background-size: cover;
            background-position: center center;
        }

        .a-img3 {
            background-image: url(https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg);
            background-attachment: fixed;
            background-size: cover;
            background-position: center center;
        }
</style>
 <div class="a-text">1</div>
    <div class="a-img1">2</div>
    <div class="a-text">3</div>
    <div class="a-img2">4</div>
    <div class="a-text">5</div>
    <div class="a-img3">6</div>
    <div class="a-text">7</div>
```





### transform:translate3D

同样，让我们先来看一下两个概念`transform`和`perspective`：

- transform: css3 属性，可以对元素进行变换(2d/3d)，包括平移 translate,旋转 rotate,缩放 scale,等等
- perspective: css3 属性，当元素涉及 3d 变换时，perspective 可以定义我们眼睛看到的 3d 立体效果，即空间感

`3D`视角示意图如下所示：

 ![](https://static.vue-js.com/24f37dd0-a18d-11eb-85f6-6fac77c0c9b3.png)


举个例子：

```html
<style>
    html {
        overflow: hidden;
        height: 100%
    }

    body {
        /* 视差元素的父级需要3D视角 */
        perspective: 1px;
        transform-style: preserve-3d;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    #app{
        width: 100vw;
        height:200vh;
        background:skyblue;
        padding-top:100px;
    }
    .one{
        width:500px;
        height:200px;
        background:#409eff;
        transform: translateZ(0px);
        margin-bottom: 50px;
    }
    .two{
        width:500px;
        height:200px;
        background:#67c23a;
        transform: translateZ(-1px);
        margin-bottom: 150px;
    }
    .three{
        width:500px;
        height:200px;
        background:#e6a23c;
        transform: translateZ(-2px);
        margin-bottom: 150px;
    }
</style>
<div id="app">
    <div class="one">one</div>
    <div class="two">two</div>
    <div class="three">three</div>
</div>
```


而这种方式实现视觉差动的原理如下：

- 容器设置上 transform-style: preserve-3d 和 perspective: xpx，那么处于这个容器的子元素就将位于3D空间中，

- 子元素设置不同的 transform: translateZ()，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样

- 滚动滚动条，由于子元素设置了不同的 transform: translateZ()，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果


## 参考文献

- https://imweb.io/topic/5b73ef73a56e07401e48729d
- https://juejin.cn/post/6844903654458146823#heading-5


# QUESTION：CSS如何画一个三角形？原理是什么？

![](https://static.vue-js.com/bd310120-a279-11eb-85f6-6fac77c0c9b3.png)

## 一、前言

在前端开发的时候，我们有时候会需要用到一个三角形的形状，比如地址选择或者播放器里面播放按钮

 ![](https://static.vue-js.com/d6d8ff60-a279-11eb-85f6-6fac77c0c9b3.png)

通常情况下，我们会使用图片或者`svg`去完成三角形效果图，但如果单纯使用`css`如何完成一个三角形呢？

实现过程似乎也并不困难，通过边框就可完成


## 二、实现过程

在以前也讲过盒子模型，默认情况下是一个矩形，实现也很简单

```html
<style>
    .border {
        width: 50px;
        height: 50px;
        border: 2px solid;
        border-color: #96ceb4 #ffeead #d9534f #ffad60;
    }
</style>
<div class="border"></div>
```

效果如下图所示：

 ![](https://static.vue-js.com/e3f244e0-a279-11eb-ab90-d9ae814b240d.png)

将`border`设置`50px`，效果图如下所示：

 ![](https://static.vue-js.com/ee0b42b0-a279-11eb-ab90-d9ae814b240d.png)

白色区域则为`width`、`height`，这时候只需要你将白色区域部分宽高逐渐变小，最终变为0，则变成如下图所示：

 ![](https://static.vue-js.com/2afaa030-a27a-11eb-85f6-6fac77c0c9b3.png)

这时候就已经能够看到4个不同颜色的三角形，如果需要下方三角形，只需要将上、左、右边框设置为0就可以得到下方的红色三角形

 ![](https://static.vue-js.com/2afaa030-a27a-11eb-85f6-6fac77c0c9b3.png)

但这种方式，虽然视觉上是实现了三角形，但实际上，隐藏的部分任然占据部分高度，需要将上方的宽度去掉

最终实现代码如下：

```css
.border {
    width: 0;
    height: 0;
    border-style:solid;
    border-width: 0 50px 50px;
    border-color: transparent transparent #d9534f;
}
```

如果想要实现一个只有边框是空心的三角形，由于这里不能再使用`border`属性，所以最直接的方法是利用伪类新建一个小一点的三角形定位上去

```css
.border {
    width: 0;
    height: 0;
    border-style:solid;
    border-width: 0 50px 50px;
    border-color: transparent transparent #d9534f;
    position: relative;
}
.border:after{
    content: '';
    border-style:solid;
    border-width: 0 40px 40px;
    border-color: transparent transparent #96ceb4;
    position: absolute;
    top: 0;
    left: 0;
}
```

效果图如下所示：

 ![i](https://static.vue-js.com/59f4d720-a27a-11eb-85f6-6fac77c0c9b3.png)

伪类元素定位参照对象的内容区域宽高都为0，则内容区域即可以理解成中心一点，所以伪元素相对中心这点定位

将元素定位进行微调以及改变颜色，就能够完成下方效果图：

 ![](https://static.vue-js.com/653a6e10-a27a-11eb-85f6-6fac77c0c9b3.png)

最终代码如下：

```css
.border:after {
    content: '';
    border-style: solid;
    border-width: 0 40px 40px;
    border-color: transparent transparent #96ceb4;
    position: absolute;
    top: 6px;
    left: -40px;
}
```



## 三、原理分析

可以看到，边框是实现三角形的部分，边框实际上并不是一个直线，如果我们将四条边设置不同的颜色，将边框逐渐放大，可以得到每条边框都是一个梯形

 ![](https://static.vue-js.com/78d4bd90-a27a-11eb-85f6-6fac77c0c9b3.png)

当分别取消边框的时候，发现下面几种情况：

- 取消一条边的时候，与这条边相邻的两条边的接触部分会变成直的
- 当仅有邻边时， 两个边会变成对分的三角
- 当保留边没有其他接触时，极限情况所有东西都会消失

 ![](https://static.vue-js.com/84586ef0-a27a-11eb-85f6-6fac77c0c9b3.png)

通过上图的变化规则，利用旋转、隐藏，以及设置内容宽高等属性，就能够实现其他类型的三角形

如设置直角三角形，如上图倒数第三行实现过程，我们就能知道整个实现原理

实现代码如下：

```css
.box {
    /* 内部大小 */
    width: 0px;
    height: 0px;
    /* 边框大小 只设置两条边*/
    border-top: #4285f4 solid;
    border-right: transparent solid;
    border-width: 85px;
    /* 其他设置 */
    margin: 50px;
}
```



## 参考文献

- https://www.cnblogs.com/echolun/p/11888612.html
- https://juejin.cn/post/6844903567795421197
- https://vue3js.cn/interview

# QUESTION：让Chrome支持小于12px 的文字方式有哪些？区别？

![](https://static.vue-js.com/62945fd0-a334-11eb-85f6-6fac77c0c9b3.png)

## 一、背景

Chrome 中文版浏览器会默认设定页面的最小字号是12px，英文版没有限制

原由 Chrome 团队认为汉字小于12px就会增加识别难度

- 中文版浏览器

与网页语言无关，取决于用户在Chrome的设置里（chrome://settings/languages）把哪种语言设置为默认显示语言

- 系统级最小字号

浏览器默认设定页面的最小字号，用户可以前往 chrome://settings/fonts 根据需求更改

而我们在实际项目中，不能奢求用户更改浏览器设置

对于文本需要以更小的字号来显示，就需要用到一些小技巧


## 二、解决方案

常见的解决方案有：

- zoom
-  -webkit-transform:scale()
-  -webkit-text-size-adjust:none

### Zoom

`zoom` 的字面意思是“变焦”，可以改变页面上元素的尺寸，属于真实尺寸

其支持的值类型有：

- zoom:50%，表示缩小到原来的一半
- zoom:0.5，表示缩小到原来的一半

使用 `zoom` 来”支持“ 12px 以下的字体

代码如下：

```html
<style type="text/css">
    .span1{
        font-size: 12px;
        display: inline-block;
        zoom: 0.8;
    }
    .span2{
        display: inline-block;
        font-size: 12px;
    }
</style>
<body>
    <span class="span1">测试10px</span>
    <span class="span2">测试12px</span>
</body>
```

效果如下：

 ![](https://static.vue-js.com/d5243980-a334-11eb-ab90-d9ae814b240d.png)

> 需要注意的是，`Zoom` 并不是标准属性，需要考虑其兼容性

 ![image.png](https://static.vue-js.com/3defe3c0-a343-11eb-85f6-6fac77c0c9b3.png)


### -webkit-transform:scale()

针对`chrome`浏览器,加`webkit`前缀，用`transform:scale()`这个属性进行放缩

注意的是，使用`scale`属性只对可以定义宽高的元素生效，所以，下面代码中将`span`元素转为行内块元素

实现代码如下：

```html
<style type="text/css">
    .span1{
        font-size: 12px;
        display: inline-block;
        -webkit-transform:scale(0.8);
    }
    .span2{
        display: inline-block;
        font-size: 12px;
    }
</style>
<body>
    <span class="span1">测试10px</span>
    <span class="span2">测试12px</span>
</body>
```

效果如下：

 ![](https://static.vue-js.com/d5243980-a334-11eb-ab90-d9ae814b240d.png)


### -webkit-text-size-adjust:none

该属性用来设定文字大小是否根据设备(浏览器)来自动调整显示大小

属性值：

- percentage：字体显示的大小；
- auto：默认，字体大小会根据设备/浏览器来自动调整；
- none:字体大小不会自动调整

```css
html { -webkit-text-size-adjust: none; }
```

这样设置之后会有一个问题，就是当你放大网页时，一般情况下字体也会随着变大，而设置了以上代码后，字体只会显示你当前设置的字体大小，不会随着网页放大而变大了

所以，我们不建议全局应用该属性，而是单独对某一属性使用

> 需要注意的是，自从`chrome 27`之后，就取消了对这个属性的支持。同时，该属性只对英文、数字生效，对中文不生效

## 三、总结

`Zoom` 非标属性，有兼容问题，缩放会改变了元素占据的空间大小，触发重排

`-webkit-transform:scale()` 大部分现代浏览器支持，并且对英文、数字、中文也能够生效，缩放不会改变了元素占据的空间大小，页面布局不会发生变化

`-webkit-text-size-adjust`对谷歌浏览器有版本要求，在27之后，就取消了该属性的支持，并且只对英文、数字生效

## 参考文献

- https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-size-adjust
- https://vue3js.cn/interview

# QUESTION：说说对Css预编语言的理解？有哪些区别?

 ![](https://static.vue-js.com/81cca1c0-a42c-11eb-85f6-6fac77c0c9b3.png)


## 一、是什么

`Css` 作为一门标记性语言，语法相对简单，对使用者的要求较低，但同时也带来一些问题

需要书写大量看似没有逻辑的代码，不方便维护及扩展，不利于复用，尤其对于非前端开发工程师来讲，往往会因为缺少 `Css` 编写经验而很难写出组织良好且易于维护的 `Css` 代码

`Css`预处理器便是针对上述问题的解决方案

#### 预处理语言

扩充了 `Css` 语言，增加了诸如变量、混合（mixin）、函数等功能，让 `Css` 更易维护、方便

本质上，预处理是`Css`的超集

包含一套自定义的语法及一个解析器，根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 `Css` 文件


## 二、有哪些

`Css`预编译语言在前端里面有三大优秀的预编处理器，分别是：

- sass
- less
- stylus



### sass

2007 年诞生，最早也是最成熟的 `Css `预处理器，拥有 Ruby 社区的支持和 `Compass` 这一最强大的 `Css `框架，目前受 `LESS` 影响，已经进化到了全面兼容 `Css` 的 `Scss`

文件后缀名为`.sass`与`scss`，可以严格按照 sass 的缩进方式省去大括号和分号

### less

2009年出现，受` SASS `的影响较大，但又使用 `Css` 的语法，让大部分开发者和设计师更容易上手，在 `Ruby `社区之外支持者远超过 `SASS`

其缺点是比起 `SASS `来，可编程功能不够，不过优点是简单和兼容 `Css`，反过来也影响了 `SASS `演变到了` Scss` 的时代



### stylus

`Stylus `是一个`Css`的预处理框架，2010 年产生，来自 `Node.js `社区，主要用来给 `Node` 项目进行 `Css` 预处理支持

所以` Stylus` 是一种新型语言，可以创建健壮的、动态的、富有表现力的` Css`。比较年轻，其本质上做的事情与` SASS/LESS `等类似





## 三、区别

虽然各种预处理器功能强大，但使用最多的，还是以下特性：

- 变量（variables）
- 作用域（scope）
- 代码混合（ mixins）
- 嵌套（nested rules）
- 代码模块化（Modules）

因此，下面就展开这些方面的区别



### 基本使用

less和scss

```Css
.box {
  display: block;
}
```

sass

```Css
.box
  display: block
```

stylus

```Css
.box
  display: block
```





### 嵌套

三者的嵌套语法都是一致的，甚至连引用父级选择器的标记 & 也相同

区别只是 Sass 和 Stylus 可以用没有大括号的方式书写

less

```Css
.a {
  &.b {
    color: red;
  }
}
```



### 变量

变量无疑为 Css 增加了一种有效的复用方式，减少了原来在 Css 中无法避免的重复「硬编码」

`less`声明的变量必须以`@`开头，后面紧跟变量名和变量值，而且变量名和变量值需要使用冒号`:`分隔开

```Css
@red: #c00;

strong {
  color: @red;
}
```

`sass`声明的变量跟`less`十分的相似，只是变量名前面使用`@`开头

```Css
$red: #c00;

strong {
  color: $red;
}
```

`stylus`声明的变量没有任何的限定，可以使用`$`开头，结尾的分号`;`可有可无，但变量与变量值之间需要使用`=`

在`stylus`中我们不建议使用`@`符号开头声明变量

```Css
red = #c00

strong
  color: red
```





### 作用域

`Css` 预编译器把变量赋予作用域，也就是存在生命周期。就像 `js `一样，它会先从局部作用域查找变量，依次向上级作用域查找

`sass`中不存在全局变量

```Css
$color: black;
.scoped {
  $bg: blue;
  $color: white;
  color: $color;
  background-color:$bg;
}
.unscoped {
  color:$color;
}
```

编译后

```Css
.scoped {
  color:white;/*是白色*/
  background-color:blue;
}
.unscoped {
  color:white;/*白色（无全局变量概念）*/
}
```

所以，在`sass`中最好不要定义相同的变量名



`less`与`stylus`的作用域跟`javascript`十分的相似，首先会查找局部定义的变量，如果没有找到，会像冒泡一样，一级一级往下查找，直到根为止

```Css
@color: black;
.scoped {
  @bg: blue;
  @color: white;
  color: @color;
  background-color:@bg;
}
.unscoped {
  color:@color;
}
```

编译后：

```Css
.scoped {
  color:white;/*白色（调用了局部变量）*/
  background-color:blue;
}
.unscoped {
  color:black;/*黑色（调用了全局变量）*/
}
```





### 混入

混入（mixin）应该说是预处理器最精髓的功能之一了，简单点来说，`Mixins`可以将一部分样式抽出，作为单独定义的模块，被很多选择器重复使用

可以在`Mixins`中定义变量或者默认参数

在`less`中，混合的用法是指将定义好的`ClassA`中引入另一个已经定义的`Class`，也能使用够传递参数，参数变量为`@`声明

```Css
.alert {
  font-weight: 700;
}

.highlight(@color: red) {
  font-size: 1.2em;
  color: @color;
}

.heads-up {
  .alert;
  .highlight(red);
}
```

编译后

```Css
.alert {
  font-weight: 700;
}
.heads-up {
  font-weight: 700;
  font-size: 1.2em;
  color: red;
}
```

`Sass`声明`mixins`时需要使用`@mixinn`，后面紧跟`mixin`的名，也可以设置参数，参数名为变量`$`声明的形式

```Css
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}

.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```

`stylus`中的混合和前两款`Css`预处理器语言的混合略有不同，他可以不使用任何符号，就是直接声明`Mixins`名，然后在定义参数和默认值之间用等号（=）来连接

```Css
error(borderWidth= 2px) {
  border: borderWidth solid #F00;
  color: #F00;
}
.generic-error {
  padding: 20px;
  margin: 4px;
  error(); /* 调用error mixins */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  error(5px); /* 调用error mixins，并将参数$borderWidth的值指定为5px */
}
```





### 代码模块化

模块化就是将`Css`代码分成一个个模块

`scss`、`less`、`stylus`三者的使用方法都如下所示

```Css
@import './common';
@import './github-markdown';
@import './mixin';
@import './variables';
```



## 参考文献

- https://jelly.jd.com/article/5dcb9c73641a030153732a89
- https://zhuanlan.zhihu.com/p/23382462
- https://baike.baidu.com/item/Less/17570158

