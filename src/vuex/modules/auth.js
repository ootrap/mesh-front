import { LOGIN, LOGOUT } from '../types'
var localStorage = window.localStorage.getItem('wemesh_token')

if (localStorage !== null) {
  var currentAuthState = true
}
const state = {
  isAuthed: currentAuthState
}

const mutations = {
  [LOGIN] (state) {
    state.isAuthed = true
  },
  [LOGOUT] (state) {
    window.localStorage.removeItem('wemesh_token')
    state.isAuthed = false
  }
}

export default ({
  state,
  mutations
})
