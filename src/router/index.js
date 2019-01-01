import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import MSiteMore from '../pages/MSite/MSiteMore.vue'
import NotFound from '../pages/404/404.vue'
import Exchange from '../pages/Exchange/Exchange.vue'
import OtherPerson from '../pages/OtherPerson/OtherPerson.vue'
import Profile from '../pages/Profile/Profile.vue'
import Protocol from '../pages/Protocol/protocol.vue'
import SearchResult from '../pages/SearchResult/SearchResult.vue'
import Show from '../pages/Show/Show.vue'
import ShowDetail from '../pages/ShowDetail/ShowDetail.vue'
import ShowPublish from '../pages/ShowPublish/ShowPublish.vue'
import VideoDetail from '../pages/VideoDetail/VideoDetail.vue'
import AntDesignLayout from '../pages/TestV/antDesignLayout.vue'
import TestCom from '../pages/TestV/testComp.vue'
import SubmitVideo from '../pages/SubmitVideo/SubmitVideo.vue'


// 声明使用插件
Vue.use(Router)

export default new Router({
  // 所有路由
  routes: [
    {
      path: '/',
      name: 'root',
      component: MSite
    },
    {
      path: '/msite',
      name: 'msite',
      component: MSite
    },
    {
      path: '/msite-more',
      name: 'msiteMore',
      component: MSiteMore
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    },
    {
      path: '/other-person',
      name: 'otherPerson',
      component: OtherPerson
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: Protocol
    },
    {
      path: '/search-result',
      name: 'searchResult',
      component: SearchResult
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/show-detail',
      name: 'showDetail',
      component: ShowDetail
    },
    {
      path: '/show-publish',
      name: 'showPublish',
      component: ShowPublish
    },
    {
      path: '/video-detail',
      name: 'videoDetail',
      component: VideoDetail
    },
    {
      path: '/ant-design-layout',
      name: 'antDesignLayout',
      component: AntDesignLayout
    },
    {
      path: '/test-com',
      name: 'testCom',
      component: TestCom
    },
    {
      path: '/submit-video',
      name: 'submitVideo',
      component: SubmitVideo
    }
  ]
})
