import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import { config, vapidKey } from './config'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'
import 'firebase/firestore'
import 'firebase/functions'

Vue.use(VueFirestore)
firebase.initializeApp(config)

try {
  firebase.messaging().usePublicVapidKey(vapidKey)
} catch (err) {
  console.error('oh no i need notification', err)
}

export default firebase
