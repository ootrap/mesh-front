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
  import store from '../vuex/store'
  export default {
    replace: false,
    store: store,
    components: {
      sidebar, topNavbar, chatbox, fullscreen, toaster, Breadcrumb
    }
  }
</script>

<style lang="scss">
  @import "~src/sass/app";
</style>
