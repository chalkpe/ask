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
import firebase from '../firebase'
import AnswerForm from '../components/AnswerForm.vue'
import QuestionStream from '../components/QuestionStream.vue'

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
      const { user } = this
      if (!user || !user.uid) return

      try {
        const token = await firebase.messaging().getToken()
        const ref = firebase.firestore().collection('admins').doc(user.uid)

        const tokens = (await ref.get()).get('tokens')
        if (!tokens.includes(token)) {
          await ref.update({ tokens: tokens.concat(token) })
        }
      } catch (err) {
        console.error('cannot update FCM token', err)
      }
    }
  },

  async created () {
    firebase.auth().onAuthStateChanged(user => (this.user = user))

    try {
      await firebase.messaging().requestPermission()
    } catch (err) {
      console.error('failed to request permission', err)
    }
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
