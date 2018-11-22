<template>
  <div>
    <div>
      <a-carousel autoplay class="carousel">
        <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
        <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
        <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
        <div><img src="../../assets/images/msite/background.jpg" alt="background"></div>
      </a-carousel>
    </div>
    <div>
      <Banner class="header"></Banner>
    </div>
    <!--<FooterGuide></FooterGuide>-->
  </div>
</template>

<script>
import Banner from '../../components/Banner/Banner.vue'
import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
export default {
  name: 'MSite',
  components: {
    FooterGuide,
    Banner
  }
}
</script>

<style scoped>
  .header {
    margin: 0 0
  }
  .ant-carousel >>> .slick-slide {
    margin-top: 70px;
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

</style>
