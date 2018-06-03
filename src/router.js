import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from './views/MainView.vue'
import AdminView from './views/AdminView.vue'
import AnswerView from './views/AnswerView.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: MainView },
  { path: '/admin', component: AdminView },
  { path: '/:id', component: AnswerView },
  { path: '*', redirect: '/' }
]

export default new VueRouter({ routes })
