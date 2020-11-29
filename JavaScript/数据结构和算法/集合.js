//集合的定义：无序而且还是唯一的数据结构
// es6 中的 set 结构
// 集合api总结 add has delete clear 比map少了一个api
//常用的操作：去重，判断元素是否在其中，集合与集合之间的交集

//下面是数组去重
const arr = [1 , 2, ,1 ,2]
const set = new Set(arr);
const set2 = new Set([2 ,3]);
const set3 = new Set([...Set].filter(item => set2.has(item)))


