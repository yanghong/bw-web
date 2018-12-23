<template>
    <div class="container">
      <div class="video-cover">
        <div class="title">
          <p>{{videoTitle}}123</p>
        </div>
      </div>
      <div class="video-info">
        <div class="visit-number">
          <img src="../../assets/images/videoDetail/visit-number.png" alt="">{{visitNumber}}
        </div>
        <div class="nice-number">
          <img src="../../assets/images/videoDetail/niced-icon.png" alt="">{{niceNumber}}
        </div>
        <div class="list-number">
          <img src="../../assets/images/videoDetail/comment-icon.png" alt="">{{listNumber}}
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'singleVideo',
    data() {
      return {
        visitNumber: '999+',
        niceNumber: '999+',
        listNumber: '999+',
        videoTitle: '又来放毒气了，最丑朱雀来了',

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    width 330px
    height 210px
    display flex
    display -webkit-flex
    -webkit-flex-direction column
    flex-direction column
  .video-cover
    position relative
    width 331px
    height 173px
    background-image url("../../assets/images/videoDetail/background-image.png")
  .video-cover .title
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
  .video-info
    width 100%
    height 10%
    display flex
  .visit-number
    margin-left 9px
    margin-top 5px
    margin-right 30px
  .nice-number
    margin-top 4px
    margin-left 30px
    margin-right 30px
  .list-number
    margin-top 10px
    margin-left 30px
</style>
