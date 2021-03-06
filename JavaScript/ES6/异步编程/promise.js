class MyPromise {
    // 构造方法接收一个回调
    constructor(executor) {
      this._resolveQueue = []    // then收集的执行成功的回调队列
      this._rejectQueue = []     // then收集的执行失败的回调队列
  
      // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
      let _resolve = (val) => {
        // 从成功队列里取出回调依次执行
        while(this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      // 实现同resolve
      let _reject = (val) => {
        while(this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      // new Promise()时立即执行executor,并传入resolve和reject
      executor(_resolve, _reject)
    }
  
    // then方法,接收一个成功的回调和一个失败的回调，并push进对应队列
    then(resolveFn, rejectFn) {
      this._resolveQueue.push(resolveFn)
      this._rejectQueue.push(rejectFn)
    }
  }
//   const p1 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('result')
//     }, 1000);
//   })
//   p1.then(res => console.log(res))
  //一秒后输出result
//   const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
//   })
  
//   const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
//   })
  
//   p2.then(result => console.log(result)).catch(error => console.log(error))

//   console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}

// new Promise((resolve, reject) => {
//     console.log('async2 end')
//     // Promise.resolve() 将代码插入微任务队列尾部
//     // resolve 再次插入微任务队列尾部
//     resolve(Promise.resolve())
//   }).then(() => {
//     console.log('async1 end')
//   })
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

//script start  
// script end 
// async1 end 
// async2 end 

//console.log('Promise')

// console.log('promise1')

// console.log('promise2')

// console.log('setTimeout')