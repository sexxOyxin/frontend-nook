端口号范围：
0 ~ 65535

修改hosts：
mac：访达-前往-前往文件夹-ect/hosts
win：C:\Windows\System32\drivers\etc\hosts

电脑局域网ip：
mac：ifconfig - 找到 en0 或 wlan0 下的 inet
win：ipconfig - 找到 ipv4

手机访问电脑服务：
listen 0.0.0.0
我的服务监听当前电脑的所有网络接口，包括：
localhost（127.0.0.1）→ 自己访问自己
局域网 IP（如 192.168.1.xxx）→ 别的设备访问你
局域网：通过同一个wifi路由器或者交换机连接在一起，就构成了一个小型的网络

中间件 - 就是一个比较广义的概念吧 - 中介第三方 - 将具体的业务逻辑和底层逻辑解耦的组件 - 复用性很高的代码：
中间件是按顺序执行的，因此在配置中间件时顺序非常重要，不能弄错
中间件在执行内部逻辑的时候可以选择将请求传递给下一个中间件，也可以直接返回用户响应
在express中中间件就是一个函数，分两种：全局中间件和路由中间件

中间件：
const middleware = (req,res,next) => {};
全局中间件：
app.use(middleware)
路由中间件：
app.on('/middleware', middle, (req, res) => {})