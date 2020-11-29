//树是一种分层数据的抽象模型

//深度优先遍历口诀
//访问根节点， 然后对根节点的children挨个进行深度优先遍历


const dfs = (root)=> {
    console.log(root.value)
    root.children.forEach(dfs)
}

//广度优先遍历算法
//新建一个数列把根节点入列，把队头出列并访问，把队头的children 挨个入列。重复二三步的操作。

const dfs1 = (root) =>{
    const p = [root]
    while(p.length > 0) {
        const n = p.shift()
        console.log(n.value)
        n.children.forEach((item) => {
            p.push(n)
        })
    }
}

//二叉树的先序遍历算法
//先访问根节点
// 对根节点的左子树进行先序遍历
//对根节点的右子树进行先序遍历

const preOrder = (root) => {
    if(!root) {
        return
    }
    console.log(root.value)
    preOrder(root.left)
    preOrder(root.right)
}

//二叉树的中序遍历算法
//对根节点的左子树进行中序遍历
//访问根节点
//对根节点的右子树进行中序遍历

const inOrder = (root) => {
    if(!root) {
        return
    }
    inOrder(root.left)
    console.log(root.value)
    inOrder(root.right)
}

//二叉树的后序遍历算法
//对根节点的左子树进行后序遍历
//对根节点的右子树进行后序遍历
//访问根节点

const postOrder = (root) => {
    if(!root) {
        return
    }
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.value)
}

