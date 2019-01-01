<template>
  <div class="exchange-container">
    <BannerBw></BannerBw>
    <div class="exchange-content">
      <div class="exchange-background-img">
        <img src="../../assets/images/exchange/protocol_bkg.jpg" alt="background">
      </div>
      <div class="exchange-nav">
        <div class="exchange-nav-text">
          <div class="exchange-nav-text-a">
            <a href="">虚拟商品</a>
          </div>
          <div class="exchange-nav-text-a">
            <a href="">摆玩周边</a>
          </div>
        </div>
        <div class="exchange-nav-pagination">
          <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChangePagination" />
        </div>
      </div>
      <a-divider style="margin-top: 0px; margin-bottom: 0px;"/>
      <div class="exchange-video">
        <SingleVideo></SingleVideo>
      </div>
    </div>

  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  import SingleVideo from '../../components/singleVideo/singleVideo'
  export default {
    name: 'Show',
    components: {
      BannerBw,
      SingleVideo
    },
    data() {
      return {
        
      }
    },
    methods: {
      onChangePagination(pageNumber) {
        console.log('Page: ', pageNumber);
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .exchange-content
    width 70%
    margin 0 auto
  .exchange-background-img
    width 100%
    margin-top 1px
    margin-left 0px
  .exchange-nav
    width 100%
    height 50px
    position relative
  .exchange-nav-text
    position absolute
    margin-top 12px
    left 200px
    display flex
    display -webkit-flex
    flex-direction row
  .exchange-nav-text-a
    margin 10px 20px
  .exchange-nav-text-a a
    color black
    &:hover
      color coral
      border-bottom 2px solid coral
  .exchange-nav-pagination
    position absolute
    right 5px
    margin-top 10px
  .exchange-video
    margin 10px 10px
</style>
