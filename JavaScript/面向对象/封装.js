// ES6之前的封装-构造函数
// ES6之后的封装-class

// 一个对象应该有的东西:私有属性和方法，公有属性和方法，以及静态属性和方法
// 私有属性和方法：只能在构造函数内访问不能被外部所访问(在构造函数内使用var声明的属性)
// 公有属性和方法(或实例方法)：对象外可以访问到对象内的属性和方法(在构造函数内使用this设置，或者设置在构造函数原型对象上比如Cat.prototype.xxx)
// 静态属性和方法：定义在构造函数上的方法(比如Cat.xxx)，不需要实例就可以调用(例如Object.assign())


    function Cat (name, color) {  
        var heart = '❤️'  
        var stomach = '胃' 
        var heartbeat = function () {   
             console.log(heart + '跳') 
        }  
        this.name = name  
        this.color = color  
        this.jump = function () {    
            heartbeat() 
            // 能跳起来表明这只猫是活的,心也就能跳   
            console.log('我跳起来了~来追我啊') 
    }}
            // 这段是新增的代码
    Cat.descript = '我这个构造函数是用来生产出一只猫的'
    Cat.actingCute = function () {  
        console.log('一听到猫我就想到了它会卖萌')
    }

    Cat.prototype.cleanTheBody = function () {
        console.log('我会用唾液清洁身体')
      }

      var guaiguai = new Cat('guaiguai')


    // 定义在构造函数原型对象上的属性和方法虽然不能直接表现在实例对象上，但是实例对象却可以访问或者调用它们
    //下面的例子是用来区分这两个属性
    for (key in guaiguai) { 
    if (guaiguai.hasOwnProperty(key)) {   
        console.log('我是自身属性', key)  } 
        else {    console.log('我不是自身属性', key) 
        }}
    console.log('-分隔符-')
    console.log(Object.keys(guaiguai))
    console.log(Object.getOwnPropertyNames(guaiguai))

    // 当访问一个对象的属性 / 方法时，它不仅仅在该对象上查找，还会查找该对象的原型，
    // 以及该对象的原型的原型，一层一层向上查找，直到找到一个名字匹配的属性 / 方法或到达原型链的末尾（null）。
    // 也就是大名鼎鼎的原型链查找


    class Cat {    
        constructor() {}    
        toString () {}    
        toValue () {}
    }
    // 等同于
    function Cat () {}
    Cat.prototype = {    
        constructor() {}    
        toString () {}    
        toValue () {}
    }


    // 在constructor中var一个变量，它只存在于constructor这个构造函数中

    // 在constructor中使用this定义的属性和方法会被定义到实例上

    // 在class中使用=来定义一个属性和方法，效果与第二点相同，会被定义到实例上
    
    // 在class中直接定义一个方法，会被添加到原型对象prototype上

    // constructor中定义的相同名称的属性和方法会覆盖在class里定义的。


    class Cat {  
        static descript = '我这个类是用来生产出一只猫的'
        static actingCute () {
          console.log('一听到猫我就想到了它会卖萌')
        }

        constructor () {   
             var heart = '❤️'    
             this.name = 'guaiguai'    
             this.jump = function () {} 
        }  
        color = 'white' 
        cleanTheBody = function () {   
        console.log('我会用唾液清洁身体') 
        }  
        hideTheShit () {    
            console.log('我在臭臭完之后会把它藏起来') 
        }
    }


    // class 本质虽然是一个函数，单不存在声明提前，所以下面的代码会报错

    var b = new B()
    class B {}
    console.log(b)  //报错






