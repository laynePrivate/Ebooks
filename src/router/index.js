import Vue from 'vue'
import Router from 'vue-router'
import route from './route'

Vue.use(Router)

var routes = [
  //主页
  {
    path: '/',
    name: 'index',
    redirect: to=>{
      return '/index'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: route.index
  },
  //账号
  {
    path: '/user',
    name: 'user',
    component: route.user
  },
  //邮件
  {
    path: '/email',
    name: 'email',
    component: route.email
  },
  //设置
  {
    path: '/setting',
    name: 'setting',
    component: route.setting
  }
]
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: routes
})
