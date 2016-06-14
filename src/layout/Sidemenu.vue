<template>
  <!-- start: SIDEBAR MENU -->
  <div class="navbar-title cl-effect-1">
  <a v-link="{path: '/'}" ><i class="fa fa-dedent"></i> 切换公众号</a>
</div>
  <ul class="main-navigation-menu ">
  <li><a v-link="{path: '/home'}">
    <div class="item-content">
      <div class="item-media"><i class="fa fa-dashboard"></i></div>
      <div class="item-inner">
        <span class="title">控制面板</span>
      </div>
    </div>
  </a></li>
    <li v-for="item in menuList" v-link-active>
      <a v-link="{name: item.url}" @click="showElement($event)">
       <div class="item-content">
        <div class="item-media"><i class="fa fa-{{item.icon}}"></i></div>
        <div class="item-inner">
          <span class="title">{{item.name}}</span><i v-if="item.submenu" class="fa fa-angle-down icon-arrow"></i>
        </div>
      </div>
    </a>
    <ul v-if="item.submenu" class="sub-menu fadeInRight">
      <li class="cl-effect-1" v-for="sub in item.submenu" v-link-active><a v-link="{path: '/home/' + item.url + '/' + sub.url}">{{sub.name}}</a></li>
    </ul>
  </li>  
</ul>
<!-- end: SIDEBAR MENU -->
</template>

<script>
  import * as utils from '../utils'
  import store from '../vuex/store'
  export default {
    computed: {
      menuList () {
        return store.state.userInfo.items.menu
      }
    },
    methods: {
      /**
       * 二级子菜单点击后出现
       * @判断是否有二级菜单是依据约定
       * nextSibling是否为ul
       */
      showElement: function (event) {
        var el = event.currentTarget.nextSibling.nextSibling
        if (el.tagName === 'UL') {
          event.preventDefault()
          utils.toggleClass('.sub-menu', el, 'show')
        }
      }
    }
  }
</script>
<style>
    .main-navigation-menu > .v-link-active {
    border-left: 4px solid #F18636 !important;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
    background: #263244;
    box-shadow: none;
  }
  .sub-menu .v-link-active {
    background-color: #303c4e;
  }
  .cl-effect-1 a {
    padding: 10px;
    display: block;
    background: #58748B;
    font-size: 1.1em;
    color: #ffffff;
  }
  .cl-effect-1 a:hover {
    color: #fff !important;
  }
</style>