import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
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


// 声明使用插件
Vue.use(Router)

export default new Router({
  // 所有路由
  routes: [
    {
      path: '/',
      name: 'MSite',
      component: MSite
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/other-person',
      name: 'OtherPerson',
      component: OtherPerson
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/protocol',
      name: 'Protocol',
      component: Protocol
    },
    {
      path: '/search-result',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/show-detail',
      name: 'ShowDetail',
      component: ShowDetail
    },
    {
      path: '/show-publish',
      name: 'ShowPublish',
      component: ShowPublish
    },
    {
      path: '/video-detail',
      name: 'VideoDetail',
      component: VideoDetail
    }
  ]
})
