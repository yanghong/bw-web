<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <TopContainer></TopContainer>
    <BHeader></BHeader>
  </div>
</template>

<script>

// import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import Banner from './components/Banner/BannerBw.vue'
import TopContainer from './components/common/TopContainer.vue'
import BHeader from './components/common/BHeader.vue'

export default {
  name: 'app',
  components: {
    // FooterGuide,
    // Banner
    TopContainer,
    BHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
