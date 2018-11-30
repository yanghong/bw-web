<template>
  <div id="main-container">
    <a-layout>
      <a-layout-header class="header"><Banner></Banner></a-layout-header>
      <a-layout-content id="content">
        <div>
        <a-carousel autoplay class="carousel">
          <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
          <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
          <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
          <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
        </a-carousel>
      </div>
        <div id="nav">
          <nav>
            <a href="">时下热门</a>
            <a href="">潮玩</a>
            <a href="">可动人偶</a>
            <a href="">机甲</a>
            <a href="">积木/拼图</a>
            <a href="">电动航模</a>
            <a href="">军事模型</a>
            <a href="">手办/景品</a>
            <a href="">盒玩/食玩</a>
            <a href="">雕像</a>
            <a href="">...</a>
          </nav>
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

      </a-layout-content>
      <!--<a-layout-footer>&lt;!&ndash;<FooterGuide></FooterGuide>&ndash;&gt;</a-layout-footer>-->
    </a-layout>
  </div>
</template>

<script>
import Banner from '../../components/Banner/BannerBw.vue'
import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
export default {
  name: 'MSite',
  components: {
    FooterGuide,
    Banner
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #content
    text-align center
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
    margin 0 auto
  a
    color black
  .gutter-example >>> .ant-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    background: #00A0E9;
    padding: 5px 0;
  }
</style>
