<template>
  <div class="profile-container">
    <BannerBw></BannerBw>
    <div class="profile-content">
      <div class="profile-profile">
        <div class="profile-avatar">
          <img src="../../assets/images/otherPerson/avatar.png" alt="avatar">
          <div class="profile-nick-name">
            <div class="nick-name-lv">
              <div>
                <h1>昵称</h1>
              </div>
              <div>
                <a href="">lv3</a>
              </div>
            </div>
            <div class="person-sign">
              <a href="">个性签名</a>
            </div>
          </div>
        </div >
        <div class="other-person-concern">
          <a href="">+关注</a>
          <a href="">私信</a>
        </div>
      </div>
      <div class="profile-nav-uid-time">
        <div class="nav-uid-time-nav">
          <div class="profile-personal-center">
            <h1>个人中心</h1>
          </div>
          <div class="profile-fans-number">
            <span>粉丝数</span>
            <a href="">140</a>
          </div>
          <div class="profile-concern-number">
            <span>关注数</span>
            <a href="">140</a>
          </div>
        </div>
        <div class="profile-changePwd-wrap">
          <div class="profile-changePwd">
            <div class="profile-changePwd-img">
              <img src="../../assets/images/profile/profile-changePwd.png" alt="changePwd">
            </div>
          </div>
        </div>
      </div>
      <a-divider style="margin-top: 0px; margin-bottom: 0px;"/>

      <div class="profile-sideBar">
        <a-menu @click="handleClick" :defaultSelectedKeys="['sub1']" :defaultOpenKeys="['sub1']" mode="inline" style="width: 175px">
          <a-menu-item key="1">
            <span>我的信息</span><img src="../../assets/images/profile/profile-my-info.png" alt="info">
          </a-menu-item>
          <a-menu-item key="2">
            <span>投稿管理</span><img src="../../assets/images/profile/profile-vote-man.png" alt="vote">
          </a-menu-item>
          <a-menu-item key="3">
            <span>我的展柜</span><img src="../../assets/images/profile/profile-my-show.png" alt="show">
          </a-menu-item>
          <a-menu-item key="4">
            <span>厂牌管理</span><img src="../../assets/images/profile/profile-my-tag.png" alt="tag">
          </a-menu-item>
          <a-menu-item key="5">
            <span>我的收藏</span><img src="../../assets/images/profile/profile-my-coll.png" alt="collection">
          </a-menu-item>
          <a-menu-item key="6">
            <span>我的消息</span><img src="../../assets/images/profile/profile-my-message.png" alt="message">
          </a-menu-item>
          <a-menu-item key="7">
            <span>关注动态</span><img src="../../assets/images/profile/profile-concern.png" alt="concern">
          </a-menu-item>
          <a-menu-item key="8">
            <span>系统消息</span><img src="../../assets/images/profile/profile-sys-message.png" alt="sys">
          </a-menu-item>
          <a-menu-item key="9">
            <span>我的兑换</span><img src="../../assets/images/profile/profile-my-exchange.png" alt="exchange">
          </a-menu-item>
          <a-menu-item key="10">
            <span>游览历史</span><img src="../../assets/images/profile/profile-visit.png" alt="visit">
          </a-menu-item>
        </a-menu>
      </div>

      <div class="profile-my-info" v-if="sideBarKey === 1">
        <img src="../../assets/images/otherPerson/avatar.png" alt="avatar">
        <span>钓鱼的彩虹糖</span>
        <a-icon type="edit" />
        <!--TODO 等级和进度条-->
        <span>lv show</span>
        <div>
          <a href="">回答摆玩问卷，立即获得10电池奖励！</a>
        </div>
        <div>
          <span>性别</span>
          <span>男</span>
          <a-icon type="edit" />
        </div>
        <div>
          <span>所在地</span>
          <span>浙江省</span>
          <span>杭州市</span>
          <span>西湖区</span>
          <a-icon type="edit" />
        </div>
        <div>
          <span>手机号码</span>
          <span>177****7310</span>
          <!--<img src="" alt=""> TODO-->
          <a href="" style="background-color: dodgerblue;color: white">修改手机></a>
        </div>
        <div>
          <span>邮箱地址</span>
          <span>021349203@qq.com</span>
          <!--<img src="" alt=""> TODO-->
        </div>
        <div>
          <span>个性签名</span>
          <a-textarea placeholder="Basic usage" :rows="4"/>
          <span>请留空您不想暴露的个人信息，以免造成不必要的隐私泄露。</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  export default {
    name: 'Profile',
    components: {
      BannerBw
    },
    data () {
      return {
        current: ['mail'],
        openKeys: ['sub1'],
        sideBarKey : 1,
      }
    },
    methods: {
      handleClick (e) {
        console.log('click', e.key)
        this.sideBarKey = parseInt(e.key);
      },
      titleClick (e) {
        console.log('titleClick', e)
      },
    },
    watch: {
      openKeys (val) {
        console.log('openKeys', val)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .profile-content
    width 75%
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
  .profile-profile
    width 1364px
    height 235px
    margin 5px 5px
    background-image url("../../assets/images/profile/profile-header.png")
    position relative
  .profile-profile .profile-avatar
    width 340px
    height 40px
    position absolute
    display flex
    display -webkit-flex
    flex-direction row
    left 30px
    top 70px
  .profile-profile .profile-avatar img
    width 116px
    height 116px
  .profile-nick-name
    margin-top 20px
    margin-left 10px
    display flex
    display -webkit-flex
    flex-direction column
  .profile-nick-name .nick-name-lv
    height 25px
    display flex
    display -webkit-flex
    flex-direction row
  .profile-nick-name .person-sign
    height 20px
    margin-top 40px
  .profile-concern
    display flex
    display -webkit-flex
    flex-direction row
    position absolute
    right 30px
    bottom 10px
  .profile-concern a
    margin-left 10px
  .profile-nav-uid-time
    width 100%
    height 55px
    display flex
    display -webkit-flex
    flex-direction row
  .profile-nav-uid-time .nav-uid-time-nav
    width 920px
    margin-top 20px
    display flex
    display -webkit-flex
    flex-direction row
  .profile-nav-uid-time .nav-uid-time-nav a
    margin-left 5px
    margin-right 5px
  .profile-fans-number
    display flex
    display -webkit-flex
    flex-direction column
  .profile-concern-number
    display flex
    display -webkit-flex
    flex-direction column
  .profile-changePwd-wrap
    width 410px
    margin-left 200px
    display flex
    display -webkit-flex
    flex-direction row
  .profile-changePwd
    margin 10px
    display flex
    display -webkit-flex
    flex-direction row
</style>
