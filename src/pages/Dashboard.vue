<template>
  <div id="box" class="app-sidebar-fixed app-navbar-fixed ">
    <!-- toaster directive -->
    <Toaster></Toaster>
  <!-- / toaster directive -->
      <sidebar></sidebar>
      <div class="app-content">
        <!-- top navbar -->
        <top-navbar></top-navbar>
        <!-- / top navbar -->
        <!-- main content -->
        <div  class="main-content">
          <div class="wrap-content container">
           <breadcrumb></breadcrumb>
            <router-view></router-view>
          </div>
        </div>
        <!-- / main content -->
      </div>
      <chatbox api="http://demo1429768.mockable.io/messages"></chatbox>
  </div>
</template>

<script>
  import sidebar from '../layout/Sidebar.vue'
  import topNavbar from '../layout/TopNavbar.vue'
  import chatbox from '../layout/Chatbox.vue'
  import Breadcrumb from '../layout/Breadcrumb.vue'
  import toaster from '../components/Toaster.vue'
  import fullscreen from '../components/Fullscreen'
  // import {getWxToken} from '../vuex/actions'
  // import { getCookie } from '../authService'
  import store from '../vuex/store'
  export default {
    replace: false,
    store: store,
    vuex: {
      actions: {
        // getWxToken
      }
    },
    components: {
      sidebar, topNavbar, chatbox, fullscreen, toaster, Breadcrumb
    },
    /**
     * Cookie 'wxToken' not found that means it had been expired
     * so it need refresh token
     */
    created () {
      // let wxToken = getCookie('wxToken')
      // if (wxToken === undefined) {
      //   let weid = JSON.parse(window.sessionStorage.getItem('wemesh.userInfo')).weid
      //   this.getWxToken(weid)
      // }
    }
  }
</script>

