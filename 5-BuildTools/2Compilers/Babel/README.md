npm init -y

src/index.js

npm install --save-dev @babel/core @babel/cli

npm run compiler

babel构建在插件之上 - 包含语法插件 & 转换插件

AST - abstract syntax tree 抽象语法树，将代码转化成语法树，修改语法树，再转回代码【解析-转换-生成】

转换插件不需要特地配置语法插件，因为首先是需要语法插件解析，所以会自动配套生成

一个个➕插件，太多太繁琐，所以出现了官方的 preset-env

.browsersListrc
last 2 Chrome versions  // 最新的chrome支持箭头函数 所以不会被编译


插件在preset之前执行：
插件从前往后、preset从后往前

Vite 构建底层用的是 Rollup；
Webpack 和 Rollup 经常配合 Babel 使用来做语法转换；
Vite 开发时不需要 Babel，而是用 ESBuild（比 Babel 快几十倍）；
如果你要支持老旧浏览器，Vite 构建阶段仍然可以用 Babel。