<template>
  <div>
    <div id="msite-main-container">
      <BannerBw class="msite-banner-bw"></BannerBw>
      <div id="msite-content">
        <div class="msite-carousel">
          <a-carousel autoplay>
            <div class="carousel-img" v-for="img in carouselImgList">
              <img :src="img" alt="background">
            </div>
          </a-carousel>
      </div>
        <div class="msite-nav">
          <div class="msite-nav-a" v-for="item in msiteCategorys">
            <a @click="getNavItemList(item)">{{item.category}}</a>
          </div>
        </div>
        <a-divider style="margin-top: 0px; margin-bottom: 0px;"/>
        <div class="msite-suggest-video">
          <a-row type="flex" justify="center" align="top">
            <a-col class="msite-gutter-row" :span="8">
              <img src="../../assets/images/msite/met-1.jpg" alt="met">
            </a-col>
            <a-col class="msite-gutter-row" :span="8">
              <img src="../../assets/images/msite/met-2.jpg" alt="met">
            </a-col>
            <a-col class="msite-gutter-row" :span="8">
              <img src="../../assets/images/msite/met-3.jpg" alt="met">
            </a-col>
          </a-row>
        </div>
        <div class="msite-title">
          <div class="msite-title-left">
            <h1>{{selectedTitle}}</h1><span>推荐视频</span>
          </div>
          <div class="msite-title-right">
            <a @click="gotoMsiteMore(selectedTitle)">更多></a>
          </div>
        </div>
        <div class="msite-video-list">
          <div class="msite-video-item" v-for="item in videoList">
            <MsiteSingleVideo  v-bind:view-count="item.viewCount" v-bind:like-count="item.likeCount"
                          v-bind:cover-url="item.coverUrl" v-bind:introduction="item.introduction"
                          v-bind:title="item.title" v-bind:video="item" v-bind:selectEntities="item.selectEntities"></MsiteSingleVideo>
          </div>
        </div>
      </div>
      <!--<div class="msite-footer">-->
        <!--<FooterGuide></FooterGuide>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import BannerBw from '../../components/Banner/BannerBw.vue'
import MsiteSingleVideo from '../../components/singleVideo/msiteSingleVideo.vue'
import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
import { getCategotys,getCarouselList } from '../../api/msite'
import { getVideoListByCategoryOrSearch } from '../../api/video'
export default {
  name: 'MSite',
  components: {
    FooterGuide,
    BannerBw,
    MsiteSingleVideo
  },
  data() {
    return {
      selectedTitle: undefined,
      msiteCategorys: undefined,
      carouselImgList: undefined,
      search: '',
      pageSize: 10,
      pageNo: 1,
      videoList: undefined,
      videoInfo: {
        videoUrl: undefined,
        id: undefined,
        modifyTime: undefined,
        modifyStr: undefined,
        coverUrl: undefined,
        isDelete: undefined,
        likeCount: undefined,
        viewCount: undefined,
        selectEntities: undefined
      }
    }
  },
  methods: {
    /**
     * 获取导航类目
     */
    getCategorysMsite() {
      const self = this;
      getCategotys()
        .then(resp => {
          if (resp && resp.success) {
            let tempArray = new Array();
            resp.data.forEach(item => {
              tempArray.push(item);
            });
            self.msiteCategorys = tempArray;
          } else {
            self.$message.error('获取类目失败');
          }
        });
    },
    getCarouselListMsite() {
      const self = this;
      getCarouselList()
        .then(resp => {
          if (resp && resp.success) {
            let tempArray = new Array();
            resp.data.forEach(item => {
              tempArray.push(item.url);
            });
            console.log(tempArray);
            self.carouselImgList = tempArray;
          } else {
            self.$message.error('获取轮播图失败');
          }
        });
    },
    getNavItemList(item) {
      const self =  this;
      let params = {
        category: item.id,
        search: '',
        pageSize: self.pageSize,
        pageNo: self.pageNo
      };
      getVideoListByCategoryOrSearch(params)
        .then(resp => {
          if (resp && resp.success) {
            let tempArray = new Array();
            resp.data.forEach(item => {
              tempArray.push(item);
            });
            self.videoList = tempArray;
            self.selectedTitle = item.category;
          }
        });
    },
    gotoMsiteMore(selectedTitle) {
      const self = this;
      if (typeof(selectedTitle) === 'undefined' ) {
        self.$message.error('获取更多的条件为空');
        return
      } else {
        console.log(selectedTitle);
        self.$router.push({ name: 'msiteMore', params: {selectedTitle: selectedTitle}});
      }
    }
  },
  created() {
    this.getCategorysMsite();
    this.getCarouselListMsite();
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .msite-banner-bw
    z-index 999
  #msite-content
    width 75%
    height 100%
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
  .msite-carousel
    margin-left auto
    margin-right auto
  .carousel-img
    width 100%
    margin-top 1px
    margin-left 0px
  .msite-nav
    width 100%
    height 55px
    display flex
    justify-content center
  .msite-nav .msite-nav-a
    margin 10px 5px 5px 5px
    color black
    flex-direction row
  .msite-nav .msite-nav-a a
    width 82px
    height 20px
    font-family MicrosoftYaHei
    font-size 17px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #000000
    margin-left 15px
    margin-right 15px
    &:hover
      color coral
  .msite-suggest-video >>> .a-row > div
    background transparent
    border 0
  .msite-gutter-row img
    width 95%
  .msite-title
    width 100%
    height 30px
    margin-top 40px
    position relative
  .msite-title .msite-title-left
    display flex
    flex-direction row
  .msite-title .msite-title-left span
    margin-top 10px
    margin-left 5px
  .msite-title .msite-title-right
    position absolute
    top 5px
    right 0px
  .msite-title .msite-title-right a
    color grey
  .msite-video-list
    width 100%
  .msite-footer
    width 100%
    flex 0 0 auto
  .msite-video-list
    width 1340px
    height 150px
    display flex
    display -webkit-flex
    flex-direction row
    margin 10px 10px
  .msite-video-item
    margin 10px 10px
</style>
