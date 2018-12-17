<template>
  <div class="container">
    <Banner></Banner>
    <div class="content">
      <img src="../../assets/images/404.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import Banner from '../../components/Banner/BannerBw.vue'
export default {
  name: '404',
  components: {
    Banner
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  img
    text-align center
  .content
    width 75%
    margin 0 auto
</style>
