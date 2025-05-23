
# DRG/DIP 运营管理系统 + SASS 平台
项目介绍: DRG/DIP 运营管理系统是旨在提供运营数据的实时分析和决策支持。该系统还集成了SASS 平台，用于高效的数据存储、检索和分析业务集成数据，进行相关统计,实现多组织,多需求的数据统一管理。
技术栈: React+hooks+Redux+React-router+Axios+Mock.js+Next.js，UI框架选用 Ant-Design进行快速构建。
主要负责：
1. 参与项目的需求评审及前端基础构建/设计文档编写，版本控制，及项目上线部署等。
2. 使用axios对后端数据接口进行整合, 根据业务场景实现并发分组请求，提高请求效率。
3. 负责实现用户登录/注册、使用Redux-persist 实现持久化登录，及业务工具类封装。
4. 完成用户权限管理,结合addRouters实现主流功能（安全验证、菜单、按钮）等后台主流功能。
5. 利用i18n国际化,支持多语言，动态换肤，完成核心模块的业务组件功能代码编写。
6. 利用React-lazyload优化前端页面,利用Redux完成数据的状态管理模式。
7. 用户模块业务范围较广，组件层级复杂，使用Redux进行全局状态管理-对组件解耦。提高开发效率。
8. 负责系统资源采集的上传、批量导出Excel、Echarts图表、页面打印等核心模块的二次封装。
9. 负责并协助同事进行Code-Review规范开发流程,保质保量完成项目交付。
10. 负责持续维护项目文档及开发规范,及中后期的版本修复工作/业务需求评审。
项目难点/亮点：
● 利用Ant-Design封装核心公共组件，统一各个模块的UI交互,同时减少27% 耦合页面的开发时间。
● 大文件分片与断点续传，设计并实现了数据的大文件分片机制，优化了数据传输的可靠性和效率。
● 优化减少项目入口体积,采用预加载、OSS、CDN等技术优化首屏加载过慢的问题。

# 云平台数字化运营 ( PC端+H5移动端 )
项目介绍: 该项目为公司内部的多个系统进行整合，使⽤微服务架构进行平台搭建，主要技术栈也由原有的架构开发为主改为前后端分离的开发模式，完成前端需要⼀套基础设施的搭建。
技术栈：使用React+Redux+React-Hooks+Axios+TypeScript+Ant-Dseign+Ant-Design-Mobile。
主要负责：
1. 负责启用CSS Modules配合React-css-modules库，解决CSS全局污染、命名混乱的问题。
2. 利用Grid/flex完成页面布局，使用flexble.js完成页面移动端机型适配、解决不同机型的兼容性问题。
3. 负责页面事件防抖，懒加载节流，优化轮播图/搜索框等功能,避免用户频繁操作，不断发送请求优化页面。
4. 负责使用Redux完成数据的状态管理、熟悉多种数据状态管理方案。
5. 利用amfe-flexible进行图片懒加载,完成用户端/移动端的用户友好度功能体验。
6. 负责技术方案的设计、需求的沟通讨论、后期迭代的工作拆解及分配。
项目难点/亮点：
● 编写维护H5与客户端交互库，使用JS Bridge联调来解决H5和App的数据交互。
● 解决H5移动端大数据量的列表页面下拉优化，采用虚拟长列表技术,提高35%的性能体验。

# Max大数据智能模型平台（PC端）
项目介绍: 该项目为分享展示算法模型的平台，该项目主要提供了内容分享，存储，查看，交流评论的功能。
技术栈: React+Redux+React-router+React-lazyload+lodash+Mock.js+Ant-Design。
主要负责：
1. 负责登录和注册功能，分享评论、聊天功能等核心业务，高保真还原设计稿
2. 完成项目的工具类封装，数据埋点上报、用户权限管理、功能鉴权, 保质保量完成项目交付。
3. 实现平台用户登录/注册功能、及所有非 login 进行 token 时效认证（持久化 token）。
4. 使用 hooks技术封装可复用业务逻辑代码块，对逻辑复杂组件进行组件拆分，降低 20%的业务耦合度。
5. 通过安排公众号推送、网站投稿等方式扩大影响力，日PV超过30000+人次（持续增长中）。
6. 负责项目中后期的版本迭代维护，bug列表的清空，生产故障的问题排查。