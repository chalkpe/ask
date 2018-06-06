/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js')

firebase.initializeApp({ messagingSenderId: '13330353845' })
firebase.messaging().setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js]', payload)
  return self.registration.showNotification('Ask', { body: JSON.stringify(payload) })
})
