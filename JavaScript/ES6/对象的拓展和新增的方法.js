//属性的简洁表示法

//属性名表达式
// 方法一
obj.foo = true;
// 方法二
obj['a' + 'bc'] = 123;

//方法的 name 属性 

//属性的可枚举性和遍历
//对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象

// Object.is()

// Object.assign()

// Object.getOwnPropertyDescriptors() 

// Object.getPrototypeOf()

//Object.keys()，Object.values()，Object.entries()