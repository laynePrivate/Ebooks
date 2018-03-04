// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import html5Index from './lib/index.js'
import VueResource from 'vue-resource'
import css from './assets/css/index.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  html5Index,
  components: { App },
  template: '<App/>'
})
