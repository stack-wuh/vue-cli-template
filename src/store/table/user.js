import {
  jump2Detail
} from './events.js'

export default  {
  name: '用户管理',
  matchAll: /^\/?user/,
  children: [
    {
      name: '用户',
      matchAll: ['/user/index'],
      type: 'index',
      label: '序号',
      column: [
        {
          label: '用户ID',
          field: '',
          type: ''
        },
        {
          label: '用户昵称',
          field: '',
          type: ''
        },
        {
          label: '书豆/余额',
          field: '',
          type: ''
        },
        {
          label: '总充值金额',
          field: '',
          type: ''
        },
        {
          label: '是否VIP',
          field: '',
          type: ''
        },
        {
          label: '注册时间',
          field: '',
          type: ''
        },
        {
          label: '操作',
          field: '',
          type: 'button',
          btns: [
            {
              text: '查看',
              props: {
                type: 'text',
              },
              event: jump2Detail
            }
          ]
        },
      ]
    },
    {
      name: '消费记录',
      matchAll: ['/user/detail/second'],
      type: 'index',
      label: '序号',
      column: [
        {
          label: '时间',
          type: '',
          field: ''
        },
        {
          label: '小说',
          type: '',
          field: ''
        },
        {
          label: '章节',
          type: '',
          field: ''
        },
        {
          label: '消费书币',
          type: '',
          field: ''
        }
      ]
    },
    {
      name: '订单记录',
      matchAll: ['/user/detail/third'],
      type: 'index',
      label: '序号',
      column: [
        {
          label: '商户单号',
          field: ''
        },
        {
          label: '订单类型',
          field: ''
        },
        {
          label: '总额',
          field: ''
        },
        {
          label: '创建日期',
          field: ''
        }
      ]
    },
    {
      name: '阅读记录',
      matchAll: ['/user/detail/four'],
      type: 'index',
      label: '序号',
      column: [{
          label: '时间',
          field: ''
        },
        {
          label: '小说',
          field: ''
        },
        {
          label: '章节',
          field: ''
        }
      ]
    }
  ]
}