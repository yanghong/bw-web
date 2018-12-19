<template>
    <div class="container">
      <div class="video-cover">
        <p class="title">{{videoTile}}</p>
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
        videoTile: '又来放毒气了，最丑朱雀来了'
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
    width 331px
    height 173px
    background-image url("../../assets/images/videoDetail/background-image.png")
  .video-cover .title
    background-color #000000
    border-radius: 0px 0px 5px 5px
    opacity 0.3
    margin-top 0px
    margin-left 0px
  .video-info
    width 100%
    height 10%
    display flex
</style>
