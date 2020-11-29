
//https://juejin.cn/post/6844903669389885453
// 防抖
function debounce(fn, delay) {
    let timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    }
  }
  

//   节流
  const throttle = (func, ms = 200) => {
    let prev = new Date().getTime()
    return function(...args) {
      let now = new Date().getTime()
      if (now - prev >= ms) {
        func()
        prev = now
      }
    }
  }
  
  
  
  