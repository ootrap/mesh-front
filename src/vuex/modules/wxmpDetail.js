import {GET_WXMP_DETAIL, UPDATE_WXMP_DETAIL} from '../types'
const state = {
  items: []
}

const mutations = {
  [GET_WXMP_DETAIL](state, action){
    state.items = action.wxmpDetail
  },
  [UPDATE_WXMP_DETAIL](state, action){
    state.items = action.wxmpDetail
  },
}
export default ({
  state,
  mutations
})
