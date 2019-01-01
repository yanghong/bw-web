<template>
  <div class="show-detail-container">
    <BannerBw></BannerBw>
    <div class="show-detail-layout">
      <div class="show-detail-main-content">
        <div class="show-detail-video-info">
          <div class="show-detail-video-name-time">
            <div class="show-detail-video-name">
              <span>{{videoName}}</span>
            </div>
            <div class="show-detail-video-time">
              <span>{{videoTime}}</span>
            </div>
          </div>
          <div class="show-detail-video-introduction">
            <div class="show-detail-video-introduction-text">
              <span>{{introduction}}</span>
            </div>
            <div class="show-detail-video-introduction-button">
              <button>展开∨</button>
            </div>
          </div>
        </div>
        <div class="show-detail-video-list">
          <div class="show-detail-video_ls clear"  ref="videoLs">
            <div class="show-detail-video_shows" v-for="(item,index) in srclist">
              <div v-if="item.imsrc" class="show-detail-div_videos" >
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
        <a-row class="show-detail-videoRelate">
          <a-col :span="4" class="show-detail-visit-number">
            <img src="../../assets/images/videoDetail/visit-number.png" alt="visitIcon">
            <span>{{visitNumber}}</span>
          </a-col>
          <a-col :span="4" class="show-detail-nice-number">
            <img src="../../assets/images/videoDetail/niced-icon.png" alt="visitNiceIcon">
            <img src="../../assets/images/videoDetail/niced.png" alt="visitedNice">
            <span>{{niceNumber}}</span>
          </a-col>
          <a-col :span="4" class="show-detail-collect-number">
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
                <a class="show-detail-lighting-ta">电TA</a>
              </div>
              <div>
                <span>一个电池只能电一次哦~</span>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="show-detail-main-sider">
        <div class="show-detail-user-about">
          <div class="show-detail-user-about-content">
            <div class="show-detail-userInfo-avatar">
              <img src="../../assets/images/videoDetail/avatar.png" alt="avatar">
            </div>
            <div class="show-detail-userInfo-text">
              <div class="show-detail-nick-name-lv">
                <h2><a href="">{{nikeName}}</a></h2><span>lv2</span>
              </div>
              <!--<img src="" alt="">--><span>厂牌</span>
              <span>{{personalIntroduction}}</span>
            </div>
          </div>
          <div class="show-detail-concern-message">
            <a-button>关注{{concernNumber}}</a-button>
            <img src="../../assets/images/videoDetail/private-message.png" alt="privateMessage">
          </div>
        </div>
        <div class="show-detail-recommend-video">
          <SingleVideo></SingleVideo>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import BannerBw from '../../components/Banner/BannerBw.vue';
import SingleVideo from '../../components/singleVideo/singleVideo.vue';
export default {
  name: 'ShowDetail',
  components: {
    BannerBw,
    SingleVideo
  },
  data() {
    return {
      // videojs options
      playerOptions: {
        muted: false, // 开启声音
        autoplay: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: ''
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
      },
      refslist: [], // 对象列表
      srclist: [// 视频图片列表
        { videosrc: 'http://vjs.zencdn.net/v/oceans.mp4' }
      ],
      num: 0,
      time: '',
      videoName: '青鸟飞鱼',
      videoTime: '2018-12-16',
      introduction: '介绍',
      visitNumber: '999+',
      niceNumber: '999+',
      collectNumber: '999+',

      nikeName: '钓鱼的彩虹糖',
      personalIntroduction: '没有个性就是我的个性',
      concernNumber: 144
    };
  },
  mounted() {
    if (this.srclist[0].videosrc) { // 第一个是视频
      this.playerOptions.sources[0].src = this.srclist[this.num].videosrc;
    } else { // 第一个是图片
      this.startPlay();
    }
  },
  methods: {
    startPlay() { // 图片
      this.time = setInterval(() => {
        this.countPlay();
        if (this.srclist[this.num].videosrc) {
          clearInterval(this.time);
          this.playerOptions.sources[0].src = '';
          this.playerOptions.sources[0].src = this.srclist[this.num].videosrc;
        }
      }, 3000);
    },
    countPlay() {
      this.num++;
      this.$refs.videoLs.style.left = -600 * (this.num) + 'px';
      this.$refs.videoLs.style.transition = '2s';
      if (this.num >= this.srclist.length) {
        this.num = 0;
        this.$refs.videoLs.style.left = '0px';
        this.$refs.videoLs.style.transition = '0s';
      }
    },
    onPlayerPlay(player) {
    },
    onPlayerPause(player) {
    },
    onPlayerEnded(player) { // 播放完毕之后 src被替换
      this.countPlay();
      this.playerOptions.sources[0].src = '';
      this.playerOptions.sources[0].src = this.srclist[this.num].videosrc;
      if (this.srclist[this.num].imsrc) {
        this.startPlay();
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
    playerStateChanged(playerCurrentState) { // 播放的进程中就是一直在播放
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
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .show-detail-layout
    width 70%
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction row
  .show-detail-main-content
    width 70%
    margin 10px 10px
    display flex
    display -webkit-flex
    flex-direction column
  .show-detail-main-sider
    width 30%
    margin 10px 10px
    display flex
    display -webkit-flex
    flex-direction column
  .show-detail-video-info
    width 70%
    margin 10px 10px
    display flex
    display -webkit-flex
    flex-direction column
  .show-detail-video-name-time
    display flex
    display -webkit-flex
    flex-direction row
  .show-detail-video-introduction
    display flex
    display -webkit-flex
    flex-direction row
  .show-detail-video-list
    width 100%
    /*height 544px*/
</style>
