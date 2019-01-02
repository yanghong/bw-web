<template>
  <div id="msite-more-main-container">
    <div class="msite-more-banner">
      <BannerBw></BannerBw>
    </div>
    <div class="msite-more-content">
      <div class="msite-more-title">
        <span>{{category}}</span>
      </div>
      <div class="msite-more-select-nav">
        <div class="msite-more-select-nav-time">
          <a>投稿时间排序</a>
        </div>
        <div class="msite-more-select-nav-hot">
          <a>视频热度排序</a>
        </div>
        <div class="msite-more-select-nav-pagination">
          <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange" />
        </div>
      </div>
      <a-divider style="margin-top: 0px; margin-bottom: 0px;"/>
      <div class="msite-more-video-list" v-for="item in videoList">
        <MsiteSingleVideo  v-bind:view-count="item.viewCount" v-bind:like-count="item.likeCount"
                           v-bind:cover-url="item.coverUrl" v-bind:introduction="item.introduction"
                           v-bind:title="item.title" v-bind:video="item"
                           v-bind:selectEntities="item.selectEntities"></MsiteSingleVideo>
      </div>
    </div>
    <div class="msite-more-footer">
      <FooterGuide></FooterGuide>
    </div>
    <!--<a-layout-footer>&lt;!&ndash;<FooterGuide></FooterGuide>&ndash;&gt;</a-layout-footer>-->
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  import MsiteSingleVideo from '../../components/singleVideo/msiteSingleVideo.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  import { getVideoListByCategoryOrSearch } from '../../api/video'
  export default {
    name: 'MSiteMore',
    components: {
      FooterGuide,
      BannerBw,
      MsiteSingleVideo
    },
    data() {
      return {
        videoList: undefined,
        getMoreVideoParam: undefined,
        pageSize: 10,
        pageNo: 1,
        category: undefined
      }
    },
    methods: {
      getMoreVideo() {
        const self = this;
        let getMoreVideoParam = {
          search: self.$route.params.selectedTitle,
          category: '',
          pageSize: self.pageSize,
          pageNo: self.pageNo
        };
        console.log('getMoreVideoParam:',getMoreVideoParam);
        getVideoListByCategoryOrSearch(getMoreVideoParam)
          .then(resp => {
            console.log(resp);
            if (resp && resp.success) {
              let tempArray = new Array();
              resp.data.forEach(item => {
                tempArray.push(item);
                self.category = item.categoryEntity.category;
              });
              self.videoList = tempArray;
              console.log(self.videoList);
            } else {
              self.$message.error("getMoreVideo failed");
            }
          });
      },
      onChange() {

      }
    },
    created() {
      this.getMoreVideo();
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .msite-more-main-container
    width 75%
    margin 0 auto
  .msite-more-content
    width 1090px
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
  .msite-more-title
    width 200px
    height 30px
    margin 10px 0px 20px 5px
  .msite-more-title span
    font-weight bolder
    font-size 20px
    color coral
  .msite-more-select-nav
    width 1090px
    height 35px
    position relative
  .msite-more-select-nav-time
    position absolute
    top 5px
    bottom 5px
    margin 0px 5px 5px 15px
  .msite-more-select-nav-hot
    position absolute
    top 5px
    bottom 5px
    left 100px
    margin 0px 5px 5px 15px
  .msite-more-select-nav a
    color black
    &:hover
      color coral
      border-bottom 2px solid coral
  .msite-more-select-nav-pagination
    position absolute
    right 5px
    margin-right 5px
  .msite-more-video-list
    margin 10px 10px
</style>
