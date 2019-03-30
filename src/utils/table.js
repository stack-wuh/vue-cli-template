import {
  handleBtnAddClick,
  handleBtnDelClick,
  handleBtnDtlClick
} from './table.click.js'

export const table = [
  {
    name: '用户列表',
    params: ['用户列表'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '用户名',
        type: 'default',
        field: '',
      },
      {
        label: '姓名',
        type: 'default',
        field: '',
      },
      {
        label: '身份',
        type: 'default',
        field: '',
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '添加',
            click: handleBtnAddClick
          },
          {
            text: '删除',
            click: handleBtnDelClick
          },
          {
            text: '查看详情',
            click: handleBtnDtlClick
          }
        ]
      }
    ],
  },
  {
    name: '广告商列表',
    params: ['广告商列表'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '账户名',
        type: '',
        field: ''
      },
      {
        label: '联系人姓名',
        type: '',
        field: ''
      },
      {
        label: '公司名称',
        type: '',
        field: ''
      },
      {
        label: '添加时间',
        type: '',
        field: ''
      },
      {
        label: '最新编辑时间',
        type: '',
        field: ''
      },
      {
        label: '状态',
        type: '',
        field: ''
      },
      {
        label: '管理',
        type: 'setting',
        list: [
          {
            text: '查看操作日志'
          },
          {
            text: '登录当前账户'
          },
          {
            text: '编辑'
          }
        ]
      },
    ]
  },
  {
    name: '退货商品',
    params: ['退货商品'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '商品编号',
        type: 'default',
        field: '',
      },
      {
        label: '商品名称',
        type: 'default',
        field: '',
      },
      {
        label: '商品条码',
        type: 'default',
        field: '',
      },
      {
        label: '单价',
        type: 'default',
        field: '',
      },
      {
        label: '数量(件)',
        type: 'default',
        field: '',
      },
      {
        label: '金额',
        type: 'default',
        field: '',
      }
    ]
  },
  {
    name: '退货进度',
    params: ['退货进度'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '时间',
        type: 'default',
        field: '',
      },
      {
        label: '当前进度',
        type: 'default',
        field: '',
      },
      {
        label: '状态',
        type: 'default',
        field: '',
      },
      {
        label: '操作员ID',
        type: 'default',
        field: '',
      },
      {
        label: '耗时',
        type: 'default',
        field: '',
      }
    ]
  },
]
