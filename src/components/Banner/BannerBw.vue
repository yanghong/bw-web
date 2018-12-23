<template>
  <div class="container">
    <div class="menu">
      <div class="logo">
        <img src="../../assets/images/banner/logo.jpg" alt="logo">
      </div>
      <div class="banner-home"><img class="banner-home-img" src="../../assets/images/banner/msite-home.png" alt="msite-home"><a href="">主站</a></div>
      <div class="banner-show"><img src="../../assets/images/banner/msite-show.png" alt="show"><a href="">展柜</a></div>
      <div class="banner-exchange"><img src="../../assets/images/banner/msite-exchange.png" alt="exchange"><a href="">兑换</a></div>
      <div class="banner-search">
        <a-input-search class="search" placeholder="input search text" style="width: 200px" @search="onSearch"/>
      </div>
      <div class="login-avatar">
        <a-popover title="Title">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <!--<a-icon type="user" />-->
          <div v-if="userStatus === 0" @click="showModal">
            <img class="login-class" src="../../assets/images/banner/login-icon.jpg" alt="login-icon">
          </div>
          <div v-if="userStatus === 1">
            <img class="login-class" src="../../assets/images/banner/point.jpg" alt="point">
          </div>
          <div v-if="userStatus === 2">
            <img class="login-class" src="../../assets/images/banner/default-avtar.jpg" alt="default">
          </div>
          <div v-if="userStatus === 3">
            <img class="login-class" src="../../assets/images/banner/logined.jpg" alt="login">
          </div>
        </a-popover>
      </div>

      <div class="foot-trace">
        <a href="">足迹</a>
      </div>
      <div class="banner-contribute" >
        <!--<div>-->
        <img src="../../assets/images/banner/up.jpg" alt="contribute">
        <!--</div>-->
        <!--<a-icon type="arrow-up" class="up" style="color: #fff"/>-->
        <!--<img src="../../assets/images/banner/up.jpg" alt="up">做成背景-->
        <!--<a href="" style="color: #fff; font-weight: 200;width: 50px;height: 50px; text-align: center; margin-top: 5px" class="contribute">投稿</a>-->
      </div>
    </div>
    <!--phone get vcode login-->
    <div>
      <a-modal :visible="accountPhoneLoginVisible" @cancel="handleCancel" :footer="null">
        <div class="modal-container">
          <div class="static-header">
            <img src="../../assets/images/banner/modal-logo.png" alt="modal-logo">
            <span>帐号登录</span>
          </div>
          <div class="input-number">
            <input v-model="phoneNumber" placeholder="请输入11位手机号"></input>
          </div>
          <div class="input-vcode">
            <div class="get-vcode">
              <input v-model="vcode" placeholder="输入了6位手机号验证码"></input>
              <a href="">获取短信验证码</a>
            </div>
            <a href="">帐号密码登录</a>
          </div>
          <div class="modal-login-button">
            <a-button @click="login" block style="background-color: coral; color: white;font-weight: bold">登录</a-button>
          </div>
          <div class="modal-register">
            <span>没有帐号?</span><a @click="gotoRegister">注册</a>
          </div>
        </div>
      </a-modal>
    </div>
    <!--just account and pwd login-->
    <div>
      <a-modal :visible="accountLoginVisible" @cancel="handleCancel" :footer="null">
        <div class="modal-container">
          <div class="static-header">
            <img src="../../assets/images/banner/modal-logo.png" alt="modal-logo">
            <span>帐号登录</span>
          </div>
          <div class="input-number">
            <input v-model="phoneNumberOrMail" placeholder="手机号或邮箱"></input>
          </div>
          <div class="input-vcode">
            <div class="get-vcode">
              <input v-model="password" placeholder="密码"></input>
            </div>
            <div class="change-login-model">
              <a class="goto-phone-login" @click="gotoPhoneLogin">手机验证码登录</a>
              <a class="forget-pwd" @click="gotoResetPwd">忘记密码？</a>
            </div>
          </div>
          <div class="modal-login-button">
            <a-button @click="login" block style="background-color: coral; color: white;font-weight: bold">登录</a-button>
          </div>
          <div class="modal-register">
            <span>没有帐号?</span><a @click="gotoRegister">注册</a>
          </div>
        </div>
      </a-modal>
    </div>
    <!--reset pwd-->
    <div>
      <a-modal :visible="accountResetPwd" @cancel="handleCancel" :footer="null">
        <div class="modal-container">
          <div class="static-header">
            <img src="../../assets/images/banner/modal-logo.png" alt="modal-logo">
            <span>密码重置</span>
          </div>
          <div class="input-number">
            <input v-model="phoneNumber" placeholder="请输入11位手机号"></input>
          </div>
          <div class="reset-pwd-input-vcode">
            <div class="reset-pwd-get-vcode">
              <input v-model="vcode" placeholder="输入了6位手机号验证码"></input>
              <a href="">获取短信验证码</a>
            </div>
          </div>
          <div class="set-password">
            <input v-model="setPassword" placeholder="设置密码"></input>
          </div>
          <div class="confirm-password">
            <input v-model="confirmPassword" placeholder="请确认密码"></input>
          </div>
          <div class="modal-login-button">
            <a-button @click="confirmResetPwd" block style="background-color: coral; color: white;font-weight: bold">确认</a-button>
          </div>
          <div class="modal-register">
            <span>返回?</span><a @click="gotoLogin">登录</a>
          </div>
        </div>
      </a-modal>
    </div>
    <!--reset pwd success-->
    <div>
      <a-modal :visible="accountResetPwdSuccess" @cancel="handleCancel" :footer="null">
        <div class="modal-container">
          <div class="static-header">
            <img src="../../assets/images/banner/modal-logo.png" alt="modal-logo">
            <span>帐号登录</span>
          </div>
          <div class="input-number">
            <input v-model="phoneNumber" placeholder="请输入11位手机号"></input>
          </div>
          <div class="input-vcode">
            <div class="get-vcode">
              <input v-model="vcode" placeholder="输入了6位手机号验证码"></input>
              <a href="">获取短信验证码</a>
            </div>
            <a @click="gotoLogin">帐号密码登录</a>
          </div>
          <div class="modal-login-button">
            <a-button @click="login" block style="background-color: coral; color: white;font-weight: bold">登录</a-button>
          </div>
          <div class="modal-register">
            <span>没有帐号?</span><a href="">注册</a>
          </div>
        </div>
      </a-modal>
    </div>
    <!--register-->
    <div>
      <a-modal :visible="accountRegister" @cancel="handleCancel" :footer="null">
        <div class="modal-container">
          <div class="static-header">
            <img src="../../assets/images/banner/modal-logo.png" alt="modal-logo">
            <span>帐号注册</span>
          </div>
          <div class="input-number">
            <input v-model="phoneNumber" placeholder="请输入11位手机号"></input>
          </div>
          <div class="input-vcode">
            <div class="get-vcode">
              <input v-model="vcode" placeholder="输入了6位手机号验证码"></input>
              <a href="">获取短信验证码</a>
            </div>
          </div>
          <div class="set-password">
            <input v-model="setPassword" placeholder="设置密码"></input>
          </div>
          <div class="confirm-password">
            <input v-model="confirmPassword" placeholder="请确认密码"></input>
          </div>
          <div class="modal-login-button">
            <a-button @click="login" block style="background-color: coral; color: white;font-weight: bold">登录</a-button>
          </div>
          <div class="modal-register">
            <span>没有帐号?</span><a @click="gotoLogin">登录</a>
          </div>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script>
