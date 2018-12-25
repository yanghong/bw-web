<template>
  <div class="container">
    <BannerBw v-bind:type="pageType"></BannerBw>
    <div class="content">
      <div class="background-img">
        <img src="../../assets/images/exchange/protocol_bkg.jpg" alt="background">
      </div>
      <div class="show-nav">
        <div class="show-nav-a">
          <a href="">摆玩热榜</a>
        </div>
        <div class="show-nav-a">
          <a href="">原创作品</a>
        </div>
        <div class="show-nav-a">
          <a href="">珍藏佳品</a>
        </div>
      </div>
      <a-divider style="margin-top: 0px; margin-bottom: 0px;"/>
      <div class="main-content">
        <a-row type="flex" justify="center" align="top">
          <a-col :span="4">
            <div class="section">
              <a-card hoverable style="width: 240px">
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="cover"/>
                <a-card-meta title="Europe Street beat">
                  <template slot="description">
                    <div class="video-info">
                      <div class="visit-number">
                        <img src="../../assets/images/videoDetail/visit-number.png" alt="">{{visitNumber}}
                      </div>
                      <div class="nice-number">
                        <img src="../../assets/images/videoDetail/niced-icon.png" alt="">{{niceNumber}}
                      </div>
                      <div class="list-number">
                        <!--使用用户头像和昵称-->
                        <img src="../../assets/images/videoDetail/comment-icon.png" alt=""><a href="">{{listNumber}}</a>
                      </div>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="4">
            <div class="section">
              <a-card hoverable style="width: 240px">
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="cover"/>
                <a-card-meta title="Europe Street beat">
                  <template slot="description">
                    <div class="video-info">
                      <div class="visit-number">
                        <img src="../../assets/images/videoDetail/visit-number.png" alt="">{{visitNumber}}
                      </div>
                      <div class="nice-number">
                        <img src="../../assets/images/videoDetail/niced-icon.png" alt="">{{niceNumber}}
                      </div>
                      <div class="list-number">
                        <!--使用用户头像和昵称-->
                        <img src="../../assets/images/videoDetail/comment-icon.png" alt=""><a href="">{{listNumber}}</a>
                      </div>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="4">
            <div class="section">
              <a-card hoverable style="width: 240px">
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="cover"/>
                <a-card-meta title="Europe Street beat">
                  <template slot="description">
                    <div class="video-info">
                      <div class="visit-number">
                        <img src="../../assets/images/videoDetail/visit-number.png" alt="">{{visitNumber}}
                      </div>
                      <div class="nice-number">
                        <img src="../../assets/images/videoDetail/niced-icon.png" alt="">{{niceNumber}}
                      </div>
                      <div class="list-number">
                        <!--使用用户头像和昵称-->
                        <img src="../../assets/images/videoDetail/comment-icon.png" alt=""><a href="">{{listNumber}}</a>
                      </div>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
          <a-col :span="4">
            <div class="section">
              <a-card hoverable style="width: 240px">
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="cover"/>
                <a-card-meta title="Europe Street beat">
                  <template slot="description">
                    <div class="video-info">
                      <div class="visit-number">
                        <img src="../../assets/images/videoDetail/visit-number.png" alt="">{{visitNumber}}
                      </div>
                      <div class="nice-number">
                        <img src="../../assets/images/videoDetail/niced-icon.png" alt="">{{niceNumber}}
                      </div>
                      <div class="list-number">
                        <!--使用用户头像和昵称-->
                        <img src="../../assets/images/videoDetail/comment-icon.png" alt=""><a href="">{{listNumber}}</a>
                      </div>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
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
      return {
        pageType: 'exchange',
        visitNumber: '999+',
        niceNumber: '999+',
        listNumber: '999+'
      }
    },
    computed: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
  .background-img
    width 100%
    height 234px
    margin-top 1px
    margin-left 0px
  .show-nav
    width 600px
    height 40px
    display flex
    display -webkit-flex
    flex-direction row
    margin 10px auto
  .show-nav .show-nav-a
    width 84px
    height 21px
    margin 5px 60px 10px 10px
  .show-nav .show-nav-a a
    font-family MicrosoftYaHei
    font-size 20.8px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #646464
    &:hover
      color coral
  .main-content
    width 100%
    margin 0 auto
    margin-top 5px
  .video-info
    width 100%
    height 10%
    display flex
  .visit-number img
    width 24px
    height 20px
  .nice-number img
    width 20px
    height 20px
  .list-number img
    width 34px
    height 34px
  .list-number a
    width 49px
    height 16px
    font-family MicrosoftYaHei
    font-size 16.7px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #000000
</style>
