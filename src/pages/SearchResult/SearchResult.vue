<template>
  <div class="search-result-container">
    <BannerBw></BannerBw>
    <div class="search-result-content">
      <div class="search-result-video-list" v-for="item in videoList">
        <SingleVideo  v-bind:view-count="item.viewCount" v-bind:like-count="item.likeCount"
                      v-bind:cover-url="item.coverUrl" v-bind:introduction="item.introduction"
                      v-bind:title="item.title" v-bind:video="item" v-bind:selectEntities="item.selectEntities"></SingleVideo>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  import SingleVideo from '../../components/singleVideo/singleVideo.vue'
  import { getVideoListByCategoryOrSearch } from '../../api/video'
  export default {
    name: 'SearchResult',
    components: {
      BannerBw,
      SingleVideo
    },
    data () {
      return {
        videoList: undefined,
        pageSize: 10,
        pageNo: 1
      }
    },
    methods: {
      oncreated() {
        const self = this;
        let params = {
          category: '',
          search: self.$route.params.value,
          pageSize: self.pageSize,
          pageNo: self.pageNo
        };
        getVideoListByCategoryOrSearch(params)
          .then(resp => {
            if (resp && resp.success) {
              console.log(resp);
              let tempArray = new Array();
              resp.data.forEach(item => {
                tempArray.push(item);
              });
              self.videoList = tempArray;
            }
          });
      }
    },
    created() {
      this.oncreated();
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search-result-content
    width 75%
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction column
</style>
