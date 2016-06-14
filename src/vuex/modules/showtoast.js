import {SHOW_TOAST, HIDE_TOAST} from '../types'
const state = {
  message: {
    type: '',
    content: '',
    title: ''
  }
}

const mutations = {
  [SHOW_TOAST] (state, action) {
    state.message = {...action}
  },
  [HIDE_TOAST] (state, action) {
    state.message = {
      type: '',
      content: '',
      title: ''
    }
  }
}

export default {
  state,
  mutations
}
