import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  state, mutations, actions, getters
} from '@/store/index'

import Use from '@/store/module/use'
import Table from '@/store/table'

export default new Vuex.Store({
  state, mutations, actions, getters,
  modules: {
    Use,
    Table
  }
})
