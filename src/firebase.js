import Vue from 'vue'
import VueFirestore from 'vue-firestore'

import config from './config'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueFirestore)
firebase.initializeApp(config)

export default firebase
