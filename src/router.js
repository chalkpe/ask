import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminView from './views/AdminView.vue'
import PublicView from './views/PublicView.vue'

import AnswerDetail from './components/public/AnswerDetail.vue'
import QuestionDetail from './components/admin/QuestionDetail.vue'

Vue.use(VueRouter)

const q = { path: ':id', component: QuestionDetail }

const routes = [
  { path: '/admin', component: AdminView, children: [q] },
  { path: '/:id', component: AnswerDetail },
  { path: '/', component: PublicView },
  { path: '*', redirect: '/' }
]

export default new VueRouter({ routes })
