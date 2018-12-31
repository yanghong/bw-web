<template>
  <div class="concern-container">
    <div class="concern-avatar-name">
      <img src="" alt="头像">
      <a href="">{{name}}</a>
    </div>
    <div class="concern-sign">
      <span>{{concernSign}}</span>
      <span>{{concernTime}}</span>
    </div>
    <div class="concern-img">
      <img src="" alt="动态图片">
    </div>
    <div class="concern-info">
      <div class="concern-info-visit-number">
        <img src="../../assets/images/videoDetail/visit-number.png" alt="">{{visitNumber}}
      </div>
      <div class="concern-info-nice-number">
        <img src="../../assets/images/videoDetail/niced-icon.png" alt="">{{niceNumber}}
      </div>
      <div class="concern-info-list-number">
        <img src="../../assets/images/videoDetail/comment-icon.png" alt="">{{listNumber}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'concern',
    data() {
        return {
          name: '番薯',
          concernSign: '又来放毒气了，最丑朱雀来咯......',
          concernTime: '一个小时以前',
          visitNumber: '999+',
          niceNumber: '999+',
          listNumber: '999+',
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .concern-container
    width 330px
    height 210px
    display flex
    display -webkit-flex
    -webkit-flex-direction column
    flex-direction column
  .concern-info
    width 100%
    height 10%
    display flex
  .concern-info-visit-number
    margin-left 9px
    margin-top 5px
    margin-right 30px
  .concern-info-nice-number
    margin-top 4px
    margin-left 30px
    margin-right 30px
  .concern-info-list-number
    margin-top 10px
    margin-left 30px
</style>
