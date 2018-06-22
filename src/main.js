import 'babel-polyfill'
import 'whatwg-fetch'

import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

const vm = new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

console.log('Vue loaded', vm)
