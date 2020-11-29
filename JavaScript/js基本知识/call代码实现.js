
// call实现原理前置条件
// 不传入第一个参数，那么上下文默认为 window
// 改变了 this 指向，让新的对象可以执行该函数，并能接受参数

Function.prototype.myCall = function (content) {

    if (typeof this !== 'function') {
        throw new Error('Error')
    }
    content = content || window;

    content.fn = this;

    let args = [...arguments].slice(1);

    let result = content.fn(...args);

    delete content.fn;

    return  result;

}

// 首先 context 为可选参数，如果不传的话默认上下文为 window
// 接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数
// 因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
// 然后调用函数并将对象上的函数删除