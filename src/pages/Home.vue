<template>
        <div class="container-fluid container-fullw padding-bottom-10">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="panel bg-green">
                <div class="panel-heading">
                  <h4><i class="fa fa-wechat"></i> 消息统计</h4>
                  <div class="panel-body">
                    <ul v-for="list in lists" class="list-unstyled">
                    <li >{{list}}</li>
                      <li>收消息：20</li>
                      <li>发消息：1122</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="panel  bg-azure">
                <div class="panel-heading">
                  <h4><i class="fa fa-users"></i> 用户统计</h4>
                  <div class="panel-body">
                    <ul class="list-unstyled">
                      <li>共计：20</li>
                      <li>新增：1122</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="panel bg-dark-purple">
                <div class="panel-heading">
                  <h4><i class="fa fa-file-image-o"></i> 图文数据</h4>
                  <div class="panel-body">
                    <ul class="list-unstyled">
                      <li>阅读量：20</li>
                      <li>分享数：1122</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
    import loading from '../components/Loading.vue'
    export default {
      components: {loading}
    }
</script>
<style>
  .panel h4{
    color: white;
  }
</style>