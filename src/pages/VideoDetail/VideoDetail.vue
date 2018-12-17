<template>
  <div class="container">
    <BannerBw></BannerBw>
    <div class="content">

    </div>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  export default {
    name: 'VideoDetail',
    components: {
      BannerBw
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    width 75%
    margin 0 auto
</style>
