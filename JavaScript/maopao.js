function bubbleSort (arr) {
    for (let i = 0; i < arr.length; i++) {
      let flag = true;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          flag = false;
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      if (flag) break;
    }
    return arr;
  }

//   这个是优化过后的冒泡排序。用了一个flag来优化，它的意思是：如果某一次循环中没有交换过元素，那么意味着排序已经完成了。
  