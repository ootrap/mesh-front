import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import registerRouters from './routers'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import VueValidator from 'vue-validator'
// import filters from './filters'
import store from './vuex/store'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.use(VueValidator)
// Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content')
// Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
const router = new VueRouter({
  hashbang: false
})

sync(store, router)

registerRouters(router)

router.start(App, '#app')
// 不允许没有userinfo数据而直接访问'home'
router.beforeEach(function ({to, next}) {
  if (to.name === 'home' && window.sessionStorage.getItem('wemesh.userInfo') === null) {
    return false
  } else {
    next()
  }
})
if (store.state.route.path === '/home' && window.sessionStorage.getItem('wemesh.userInfo') === null) {
  router.go('/')
}