import BannerItem from './BannerItem.vue'
export default {
  name: 'Banner',
  data () {
    return {
      userStatus: 0,
      accountPhoneLoginVisible: false,
      accountLoginVisible: false,
      accountResetPwdSuccess: false,
      accountResetPwd: false,
      accountRegister: false,
      ModalText: 'Content of the modal',
      confirmLoading: false,
      phoneNumber: undefined,
      vcode:undefined,
      phoneNumberOrMail: undefined,
      password: undefined,
      setPassword: undefined,
      confirmPassword: undefined
    }
  },
  components: {
    BannerItem
  },
  methods: {
    onSearch (value) {
      console.log(value)
    },
    showModal () {
      this.accountLoginVisible = true
    },
    gotoPhoneLogin () {
      this.accountLoginVisible = false;
      this.accountPhoneLoginVisible = true;
    },
    gotoLogin () {
      this.accountRegister = false;
      this.accountResetPwd = false;
      this.accountLoginVisible = true;
    },
    gotoResetPwd () {
      this.accountLoginVisible = false;
      this.accountResetPwd = true;
    },
    gotoRegister () {
      this.accountLoginVisible = false;
      this.accountRegister = true;
    },
    login () {
      this.accountLoginVisible = false
    },
    confirmResetPwd () {
      const self = this;
      console.log(self.setPassword);
      console.log(self.confirmPassword);
    },
    handleCancel () {
      this.accountLoginVisible = false;
      this.accountPhoneLoginVisible = false;
      this.accountResetPwd = false;
      this.accountResetPwdSuccess = false;
      this.accountRegister = false;
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    width 100%
    margin 0 auto
    box-shadow 0px 2px 3px 0px rgba(0, 0, 0, 0.2)
  .menu
    width 70%
    margin 0 auto
    position relative
    display flex
    display -webkit-flex
    -webkit-flex-direction row
    flex-direction row
  .logo
    width 104px
    height 62px
  .banner-home
    width 60px
    height 21px
    margin 15px 10px 15px 10px
    &:hover
      background-image url("../../assets/images/banner/msite-home-selected.png")
      background-repeat no-repeat
  .banner-home a
    height 21px
    font-family MicrosoftYaHei
    font-size 16.7px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #1c213b
  .banner-show
    width 60px
    height 21px
    margin 15px 10px 15px 10px
  .banner-show a
    height 21px
    font-family MicrosoftYaHei
    font-size 16.7px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #1c213b
  .banner-exchange
    width 60px
    height 21px
    margin 15px 10px 15px 10px
  .banner-exchange a
    height 21px
    font-family MicrosoftYaHei
    font-size 16.7px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #1c213b
  .banner-search
    height 21px
    position absolute
    right 240px
    margin-top 15px
  .login-avatar
    height 21px
    margin-top 12px
    position absolute
    right 170px
  .foot-trace
    height 21px
    margin-top 20px
    position absolute
    right 120px
  .banner-contribute
    position absolute
    right 15px
  .modal-container .input-number input
    width 460px
    margin 60px 0px 10px 0px
    -web-kit-appearance none
    -moz-appearance none
    border none
    border-bottom-style solid
    border-bottom-width thin
    border-bottom-color black
  .modal-container .input-vcode
    width 460px
    margin 10px 0px 60px 0px
    -web-kit-appearance none
    -moz-appearance none
    border none
  .static-header span
    color coral
    font SimHei
    font-size large
  .modal-login-button
    margin 20px 0px 20px 0px
  .modal-login-button a-button
    width 460px
    color coral
  .modal-register
    text-align center
  .get-vcode
    width 100%
    position relative
    -web-kit-appearance none
    -moz-appearance none
    border none
    border-bottom-style solid
    border-bottom-width thin
    border-bottom-color black
  .get-vcode a
    position absolute
    right 0px
  .get-vcode input
    -webkit-appearance none
    -moz-appearance none
    border none
  .change-login-model
    position relative
  .change-login-model .forget-pwd
    position absolute
    right 0px
  .modal-container .set-password input
    width 460px
    margin 10px 0px 10px 0px
    -web-kit-appearance none
    -moz-appearance none
    border none
    border-bottom-style solid
    border-bottom-width thin
    border-bottom-color black
  .modal-container .confirm-password input
    width 460px
    margin 10px 0px 10px 0px
    -web-kit-appearance none
    -moz-appearance none
    border none
    border-bottom-style solid
    border-bottom-width thin
    border-bottom-color black
  .reset-pwd-get-vcode
    width 100%
    position relative
    margin 10px 0px 10px 0px
    -web-kit-appearance none
    -moz-appearance none
    border none
    border-bottom-style solid
    border-bottom-width thin
    border-bottom-color black
  .reset-pwd-get-vcode a
    position absolute
    right 0px
  .reset-pwd-get-vcode input
    -webkit-appearance none
    -moz-appearance none
    border none
</style>
