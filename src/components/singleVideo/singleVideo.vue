<template>
    <div class="single-video-container">
      <div class="single-video-video-cover" @click="gotoVideoDetail(selectEntities)">
        <div class="single-video-title">
          <p>{{title}}</p>
        </div>
      </div>
      <div class="single-video-video-info">
        <div class="single-video-visit-number">
          <img src="../../assets/images/videoDetail/visit-number.png" alt="">{{viewCount}}
        </div>
        <div class="single-video-nice-number">
          <img src="../../assets/images/videoDetail/niced-icon.png" alt="">{{likeCount}}
        </div>
        <div class="single-video-list-number">
          <img src="../../assets/images/videoDetail/comment-icon.png" alt="">{{listNumber}}
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
  .single-video-container
    width 330px
    height 210px
    display flex
    display -webkit-flex
    -webkit-flex-direction column
    flex-direction column
  .single-video-video-cover
    position relative
    width 331px
    height 173px
    background-image url("../../assets/images/videoDetail/background-image.png")
  .single-video-video-cover .single-video-title
    position absolute
    left 0px
    bottom 0px
    width 331px
    height 38px
    color black
    border-radius: 0px 0px 5px 5px
    background-color rgba(0,0,0,0.4)
  p
    margin-top 10px
    margin-left 10px
    margin-bottom 5px
    color white
  .single-video-video-info
    width 100%
    height 10%
    display flex
  .single-video-visit-number
    margin-left 9px
    margin-top 5px
    margin-right 30px
  .single-video-nice-number
    margin-top 4px
    margin-left 30px
    margin-right 30px
  .single-video-list-number
    margin-top 10px
    margin-left 30px
</style>
