// 因为 JS 是单线程执行的，如果前面的代码影响了性能，就会导致 setTimeout 不会按期执行。
// 当然了，我们可以通过代码去修正 setTimeout，从而使定时器相对准确

//下面是代码修正例子

let period = 60 * 1000 * 60 * 2
let startTime = new Date().getTime()
let count = 0
let end = new Date().getTime() + period
let interval = 1000
let currentInterval = interval

function loop() {
  count++
  // 代码执行所消耗的时间
  let offset = new Date().getTime() - (startTime + count * interval);
  let diff = end - new Date().getTime()
  let h = Math.floor(diff / (60 * 1000 * 60))
  let hdiff = diff % (60 * 1000 * 60)
  let m = Math.floor(hdiff / (60 * 1000))
  let mdiff = hdiff % (60 * 1000)
  let s = mdiff / (1000)
  let sCeil = Math.ceil(s)
  let sFloor = Math.floor(s)
  // 得到下一次循环所消耗的时间
  currentInterval = interval - offset 
  console.log('时：'+h, '分：'+m, '毫秒：'+s, '秒向上取整：'+sCeil, '代码执行时间：'+offset, '下次循环间隔'+currentInterval) 

  setTimeout(loop, currentInterval)
}

setTimeout(loop, currentInterval)

// 如果你有循环定时器的需求，其实完全可以通过 requestAnimationFrame 来实现
function setInterval(callback, interval) {
    let timer
    const now = Date.now
    let startTime = now()
    let endTime = startTime
    const loop = () => {
      timer = window.requestAnimationFrame(loop)
      endTime = now()
      if (endTime - startTime >= interval) {
        startTime = endTime = now()
        callback(timer)
      }
    }
    timer = window.requestAnimationFrame(loop)
    return timer
  }
  
  let a = 0
  setInterval(timer => {
    console.log(1)
    a++
    if (a === 3) cancelAnimationFrame(timer)
  }, 1000)