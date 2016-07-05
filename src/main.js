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
