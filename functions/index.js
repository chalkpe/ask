const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

const t = () => admin
  .firestore()
  .collection('admins').get()
  .then(({ docs }) => [].concat(...docs.map(d => d.get('tokens'))))

const p = (snap, ctx) => ({
  notification: {
    title: 'Ask',
    body: `새로운 질문: ${snap.data().question}`,
    click_action: `https://ask.chalk.pe/#/${ctx.params.id}`
  }
})

const n = (tokens, payload) =>
  admin.messaging().sendToDevice(tokens, payload)

exports.notify = functions.firestore
  .document('questions/{id}')
  .onCreate((s, c) => t().then(k => n(k, p(s, c))))
