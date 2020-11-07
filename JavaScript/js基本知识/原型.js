//1基本要点主要是区分普通对象和函数对象
//2理解function 函数的创建实质过程

function fn1 () {}
// 实际代码如下

fn1.prototype = {
    constructor : fn1,
    __prototype__ : Object.prototype
}
 
fn1.__prototype__ = Function.prototype


// 其余参考链接：https://juejin.im/post/6844903567325659144