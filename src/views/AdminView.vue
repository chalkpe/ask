<template>
  <div
    v-if="user"
    class="admin">

    <question-stream @open="question = $event" />
    <answer-form
      :question="question"
      @close="question = null" />
  </div>

  <div
    v-else
    class="auth">

    <p>어서 돌아가세요!<br>여러분들은 이 페이지에 올 이유가 없어요!</p>

    <div class="form-group">
      <input
        v-model="email"
        type="email"
        class="form-input"
        placeholder="Email">
    </div>

    <div class="form-group">
      <input
        v-model="password"
        type="password"
        class="form-input"
        placeholder="Password">
    </div>

    <button
      class="btn btn-primary btn-block"
      @click="auth">어드민 로그인</button>
  </div>
</template>

<script>
import { vapidKey } from '../config'
import firebase from '../firebase'
import AnswerForm from '../components/AnswerForm.vue'
import QuestionStream from '../components/QuestionStream.vue'

const db = firebase.firestore()
const messaging = firebase.messaging()

export default {
  name: 'AdminView',
  components: { AnswerForm, QuestionStream },

  data: () => ({
    email: '',
    password: '',
    user: null,
    question: null
  }),

  watch: {
    async user () {
      if (!this.user) return

      const token = await messaging.getToken()
      const doc = db.collection('admins').doc(this.user.uid)

      const tokens = (await doc.get()).get('tokens')
      if (!tokens.include(token)) tokens.push(token)

      await doc.update({ tokens })
    }
  },

  async created () {
    firebase.auth().onAuthStateChanged(user => (this.user = user))

    messaging.usePublicVapidKey(vapidKey)
    await messaging.requestPermission()
  },

  methods: {
    exit () {
      firebase.auth().signOut()
    },

    auth () {
      if (!this.email) return
      if (!this.password) return

      firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(err => alert(`error ${err.code} => ${err.message}`))
    }
  }
}
</script>

<style lang="scss">
  .auth {
    max-width: 20em;
  }
</style>
