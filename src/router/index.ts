import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",//当默认路径的时候，自动跳转到login
      redirect: "/Login",
    },
    {
      path: "/Login",
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/Login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/Login/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/Login/phoneverify",
      component: () => import("../views/PhoneVerify.vue"),
    },
    {
      path: "/Login/findpassword",
      component: () => import("../views/FindPassword.vue"),
    },
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
