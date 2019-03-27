import {
  handleBtnAddClick,
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
            click: handleBtnAddClick
          }
        ]
      }
    ],
  }
]
