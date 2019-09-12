export const DowncardList = [
  {
    item: '今日数据',
    icon: 'el-icon-position',
    list: [{
        name: '今日数据',
        count: 0,
        unit: '元'
      },
      {
        name: '今日收益',
        count: 0,
        unit: '元'
      },
      {
        name: '今日新增',
        count: 0,
        unit: '人'
      },
      {
        name: '今日订单',
        count: 0,
        unit: '笔'
      },
      {
        name: '今日付费',
        count: 0,
        unit: '笔'
      },
      {
        name: '累计付费',
        count: 0,
        unit: '笔'
      },
    ]
  },
  {
    item: '累技数据',
    icon: 'el-icon-top',
    list: [
      {
        name: '累计充值',
        count: 0,
        unit: '元'
      },
      {
        name: '积累收益',
        count: 0,
        unit: '元'
      },
      {
        name: '本月充值',
        count: 0,
        unit: '元'
      },
      {
        name: '本月收益',
        count: 0,
        unit: '元'
      },
      {
        name: '上月充值',
        count: 0,
        unit: '元'
      },
      {
        name: '上月收益',
        count: 0,
        unit: '元'
      }
    ]
  }
]

export const DowncardListForUser = [
  {
    item: '今日数据',
    icon: 'el-icon-position',
    list: [
      {
        name: '今日注册',
        count: 0,
        unit: '人'
      },
      {
        name: '新用户付费人数',
        count: 0,
        unit: '人'
      },
      {
        name: '转化率',
        count: 0,
        unit: '%'
      }
    ]
  },
  {
    item: '累计数据',
    icon: 'el-icon-top',
    list: [
      {
        name: '累计注册',
        count: 0,
        unit: '人'
      },
      {
        name: '累计付费人数',
        count: 0,
        unit: '%'
      }
    ]
  }
]

export const DowncardListForBook = [
    {
      item: '累计数据',
      icon: 'el-icon-top',
      list: [
        {
          name: '男频书籍',
          count: 0,
          unit: '元'
        },
        {
          name: '女频书籍',
          count: 0,
          unit: '元'
        },
        {
          name: '短篇书籍',
          count: 0,
          unit: '元'
        }
      ]
    }
]

export default {
  dData: DowncardList,
  dUser: DowncardListForUser,
  dBook: DowncardListForBook
}