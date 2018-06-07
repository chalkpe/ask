import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from './views/MainView.vue'
import AdminView from './views/AdminView.vue'
import AnswerView from './views/AnswerView.vue'
import AnswerForm from './views/AnswerForm.vue'

Vue.use(VueRouter)

const admin = [
  { path: ':id', component: AnswerForm }
]

const routes = [
  { path: '/', component: MainView },
  { path: '/admin', component: AdminView, children: admin },
  { path: '/:id', component: AnswerView },
  { path: '*', redirect: '/' }
]

export default new VueRouter({ routes })
