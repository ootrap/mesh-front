import {GET_WXMP_LIST, GET_WXMPLIST_FAILURE} from '../types'
const state = {
  items: []
}

const mutations = {
  [GET_WXMP_LIST] (state, action) {
    state.items = action.wxmpList
  },
  [GET_WXMPLIST_FAILURE] (state, action) {
    state.items = []
  }
}
export default ({
  state,
  mutations
})
