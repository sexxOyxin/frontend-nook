# 1、用ai？cursor？promot输入建议技巧？

# 2、前端性能优化
## 1、强缓存和协商缓存
浏览器缓存是前端性能优化的一个重要点。

强缓存：
Expires - 是具体的一个日期
Cache-Control - max-age=100是以秒为单位
：表示100秒内都使用本地缓存，不向服务器发送请求
表现：状态码：200（from memory/disk cache）

协商缓存/对比缓存/条件请求：
浏览器发送请求到服务器，但是带上缓存验证信息，如果未修改则返回304，修改了就带着修改过的信息返回200
If-Modified-Since ← 对应响应头 Last-Modified
If-None-Match ← 对应响应头 ETag 【浏览器默认优先使用】

no-store 无缓存
no-cache 协商缓存 - 响应头中带了什么 请求头中就带什么 具体用哪个服务器判断的【有两个，两个都带着】
max-age 强缓存

# 3、