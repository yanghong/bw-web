<template>
  <div id="main-container">
    <BannerBw></BannerBw>
    <!--<a-layout-footer>&lt;!&ndash;<FooterGuide></FooterGuide>&ndash;&gt;</a-layout-footer>-->
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  import SingleVideo from '../../components/singleVideo/singleVideo.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default {
    name: 'MSiteMore',
    components: {
      FooterGuide,
      BannerBw,
      SingleVideo
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #content
    width 75%
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
</style>
