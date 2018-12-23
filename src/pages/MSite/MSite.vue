<template>
  <div id="main-container">
    <BannerBw></BannerBw>
      <div id="content">
        <div>
          <a-carousel autoplay class="carousel">
            <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
            <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
            <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
            <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
        </a-carousel>
        </div>
        <div class="nav">
          <div class="nav-a">
            <a href="">时下热门</a>
          </div>
          <div class="nav-a">
            <a href="">潮玩</a>
          </div>
          <div class="nav-a">
            <a href="">可动人偶</a>
          </div>
          <div class="nav-a">
            <a href="">机甲</a>
          </div>
          <div class="nav-a">
            <a href="">积木/拼图</a>
          </div>
          <div class="nav-a">
            <a href="">电动航模</a>
          </div>
          <div class="nav-a">
            <a href="">军事模型</a>
          </div>
          <div class="nav-a">
            <a href="">手办/景品</a>
          </div>
          <div class="nav-a">
            <a href="">盒玩/食玩</a>
          </div>
          <div class="nav-a">
            <a href="">雕像</a>
          </div>
          <div class="nav-a">
            <a href="">...</a>
          </div>
        </div>
        <a-divider style="margin-top: 0px; margin-bottom: 0px;"/>
        <div class="suggest-video">
          <a-row type="flex" justify="center" align="top">
            <a-col class="gutter-row" :span="8">
              <img src="../../assets/images/msite/met-1.jpg" alt="met">
            </a-col>
            <a-col class="gutter-row" :span="8">
              <img src="../../assets/images/msite/met-2.jpg" alt="met">
            </a-col>
            <a-col class="gutter-row" :span="8">
              <img src="../../assets/images/msite/met-3.jpg" alt="met">
            </a-col>
          </a-row>
        </div>
        <div class="title">
          <div class="title-left">
            <h1>{{selectedTitle}}</h1><span>推荐视频</span>
          </div>
          <div class="title-right">
            <!--TODO 确定链接-->
            <a href="">更多></a>
          </div>
        </div>
        <div class="video-list">
          <SingleVideo></SingleVideo>
        </div>
      </div>
      <!--<a-layout-footer>&lt;!&ndash;<FooterGuide></FooterGuide>&ndash;&gt;</a-layout-footer>-->
  </div>
</template>

<script>
import BannerBw from '../../components/Banner/BannerBw.vue'
import SingleVideo from '../../components/singleVideo/singleVideo.vue'
import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
export default {
  name: 'MSite',
  components: {
    FooterGuide,
    BannerBw,
    SingleVideo
  },
  data() {
    return {
      selectedTitle: '潮玩',// TODO 链接nav的选择项
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
  .carousel
    margin-left auto
    margin-right auto
  .nav
    width 100%
    height 55px
    display flex
    justify-content center
  .nav .nav-a
    margin 10px 5px 5px 5px
    color black
    flex-direction row
  .nav .nav-a a
    width 82px
    height 20px
    font-family MicrosoftYaHei
    font-size 20.8px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #000000
    margin-left 10px
    margin-right 10px
    &:hover
      color coral
  .suggest-video >>> .a-row > div
    background transparent
    border 0
  .gutter-row img
    width 95%
  .title
    width 100%
    height 30px
    margin-top 40px
    position relative
  .title .title-left
    display flex
    flex-direction row
  .title .title-left span
    margin-top 10px
    margin-left 5px
  .title .title-right
    position absolute
    top 5px
    right 0px
  .title .title-right a
    color grey
  .video-list
    width 100%

</style>
