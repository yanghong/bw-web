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
      <div class="profile-content-main">
        <div class="profile-sideBar">
          <a-menu @click="handleClick" :defaultSelectedKeys="['10']" :defaultOpenKeys="['10']" mode="inline" style="width: 175px">
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
        <div class="profile-content-right">

          <div class="profile-my-history" v-if="sideBarKey === 10">
            <div class="profile-my-history-time">
              <a-menu @click="handleHistoryClick" :defaultSelectedKeys="['sub1']" :defaultOpenKeys="['sub1']" mode="inline" style="width: 175px">
                <a-menu-item key="sub1">
                  <span>今天</span>
                </a-menu-item>
                <a-menu-item key="sub2">
                  <span>近三天</span>
                </a-menu-item>
                <a-menu-item key="sub3">
                  <span>近一周</span>
                </a-menu-item>
              </a-menu>
            </div>
            <div class="profile-my-history-list">
              <div class="profile-my-history-list-sub1" v-if="historyKey === 'sub1'">
                <span>sub1</span>
                <!--TODO 填写组件信息,通过传递参数的方式进行传递-->
                <HistoryItem></HistoryItem>
              </div>
              <div class="profile-my-history-list-sub2" v-if="historyKey === 'sub2'">
                <span>sub2</span>
                <!--TODO 填写组件信息,通过传递参数的方式进行传递-->
                <HistoryItem></HistoryItem>
              </div>
              <div class="profile-my-history-list-sub3" v-if="historyKey === 'sub3'">
                <span>sub3</span>
                <!--TODO 填写组件信息,通过传递参数的方式进行传递-->
                <HistoryItem></HistoryItem>
              </div>
            </div>
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

          <div class="profile-vote-manage" v-if="sideBarKey === 2">
            <div class="profile-vote-manage-content">
              <!--TODO give argument to component-->
              <SingleVideo></SingleVideo>
            </div>
            <div class="profile-vote-manage-pagination">
              <!--TODO 分页查询方法都需要适配-->
              <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChangePagination" />
            </div>
          </div>

          <div class="profile-my-show" v-if="sideBarKey === 3">
            <div class="profile-my-show-content">
              <!--TODO give argument to component-->
              <SingleVideo></SingleVideo>
            </div>
            <div class="profile-my-show-pagination">
              <!--TODO 分页查询-->
              <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChangePagination" />
            </div>
          </div>

          <div class="profile-tag-manage" v-if="sideBarKey === 4">
            <div class="profile-tag-manage-content">
              <div class="profile-my-create-tag">
                <div class="profile-my-create-tag-img">
                  <div class="profile-my-create-tag-img-top">
                    <span>我创建的厂牌</span>
                    <span>领取人数</span>
                    <img src="" alt="share">
                    <img src="" alt="share-to-weibo">
                    <img src="" alt="share-to-weixin">
                    <img src="" alt="share-to-qq">
                  </div>
                  <div class="profile-my-create-tag-img-tag">
                    <img src="" alt="tag">
                  </div>
                </div>
                <div class="profile-my-create-tag-info">
                  <div class="profile-tag-info-name">
                    <span>厂牌名称</span>
                    <h2>火拳艾斯</h2>
                  </div>
                  <div class="profile-tag-info-condition">
                    <span>领取条件</span>
                    <span>100</span>
                    <span>电池</span>
                  </div>
                  <div class="profile-tag-info-img">
                    <span>厂牌封面</span>
                    <!--TODO upload item-->
                    <img src="" alt="">
                  </div>
                  <div class="profile-tag-info-edit">
                    <a-button @click="myCreateEditTag">编辑厂牌</a-button>
                  </div>
                </div>
              </div>
              <div class="profile-my-create-tag-no">
                <!--TODO 判断是否有厂牌和创建厂牌的权限-->
                <div class="profile-my-create-tag-img-no">
                  <div class="profile-my-create-tag-img-no-top">
                    <span>我创建的厂牌</span>
                  </div>
                  <div class="profile-my-create-tag-img-no-tag">
                    <img src="../../assets/images/profile/profile-create-tag-no.png" alt="目前还不能创建厂牌">
                  </div>
                </div>
                <div class="profile-my-create-tag-info-no">
                  <div class="profile-tag-info-no">
                    <!--TODO 创建按钮有资格的控制，没有创建权限为灰-->
                    <a-button @click="createTag">+创建厂牌</a-button>
                  </div>
                </div>
              </div>
              <div class="profile-my-collect-tag">
                <div class="profile-my-collect-tag-list">
                  <!--TODO get img list-->
                  <img src="" alt="collected-tag-list">
                </div>
                <div class="profile-my-collect-tag-pagination">
                  <!--TODO 分页查询方法都需要适配-->
                  <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChangePagination" />
                </div>
              </div>
            </div>

          </div>

          <div class="profile-my-collection" v-if="sideBarKey === 5">
            <div class="profile-my-collection-nav">
              <a href="" @click="myCollectionGetVideo">视频</a>
              <a href="" @click="myCollectionShow">展柜</a>
            </div>
            <div class="profile-my-collection-content">
              <SingleVideo></SingleVideo>
            </div>
            <div class="profile-my-collection-pagination">
              <!--TODO 分页查询方法都需要适配-->
              <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChangePagination" />
            </div>
          </div>

          <div class="profile-my-message" v-if="sideBarKey === 6">
            <!--TODO 判断是否有消息-->
            <div class="profile-my-message-content">
              <div class="profile-my-message-none" v-if="Object.keys(myMessage).length === 0">
                <span>好像没有收到消息哦，快去找个人聊聊天吧~~~</span>
              </div>
              <div class="profile-my-message-has" v-if="Object.keys(myMessage).length !== 0">
                <div class="profile-my-message-chat">
                  <!--TODO 添加聊天组件-->
                </div>
              </div>
            </div>
          </div>

          <div class="profile-my-concerns" v-if="sideBarKey === 7">
            <!--TODO 将获取到的信息传入组件中，组件需改造-->
            <Concern></Concern>
          </div>

          <div class="profile-sys-message" v-if="sideBarKey === 8">
            <!--TODO 传入参数，v-for组件-->
            <SysMessage></SysMessage>
          </div>

          <div class="profile-my-exchange" v-if="sideBarKey === 9">
            <!--TODO 传入参数-->
            <MyExchange></MyExchange>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  import SingleVideo from '../../components/singleVideo/singleVideo.vue'
  import Concern from './concern.vue'
  import SysMessage from './sysMessage.vue'
  import MyExchange from './myExchange.vue'
  import HistoryItem from './historyItem.vue'
  export default {
    name: 'Profile',
    components: {
      BannerBw,
      SingleVideo,
      Concern,
      SysMessage,
      MyExchange,
      HistoryItem
    },
    data () {
      return {
        current: ['mail'],
        openKeys: ['sub1'],
        sideBarKey: 1,
        myMessage: [],
        historyKey: undefined
      }
    },
    methods: {
      handleClick (e) {
        this.sideBarKey = parseInt(e.key);
      },
      handleHistoryClick(e) {
        console.log(e.key);
        this.historyKey = e.key;
        // TODO 获取历史数据
      },
      titleClick (e) {
        console.log('titleClick', e)
      },
      onChangePagination(pageNumber) {
        console.log('Page: ', pageNumber);
      },
      /**
       * 厂牌管理-编辑厂牌
       */
      myCreateEditTag() {

      },
      /**
       * 厂牌管理-创建厂牌
       */
      createTag () {

      },
      /**
       * 我的收藏-分类查询-视频
       */
      myCollectionGetVideo() {

      },
      /**
       *  我的收藏-分类查询-展柜
       */
      myCollectionShow() {

      }
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
    margin-top 5px
    display flex
    display -webkit-flex
    flex-direction row
  .profile-personal-center
    margin-top 5px
  .profile-nav-uid-time .nav-uid-time-nav a
    margin-left 5px
    margin-right 5px
    color red
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
  .profile-content-main
    width 100%
    height 640px
    display flex
    display -webkit-flex
    flex-direction row
  .profile-content-right
    margin-left 10px
    margin-top 5px
  .profile-my-history
    width 100%
    height 640px
    display flex
    display -webkit-flex
    flex-direction row
</style>
