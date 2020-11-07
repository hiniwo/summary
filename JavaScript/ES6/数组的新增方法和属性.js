// 1 拓展运算符
// 使用场景：复制数组，合并数组，与解构赋值结合，将字符串转为真正的数组，实现了 Iterator 接口的对象


// 2 Array.from()的作用 类似数组的对象（array-like object）和可遍历（iterable）的对象
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c'] 



//Array.of方法用于将一组值，转换为数组。
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1


//数组实例的 copyWithin()
//在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。


//数组实例的 find() 和 findIndex()
//find() 结果true 或者是undefined   findIndex() 结果是index 或者是-1

//数组实例的 fill()
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]

//数组实例的 entries()，keys() 和 values() 

//数组实例的 includes() 返回值为true 或者是false


// 数组实例的 flat()，flatMap()
//Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响


//Array.prototype.sort() 的排序稳定性

