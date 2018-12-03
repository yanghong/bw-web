import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import NotFound from '../pages/404/404.vue'

// 声明使用插件
Vue.use(Router)

export default new Router({
  // 所有路由
  routes: [
    {
      path: '/',
      name: 'MSite',
      component: MSite,
      redirect: '/404'
    },
    {
      path: '/msite',
      name: 'MSite',
      component: MSite
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    }
  ]
})
