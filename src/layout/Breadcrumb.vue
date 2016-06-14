<template>
  <div class="breadcrumb-wrapper">
    <h4 class="mainTitle no-margin"><i class="fa"v-bind:class="'fa-'+currentRoute.icon"></i> {{currentRoute.name}}</h4>
    <small>{{currentRoute.description}}</small>
  </div>
</template>

<script>
    import * as utils from '../utils'
    import store from '../vuex/store'
    export default {
      computed: {
        currentRoute () {
          var result = this.$route.name
          window.console.log(result)
          var menuList = store.state.userInfo.items.menu
          if (result === 'home') {
            return {'icon': 'dashboard', 'name': '控制面板', 'description': '管理控制中心'}
          }
          return utils.selectFromJson(menuList, 'url', result)
        }
      }
    }
</script>