import 'babel-polyfill'

import './firebase'
import Vue from 'vue'
import App from './App.vue'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})

console.log('Vue loaded', vm)
