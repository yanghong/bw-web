<template>
  <div class="container">
    <BannerBw></BannerBw>
    <div class="content">
      <div class="profile">
        <div class="avatar">
          <img src="../../assets/images/otherPerson/avatar.png" alt="avatar">
        </div >
        <div class="nick-name">
          <a href="">昵称</a>
          <a href="">lv3</a>
          <a href="">个性签名</a>
        </div>
        <div class="concern">
          <a href="">+关注</a>
          <a href="">私信</a>
        </div>
      </div>
      <div class="content">
        <div class="nav-uid-time">
          <a-menu mode="horizontal">
            <a-menu-item>TA投稿的视频</a-menu-item>
            <a-menu-item>TA的展柜</a-menu-item>
          </a-menu>
          <div class="uid-time">
            <span class="uid">UID</span>
            <a href="">1620274</a>
            <a-icon type="schedule" />
            <span class="register-time">2018-12-9</span>
          </div>
        </div>
      </div>
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
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .content
    width 75%
    margin 0 auto
  .profile
    max-width 1355px
    height 235px
    background-image url("../../assets/images/exchange/protocol_bkg.jpg")
    background-repeat no-repeat
    background-position 50% 50%
    margin 0 auto
  .avatar
    margin 0 0 0 0
  .concern
    position relative
    bottom 0
    right 0
</style>
