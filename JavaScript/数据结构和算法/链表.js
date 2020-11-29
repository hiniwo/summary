// 链表定义 多个元素组成的数据，但是元素存储的顺序不连续，用next指针连在一起
// JavaScript中没有链表，但是可以用Object来实现


//参考案例1就是自己手写一个instanceof 这个方法

//参考案例2 获取json指定的值

const myJson = {
    a : {
        b  : {
            c : 1
        }
    } ,
    d : {
        e : 1
    }  
}

const path = ['a' , 'b']

let p = myJson;

path.forEach((item, index) =>{
    p = p[item]
})