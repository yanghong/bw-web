<template>
  <a-layout class="container">
    <a-layout-header class="header">
      <BannerBw></BannerBw>
    </a-layout-header>
    <a-layout>
      <a-layout-content class="main-content">
        <a-row class="video-introduction">
          <a-col :span="6">{{videoName}}</a-col>
          <a-col :span="6">{{videoTime}}</a-col>
          <a-col :span="6">{{introduction}}</a-col>
          <a-col :span="6"><button>展开</button></a-col>
        </a-row>
        <div class="video_list">
          <div class="video_ls clear"  ref="videoLs">
            <div class="video_shows" v-for="(item,index) in srclist">
              <div v-if="item.imsrc" class="div_videos" >
                <img :src="'../../static/images/'+item.imsrc+'.jpg'" :ref="index"/>
              </div>
              <div v-if="item.videosrc"  class="div_videos" >
                <video-player class="video-player vjs-custom-skin"
                              :ref="index"
                              :options="playerOptions"
                              :playsinline="true"
                              @play="onPlayerPlay($event)"
                              @pause="onPlayerPause($event)"
                              @ended="onPlayerEnded($event)"
                              @loadeddata="onPlayerLoadeddata($event)"
                              @waiting="onPlayerWaiting($event)"
                              @playing="onPlayerPlaying($event)"
                              @timeupdate="onPlayerTimeupdate($event)"
                              @canplay="onPlayerCanplay($event)"
                              @canplaythrough="onPlayerCanplaythrough($event)"
                              @ready="playerReadied"
                              @statechanged="playerStateChanged($event)"
                >
                </video-player>
              </div>
            </div>
          </div>
        </div>
        <a-row class="videoRelate">
          <a-col :span="4" class="visit-number">
            <img src="../../assets/images/videoDetail/visit-number.png" alt="visitIcon">
            <span>{{visitNumber}}</span>
          </a-col>
          <a-col :span="4" class="nice-number">
            <img src="../../assets/images/videoDetail/niced-icon.png" alt="visitNiceIcon">
            <img src="../../assets/images/videoDetail/niced.png" alt="visitedNice">
            <span>{{niceNumber}}</span>
          </a-col>
          <a-col :span="4" class="collect-number">
            <img src="../../assets/images/videoDetail/collect-number.png" alt="visitCollect">
            <img src="../../assets/images/videoDetail/collect-number-icon.png" alt="visitCollectIcon">
            <span>{{collectNumber}}</span>
          </a-col>
          <a-col :span="4">
            <img src="../../assets/images/videoDetail/share-icon.png" alt="shareIcon">
            <a-button><img src="" alt=""></a-button>
          </a-col>
          <a-col :span="4">
          </a-col>
          <a-col :span="4">
            <div>
              <div>
                <img src="../../assets/images/videoDetail/lighting.png" alt="lighting">
                <a class="lighting-ta">电TA</a>
              </div>
              <div>
                <span>一个电池只能电一次哦~</span>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-sider class="main-sider">
        <!--<div class="user-about">-->
          <!--<div class="user-about-content">-->
            <!--<div class="userInfo-avatar">-->
              <!--<img src="../../assets/images/videoDetail/avatar.png" alt="avatar">-->
            <!--</div>-->
            <!--<div class="userInfo-text">-->
              <!--<div class="nick-name-lv">-->
                <!--<h2><a href="">{{nikeName}}</a></h2><span>lv2</span>-->
              <!--</div>-->
              <!--&lt;!&ndash;<img src="" alt="">&ndash;&gt;<span>厂牌</span>-->
              <!--<span>{{personalIntroduction}}</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="concern-message">-->
            <!--<a-button>关注{{concernNumber}}</a-button>-->
            <!--<img src="../../assets/images/videoDetail/private-message.png" alt="privateMessage">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="recommend-video">-->
          <!--<SingleVideo></SingleVideo>-->
        <!--</div>-->
      </a-layout-sider>
    </a-layout>
</a-layout>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  import SingleVideo from '../../components/singleVideo/singleVideo.vue'
  export default {
    name: 'ShowDetail',
    components: {
      BannerBw,
      SingleVideo
    },
    data () {
      return {
        // videojs options
        playerOptions: {
          muted: false,//开启声音
          autoplay: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "",
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        },
        refslist:[],//对象列表
        srclist:[//视频图片列表
          {videosrc:"http://vjs.zencdn.net/v/oceans.mp4"}
        ],
        num:0,
        time:'',
        videoName: '青鸟飞鱼',
        videoTime: '2018-12-16',
        introduction: '介绍',
        visitNumber: '999+',
        niceNumber: '999+',
        collectNumber: '999+',

        nikeName: '钓鱼的彩虹糖',
        personalIntroduction: '没有个性就是我的个性',
        concernNumber: 144
      }
    },
    mounted() {
      if(this.srclist[0].videosrc){//第一个是视频
        this.playerOptions.sources[0].src=this.srclist[this.num].videosrc
      }else{//第一个是图片
        this.startPlay()
      }
    },
    methods: {
      startPlay(){//图片
        this.time=setInterval(()=>{
          this.countPlay();
          if(this.srclist[this.num].videosrc){
            clearInterval(this.time);
            this.playerOptions.sources[0].src=''
            this.playerOptions.sources[0].src=this.srclist[this.num].videosrc
          }
        },3000)
      },
      countPlay(){
        this.num++;
        this.$refs.videoLs.style.left=-600*(this.num)+"px";
        this.$refs.videoLs.style.transition="2s"
        if(this.num>=this.srclist.length){
          this.num=0;
          this.$refs.videoLs.style.left="0px"
          this.$refs.videoLs.style.transition="0s"
        }
      },
      onPlayerPlay(player) {
      },
      onPlayerPause(player) {
      },
      onPlayerEnded(player) {//播放完毕之后 src被替换
        this.countPlay()
        this.playerOptions.sources[0].src=''
        this.playerOptions.sources[0].src=this.srclist[this.num].videosrc
        if(this.srclist[this.num].imsrc){
          this.startPlay()
        }
      },
      onPlayerLoadeddata(player) {
      },
      onPlayerWaiting(player) {
      },
      onPlayerPlaying(player) {
      },
      onPlayerTimeupdate(player) {
      },
      onPlayerCanplay(player) {
      },
      onPlayerCanplaythrough(player) {
      },
      // or listen state event
      playerStateChanged(playerCurrentState) { //播放的进程中就是一直在播放
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready 从第几秒开始播放
      playerReadied(player) {
        // seek to 10s
        // console.log('example player 1 readied', player)
        // player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    width 75%
    margin 0 auto
  .header
    width 70%
    height 64px
    background-color white
  .main-content
    width 70%
    padding 10px
  .video-introduction
    width 70%
    height 70px
    background-color white
    margin 0 auto
  .video_list
    width 70%
    height 555px
    margin 0 auto
  .videoRelate
    width 70%
    height 100px
    margin 0 auto
  .main-sider
    width 30%
    float right
  .user-about
    height 290px
</style>
