import router from './router'
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('全局前置守卫');
    //to:你将要访问哪个路由
    //from：你从哪个路由而来
    //next:路由的放行函数
    nprogress.start()
    next()
})

// 全局后置守卫
router.afterEach((to, from) => {
    nprogress.done()
})