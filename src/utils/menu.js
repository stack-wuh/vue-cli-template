const menu = [
  {
    name: '监控页',
    icon: 'icon-index',
    path: '/feat/page'
  },
  {
    name: '数据分析',
    icon: 'icon-index',
    path: '/st',
    child: [
      {
        name: '数据统计',
        path: '/st/index'
      },
      {
        name: '用户分析',
        path: '/st/user'
      },
      {
        name: '小说分析',
        path: '/st/book'
      }
    ]
  },
  {
    name: '订单管理',
    icon: 'icon-index',
    path: '/order',
    child: [
      {
        name: '订单列表',
        path: '/order/index'
      }
    ]
  },
  {
    name: '用户管理',
    icon: 'icon-index',
    path: '/user',
    child: [
      {
        name: '用户列表',
        path: '/user/index'
      }
    ]
  },
  {
    name: '小说管理',
    icon: 'icon-index',
    path: '/books',
    child: [
      {
        name: '小说列表',
        path: ''
      }
    ]
  },
  {
    name: '推广管理',
    icon: 'icon-index',
    path: '/share',
    child: [
      {
        name: '推广分享',
        path: ''
      },
      {
        name: 'App推广',
        path: ''
      }
    ]
  },
  {
    name: '财务管理',
    icon: 'icon-index',
    path: '/finance',
    child: [
      {
        name: '提现记录',
        path: ''
      }
    ]
  },
  {
    name: '代理管理',
    icon: 'icon-index',
    path: '/proxy'
  }
]

export default menu
