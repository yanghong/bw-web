<template>
  <div>
    <Banner></Banner>
    <img src="../../assets/images/404.jpg" alt="">
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
</style>
