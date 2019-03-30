import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/user',
          component: () => import ('@/views/userManage/user-list')
        },
        {
          path: '/user/limit',
          component: () => import('@/views/userManage/limit')
        },
        {
          path: '/list',
          component: () => import('@/views/tableManage/list')
        },
        {
          path: '/list/dtl',
          component: () => import('@/views/tableManage/listDtls/index')
        }
      ]
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/bar',
          component: () => import('@/components/charts/bar')
        }
      ]
    },
    {
      path: '/signin',
      component: () => import ('@/views/signin')
    },
    {
      path: '*',
      component: () => import('@/components/error/404')
    },
    {
      path: '/403',
      component: () => import('@/components/error/403')
    },
    {
      path: '/500',
      meta: {isRequest: true},
      component: () => import('@/components/error/500')
    }
  ]
})
