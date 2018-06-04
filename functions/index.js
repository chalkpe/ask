const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()

exports.notify = functions.firestore
  .document('questions/{id}')
  .onCreate(snap => db.collection('admins').get().then(admins => {
    const { question } = snap.data()
    const tokens = admins.docs
      .map(doc => doc.get('tokens'))
      .reduce((a, b) => a.concat(b), [])

    const payload = {
      notification: {
        title: 'Ask',
        body: `새로운 질문: ${question}`
      }
    }

    console.log('tokens', tokens)
    console.log('question', question)

    return admin.messaging().sendToDevice(tokens, payload)
  }))
