<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12 col-lg-4 col-md-offset-3 col-lg-offset-4 col-sm-offset-3 header padding-top-20 center  login">
        <img src="http://7lrzqf.com1.z0.glb.clouddn.com/images/ucenter-logo.png">
        <h5>微脉事 WeMesh&trade;</h5>
        <!-- TAB START -->
        <div class="login-tab row margin-top-20">
          <div class="col-sm-12">
            <div class="col-sm-6 tab" :class="{active: loginTab}" id="signIn" @click="loginTab=true">用户登陆</div>
            <div class="col-sm-6 tab" :class="{active: !loginTab}" id="signUp" @click="loginTab=false">注册新用户</div>         
          </div>
        </div>
        <!-- FORM START -->
        <div class="form">
          <form  v-show="loginTab" action="/" method="post" @submit.prevent="onSubmit">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-mobile" style="font-size: 20px;width:14px"></i></div>
                <input type="text" class="form-control" required placeholder=" 输入手机号" name="mobile" v-model="credentials.mobile" >
              </div>
            </div>
            <div class="form-group">
             <div class="input-group">
               <div class="input-group-addon"><i class="fa fa-key"></i></div>
               <input type="password" class="form-control" required placeholder=" 输入您的密码" name="password" v-model="credentials.password">
             </div>
           </div>
           <div class="row">
           <div class="checkbox clip-check check-primary col-sm-6">
            <input type="checkbox"  id="rememberMe" v-model="rememberMe">
            <label for="rememberMe" class="pull-left margin-left-15">
              两周内免登陆 <i class="fa" v-bind:class="{'fa-lock': !rememberMe, 'fa-unlock': rememberMe}"></i>
            </label>
          </div>
          <div class="col-sm-6">
            <a  v-link="'forget'" class="pull-right" style="height: 43px;line-height: 43px;">找回密码</a>
          </div>
          </div>
          <button  class="btn btn-light-blue btn-lg btn-block margin-bottom-10"><i class="fa fa-sign-in"></i> 点击登陆</button>
        </form>
        <!-- 注册用户 -->
        <form  v-show="!loginTab" class="form-horizontal">
         <div class="form-group">
          <label class="col-sm-3 control-label">
          手机号码
          </label>
          <div class="col-sm-9">
            <input type="text"  placeholder=" 输入手机号" name="newMobile" v-model="credentials.newMobile" required class="form-control">
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
             <input type="password"  class="form-control" placeholder=" 输入您的密码" name="password" v-model="credentials.newPassword" required>
          </div>
        </div>

                <div class="form-group">
          <label class="col-sm-3 control-label">
          密码确认
          </label>
          <div class="col-sm-9">
             <input type="password"  class="form-control" placeholder=" 再次输入您的密码" v-model="credentials.rePassword"  required>
          </div>
        </div>
        <button class="btn btn-light-blue btn-lg btn-block margin-bottom-10" @click.stop.prevent="signup"><i class="fa fa-sign-in"></i> 注册</button>
     </form>
      </div>
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
    </div>
  </div>
</div>
</template>

<script>
import { alert } from 'vue-strap'
import {login} from '../vuex/actions'
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
        newMobile: '',
        newPassword: '',
        rePassword: '',
        authCode: ''
      },
      rememberMe: false,
      showErr: false,
      showInfo: false,
      error: '',
      info: '',
      loginTab: true
    }
  },
  components: {
    alert,
    countDown
  },
  vuex: {
    actions: {
      login
    }
  },
  methods: {
    /**
     * 用户注册
     * @return {[type]} [description]
     */
    signup () {
      var data = {
        mobile: this.credentials.newMobile,
        password: this.credentials.newPassword,
        password_confirmation: this.credentials.rePassword,
        authCode: this.credentials.authCode
      }

      this.$http.post('auth/register', data).then(function (response) {
        this.showInfo = true
        this.info = response.data.result
        this.loginTab = true
      }, function (response) {
        this.$set('error', utils.findAll(response.data))
        this.$set('showErr', true)
      })
    },
    validateMobile () {
      var data = {
        mobile: this.credentials.newMobile
      }
      this.$http.post('auth/sendSms', data).then(function (response) {
        this.showInfo = true
        this.info = response.data.result
      }, function (response) {
        this.$set('error', utils.findAll(response.data))
        this.$set('showErr', true)
      })
    },
    onSubmit () {
      var data = {
        mobile: this.credentials.mobile,
        password: this.credentials.password
      }
      if (!validate.isMobile(this.credentials.mobile)) {
        this.showErr = true
        this.error = '您没有输入正确的手机号码'
        return false
      }
      this.$http.post('auth/login', data).then(function (response) {
        var token = response.data.result
        window.localStorage.setItem('wemesh_token', token)
        this.login()  // 将登陆状态写入Vuex中
        this.$route.router.go('/')
      }, function (response) {
        this.$set('error', utils.findAll(response.data))
        this.$set('showErr', true)
      })
    }
  },
  computed: {
    notMobile: function () {
      return !validate.isMobile(this.credentials.newMobile)
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

  .login-tab{
    .tab{
      background-color: #ddd;
      text-align: center;
      color: $black;
      cursor: pointer;
      height:50px;
      line-height: 50px;
      font-size: 14px;
    }
    .active{
      background-color: $primary;
      color:white;
    }
    margin-bottom:20px;
  }

  footer{    
        line-height: 30px;
    img{
        width:30px;
        height:30px;
    }
  }

</style>
