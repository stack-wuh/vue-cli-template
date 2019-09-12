export default {
  name: '订单管理',
  matchAll: /^\/?order/,
  children: [
    {
      name: '订单列表',
      matchAll: ['/order/index'],
      type: 'index',
      label: '序号',
      column: [
        {
          label: '订单号',
          field: '',
          type: ''
        },
        {
          label: '订单类型',
          field: '',
          type: ''
        },
        {
          label: '购买用户',
          field: '',
          type: ''
        },
        {
          label: '金额',
          field: '',
          type: ''
        },
        {
          label: '日期',
          field: '',
          type: ''
        },
        {
          label: '支付方式',
          field: '',
          type: ''
        }
      ],
      headForm: [
        {
          type: 'daterange',
          field: 'date_range',
          style: {
            width: '220px'
          }
        },
        {
          type: 'button-group',
          btns: [
            {
              text: '导出',
              props: {
                size: 'mini',
                type: 'warning'
              }
            }
          ]
        }
      ]
    }
  ] 
}