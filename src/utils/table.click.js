import store from '../store'

export const handleBtnAddClick = (...argus) => {
  store.commit('DIALOG_CLAOSE_SYNC', true)
}
