// 原型链继承

// 优点:继承了父类的模板，又继承了父类的原型对象

// 缺点
// 1.如果要给子类的原型上新增属性和方法，就必须放在Child.prototype = new Parent()这样的语句后面
// 2。无法实现多继承(因为已经指定了原型对象了)
// 3.来自原型对象的所有属性都被共享了，这样如果不小心修改了原型对象中的引用类型属性，
// 那么所有子类创建的实例对象都会受到影响(这点从修改child1.colors可以看出来)
// 4.创建子类时，无法向父类构造函数传参数(这点从child1.name可以看出来)

function Parent (age , name){
    this.age = age;
    this.name = name;
}

Parent.prototype.getName = function () {
    console.log(this.name)
  }

function Child (sex) {
    this.sex = sex;
}

Child.prototype = new Parent()

Child.prototype.constructor = Child


//构造函数继承 ， 其实就是使用call apply 和 bind 来写代码

// 解决了原型链继承中子类实例共享父类引用对象的问题，实现多继承，创建子类实例时，可以向父类传递参数
// 构造继承只能继承父类的实例属性和方法，不能继承父类原型的属性和方法(见题目3.4)
// 实例并不是父类的实例，只是子类的实例(见题目3.5)
// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

function Child () {
    this.sex = 'boy'
    this.name = 'bad boy'
    Parent.call(this, 'good boy')
  }

//组合构造 ， 其实就是利用上面的原型链继承和构造函数继承两个方法 

// 可以继承父类实例属性和方法，也能够继承父类原型属性和方法
// 弥补了原型链继承中引用属性共享的问题
// 可传参，可复用

// 使用组合继承时，父类构造函数会被调用两次
// 并且生成了两个实例，子类实例中的属性和方法会覆盖子类原型(父类实例)上的属性和方法，所以增加了不必要的内存。
// 使用的方法如下

function Child(){
  Parent.apply(this , ...arguments)
}

Child.prototype = new Parent()


//实例化对象访问添加原型的方法有  
//通过a.__proto__来访问到原型对象
// 通过a.constructor.prototype来访问到原型对象


//寄生组合继承,只是稍微修改了一下组合继承下面的代码

// 只调用了一次父类构造函数，只创建了一份父类属性
// 子类可以用到父类原型链上的属性和方法
// 能够正常的使用instanceOf和isPrototypeOf方法


Child.prototype = Object.create(Parent.prototype)


//原型式继承 ， 这就是Object.create()方法原理

// 优点：再不用创建构造函数的情况下，实现了原型链继承，代码量减少一部分
// 缺点：一些引用数据操作的时候会出问题，两个实例会公用继承实例的引用数据类
// 谨慎定义方法，以免定义方法也继承对象原型的方法重名
// 无法直接给父级构造函数使用参数
function objcet (obj) {
  function F () {};
  F.prototype = obj;
  F.prototype.constructor = F;
  return new F();
}


// 寄生式继承 它就是在原型式继承的基础上再封装一层，来增强对象，之后将这个对象返回。

// 其实就是在返回空的对线前添加一些属性
function createAnother (original) {
  var clone = Object.create(original);; // 通过调用 Object.create() 函数创建一个新对象
  clone.fn = function () {}; // 以某种方式来增强对象
  return clone; // 返回这个对象
}

// 混入方式继承多个对象
function Child () {
  Parent.call(this)
  OtherParent.call(this)
}
Child.prototype = Object.create(Parent.prototype)
Object.assign(Child.prototype, OtherParent.prototype)
Child.prototype.constructor = Child








