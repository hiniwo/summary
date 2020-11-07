// 浅拷贝 或者用Object.assign()

function simpleClone(obj){
    var result = {};
    for(var i in obj){
        result[i] = obj[i]
    }
    return result;
}


//深拷贝1

function deepClone1 (object) {
    return JSON.parse(JSON.stringify(object))
}
// 缺点如下
// 会忽略 undefined
// 会忽略 symbol
// 不能序列化函数
// 不能解决循环引用的对象



//深拷贝2
// 深拷贝是很困难的，需要我们考虑好多种边界情况，
// 比如原型链如何处理、DOM 如何处理等等
// ，所以这里我们实现的深拷贝只是简易版，并且我其实更推荐使用 lodash 的深拷贝函数。

function deepClone(obj) {
    let result;
    if (typeof obj == 'object') {
        result = isArray(obj) ? [] : {}
        for (let i in obj) {
            //isObject(obj[i]) ? deepClone(obj[i]) : obj[i]
            //多谢"朝歌在掘金"指出，多维数组会有问题
            result[i] = isObject(obj[i])||isArray(obj[i])?deepClone(obj[i]):obj[i]
        }
    } else {
        result = obj
    }
    return result
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) == "[object Object]"
}
function isArray(obj) {
    return Object.prototype.toString.call(obj) == "[object Array]"
}

//深拷贝方法3

// 如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel

function structuralClone(obj) {
    return new Promise(resolve => {
      const { port1, port2 } = new MessageChannel()
      port2.onmessage = ev => resolve(ev.data)
      port1.postMessage(obj)
    })
  }
  
  var obj = {
    a: 1,
    b: {
      c: 2
    }
  }
  
  obj.b.d = obj.b
  
  // 注意该方法是异步的
  // 可以处理 undefined 和循环引用对象
  const test = async () => {
    const clone = await structuralClone(obj)
    console.log(clone)
  }
  test()



  // MessageChannel 参考文档https://www.jianshu.com/p/4f07ef18b5d7 ,实际就是个消息队列
  //下面是简单的使用
  var channel = new MessageChannel();
  var port1 = channel.port1;
  var port2 = channel.port2;
  port1.onmessage = function(event) {
      console.log("port1收到来自port2的数据：" + event.data);
  }
  port2.onmessage = function(event) {
      console.log("port2收到来自port1的数据：" + event.data);
  }

  port1.postMessage("发送给port2");
  port2.postMessage("发送给port1");
