import Vue from 'vue'
import Vuex from 'vuex'
import fullscreen from './modules/fullscreen'
import userInfo from './modules/userInfo'
import wxmpList from './modules/wxmpList'
import showtoast from './modules/showtoast'
import auth from './modules/auth'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    fullscreen, userInfo, wxmpList, showtoast, auth
  },
  strict: debug
})
