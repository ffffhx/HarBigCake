import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/Login/login",
    },
    {
      path: "/Login",
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/Login/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/Login/register",
      name:"register",
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
  ],
});

export default router
