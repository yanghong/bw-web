<template>
    <div class="msite-single-video-container">
      <div class="msite-single-video-video-cover" @click="gotoVideoDetail(selectEntities)">
        <div class="msite-single-video-title">
          <p>{{title}}</p>
        </div>
      </div>
      <div class="msite-single-video-video-info">
        <div class="msite-single-video-visit-number">
          <div class="msite-single-video-visit-number-img">
            <img src="../../assets/images/videoDetail/visit-number.png" alt="">
          </div>
          <div class="msite-single-video-visit-number-num">
            {{viewCount}}
          </div>
        </div>
        <div class="msite-single-video-nice-number">
          <div class="msite-single-video-nice-number-img">
            <img src="../../assets/images/videoDetail/niced-icon.png" alt="">
          </div>
          <div class="msite-single-video-nice-number-num">
            {{likeCount}}
          </div>
        </div>
        <div class="msite-single-video-list-number">
          <div class="msite-single-video-number-img">
            <img src="../../assets/images/videoDetail/comment-icon.png" alt="">
          </div>
          <div class="msite-single-video-list-number-num">
            {{listNumber}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'singleVideo',
    props:[
      "viewCount",
      "likeCount",
      "coverUrl",
      "introduction",
      "selectEntities",
      "title",
      "video"
    ],
    data() {
      return {
        // viewCount: '999+',
        // likeCount: '999+',
        listNumber: '999+',
        // videoTitle: '又来放毒气了，最丑朱雀来了',
      }
    },
    methods: {
      gotoVideoDetail(selectEntities) {
        this.$router.push({ name: 'showDetail',params:{selectEntities:selectEntities}});
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .msite-single-video-container
    width 253px
    height 210px
    display flex
    display -webkit-flex
    -webkit-flex-direction column
    flex-direction column
  .msite-single-video-video-cover
    position relative
    width 253px
    height 157px
    background-image url("../../assets/images/msite/msite-single-video-img.png")
  .msite-single-video-video-cover .msite-single-video-title
    position absolute
    left 0px
    bottom 0px
    width 253px
    height 38px
    color black
    border-radius: 0px 0px 5px 5px
    background-color rgba(0,0,0,0.4)
  p
    margin-top 10px
    margin-left 10px
    margin-bottom 5px
    color white
  .msite-single-video-video-info
    width 100%
    height 10%
    display flex
  .msite-single-video-visit-number
    margin-left 9px
    margin-top 5px
    margin-right 30px
  .msite-single-video-visit-number-img
    width 17px
    height 15px
    margin 5px 5px
  .msite-single-video-visit-number-num
    width 31px
    height 10px
    font-family MicrosoftYaHei
    font-size 12.5px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #100900
  .msite-single-video-nice-number
    margin-top 4px
    margin-left 30px
    margin-right 30px
  .msite-single-video-nice-number-img
    width 17px
    height 15px
    margin 5px 5px
  .msite-single-video-nice-number-num
    width 31px
    height 10px
    font-family MicrosoftYaHei
    font-size 12.5px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #100900
  .msite-single-video-list-number
    margin-top 10px
    margin-left 30px
  .msite-single-video-list-number-img
    width 17px
    height 15px
    margin 5px 5px
  .msite-single-video-list-number-num
    width 31px
    height 10px
    font-family MicrosoftYaHei
    font-size 12.5px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #100900

</style>
