import {GET_USER_INFO, UPDATE_USER_INFO} from '../types'
const state = {
  items: []
}

const mutations = {
  [GET_USER_INFO] (state, action) {
    state.items = action.userInfo
  },
  [UPDATE_USER_INFO] (state, action) {
    state.items = action.userInfo
  }
}

export default ({
  state,
  mutations
})
