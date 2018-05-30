import 'babel-polyfill'
import './style.css'

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log('Vue loaded', new Vue({
  el: '#app',
  render: h => h(App)
}))
