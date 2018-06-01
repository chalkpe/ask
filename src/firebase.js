import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyDh9lqzVksp4KmQ-J08SI7qtUQedSGDobM',
  authDomain: 'chalk-ask.firebaseapp.com',
  databaseURL: 'https://chalk-ask.firebaseio.com',
  storageBucket: 'chalk-ask.appspot.com'
})
