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
      return '/sys'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: route.login
  },
  {
    path: '/sys',
    name: 'index',
    component: route.sys,
    children: [  //这里配置二级路由
      {
        path: '',
        redirect: to => {
          return 'index'
        }
      },
      {
        path: 'index',
        name: 'homepage',
        component: route.index
      },
      {
        path: 'email',
        name: 'email',
        component: route.email
      },
      {
        path: 'setting',
        name: 'setting',
        component: route.setting
      }
    ]
  },
]
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: routes
})
