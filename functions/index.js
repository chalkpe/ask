const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()

exports.notify = functions.firestore
  .document('questions/{id}')
  .onCreate(() => db.collection('admins').get().then(admins => {
    const tokens = admins.docs
      .map(doc => doc.get('tokens'))
      .reduce((a, b) => a.concat(b), [])

    const payload = {
      notification: {
        title: 'Ask',
        body: '새로운 질문이 있습니다!'
      }
    }

    console.log('tokens', tokens)
    return admin.messaging().sendToDevice(tokens, payload)
  }))
