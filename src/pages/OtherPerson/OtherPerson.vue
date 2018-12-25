<template>
  <div class="other-person-container">
    <BannerBw></BannerBw>
    <div class="other-person-content">
      <div class="other-person-profile">
        <div class="other-person-avatar">
          <img src="../../assets/images/otherPerson/avatar.png" alt="avatar">
          <div class="other-person-nick-name">
            <div class="nick-name-lv">
              <div>
                <h1>昵称</h1>
              </div>
              <div>
                <a href="">lv3</a>
              </div>
            </div>
            <div class="person-sign">
              <a href="">个性签名</a>
            </div>
          </div>
        </div >
        <div class="other-person-concern">
          <a href="">+关注</a>
          <a href="">私信</a>
        </div>
      </div>
      <div class="other-person-nav-uid-time">
        <div class="nav-uid-time-nav">
          <a href="">TA投稿的视频</a>
          <a href="">TA的展柜</a>
          <a href="">TA的厂牌</a>
        </div>
        <div class="other-person-uid-time-wrap">
          <div class="other-person-uid">
            <div class="other-person-uid-name">
              <img src="../../assets/images/otherPerson/other-person-uid.png" alt="uid">
            </div>
            <div class="other-person-uid-number">
              <a href="">1620274</a>
            </div>
          </div>
          <div class="other-person-schedule">
            <div class="other-person-schedule-ims">
              <img src="../../assets/images/otherPerson/other-person-schedule.png" alt="schedule">
            </div>
            <div class="other-person-register-time">
              <span>注册于2018-12-9</span>
            </div>
          </div>
        </div>
      </div>
      <a-divider style="margin-top: 0px; margin-bottom: 0px;"/>
      <a-card hoverable style="width: 240px">
        <img alt="video-pic" src="../../assets/images/otherPerson/video-pic.png" slot="cover"/>
        <a-card-meta title="猫鱼打样，就问你怕不怕？">
          <template slot="description">点赞 评论 素质三连</template>
        </a-card-meta>
      </a-card>
      <a-divider/>
      <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange" />
      <a-back-top />
    </div>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  export default {
    name: 'OtherPerson',
    components: {
      BannerBw
    },
    methods: {
      onChange(pageNumber) {
        console.log('Page: ', pageNumber);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .other-person-content
    width 75%
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
  .other-person-profile
    width 1364px
    height 235px
    margin 5px 5px
    background-image url("../../assets/images/otherPerson/other-person-header.png")
    position relative
  .other-person-profile .other-person-avatar
    width 340px
    height 40px
    position absolute
    display flex
    display -webkit-flex
    flex-direction row
    left 30px
    top 70px
  .other-person-profile .other-person-avatar img
    width 116px
    height 116px
  .other-person-nick-name
    margin-top 20px
    margin-left 10px
    display flex
    display -webkit-flex
    flex-direction column
  .other-person-nick-name .nick-name-lv
    height 25px
    display flex
    display -webkit-flex
    flex-direction row
  .other-person-nick-name .person-sign
    height 20px
    margin-top 40px
  .other-person-concern
    display flex
    display -webkit-flex
    flex-direction row
    position absolute
    right 30px
    bottom 10px
  .other-person-concern a
    margin-left 10px
  .other-person-nav-uid-time
    width 100%
    height 55px
    display flex
    display -webkit-flex
    flex-direction row
  .other-person-nav-uid-time .nav-uid-time-nav
    width 920px
    margin-top 20px
  .other-person-nav-uid-time .nav-uid-time-nav a
    margin-left 75px
    margin-right 75px
  .other-person-uid-time
    display flex
    display -webkit-flex
    flex-direction row
  .other-person-uid-time-wrap
    width 410px
    margin-left 200px
    display flex
    display -webkit-flex
    flex-direction row
  .other-person-uid
    margin 15px
    display flex
    display -webkit-flex
    flex-direction row
  .other-person-schedule
    margin 10px
    display flex
    display -webkit-flex
    flex-direction row
  .other-person-register-time
    margin 5px
</style>
