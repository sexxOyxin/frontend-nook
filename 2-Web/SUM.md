# 同源策略
> 域名：其实就是网址，对应的其实是某台的服务器的IP地址，只不过是因为域名比较好记
> 主域名：一般都是最后两个部分
> 端口：服务上不同的门
协议	默认端口
HTTP	80
HTTPS	443
本地调试服务器	常见：3000、8080、5173 等等
> 同源：协议 + 域名-包括子域 + 端口，三者一致
> 子域：就是在主域名前加点的
域名	        主域名是？	子域名是？
www.baidu.com	baidu.com	www
api.taobao.com	taobao.com	api
v1.user.abc.com	abc.com	    v1.user（可以嵌套）

| 页面 A                        | 页面 B                             | 是否同源 | 说明        |
| --------------------------- | -------------------------------- | ---- | --------- |
| `https://alpha.deepfos.com` | `https://alpha.deepfos.com`      | ✅ 是  | 完全一样      |
| `https://alpha.deepfos.com` | `https://beta.deepfos.com`       | ❌ 否  | 子域不同      |
| `https://alpha.deepfos.com` | `http://alpha.deepfos.com`       | ❌ 否  | 协议不同      |
| `https://alpha.deepfos.com` | `https://alpha.deepfos.com:8080` | ❌ 否  | 端口不同 默认端口80 |
| `https://deepfos.com`       | `https://alpha.deepfos.com`      | ❌ 否  | 主域一样但子域不同 |

#
const a = document.createElement('a');
a.href = 'http://localhost:80'
用浏览器解析URL
a.protocol - http
a.hostname - localhost
a.port - 80
