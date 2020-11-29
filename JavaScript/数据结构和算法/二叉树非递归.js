// 可以利用栈来实现

const preOrder = (root) => {
    if(!root) {
        return
    }
    const stack = [root]
    while(stack.length > 0) {
        const n = stack.pop()
        console.log(n.value)
        if(n.right) {
            stack.push(n.right)
        }
        if(n.left) {
            stack.push(n.left)
        }
    } 
}


const inOrder = (root) => {
    if(!root) {
        return
    }
    const stack = []
    const p = root
    while(stack.length > 0 || p) {
        while(p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        console.log(n.value)
        p = p.right
    }   
}


const postOrder = (root) => {
    if(!root) {
        return
    }
    const stack = [root]
    const outputStack = []
    while(stack.length > 0) {
        const n = stack.pop()
        outputStack.push(n)
        if(n.left) {
            stack.push(n.left)
        }
        if(n.right) {
            stack.push(n.right)
        }
       
    } 
    while(outputStack.length > 0) {
        const n = outputStack.pop()
        console.log(n.value)
    }
}