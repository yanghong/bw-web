<template>
  <!--<div class="container">-->
    <!--<a-menu class="menu" theme="white" mode="horizontal">-->
      <!--<a-menu-item class="logo" key="1">-->
        <!--<img src="../../assets/images/banner/logo.jpg" alt="logo">-->
      <!--</a-menu-item>-->
      <!--<a-menu-item class="banner-home" key="2"><a-icon class="home" type="home"/>主站</a-menu-item>-->
      <!--<a-menu-item class="banner-show" key="3"><a-icon class="show" type="appstore-o" />展柜</a-menu-item>-->
      <!--<a-menu-item class="banner-exchange" key="4"><a-icon class="exchange" type="gift" />兑换</a-menu-item>-->
      <!--<a-menu-item  key="5">-->
        <!--<a-input-search class="search" placeholder="input search text" style="width: 200px" @search="onSearch"/>-->
      <!--</a-menu-item>-->
      <!--<a-menu-item  key="6">-->
        <!--<a-popover title="Title">-->
          <!--<template slot="content">-->
            <!--<p>Content</p>-->
            <!--<p>Content</p>-->
          <!--</template>-->
          <!--&lt;!&ndash;<a-icon type="user" />&ndash;&gt;-->
          <!--<img class="login-class" src="../../assets/images/banner/login-icon.jpg" alt="login-icon">-->
          <!--<img class="login-class" src="../../assets/images/banner/point.jpg" alt="point">-->
          <!--<img class="login-class" src="../../assets/images/banner/default-avtar.jpg" alt="default">-->
          <!--<img class="login-class" src="../../assets/images/banner/logined.jpg" alt="login">-->
        <!--</a-popover>-->
      <!--</a-menu-item>-->

      <!--<a-menu-item  key="7">-->
        <!--<a href="" class="foot-trace">足迹</a>-->
      <!--</a-menu-item>-->
      <!--<a-menu-item class="menu-contribute"  key="8">-->
        <!--&lt;!&ndash;<div>&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="../../assets/images/contribute.jpg" alt="contribute">&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<a-icon type="arrow-up" class="up" style="color: #fff"/>&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="../../assets/images/banner/up.jpg" alt="up">做成背景&ndash;&gt;-->
        <!--<a href="" style="color: #fff; font-weight: 200;width: 50px;height: 50px; text-align: center; margin-top: 5px" class="contribute">投稿</a>-->
      <!--</a-menu-item>-->
    <!--</a-menu>-->
  <!--</div>-->
  <div class="container">
    <a-row>
      <a-col :span="18" :push="6" style="background-color: red">col-8 col-push-6</a-col>
      <a-col :span="6" :pull="18" style="background-color: bisque">col-16 col-push-8</a-col>
    </a-row>
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
    margin 0 auto
  .logo
    margin-left 100px
    &:hover
      border-bottom none
  .search
    float right
  .contribute
    background-color #d54321
    border-radius 5px
  .home
    margin-top 30px
    &:hover
      border-bottom none
  .show
    margin-top 30px
  .exchange
    margin-top 30px
  .search
    margin-top 20px
  .layout-contribute
    folat center
    margin-top 30px
  .foot-trace
    margin-top 15px
  .login-class
    margin-top 15px
  .banner-home
    &:hover
      border-bottom none
  .ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected
    border-bottom none
</style>
