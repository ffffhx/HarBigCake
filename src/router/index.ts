/*
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-19 12:56:09
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-04-25 14:38:53
 * @FilePath: \HarBigCake\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/cover3",
      component: () => import("../views/Cover3.vue"),
    },
    {
      path: "/cover2",
      component: () => import("../views/Cover2.vue"),
    },
    {
      path: "/cover",
      component: () => import("../views/Cover.vue"),
    },
    {
      path: "/",//当默认路径的时候，自动跳转到login
      redirect: "/indexView",
    },
    {
      path: "/indexView",
      component: () => import("../views/IndexView.vue"),
      children: [
        {
          path: "/indexView",//当路径默认为/login的时候，自动跳转到login
          redirect: "/login",
        },
        {
          path: "/login",
          component: () => import("../views/nav/Login.vue"),
        },
        {
          path: "/register",
          component: () => import("../views/nav/Register.vue"),
        },
        {
          path: "/phoneverify",
          component: () => import("../views/nav/PhoneVerify.vue"),
        },
        {
          path: "/findpassword",
          component: () => import("../views/nav/FindPassword.vue"),
        }
      ]
    },
    // {
    //   path: "/Login",
    //   // name: "login",
    //   component: () => import("../views/nav/Login.vue"),
    // },
    // {
    //   path: "/Login/register",
    //   // name: "register",
    //   component: () => import("../views/nav/Register.vue"),
    // },
    // {
    //   path: "/Login/phoneverify",
    //   component: () => import("../views/nav/PhoneVerify.vue"),
    // },
    // {
    //   path: "/Login/findpassword",
    //   component: () => import("../views/nav/FindPassword.vue"),
    // },
    {
      path: "/home",
      component: () => import("../views/Home.vue"),
      children: [
        {
          path: "/home",//当路径默认为/home的时候，自动跳转到main
          redirect: "/main",
        },
        {
          path: "/main",
          component: () => import("../views/manage/Main.vue"),
        },
        {
          path: "/commodity",
          component: () => import("../views/manage/Commodity.vue"),
        },
        {
          path: "/employee",
          component: () => import("../views/manage/Employee.vue"),
        },
        {
          path: "/orders",
          component: () => import("../views/manage/Orders.vue"),
        },
        {
          path: "/finance",
          component: () => import("../views/manage/Finance.vue"),
        },
        {
          path: "/material",
          component: () => import("../views/manage/Material.vue"),
        }
      ]
    },
    // {
    //   path: "/Login/commodity",
    //   components: {
    //     manage: () => import("../views/manage/Commodity.vue"),
    //   }
    // }
  ],
});

export default router
