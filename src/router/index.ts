import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/phoneverify',
      component: () => import('../views/PhoneVerify.vue')
    },
    {
      path: '/findpassword',
      component: () => import('../views/FindPassword.vue')
    }
  ]
})

export default router
