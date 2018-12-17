<template>
  <div class="container">
    <BannerBw></BannerBw>
    <div class="main-content">
      <div class="middle">
        <img src="../../assets/images/protocol/logo_big.jpg" alt="big-logo">
        <h1>用户协议</h1>
        <h2>User agreement</h2>
        <h1>隐私政策</h1>
        <h2>Privacy Policy</h2>
        <h1>等级系统说明</h1>
        <h2>Experience system</h2>
        <h1>道具系统说明</h1>
        <h2>Prop system</h2>
        <h1>关于我们</h1>
        <h2>About us</h2>
        <h1>联系我们</h1>
        <h2>Contact us</h2>
        <h1>加入我们</h1>
        <h2>Join us</h2>
        <h1>申诉与举报</h1>
        <h2>Reporting and complaint</h2>
      </div>
      <div class="content">
        <a-menu style="width: 256px" mode="vertical" @click="handleClick">
          <a-menu-item key="1" @click="changeContent"><a-icon type="caret-right"/>用户协议</a-menu-item>
          <a-menu-item key="2" @click="changeContent"><a-icon type="caret-right"/>隐私政策</a-menu-item>
          <a-menu-item key="3" @click="changeContent"><a-icon type="caret-right"/>等级系统说明</a-menu-item>
          <a-menu-item key="4" @click="changeContent"><a-icon type="caret-right"/>道具系统说明</a-menu-item>
          <a-menu-item key="5" @click="changeContent"><a-icon type="caret-right"/>关于我们</a-menu-item>
          <a-menu-item key="6" @click="changeContent"><a-icon type="caret-right"/>联系我们</a-menu-item>
          <a-menu-item key="7" @click="changeContent"><a-icon type="caret-right"/>加入我们</a-menu-item>
          <a-menu-item key="8" @click="changeContent"><a-icon type="caret-right"/>申诉与举报</a-menu-item>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw'
  export default {
    name: 'protocol',
    components: {
      BannerBw
    },
    methods: {
      handleClick (e) {
        console.log('click ', e)
      },
      /**
       * 通过接口获取协议内容并更改
       */
      changeContent(){
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main-content
    width 75%
    margin 0 auto
</style>
