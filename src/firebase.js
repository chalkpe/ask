import Vue from 'vue'
import VueFirestore from 'vue-firestore'

import config from './config'
import firebase from 'firebase'
require('firebase/firestore')

Vue.use(VueFirestore)
export default firebase.initializeApp(config)
