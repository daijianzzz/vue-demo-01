/*
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-25 20:12:06
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/tab-bar'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home'),
      },
      {
        path: '/qu',
        name: 'qu',
        component: () => import('@/views/qu'),
      },
      {
        path: '/radio',
        name: 'radio',
        component: () => import('@/views/radio'),
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my'),
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
