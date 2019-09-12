import Vue from 'vue'
import Router from 'vue-router'
import Home from '@v/Home.vue'
import ParentView from '@v/layout/parent/main.vue'

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
          path: '/st',
          name: 'st',
          redirect: '/st/index',
          component: ParentView,
          children: [
            {
              path: '/st/index',
              meta: {
                crubms: [
                  { _index: 0, name: '数据分析', path: '/st/index' },
                  { _index: 1, name: '数据统计', path: '/st/index' },
                ]
              },
              component: () => import('@v/statisticManage/index/main.vue')
            },
            {
              path: '/st/user',
              meta: {
                crubms: [
                  { _index: 0, name: '数据分析', path: '/st/index' },
                  { _index: 1, name: '用户分析', path: '/st/user' },
                ]
              },
              component: () => import('@v/statisticManage/index/main.vue')
            },{
              path: '/st/book',
              meta: {
                crubms: [
                  { _index: 0, name: '数据分析', path: '/st/index' },
                  { _index: 1, name: '小说分析', path: '/st/book' },
                ]
              },
              component: () => import('@v/statisticManage/index/main.vue')
            }
          ]
        },
        {
          path: '/order',
          name: 'order',
          component: ParentView,
          redirect: '/order/index',
          children: [
            {
              path: '/order/index',
              meta: {
                crubms: [
                  { _index: 0, name: '订单管理', path: '/order' },
                  { _index: 1, name: '订单列表', path: '/order/index' }
                ]
              },
              component: () => import('@v/orderManage/index/main.vue')
            }
          ]
        },
        {
          path: '/user',
          name: 'user',
          component: ParentView,
          redirect: '/user/index',
          children: [
            {
              path: '/user/index',
              meta: {
                crubms: [
                  { _index: 0, name: '用户管理', path: '/user' },
                  { _index: 1, name: '用户列表', path: '/user/index' }
                ]
              },
              component: () => import ('@v/userManage/index/main.vue')
            },
            {
              path: '/user/detail',
              meta: {
                crubms: [
                  { _index: 0, name: '用户管理', path: '/user' },
                  { _index: 1, name: '用户列表', path: '/user/index' },
                  { _index: 2, name: '用户详情', path: '/user/detail' },
                ]
              },
              component: () => import ('@v/userManage/detail/main.vue')
            }
          ]
        },
        {
          path: '/books',
          name: 'books',
          component: ParentView,
          redirect: '/books/index',
          children: [{
            path: '/books/index',
            meta: {
                crubms: [{ _index: 0, name: '小说管理', path: '/books/index' }]
              },
            component: () => import('@v/bookManage/index/main.vue')
          }]
        },
        {
          path: '/share',
          name: 'share',
          component: ParentView,
          redirect: '/share/index',
          children: [{
            path: '/share/index',
            meta: {
                crubms: [{ _index: 0, name: '推广管理', path: '/share/index' }]
              },
            component: () => import('@v/shareManage/index/main.vue')
          }]
        },
        {
          path: '/finance',
          name: 'finance',
          component: ParentView,
          redirect: '/finance/index',
          children: [{
            path: '/finance/index',
            meta: {
                crubms: [{ _index: 0, name: '财务管理', path: '/finance/index' }]
              },
            component: () => import('@v/fnaniceManage/index/main.vue')
          }]
        },
        {
          path: '/proxy',
          name: 'proxy',
          component: ParentView,
          redirect: '/proxy/index',
          children: [{
            path: '/proxy/index',
            meta: {
              crubms: [{ _index: 0, name: '代理管理', path: '/proxy/index' }]
            },
            component: () => import ('@v/proxyManage/index/main.vue')
          }]
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
