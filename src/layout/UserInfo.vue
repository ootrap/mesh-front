<template>
    <div class="nav-user-wrapper" >
        <div class="media">
          <div class="media-left">
            <a class="profile-card-photo" href=""><img :src="userInfo.avatar"></a>
          </div>
          <div class="media-body">
            <span class="media-heading text-white">{{userInfo.name}}</span>
            <div class="text-small text-white-transparent">
              {{userInfo.role}}
            </div>
          </div>
          <div class="media-right media-middle">
            <dropdown>
              <a href class="dropdown-toggle btn btn-transparent text-white " type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-caret-down"></i> </a>
              <ul class="dropdown-menu pull-right fadeInUp">
                <li>
                  <a v-link="{name:'profile'}">个人资料</a>
                </li>
                <li>
                  <a v-link="{name:'message'}"> 消息中心 ({{userInfo.messages.length}}) </a>
                </li>
                <li>
                  <a v-link="{path: '/s/lock'}"> 锁定屏幕 </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#" @click.stop.prevent="onLogout"> 退出账号 </a>
                </li>
              </ul>
            </dropdown>
          </div>
        </div>
      </div>
</template>

<script>
  import { getUserInfo } from '../vuex/actions'
  import Dropdown from '../components/Dropdown.vue'
  export default {
    components: {
      Dropdown
    },
    methods: {
      onLogout: function () {
        window.sessionStorage.clear()
        window.location.href = '/logout'
      }
    },
    vuex: {
      getters: {
        userInfo: ({userInfo}) => userInfo.items
      },
      actions: {
        getUserInfo
      }
    },
    created () {
      this.getUserInfo()
    }
  }
</script>