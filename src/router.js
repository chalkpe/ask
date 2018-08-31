import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminView from './views/AdminView.vue'
import PublicView from './views/PublicView.vue'
import DeviceManager from './views/DeviceManager.vue'

import AnswerDetail from './components/public/AnswerDetail.vue'
import QuestionDetail from './components/admin/QuestionDetail.vue'

Vue.use(VueRouter)

const admin = [
  { path: 'devices', component: DeviceManager },
  { path: ':id', component: QuestionDetail }
]

const routes = [
  { path: '/admin', component: AdminView, children: admin },
  { path: '/:id', component: AnswerDetail },
  { path: '/', component: PublicView },
  { path: '*', redirect: '/' }
]

export default new VueRouter({ routes })
