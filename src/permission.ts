/*
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-29 16:52:23
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-05-13 17:14:31
 * @FilePath: \HarBigCake\src\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// /*
//  * @Author: ffffhx 17862926305@163.com
//  * @Date: 2024-04-29 16:52:23
//  * @LastEditors: ffffhx 17862926305@163.com
//  * @LastEditTime: 2024-05-13 16:45:07
//  * @FilePath: \HarBigCake\src\permission.ts
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// import router from './router'
// import nprogress from 'nprogress'
// // import nprogress from 'nprogress'
// //引入进度条样式
// // import useStore from 'element-plus/es/components/table/src/store/index.mjs'
// import 'nprogress/nprogress.css'
// import { createPinia } from 'pinia'

// import {useIndexView} from './stores/IndexView';
// const useIndexViewStore = useIndexView();

// //全局前置守卫

// router.beforeEach((to, from, next) => {
//     // console.log('全局前置守卫');
//     //to:你将要访问哪个路由
//     //from：你从哪个路由而来
//     //next:路由的放行函数
//     if (true) {
//         // 用户已登录，继续路由导航
//         next();
//       } else {
//         // 用户未登录，重定向到登录页面
//         next('/login');
//       }
//     // console.log(useIndexViewStore.data);
    
//     nprogress.start()
//     next()
// })

// // 全局后置守卫
// router.afterEach((to, from) => {
//     nprogress.done()
// })