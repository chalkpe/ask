import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'

import './firebase'
import router from './router'

console.log('Vue loaded', new Vue({
  router,
  el: '#app',
  render: h => h(App)
}))
