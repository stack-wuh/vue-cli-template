export const state = {
  author: 'shadow',

  isShowDialog: false,
  dialogTitle: 'Tips',

  searchForm: {},
}

export const mutations = {
  DIALOG_CLAOSE_SYNC: (state, status = false) => {
    state.isShowDialog = status
    state.dialogTitle = '提示内容'
  }
}

export const actions = {
  DIALOG_CLOSE_ASYNC: ({commit}) => {
    setTimeout(() => {
      commit('DIALOG_CLAOSE_SYNC')
    }, 1000, false)
  }
}

export const getters = {}
