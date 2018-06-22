import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminView from './views/AdminView.vue'
import PublicView from './views/PublicView.vue'

import AnswerDetail from './components/public/AnswerDetail.vue'
import QuestionDetail from './components/admin/QuestionDetail.vue'

Vue.use(VueRouter)

const a = { path: ':id', component: AnswerDetail }
const q = { path: ':id', component: QuestionDetail }

const routes = [
  { path: '/admin', component: AdminView, children: [q] },
  { path: '/', component: PublicView, children: [a] },
  { path: '*', redirect: '/' }
]

export default new VueRouter({ routes })
