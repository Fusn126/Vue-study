import { RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'

const user: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  }
]

export default user
