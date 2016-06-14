<template>
<Loading text="正在同步公众号" v-show="showLoading"></Loading>
        <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-offset-3 header padding-top-20 center  login">
        <img src="http://static.stario.net/images/wemesh_logo.png">
        <h5>微脉事 WeMesh&trade;</h5>
        <!-- 绑定公众号 -->
         <div transition="fade" class="col-md-12  margin-bottom-40">
          <div class="panel">
          <div class="panel-heading">
            <h3 class="text-primary">恭喜！公众号同步完成</h3>
          </div>
          </div>   
          <a  class="btn btn-success btn-lg"><i class="fa fa-wechat"></i> 开始管理公众号</a>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import Loading from '../components/Loading.vue'
export default {
  data () {
    return {
      showLoading: true
    }
  },
  components: {
    Loading
  },
  ready () {
    window.console.log('ready to get')
  }
}
</script>
