import Vue from 'vue'
import VueFirestore from 'vue-firestore'

import { config, vapidKey } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueFirestore)
firebase.initializeApp(config)
firebase.messaging().usePublicVapidKey(vapidKey)

export default firebase
