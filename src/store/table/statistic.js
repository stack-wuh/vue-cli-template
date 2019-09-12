export default {
  name: '数据分析',
  matchAll: /^\/?st/,
  children: [
    {
      name: '数据统计',
      matchAll: ['/st/index'],
      type: 'index',
      label: '序号',
      column: [
        {
          label: '日期',
          field: '',
          type: ''
        },
        {
          label: 'UV',
          field: '',
          type: ''
        },
        {
          label: 'PV',
          field: '',
          type: ''
        },
        {
          label: '付费人数',
          field: '',
          type: ''
        },
        {
          label: '付款订单',
          field: '',
          type: ''
        },
        {
          label: '订单完成率',
          field: '',
          type: ''
        },
        {
          label: 'arpu值(元)',
          field: '',
          type: ''
        },
        {
          label: '充值金额',
          field: '',
          type: ''
        },
        {
          label: 'App充值',
          field: '',
          type: ''
        },
        {
          label: '收益',
          field: '',
          type: ''
        }
      ],
      headForm: [
        {
          label: '时间区间',
          type: 'daterange',
          field: 'date_range',
          style: {
            width: '220px'
          }
        },
        {
          label: '按钮组',
          type: 'button-group',
          btns: [
            {
              text: '导出',
              props: {
                type: 'warning',
                size: 'mini'
              }
            }
          ]
        }
      ]
    },
    {
      name: '用户分析',
      matchAll: ['/st/user'],
      type: 'index',
      label: '序号',
      column: [
        {
          label: '日期',
          field: '',
          type: ''
        },
        {
          label: '新增注册',
          field: '',
          type: ''
        },
        {
          label: 'App安装量',
          field: '',
          type: ''
        },
        {
          label: '男性',
          field: '',
          type: ''
        },
        {
          label: '女性',
          field: '',
          type: ''
        },
        {
          label: '新用户充值人数',
          field: '',
          type: ''
        },
        {
          label: '转化率',
          field: '',
          type: ''
        },
        {
          label: '新用户充值(元)',
          field: '',
          type: ''
        },
        {
          label: '新用户arpu值(元)',
          field: '',
          type: ''
        },
      ]
    },
    {
      name: '小说分析',
      matchAll: ['/st/book'],
      type: 'index',
      label: '序号',
      column: [
        {
          label: '书名',
          field: '',
          type: ''
        },
        {
          label: '类型',
          field: '',
          type: ''
        },
        {
          label: '今日充值(元)',
          field: '',
          type: ''
        },
        {
          label: '昨日充值(元)',
          field: '',
          type: ''
        },
        {
          label: '充值总额(元)',
          field: '',
          type: ''
        },
      ]
    }
  ]
}