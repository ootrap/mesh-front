<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12 col-lg-4 col-md-offset-3 col-lg-offset-4 col-sm-offset-3 header padding-top-20 center  login">
        <img src="http://7lrzqf.com1.z0.glb.clouddn.com/images/ucenter-logo.png">
        <h5>微脉事 WeMesh&trade;</h5>
        <!-- TAB START -->
        <div class="login-tab row margin-top-20">
          <h3><i class="fa fa-life-ring"></i> 找回密码</h3>
        </div>
        <!-- FORM START -->
        <form class="form-horizontal">
         <div class="form-group">
          <label class="col-sm-3 control-label">
          手机号码
          </label>
          <div class="col-sm-9">
            <input type="text"  placeholder=" 输入手机号" name="newMobile" v-model="credentials.mobile" required class="form-control">
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label">
          短信验证
          </label>
          <div class="col-sm-4">
            <input type="text"  placeholder=" 输入验证码" name="authCode" v-model="credentials.authCode" required class="form-control">
          </div>
          <div class="col-sm-5">
            <count-down @click.prevent="validateMobile" :disabled="notMobile"></count-down>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label">
          输入密码
          </label>
          <div class="col-sm-9">
             <input type="text"  class="form-control" placeholder=" 输入您的密码" name="password" v-model="credentials.password" required>
          </div>
        </div>

                <div class="form-group">
          <label class="col-sm-3 control-label">
          密码确认
          </label>
          <div class="col-sm-9">
             <input type="text"  class="form-control" placeholder=" 再次输入您的密码" v-model="credentials.rePassword"  required>
          </div>
        </div>
        <button class="btn btn-light-blue btn-lg btn-block margin-bottom-10" @click.stop.prevent="signIn"><i class="fa fa-sign-in"></i> 确定</button>
         <alert
          :show.sync="showErr"
          :duration="3000"
          type="danger"
          dismissable>
          <p><i class="fa fa-warning"></i> {{error}}</p>
        </alert>
          <alert
          :show.sync="showInfo"
          :duration="3000"
          type="info"
          dismissable>
          <p><i class="fa fa-warning"></i> {{info}}</p>
        </alert>
     </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { alert } from 'vue-strap'
import * as utils from '../utils'
import * as validate from '../validator'
import countDown from '../components/CountDownBtn'
export default {
  replace: true,
  data () {
    return {
      credentials: {
        mobile: '',
        password: '',
        rePassword: '',
        authCode: ''
      },
      showErr: false,
      showInfo: false,
      error: '',
      info: ''
    }
  },
  components: {
    alert,
    countDown
  },
  methods: {
    signIn () {
      var data = {
        mobile: this.credentials.mobile,
        password: this.credentials.password,
        password_confirmation: this.credentials.rePassword,
        authCode: this.credentials.authCode
      }
/**
 * 发送数据，以findpass作为参数￥
 */
      this.$http.post('auth/register?findpass', data).then(function (response) {
        this.showInfo = true
        this.info = response.data.result
        this.$route.router.go('/login')
      }, function (response) {
        this.$set('error', utils.findAll(response.data))
        this.$set('showErr', true)
      })
    },
    validateMobile () {
      var data = {
        mobile: this.credentials.mobile
      }
      this.$http.post('auth/sendSms', data).then(function (response) {
        this.showInfo = true
        this.info = response.data.result
      }, function (response) {
        this.$set('error', utils.findAll(response.data))
        this.$set('showErr', true)
      })
    }
  },
  computed: {
    notMobile: function () {
      return !validate.isMobile(this.credentials.mobile)
    }
  }
}
</script>

<style lang="scss">
  @import "~src/sass/variables";
  .login{
    background-color: #fff;
  }

  .header{
    border-radius: 3px 3px 0 0;
    min-height: 124px;
  }


</style>
