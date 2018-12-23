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
        <div id="nav">
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
        <div class="gutter-example">
          <a-row :gutter="16">
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
      </div>
      <!--<a-layout-footer>&lt;!&ndash;<FooterGuide></FooterGuide>&ndash;&gt;</a-layout-footer>-->
  </div>
</template>

<script>
import BannerBw from '../../components/Banner/BannerBw.vue'
import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
export default {
  name: 'MSite',
  components: {
    FooterGuide,
    BannerBw
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #content
    width 75%
    margin 0 auto
  .header
    margin 0 0
    float top
    background-color white
  .ant-carousel >>> .slick-slide {
    margin-top: 0px;
    text-align: center;
    overflow: hidden;
  }
  .ant-carousel >>> .slick-slide img {
    color: #fff;
  }
  .carousel {
    margin-left: auto;
    margin-right: auto;
  }
  #nav
    width 100%
    height 60px
    margin 0 auto
    display flex
  #nav .nav-a
    margin 10px 5px 10px 5px
    color black
    flex-direction row
  #nav .nav-a a
    font-weight larger
    color black
  .gutter-example >>> .a-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    background: #00A0E9;
    padding: 5px 0;
  }
  .gutter-row
    width 30%
    height 235px
    margin 5px 5px
</style>
