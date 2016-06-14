<template>
  <div class="sidebar app-aside hidden-print " id="sidebar" >
    <div class="sidebar-container" id="sidebox">
      <!-- start: SEARCH FORM -->
      <div class="search-form hidden-md hidden-lg">
        <form class="navbar-form" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="搜索关键字...">
            <button class="btn search-button" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <!-- end: SEARCH FORM -->
      <!-- start: USER OPTIONS -->
      <user-info></user-info>
      <!-- end: USER OPTIONS -->
      <!-- start: SIDEBAR -->
      <nav id="sidemenu">
        <side-menu></side-menu>
      </nav>
      <!-- end: SIDEBAR -->
    </div>
  </div>
</template>
<script>
  import sideMenu from './Sidemenu.vue'
  import UserInfo from './UserInfo.vue'
  import dropdown from '../components/Dropdown.vue'
  var Ps = require('perfect-scrollbar')
  export default {
    components: {
      sideMenu, dropdown, UserInfo
    },
    ready: function () {
      var container = document.getElementById('sidebox')
      Ps.initialize(container)
    }
  }
</script>