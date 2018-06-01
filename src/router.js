import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from './views/MainView.vue'
import AdminView from './views/AdminView.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: MainView },
  { path: '/admin', component: AdminView }
]

export default new VueRouter({ routes })
