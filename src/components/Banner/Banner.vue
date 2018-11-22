<template>
  <div class="header">
    <!--<a-menu class="menu" theme="white" mode="horizontal" v-model="current">-->
      <!--<a-menu-item class="logo">-->
        <!--<img src="../../assets/images/logo.jpg" alt="logo">-->
      <!--</a-menu-item>-->
      <!--<a-menu-item class="banner-home"><a-icon class="home" type="home"/>主站</a-menu-item>-->
      <!--<a-menu-item class="banner-show"><a-icon class="show" type="appstore-o" />展柜</a-menu-item>-->
      <!--<a-menu-item class="banner-exchange"><a-icon class="exchange" type="gift" />兑换</a-menu-item>-->
      <!--<div></div>-->
      <!--<a-menu-item>-->
        <!--<a-input-search class="search" placeholder="input search text" style="width: 200px" @search="onSearch"/>-->
      <!--</a-menu-item>-->
      <!--<a-menu-item class="banner-exchange">-->
          <!--<span style="margin-right:24px">-->
            <!--<a-badge :count="1"><a-avatar style="color:#1c213b; background-color: white" icon="user"/></a-badge>-->
          <!--</span>-->
        <!--&lt;!&ndash;&lt;!&ndash;<a-icon type="user" />&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="../../assets/images/login-icon.jpg" alt="login-icon">&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="../../assets/images/point.jpg" alt="point">&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="../../assets/images/default-avtar.jpg" alt="default">&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="../../assets/images/logined.jpg" alt="login">&ndash;&gt;-->
      <!--</a-menu-item>-->

      <!--<a-menu-item class="foot-trace">足迹</a-menu-item>-->
      <!--<a-menu-item class="menu-contribute">-->
        <!--&lt;!&ndash;<div>&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="../../assets/images/contribute.jpg" alt="contribute">&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--<a-layout class="layout-contribute">-->
          <!--&lt;!&ndash;<a-icon type="arrow-up" class="up" style="color: #fff"/>&ndash;&gt;-->
          <!--<img src="../../assets/images/up.jpg" alt="up">-->
          <!--<span style="color: #fff; font-weight: 200">投稿</span>-->
        <!--</a-layout>-->
      <!--</a-menu-item>-->
    <!--</a-menu>-->
    <ul class="header-left">
      <li><a href=""><img src="../../assets/images/logo.jpg" alt="logo"></a></li>
      <li><a href=""><a-icon class="home" type="home"/><span>主站</span></a></li>
      <li><a href=""><a-icon class="show" type="appstore-o" /><span>展柜</span></a></li>
      <li><a href=""><a-icon class="exchange" type="gift" /><span>兑换</span></a></li>
    </ul>
    <ul class="header-right">
      <li><a class="search"><a-input-search placeholder="请输入......." style="width: 200px" @search="onSearch"/></a></li>
      <li><a class="avatar"><a-badge :count="1"><a-avatar style="color:#1c213b; background-color: white" icon="user"/></a-badge></a></li>
      <li class="trace"><span>足迹</span></li>
      <li><a class="contribute"><img src="../../assets/images/up.jpg" alt="up"></a></li>
    </ul>
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
  .header-left
    margin 0 0 0 100px
    width 600px
    height 350px
    padding 0px
    float left
  .header-right
    margin 0 50px 0 0
    width 600px
    height 350px
    padding 0px
    float right
  li
    list-style-type none
    float left
  a
    display block
    width 100px
    height 50px
    font-family "Microsoft Sans Serif"
    line-height 50px
    text-align center
    text-decoration none
    font-size 15px
  span
    color black
  .home
    color #d54321
    margin-top 30px
  .show
    color #d54321
    margin-top 30px
  .exchange
    color #d54321
    margin-top 30px
  .contribute
    float right
    width 61px
    height 91px
  .avatar
    margin 10px 0px 0 70px
  .search
    margin 10px 10px 0 10px
  .trace
    margin 25px 25px 0 0px
</style>
