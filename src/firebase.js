import config from './config'

import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)
firebase.initializeApp(config)
