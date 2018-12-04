<template>
  <!--<a-layout id="components-layout-top" class="layout">-->
    <!--<a-layout-header class="header">-->
      <a-menu class="menu" theme="white" mode="horizontal">
          <a-menu-item class="logo" key="1">
            <img src="../../assets/images/banner/logo.jpg" alt="logo">
          </a-menu-item>
          <a-menu-item class="banner-home" key="2"><a-icon class="home" type="home"/>主站</a-menu-item>
          <a-menu-item class="banner-show" key="3"><a-icon class="show" type="appstore-o" />展柜</a-menu-item>
          <a-menu-item class="banner-exchange" key="4"><a-icon class="exchange" type="gift" />兑换</a-menu-item>
        <a-menu-item  key="5">
          <a-input-search class="search" placeholder="input search text" style="width: 200px" @search="onSearch"/>
        </a-menu-item>
        <a-menu-item  key="6">
          <a-popover title="Title">
            <template slot="content">
              <p>Content</p>
              <p>Content</p>
            </template>
          <!--<a-icon type="user" />-->
          <img class="login-class" src="../../assets/images/banner/login-icon.jpg" alt="login-icon">
          <img class="login-class" src="../../assets/images/banner/point.jpg" alt="point">
          <img class="login-class" src="../../assets/images/banner/default-avtar.jpg" alt="default">
          <img class="login-class" src="../../assets/images/banner/logined.jpg" alt="login">
          </a-popover>
        </a-menu-item>

        <a-menu-item  key="7">
          <a-button>足迹</a-button>
        </a-menu-item>
        <a-menu-item class="menu-contribute"  key="8">
          <!--<div>-->
            <!--<img src="../../assets/images/contribute.jpg" alt="contribute">-->
          <!--</div>-->
          <a-layout class="layout-contribute">
            <!--<a-icon type="arrow-up" class="up" style="color: #fff"/>-->
            <!--<img src="../../assets/images/banner/up.jpg" alt="up">做成背景-->
            <span style="color: #fff; font-weight: 200">投稿</span>
          </a-layout>
        </a-menu-item>
      </a-menu>
    <!--</a-layout-header>-->
  <!--</a-layout>-->
</template>

<script>
import BannerItem from './BannerItem.vue'
export default {
  name: 'Banner',
  data () {
    return {
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
  #components-layout-top
    background-color rgba(255,255,255,0)
    position relative
    z-index 10000
    .header
      background-color rgba(255,255,255,0)
  #components-layout-top .logo
    background rgba(255,255,255,.2)
    margin 40px 5px 16px 0
    float left
  .search
    float right
  .contribute
    background-color #d54321
    border-radius 5px
  .home
    margin-top 70px
  .show
    margin-top 70px
  .exchange
    margin-top 70px
  .search
    margin-top 65px
  .layout-contribute
    folat center
    margin-top 55px
  .foot-trace
    margin-top 65px
  .login-class
    margin-top 65px
</style>
