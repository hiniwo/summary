// CommonJs和ES6模块化的不同

//commonjs本质就是输出一个module.export这个对象，伪代码实现如下

let exports = {};

let module = {
    exports : exports
}

return module.exports


//commonjs的特点
// 1.所有代码都在特定的作用域，不会污染全局作用域
// 2.模块是同步加载的（因为硬盘读取速度很快，所以可以忽略不计），只有加载完，才能进行下面的代码
// 3.模块首次加载会缓存下来，再次加载会去缓存的结果，如果要重新加载则需要清除缓存
// 4.输出的是值的拷贝，(即，require返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值)。

// 值的拷贝测试代码
var name = 'lindaidai';
var sex = 'boy';
var advantage = ['handsome']

setTimeout(function () {
  sex = 'girl';
  // advantage.push('cute');
  advantage = ['cute'];
}, 500)

exports.name = name;
exports.sex = sex;
exports.advantage = advantage;



// ES6规范
//输出语法问题

// export 导出问题，不能直接导出一个基本数据类型的数据，会报错。要一一对应导出
//以下代码会报错
const a = 1;
export a;

//可以使用以下导出

export const a = 2;
export {a}


//exprot default 默认导出的本质，其实就是利用了别名而已

const b = 1;
export defalut b;
// 等价于
export { a as default }

// 模块导入使用import，第三方中转可以使用 export ... from... 如下、

// 中间的代码如下

import { someVariable } from './a';

export { someVariable };

// 可以用以下的代码简写 ,但是有个缺点就是中间件中无法使用someVarsiable 这个变量

export {someVariable} from './a'


// ES6的特点总结
// export命令和import命令可以出现在模块的任何位置，只要处于模块顶层就可以。 
// 如果处于块级作用域内，就会报错，这是因为处于条件代码块之中，就没法做静态优化了，违背了ES6模块的设计初衷。
// import命令具有提升效果，会提升到整个模块的头部，首先执行。


// CommonJS与ES6 Modules规范的区别

// CommonJS模块是运行时加载，ES6 Modules是编译时输出接口

// CommonJS输出是值的拷贝，参考案例看上面；ES6 Modules输出的是值的引用，被输出模块的内部的改变会影响引用的改变,如下


// lib.js
export let obj = {};

// main.js
import { obj } from './lib';

obj.prop = 123; // OK
obj = {}; // TypeError


// CommonJs导入的模块路径可以是一个表达式，因为它使用的是require()方法；而ES6 Modules只能是字符串

// CommonJS this指向当前模块，ES6 Modules this指向undefined

// 且ES6 Modules中没有这些顶层变量：arguments、require、module、exports、__filename、__dirname

// 关于第一个差异，是因为CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
// 而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。


// 参考文献https://juejin.im/post/6844904145443356680#heading-18










