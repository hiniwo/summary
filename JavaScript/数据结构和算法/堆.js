// 堆是一种特殊的完全二叉树
// 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点
// js中用数组表示堆
// 左侧子节点的位置是2*index + 1
// 右侧子节点的位置是2*index + 2
// 父节点的位置是（index - 1） /2

// 堆的应用：高效快速找到最大值和最小值
// 找出第k个最大（小）元素


// 下面是最小堆的实现
class MinHeap {
    constructor () {
        this.heap = []
    }
    swap (i1  , i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    getParentIndex (index) {
        return (index - 1) >> 1
    }
    getLeftIndex (index) {
        return  index * 2 + 1
    }
    getRightIndex (index) {
        return  index * 2 + 2
    }
    shiftup (index) {
        if(index === 0) return;
        const parentIndex = this.getParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex , index)
            this.shiftup(parentIndex)
        }
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)

        if(this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex , index)
            this.shiftDown(leftIndex)
        }
        if(this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex , index)
            this.shiftDown(rightIndex)
        }
    }
    insert (value) {
        this.heap.push(value)
        this.shiftup(this.heap.length - 1)
    }
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }
    size () {
        return this.heap.length
    }
    peek() {
        return this.heap[0]
    }
}