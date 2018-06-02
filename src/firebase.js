import dotenv from 'dotenv'

import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

dotenv.config()
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
})
