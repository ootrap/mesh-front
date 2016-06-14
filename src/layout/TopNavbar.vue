<template>
    <!-- top navbar -->
         <header class="navbar navbar-default navbar-static-top hidden-print">
    <!-- start: NAVBAR HEADER -->
    <div class="navbar-header">
        <button  class="menu-mobile-toggler btn pull-left hidden-md hidden-lg" id="horizontal-menu-toggler" >
            <i class="fa fa-bars"></i>
        </button>
        <button   class="sidebar-mobile-toggler btn pull-left hidden-md hidden-lg" v-on:click="toggleSidebar">
            <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand" href="/"> <img width="32px" src="http://7lrzqf.com1.z0.glb.clouddn.com/images/ucenter-logo.png" alt="WeStar" />微脉事 WeMesh &trade;</a>
<!--         <a class="navbar-brand navbar-brand-collapsed" href="/"> <img width="32px" src="http://7lrzqf.com1.z0.glb.clouddn.com/images/ucenter-logo.png" alt="WeStar" />微脉事 WeMesh &trade;</a> -->
                <button class="btn pull-right menu-toggler  visible-xs-block" id="menu-toggler" v-on:click="navbarCollapsed" >
            <i v-bind:class="isNavbarCollapsed ? 'fa fa-folder-open' : 'fa fa-folder'"></i> <small><i class="fa fa-caret-down margin-left-5"></i></small>         
        </button>
    </div>
    <!-- end: NAVBAR HEADER -->
    <!-- start: NAVBAR COLLAPSE -->
    <div class="navbar-collapse collapse" id="navbar-collapse">
        <ul class="nav navbar-left hidden-sm hidden-xs">
            <li>
                <fullscreen></fullscreen> 
            </li>
            <li>
                <form role="search" class="navbar-form main-search">
                    <div class="form-group">
                        <input type="text" placeholder="搜索关键字..." class="form-control">
                        <button class="btn search-button" type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </form>
            </li>
        </ul>
        <ul class="nav navbar-right">
            <!-- start: MESSAGES DROPDOWN -->    
            <dropdown class="dropdown">
        <a class=" dropdown-toggle" type="button"  data-toggle="dropdown"  v-on:click="toggleMsg">
            <i class="fa fa-wechat"></i> 
        </a>
           <msg-box  api="http://demo1429768.mockable.io/messages"></msg-box>   
           </dropdown>  
            <!-- end: MESSAGES DROPDOWN -->
        </ul>
        <!-- start: MENU TOGGLER FOR MOBILE DEVICES -->
        <div class="close-handle visible-xs-block menu-toggler" v-on:click="navbarCollapsed">
            <div class="arrow-left"></div>
            <div class="arrow-right"></div>
        </div>
        <!-- end: MENU TOGGLER FOR MOBILE DEVICES -->
    </div>
    <button v-on:click="toggleChatBox" class="sidebar-mobile-toggler dropdown-off-sidebar btn hidden-md hidden-lg">
        <i class="fa" v-bind:class="isChatBoxOn ? 'fa-angle-double-right' : 'fa-angle-double-left'"></i>
    </button>

    <button v-on:click="toggleChatBox" class="dropdown-off-sidebar btn hidden-sm hidden-xs">
        <i class="fa" v-bind:class="isChatBoxOn ? 'fa-angle-double-right' : 'fa-angle-double-left'"></i>
    </button>
    <!-- end: NAVBAR COLLAPSE -->
</header>
<!-- end: TOP NAVBAR -->
</template>

<script>
  import * as utils from '../utils'
  import fullscreen from '../components/Fullscreen.vue'
  import msgBox from '../layout/MsgBox.vue'
  import Dropdown from '../components/Dropdown.vue'
  export default {
    data: function () {
      return {
        sidebarOn: false,
        isNavbarCollapsed: false,
        isChatBoxOn: false
      }
    },
    methods: {
      navbarCollapsed: function () {
        var el = document.getElementById('navbar-collapse')
        if (!utils.hasClass(el, 'in')) {
          utils.addClass(el, 'in')
        } else {
          utils.removeClass(el, 'in')
        }
      },
      toggleMsg: function () {
        var el = document.getElementById('box')
        if (utils.hasClass(el, 'app-offsidebar-open')) {
          utils.removeClass(el, 'app-offsidebar-open')
          this.isChatBoxOn = !this.isChatBoxOn
        }
      },
      toggleChatBox: function () {
        var el = document.getElementById('box')
        this.isChatBoxOn = !this.isChatBoxOn
        if (this.isChatBoxOn) {
          utils.addClass(el, 'app-offsidebar-open')
        } else {
          utils.removeClass(el, 'app-offsidebar-open')
        }
      },
      toggleSidebar: function () {
        var el = document.getElementById('box')
        this.sidebarOn = !this.sidebarOn
        if (this.sidebarOn) {
          utils.addClass(el, 'app-slide-off')
        } else {
          utils.removeClass(el, 'app-slide-off')
        }
      }
    },
    components: {
      fullscreen, msgBox, Dropdown
    }
  }
</script>
