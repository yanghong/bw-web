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
          <div v-if="userStatus === 0">
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
  </div>
</template>

<script>
import BannerItem from './BannerItem.vue'
export default {
  name: 'Banner',
  data () {
    return {
      userStatus: 0
    }
  },
  components: {
    BannerItem
  },
  methods: {
    onSearch (value) {
      console.log(value)
    }
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
</style>
