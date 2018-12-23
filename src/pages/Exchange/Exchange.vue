<template>
  <div class="container">
    <BannerBw></BannerBw>
    <div class="content">
      <div class="background-img">
        <img src="../../assets/images/exchange/protocol_bkg.jpg" alt="background">
      </div>

    </div>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  export default {
    name: 'Show',
    components: {
      BannerBw
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .background-img
    width 100%
    margin-top 1px
    margin-left 0px
</style>
