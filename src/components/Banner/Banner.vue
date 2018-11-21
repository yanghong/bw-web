<template>
  <a-layout id="components-layout-top" class="layout">
    <a-layout-header class="header">
      <a-menu class="menu" theme="white" mode="horizontal">
          <a-menu-item class="logo">
            <img src="../../assets/images/logo.jpg" alt="logo">
          </a-menu-item>
          <a-menu-item class="banner-home"><a-icon class="home" type="home"/>主站</a-menu-item>
          <a-menu-item class="banner-show"><a-icon class="show" type="appstore-o" />展柜</a-menu-item>
          <a-menu-item class="banner-exchange"><a-icon class="exchange" type="gift" />兑换</a-menu-item>
        <a-menu-item>
          <a-input-search class="search" placeholder="input search text" style="width: 200px" @search="onSearch"/>
        </a-menu-item>
        <a-menu-item class="banner-exchange">
          <!--<a-icon type="user" />-->
          <img src="../../assets/images/login-icon.jpg" alt="login-icon">
          <img src="../../assets/images/point.jpg" alt="point">
          <img src="../../assets/images/default-avtar.jpg" alt="default">
          <img src="../../assets/images/logined.jpg" alt="login">
        </a-menu-item>
        <a-menu-item class="foot-trace">足迹</a-menu-item>
        <a-menu-item class="menu-contribute">
          <!--<div>-->
            <!--<img src="../../assets/images/contribute.jpg" alt="contribute">-->
          <!--</div>-->
          <a-layout class="layout-contribute">
            <a-icon type="arrow-up" style="color: #fff; background: #d54321"/>
            <span style="background: #d54321; color: #fff; font-weight: 200">投稿</span>
          </a-layout>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
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
    background-color white
    .header
      background-color white
  #components-layout-top .logo
    width 120px
    height 31px
    background rgba(255,255,255,.2)
    margin 0 5px 16px 0
    float left
  .search
    float right
  .contribute
    width 61px
    height 91px
    background-color #d54321
    border-radius 5px
  .home
    margin-top 30px
  .show
    margin-top 30px
  .exchange
    margin-top 30px
  .search
    margin-top 20px
</style>
