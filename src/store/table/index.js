import Statistic from './statistic'
import Order from './order'
import User from './user'

export default {
  state: {
    store: [Statistic, Order, User],
    cols: []
  },

  mutations: {
    GET_TABLE_COLS: (state, parmas) => {
      let { path } = parmas
      var ff = s => Array.isArray(s.matchAll) ? s.matchAll.includes(path) : s.matchAll.test(path)
      if (path) {
        var p = state.store.filter(ff)[0]
        if (Array.isArray(p.children)) {
          var c = p.children.filter(ff)[0]
          state.cols = c
        }
      }
    }
  },

  actions: {},

  getters: {}
}