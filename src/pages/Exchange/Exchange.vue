<template>
  <div class="container">
    <BannerBw class="banner"></BannerBw>
    <div class="background-img">
      <img src="../../assets/images/exchange/protocol_bkg.jpg" alt="background">
    </div>
    <div id="nav">
      <nav>
        <a href="">摆玩热榜</a>
        <a href="">原创作品</a>
        <a href="">珍藏佳品</a>
      </nav>
    </div>
    <a-row :gutter="gutters[gutterKey]">
      <a-col v-for="(item, index) in colCounts[colCountKey]" :key="item.toString()" :span="24/colCounts[colCountKey]">
        <div>Column</div>
      </a-col>
    </a-row>

  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  export default {
    name: 'Exchange',
    components: {
      BannerBw
    },
    data () {
      const gutters = {}
      const arr = [8, 16, 24, 32, 40, 48]
      arr.forEach((value, i) => {
        gutters[i] = value;
      })
      const colCounts = {}
      const arr1 = [2, 3, 4, 6, 8, 12]
      arr1.forEach((value, i) => {
        colCounts[i] = value;
      })
      return {
        gutterKey: 1,
        colCountKey: 2,
        colCounts,
        gutters,
      }
    },
    computed: {
      rowColHtml() {
        const colCount = this.colCounts[this.colCountKey]
        const getter = this.gutters[this.gutterKey]
        let colCode = '<Row :gutter="' + getter + '">\n'
        for (let i = 0; i < colCount; i++) {
          const spanNum = 24 / colCount
          colCode += '  <Col :span="' + spanNum + '"/>\n'
        }
        colCode += '</Row>'
        return colCode
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    text-align center
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
  .background-img
    width 1920px
    height 234px
  .nav
    text-align center
  .container [class^="ant-col-"] {
    background: transparent;
    border: 0;
  }
</style>
