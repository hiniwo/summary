// 图是网络结构的抽象模型，是一组由边链接的节点
// 图可以表示任何的二元关系，比如路线，航班
// JavaScript没有图，但是可以用Object和Array来表示
// 图的常用操作：深度优先遍历和广度优先遍历

// 深度优先遍历
// 访问根节点
// 对根几点没有访问过的相邻节点挨个进行深度优先遍历
const graoh = []
const visited = new Set()

const dfs = (n) => {
    console.log(n)
    visited.add(n);
    graph[n].forEach((item , index) => {
        if(!visited.has(item)) {
            dfs(item)
        }
    })
}

// 广度优先遍历口诀
// 新建一个队列，把根节点入队
// 把队头出队并访问
// 把队头的没有访问的相邻节点入队
// 重复第二和第三步，直到队列为空
const q = [2]
visited.add(2)
while(q.length) {
    const n = q.shift()
    console.log(n)
    graph[n].forEach(item => {
        if(!visited.has(item)) {
            q.push(item)
            visited.add(item)
        }
    })
}