// class 中的继承主要是依靠 super 和 extends

//基本语法如下
class Parent {
    constructor (name) {
      this.name = name
    }
    getName () {
      console.log(this.name)
    }
  }
  class Child extends Parent {
    constructor (name) {
      super(name)
      this.sex = 'boy'
    }
  }
  var child1 = new Child('child1')
  console.log(child1)
  child1.getName()
  
  console.log(child1 instanceof Child)
  console.log(child1 instanceof Parent)


//   extends的本质
// extends后面接着的继承目标不一定要是个class。
// class B extends A {}，只要A是一个有prototype属性的函数，就能被B继承。
// 由于函数都有prototype属性，因此A可以是任意函数
class Child extends Parent {}
// 等同于
class Child extends Parent {
    constructor (...args) {
        super(...args)
    }
}
//所以有一下的结论
// class可以通过extends关键字实现继承父类的所有属性和方法
// 若是使用了extends实现继承的子类内部没有constructor方法，则会被默认添加constructor和super
// constructor中调用一下super函数，如果只有constructior 没有super 则会报错
// 我们知道在ES5中的继承(例如构造继承、寄生组合继承) ，实质上是先创造子类的实例对象this，
// 然后再将父类的属性和方法添加到this上(使用的是Parent.call(this))。
// 而在ES6中却不是这样的，它实质是先创造父类的实例对象this(也就是使用super())，然后再用子类的构造函数去修改this。
// 通俗理解就是，子类必须得在constructor中调用super方法，否则新建实例就会报错，
// 因为子类自己没有自己的this对象，而是继承父类的this对象，然后对其加工，如果不调用super的话子类就得不到this对象。


// super其实有两种用法，一种是当作函数来调用，还有一种是当做对象来使用

// 当super被当作函数调用时，代表着父类的构造函数。
// 虽然它代表着父类的构造函数，但是返回的却是子类的实例，也就是说super内部的this指向的是Child。可以用new.target.name表示的是这个函数名来测试
// constructor中必须得有super()，它就是用来产生实例this的，那么再调用它之前，肯定是访问不到this的啦


// 在子类的普通函数中super对象指向父类的原型对象
// 在子类的静态方法中super对象指向父类
// ES6规定，通过super调用父类的方法时，super会绑定子类的this

super.getSex.call(this)
// 即
Parent.prototype.getSex.call(this)


// ES5和ES6 继承区别
// 在ES5中的继承(例如构造继承、寄生组合继承) ，实质上是先创造子类的实例对象this，然后再将父类的属性和方法添加到this上(使用的是Parent.call(this))。
// 而在ES6中却不是这样的，它实质是先创造父类的实例对象this(也就是使用super())，然后再用子类的构造函数去修改this




  