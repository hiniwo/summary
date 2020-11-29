//实现原理基本和call思路一样，只是参数不一样
Function.prototype.myApply = function (content) {
    if(typeof this !== 'function') {
        throw new Error('Error')
    }
    content = content || this;
    content.fn = this;
    let result = null;
    if(arguments[1]) {
        result = content.fn(...arguments[1])
    }else {
        result = content.fn()
    }
    delete content.fn;
    return result
}