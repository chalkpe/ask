const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

const t = () => admin
  .firestore()
  .collection('admins').get()
  .then(({ docs }) => docs.map(d => d.get('registrations').map(r => r.token)))

const p = (snap, ctx) => ({
  notification: {
    title: '새로운 질문이 있습니다!',
    body: `${snap.data().question}`,
    click_action: `https://ask.chalk.pe/#/admin/${ctx.params.id}`
  }
})

const n = (tokensList, payload) =>
  admin.messaging().sendToDevice([].concat(...tokensList), payload)

exports.notify = functions.firestore
  .document('questions/{id}')
  .onCreate((s, c) => t().then(k => n(k, p(s, c))))
