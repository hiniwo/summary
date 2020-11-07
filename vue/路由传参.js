
// 第一种方法 页面刷新数据不会丢失
//直接调用$router.push 实现携带参数的跳转
this.$router.push({
    path: `/particulars/${id}`,
  })

// 路由配置如下
//   {
//     path: '/particulars/:id',
//     name: 'particulars',
//     component: particulars
//   }



// 第二种方法 页面刷新数据会丢失
// 通过路由属性中的name来确定匹配的路由，通过params来传递参数。


this.$router.push({
    name: 'particulars',
    params: {
      id: id
    }
  })


//   {
//     path: '/particulars',
//     name: 'particulars',
//     component: particulars
//   }

// 前面两种方法获取参数方法是：
// this.$route.params.id

// 第三种方法
// 使用path来匹配路由，然后通过query来传递参数
this.$router.push({
    path: '/particulars',
    query: {
      id: id
    }
  })

//   this.$route.query.id


// 路由配置传参注意书写格式/:id，
// 获取参数都是通过$route而不是$router
// params传参和query传参区别类似于post和get方法。
// params传参地址栏不会显示参数，而query传参会将参数显示在地址栏中params传参刷新页面参数会丢失，
// 另外两种不会params传参对应的路由属性是name，而query传参对应的路由属性既可以是name，也可以是path

// 参考文献https://juejin.im/post/6844903812474339341




