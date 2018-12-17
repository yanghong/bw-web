<template>
  <div class="container">
    <BannerBw></BannerBw>
    <div class="content">
      <a-layout>
        <a-layout-content>
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
              <a-layout>
                <a-layout-content>
                  <img src="../../assets/images/videoDetail/lighting.png" alt="lighting">
                  <a class="lighting-ta">电TA</a>
                </a-layout-content>
                <a-layout-footer>
                  <span>一个电池只能电一次哦~</span>
                </a-layout-footer>
              </a-layout>
            </a-col>
          </a-row>
        </a-layout-content>
        <a-layout-sider class="main-sider">
          <div class="user-about">
            <div class="user-about-content">
                  <div class="userInfo-avatar">
                    <img src="../../assets/images/videoDetail/avatar.png" alt="avatar">
                  </div>
                  <div class="userInfo-text">
                    <div class="nick-name-lv">
                      <h2><a href="">{{nikeName}}</a></h2><span>lv2</span>
                    </div>
                    <!--<img src="" alt="">--><span>厂牌</span>
                    <span>{{personalIntroduction}}</span>
                  </div>
            </div>
            <div class="concern-message">
              <a-button>关注{{concernNumber}}</a-button>
              <img src="../../assets/images/videoDetail/private-message.png" alt="privateMessage">
            </div>
          </div>
        </a-layout-sider>
      </a-layout>
    </div>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  export default {
    name: 'ShowDetail',
    components: {
      BannerBw
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
  *
    padding 0
    margin 0
  .clear
    *zoom 1
  .clear:after
    visibility hidden
    content ""
    display block
    clear both
    height 0
  .content
    width 75%
    margin 0 auto
  .video-introduction
    color black
  .video_list
    width 952px
    height 400px
    overflow hidden
    position relative
    margin 0 auto
  .video_ls
    width 500%
    height 100%
    position absolute
    top 0
    left 0
    /*transition: 2s;*/
  .video_shows
    width 20%
    height 100%
    float left
    /*transform: translate3d(-600px,0,0);*/
  .div_videos
    width 100%
    height 100%
  .div_videos img
    width 100%
    height 100%
  .container
    text-align center
  /*.container .ant-layout-sider*/
    /*background #fff*/
    /*color #fff*/
    /*line-height 120px*/
  .container .ant-layout-content
    background #fff
    color #fff
  .container > .ant-layout
  .container > .ant-layout:last-child
    margin 0
  .videoRelate
    color black
    white-space normal nowrap
  .lighting-ta
    width 68px
    height 27px
    font-family MicrosoftYaHei-Bold
    font-size 29.2px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #00a0e9
  .concern
    color #00a0e9
  .main-sider
    background-color white
  .user-about
    display -webkit-flex
    display flex
    -webkit-flex-direction column
    flex-direction column
  .user-about-content
    width 329px
    height 200px
    display flex
  .concern-message
    display flex
  .userInfo-avatar
    width 99px
    height 99px
  .userInfo-text
    width 209px
    height 99px
    display -webkit-flex
    display flex
    -webkit-flex-direction column
    flex-direction column
  .nick-name-lv
    display flex
</style>
