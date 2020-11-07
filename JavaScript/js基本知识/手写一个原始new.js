// 首先我们要搞清楚new操作符到底做了一些什么事情？

// 1.创建一个新的对象

// 2.将构造函数的作用域赋给新对象（因此this指向了这个新对象）

// 3.执行构造函数中的代码（为这个新对象添加属性）

// 4.返回新对象

function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log(this.name);
}


//第一种方法
function createPerson01() {
    // 1 创建一个新的对象
    var o = {};
    // 2 获取构造函数，以便实现作用域的绑定
    var _constructor = [].shift.call(arguments);
    // 3 由于通过new操作创建的对象实例内部的不可访问的属性[[Prototype]](有些浏览器里面为__proto__)
    //指向的是构造函数的原型对象的，所以这里实现手动绑定。
    o.__proto__ = _constructor.prototype;
    // 4.作用域的绑定使用apply改变this的指向

    _constructor.apply(o, arguments);
    return o;
}

// 第二种方法
function createPerson02() {
    // 1 获取构造函数，以便实现作用域的绑定
    var _constructor = [].shift.call(arguments);
    // 2 创建一个对象
    var o = Object.create(_constructor.prototype);
    // 由于通过new操作创建的对象实例内部的不可访问的属性[[Prototype]](有些浏览器里面为__proto__)
    //指向的是构造函数的原型对象的。
    //而Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。// 4.作用域的绑定
    _constructor.apply(o, arguments);
    return o;
}


function myNew (fn, ...args) {
    let instance = Object.create(fn.prototype);
    let result = fn.call(instance, ...args)
    return typeof result === 'object' ? result : instance;
  }
  