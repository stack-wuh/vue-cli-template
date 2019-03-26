export const state = {
  author: 'shadow',

  isShowDialog: true,
  dialogTitle: '提示'
}

export const mutations = {
  DIALOG_CLAOSE_SYNC: (state) => {
    state.isShowDialog = false
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
