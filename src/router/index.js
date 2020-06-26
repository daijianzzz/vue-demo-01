/*
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-25 20:12:06
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Qq from '../views/qq'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
