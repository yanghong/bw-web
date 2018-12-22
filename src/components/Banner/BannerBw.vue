<template>
  <div class="container">
    <div class="menu">
      <div class="logo">
        <img src="../../assets/images/banner/logo.jpg" alt="logo">
      </div>
      <div class="banner-home"><a-icon class="home" type="home"/>主站</div>
      <div class="banner-show"><a-icon class="show" type="appstore-o" />展柜</div>
      <div class="banner-exchange"><a-icon class="exchange" type="gift" />兑换</div>
      <div>
        <a-input-search class="search" placeholder="input search text" style="width: 200px" @search="onSearch"/>
      </div>
      <div>
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
      </div>

      <div class="foot-trace">
        <a href="" class="foot">足迹</a>
      </div>
      <div class="menu-contribute" >
        <!--<div>-->
        <!--<img src="../../assets/images/contribute.jpg" alt="contribute">-->
        <!--</div>-->
        <!--<a-icon type="arrow-up" class="up" style="color: #fff"/>-->
        <!--<img src="../../assets/images/banner/up.jpg" alt="up">做成背景-->
        <a href="" style="color: #fff; font-weight: 200;width: 50px;height: 50px; text-align: center; margin-top: 5px" class="contribute">投稿</a>
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
  .container .a-row
    width 100%
    margin 0 auto
  .menu
    display flex
    display -webkit-flex
    -webkit-flex-direction row
    flex-direction row
  .logo
    width 104px
    height 62px
  .search
    float right
  .contribute
    background-color #d54321
    border-radius 5px
  .home
	  width 60px
    height 21px
    &:hover
      border-bottom none
  .show
    width 60px
    height 21px
  .exchange
    width 60px
    height 21px
  .search
    width 345px
    height 36px
    margin-top 20px
</style>
