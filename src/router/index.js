import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/page/login'
import home from '@/page/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home,
      meta: {
        requireAuth: true// 添加该字段，表示进入这个路由是需要登录的
      }
    }
  ]
})
