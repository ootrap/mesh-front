<template>
      <div class="container">
    <div class="row">
      <div class="col-md-8 col-sm-8 col-xs-12 col-lg-6 col-md-offset-2 col-lg-offset-3 col-sm-offset-2 header padding-top-20 center  login">
        <img src="http://7lrzqf.com1.z0.glb.clouddn.com/images/ucenter-logo.png">
        <h5>微脉事 WeMesh&trade;</h5>
        <!-- 绑定公众号 -->
         <div v-if="!isBind" class="col-md-12  margin-bottom-40">
          <div class="panel">
          <div class="panel-heading">
            <h3><img src="http://7xsyke.com2.z0.glb.clouddn.com/images/icon32_appwx_logo.png" alt="wechat_logo"> 绑定您的公众号</h3>
          </div>
            <div class="panel-body" style="text-align:left">
                  <ul>
                    <li><strong>微脉事WeMesh&trade;</strong>专为微信公众平台而生，功能更加丰富，工作更加高效</li>
                    <li>授权登录<strong>不会对您的公众号造成任何影响</strong></li>
                    <li>您需要作为公众号的管理员完成下面的操作，请<strong>点击下面的绿色按钮</strong></li>
                  </ul>
            </div>
          </div>
          <a v-bind:href="wxmpList.url"> <img src="http://static.stario.net/images/icon_button3_1.png"></a>
        </div>
                <!-- 已绑定公众号列表 -->
         <div v-else  class="col-md-12  margin-bottom-40">
          <div class="panel">
          <div class="panel-heading">
            <h3><img width="32" src="http://7xsyke.com2.z0.glb.clouddn.com/images/icon64_wx_logo.png" alt=""> 您已绑定的公众号</h3>
          </div>
            <div class="panel-body" style="text-align:left">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                                <th></th>
                                <th>公众号名称</th>
                                <th>授权状态</th>
                                <th>管理操作</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="mp in wxmpList.mplist">
                    <td><img :src="mp.avatar_url" width="32px"></td>
                    <td>{{mp.nickname}}</td>
                    <td v-if="mp.authorized==1"><a href="#" class="btn btn-success btn-xs disabled">已授权</a></td>
                    <td v-else><a href="#" class="btn btn-blue btn-xs">点击授权</a></td>
                    <td>
                    <a href="#" @click.stop.prevent="goHome(mp.id)"  class="btn btn-azure btn-xs">管理</a>
                    <a href="#" @click.stop.prevent="deleteWxmp(mp.id)"  class="btn btn-danger btn-xs">删除</a>
                    </td>
                  </tr>
                </tbody>  
              </table>
            </div>
          </div>
          <a v-bind:href="wxmpList.url" class="btn btn-success btn-lg"><i class="fa fa-wechat"></i> 绑定新的公众号</a>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import overlay from '../components/Overlay.vue'
import store from '../vuex/store'
import {getWxmpList, getUserInfo, deleteWxmp} from '../vuex/actions'
export default {
  store: store,
  vuex: {
    getters: {
      wxmpList: ({wxmpList}) => wxmpList.items,
      userInfo: ({userInfo}) => userInfo.items
    },
    actions: {
      getWxmpList, getUserInfo, deleteWxmp
    }
  },
  created () {
    this.getWxmpList()
  },
  components: {
    overlay
  },
  computed: {
    isBind () {
      if (undefined !== this.wxmpList.mplist && this.wxmpList.mplist.length) {
        return this.wxmpList.mplist.length > 0
      }
      return false
    }
  },
  methods: {
    goHome (id) {
      this.getUserInfo(id)
    },
    deleteWxmp (id) {
      this.deleteWxmp(id)
      this.getWxmpList()
    }
  }
}
</script>
<style>
  tbody td {
    line-height: 32px !important;
  }
</style>