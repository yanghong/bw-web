<template>
  <div class="container">
    <div class="menu">
      <div class="logo">
        <img src="../../assets/images/banner/logo.jpg" alt="logo">
      </div>
      <div class="banner-home">
        <img class="banner-home-img" src="../../assets/images/banner/msite-home.png" alt="msite-home">
        <router-link :to="{ name: 'msite'}">主站</router-link>
      </div>
      <div class="banner-show">
        <img src="../../assets/images/banner/msite-show.png" alt="show">
        <router-link :to="{ name: 'show'}">展柜</router-link>
      </div>
      <div class="banner-exchange">
        <img src="../../assets/images/banner/msite-exchange.png" alt="exchange">
        <router-link :to="{ name: 'exchange'}">兑换</router-link>
      </div>
      <div class="banner-search">
        <a-input-search class="search" style="width: 200px" @search="onSearch"/>
      </div>
      <div class="login-avatar">
        <a-popover>
          <template slot="content">
            <div class="popover-container">
              <div class="popover-name-lv">
                <div class="popover-name">
                  <span>钓鱼的彩虹糖</span>
                </div>
                <div class="popover-lv">
                  <span>lv3</span>
                </div>
              </div>
              <div class="popover-tag">
                <img src="../../assets/images/banner/popover-tag-img.png" alt="tag-img">
              </div>
              <div class="popover-changing">
                <div class="popover-battery-number">
                  <img src="../../assets/images/banner/popover-battery-number.png" alt="battery-number">
                  <span>199</span>
                </div>
                <div class="popover-changed-number">
                  <img src="../../assets/images/banner/popover-changed-number.png" alt="changed-number">
                  <span>287</span>
                </div>
              </div>
              <div class="popover-web-info">
                <div class="popover-my-message">
                  <img src="../../assets/images/banner/popover-my-message.png" alt="my-message">
                  <a href="">我的消息</a>
                </div>
                <div class="popover-my-collection">
                  <img src="../../assets/images/banner/popover-collect.png" alt="collect">
                  <a href="">我的收藏</a>
                </div>
                <div class="popover-concerns">
                  <img src="../../assets/images/banner/popover-concern.png" alt="concern">
                  <a href="">关注动态</a>
                </div>
                <div class="popover-tag-manage">
                  <img src="../../assets/images/banner/popover-tag.png" alt="tag">
                  <a href="">厂牌管理</a>
                </div>
                <div class="popover-vote-manage">
                  <img src="../../assets/images/banner/popover-vote-manage.png" alt="vote-manage">
                  <a href="">投稿管理</a>
                </div>
              </div>
              <div class="popover-footer">
                <div class="popover-footer-phone">
                  <img src="../../assets/images/banner/popover-phone.png" alt="phone">
                  <img src="../../assets/images/banner/popover-mail.png" alt="mail">
                  <img src="../../assets/images/banner/popover-mail-message.png" alt="mail-message">
                </div>
                <div class="popover-footer-logout">
                  <a href="">退出登录</a>
                </div>
              </div>
            </div>
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
        <router-link :to="{ name:'profile'}"><a style="color:black">足迹</a></router-link>
      </div>
      <div class="banner-contribute">
        <!--<div>-->
        <div v-if="type === 'exchange'">
          <router-link to="/show-publish"><img src="../../assets/images/banner/release.png" alt="release"></router-link>
        </div>
        <div v-else>
          <router-link to="/submit-video"><img src="../../assets/images/banner/up.jpg" alt="contribute"></router-link>
        </div>
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
            <input v-model="phoneLoginParams.mobile" placeholder="请输入11位手机号"/>
          </div>
          <div class="input-vcode">
            <div class="get-vcode">
              <input v-model="phoneLoginParams.vcode" placeholder="输入了6位手机号验证码"/>
              <a @click="getVCode">获取短信验证码</a>
            </div>
            <a @click="gotoLogin">帐号密码登录</a>
          </div>
          <div class="modal-login-button">
            <a-button @click="userLogin" block style="background-color: coral; color: white;font-weight: bold">登录</a-button>
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
            <input v-model="loginParams.mobile" placeholder="手机号或邮箱"/>
          </div>
          <div class="input-vcode">
            <div class="get-vcode">
              <input v-model="loginParams.password" placeholder="密码"/>
            </div>
            <div class="change-login-model">
              <a class="goto-phone-login" @click="gotoPhoneLogin">手机验证码登录</a>
              <a class="forget-pwd" @click="gotoResetPwd">忘记密码？</a>
            </div>
          </div>
          <div class="modal-login-button">
            <a-button @click="userLogin" block style="background-color: coral; color: white;font-weight: bold">登录</a-button>
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
            <input v-model="resetPwdParams.mobile" placeholder="请输入11位手机号"/>
          </div>
          <div class="reset-pwd-input-vcode">
            <div class="reset-pwd-get-vcode">
              <input v-model="resetPwdParams.vcode" placeholder="输入了6位手机号验证码"/>
              <a @click="getVCode">获取短信验证码</a>
            </div>
          </div>
          <div class="set-password">
            <input v-model="setPassword" placeholder="设置密码"/>
          </div>
          <div class="confirm-password">
            <input v-model="confirmPassword" placeholder="请确认密码"/>
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
            <input v-model="phoneNumber" placeholder="请输入11位手机号"/>
          </div>
          <div class="input-vcode">
            <div class="get-vcode">
              <input v-model="vcode" placeholder="输入了6位手机号验证码"/>
              <a @click="getVCode">获取短信验证码</a>
            </div>
            <a @click="gotoLogin">帐号密码登录</a>
          </div>
          <div class="modal-login-button">
            <a-button @click="userLogin" block style="background-color: coral; color: white;font-weight: bold">登录</a-button>
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
            <input v-model="registerParams.mobile" placeholder="请输入11位手机号"/>
          </div>
          <div class="input-vcode">
            <div class="get-vcode">
              <input v-model="registerParams.vcode" placeholder="输入了6位手机号验证码"/>
              <a @click="getVCode">获取短信验证码</a>
            </div>
          </div>
          <div class="set-password">
            <input v-model="setPassword" placeholder="设置密码"/>
          </div>
          <div class="confirm-password">
            <input v-model="confirmPassword" placeholder="请确认密码"/>
          </div>
          <div class="modal-login-button">
            <a-button @click="userRegister" block style="background-color: coral; color: white;font-weight: bold">注册</a-button>
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
  import { login,register,changePwd,getUserInfo } from "../../api/user";
  import { getVcode } from "../../api/common";
  import { getVideoListByCategoryOrSearch } from '../../api/video'
  import Cookies from 'js-cookie';
  export default {
  name: 'BannerBw',
  props: {
    type: String
  },
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
      userId: undefined,
      user: undefined,
      vcode:undefined,
      loginParams: {
        mobile: undefined,
        email: undefined,
        password: undefined,
      },
      phoneLoginParams: {
        mobile: undefined,
        vcode: undefined,
      },
      resetPwdParams: {
        mobile: undefined,
        vcode: undefined,
        password: undefined
      },
      registerParams: {
        mobile: undefined,
        vcode: undefined,
        password: undefined
      },
      setPassword: undefined,
      confirmPassword: undefined
    }
  },
  methods: {
    onSearch (value) {
      const self = this;
      self.$router.push({ name: 'searchResult', params: { value: value }});
    },
    showModal () {
      this.accountLoginVisible = true
    },
    gotoPhoneLogin () {
      this.accountLoginVisible = false;
      this.accountPhoneLoginVisible = true;
    },
    gotoLogin () {
      this.accountPhoneLoginVisible = false;
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
    userLogin () {
      const self = this;
      self.loginParams.email = '';
      login(self.loginParams)
        .then(resp => {
          if (resp && resp.success) {
            self.$message.success('登录成功');
            Cookies.set('id',resp.data.user.id, { expires: 7});
            Cookies.set('BW_Token',resp.data.BW_Token, { expires: 7});
            Cookies.set('BW_U',resp.data.BW_U, { expires: 7});
          } else {
            Cookies.set(id,'worry', { expires: 7});
            self.$message.error(resp.msg);
          }
        });
      this.resetPhoneLoginParams();
      this.accountLoginVisible = false;
      this.accountPhoneLoginVisible = false;
    },
    judgeUserStatus() {
      const self = this;
      self.userId = Cookies.get('id');
      let getUserParam = {
        id: self.userId
      };
      if (self.userId) {
        getUserInfo(getUserParam)
          .then(resp => {
            if (resp && resp.success) {
              console.log(resp.data);
              self.user = resp.data;
            } else {
              self.$message.error("获取用户信息失败！", resp.msg);
            }
          });
      }
    },
    userRegister () {
      const self = this;
      if (self.setPassword !== self.confirmPassword) {
        this.$message.error("两次密码输入不一致，请重新输入！");
        self.setPassword = undefined;
        self.confirmPassword = undefined;
      } else {
        self.registerParams.password = self.setPassword;
        register(self.registerParams)
          .then(resp => {
            if (resp && resp.success) {
              self.$message.success("注册成功！");
              self.accountRegister = false;
            } else {
              self.$message.error("注册失败！", resp.msg);
              self.accountRegister = false;
            }
          });
      }
    },
    getVCode() {
      const self = this;
      console.log(self.phoneLoginParams);
      let getVcodeParams = {
        mobile: undefined
      };
      if (typeof(self.phoneLoginParams.mobile) !== 'undefined') {
        getVcodeParams.mobile = self.phoneLoginParams.mobile;
      }
      if (typeof(self.registerParams.mobile) !== 'undefined') {
        getVcodeParams.mobile = self.registerParams.mobile;
      }
      if (typeof(getVcodeParams.mobile) === 'undefined') {
        self.$message.error("手机号不能为空");
        this.accountPhoneLoginVisible = false;
        this.resetPhoneLoginParams();
        return
      }
      if (getVcodeParams.mobile.length !== 11) {
        self.$message.error("手机号错误");
        this.accountPhoneLoginVisible = false;
        this.resetPhoneLoginParams();
        return
      }
      getVcode(getVcodeParams)
        .then(resp => {
          if (resp && resp.success) {
            console.log(resp);
            self.$message.success("获取验证码成功！为0000");
          } else {
            self.$message.error("获取验证码失败！");
          }
        });
    },
    resetPhoneLoginParams () {
      this.phoneLoginParams.mobile = undefined;
      this.phoneLoginParams.vcode = undefined;
    },
    confirmResetPwd () {
      const self = this;
      if (self.setPassword !== self.confirmPassword) {
        this.$message.error("两次密码输入不一致，请重新输入！");
        self.setPassword = undefined;
        self.confirmPassword = undefined;
      } else {
        self.resetPwdParams.password = self.setPassword;
        changePwd(self.resetPwdParams)
          .then(resp => {
            if (resp && resp.success) {
              self.$message.success("修改密码成功！");
              self.accountResetPwd = false;
            } else {
              self.$message.error("修改密码失败！", resp.msg);
              self.accountResetPwd = false;
            }
          });
      }
    },
    handleCancel () {
      this.accountLoginVisible = false;
      this.accountPhoneLoginVisible = false;
      this.accountResetPwd = false;
      this.accountResetPwdSuccess = false;
      this.accountRegister = false;
    },
  },
  created() {
    this.judgeUserStatus();
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
  .banner-home img
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
  .popover-container
    width 200px
    height 250px
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
  .popover-name-lv
    width 100%
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction row
    justify-content center
  .popover-tag
    width 50px
    margin 0 auto
  .popover-changing
    width 100%
    margin 5px 10px
    display flex
    display -webkit-flex
    flex-direction row
    justify-content center
  .popover-web-info
    width 100%
    margin-top 10px
    margin-bottom 20px
    position relative
  .popover-web-info .popover-my-message
    position absolute
    top 0px
    left 5px
  .popover-web-info .popover-my-message a
    color gray
  .popover-web-info .popover-my-collection
    position absolute
    top 0px
    right 5px
  .popover-web-info .popover-my-collection a
    color gray
  .popover-web-info .popover-concerns
    position absolute
    top 25px
    left 5px
  .popover-web-info .popover-concerns a
    color gray
  .popover-web-info .popover-tag-manage
    position absolute
    top 25px
    right 5px
  .popover-web-info .popover-tag-manage a
    color gray
  .popover-web-info .popover-vote-manage
    position absolute
    top 50px
    left 5px
  .popover-web-info .popover-vote-manage a
    color gray
  .popover-footer
    width 100%
    margin-top 100px
    display flex
    display -webkit-flex
    flex-direction row
</style>
