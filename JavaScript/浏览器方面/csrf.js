//https://github.com/dwqs/blog/issues/68



// https://www.jianshu.com/p/e825e67fcf28
// 跨站请求伪造（英语：Cross-site request forgery），
// 也被称为 one-click attack 或者 session riding，
// 通常缩写为 CSRF 或者 XSRF， 
// 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。
// 跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，
// CSRF 利用的是网站对用户网页浏览器的信任。

// 防御措施
// 检查Referer字段
// 添加校验token



//https://www.cnblogs.com/54chensongxia/p/11643787.html
// XSS跨站脚本攻击（Cross Site Scripting），
// 的本质是攻击者在web页面插入恶意的script代码
// 这个代码可以是JS脚本、CSS样式或者其他意料之外的代码，
// 当用户浏览该页面之时，嵌入其中的script代码会被执行，
// 从而达到恶意攻击用户的目的。比如读取cookie，session，tokens，
// 或者网站其他敏感的网站信息，对用户进行钓鱼欺诈等。

//防御措施
// HTTP-only Cookie:禁止JavaScript读取某些敏感Cookie，
// 攻击者完成XSS注入后也无法窃取此Cookie属性：防止脚本冒充用户提交危险操作

// 在服务端使用HTTP的Content-Security-Policy头部来指定策略，
// 或者在前端设置meta标答。例如下面的配置只允许加载同域下的资源: