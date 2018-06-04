importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js');

firebase.initializeApp({ messagingSenderId: '13330353845' });
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  var notificationTitle = 'Background Message Title';
  var notificationOptions = { body: 'Background Message body.' };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
