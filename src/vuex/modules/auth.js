import { GET_WXTOKEN, LOGOUT } from '../types'
import { getCookie } from '../../authService'
let wxToken = getCookie('wxToken')

const state = {
  isHold: wxToken !== undefined
}

const mutations = {
  [GET_WXTOKEN] () {
    state.isHold = wxToken !== undefined
  },
  [LOGOUT] (state) {
    state.isHold = false
  }
}
export default ({
  state,
  mutations
})
