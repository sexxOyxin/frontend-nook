const mymodule = require('./module')

// 或者解构引入
// const { getUserInfo, getDate} = require('./module');

console.log('test: ', mymodule.test());
console.log('getUserInfo: ', mymodule.getUserInfo());
console.log('getDate: ', mymodule.getDate());
// console.log(module, '------');