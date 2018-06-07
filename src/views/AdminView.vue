<template>
  <div
    v-if="user"
    class="admin">

    <question-stream @open="question = $event" />
    <router-view />
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
import QuestionStream from '../components/QuestionStream.vue'

const auth = firebase.auth()
const db = firebase.firestore()

export default {
  name: 'AdminView',
  components: { QuestionStream },

  data: () => ({
    email: '',
    password: '',
    question: null,

    user: null,
    token: null
  }),

  async created () {
    auth.onAuthStateChanged(user => this.updateToken(this.user = user))

    const messaging = firebase.messaging()
    messaging.requestPermission()
      .then(() => messaging.onTokenRefresh(() => this.updateToken()))
      .catch(err => console.error('failed to initialize messaging', err))
  },

  methods: {
    auth () {
      if (!this.email || !this.password) return
      return auth
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(err => alert(`cannot sign in: ${err.code} => ${err.message}`))
    },

    async updateToken () {
      if (!this.user) return
      const { uid, email } = this.user

      this.token = await firebase.messaging().getToken()
      if (!this.token) return console.error('noo token is null')

      const ref = db.collection('admins').doc(uid)
      const registrations = (await ref.get()).get('registrations') || []
      if (registrations.find(({ token }) => token === this.token)) return

      await ref.update({
        email,
        updatedAt: Date.now(),
        registrations: registrations.concat({
          token: this.token,
          subscribedAt: Date.now(),
          userAgent: navigator.userAgent
        })
      })
    }
  }
}
</script>

<style lang="scss">
  .auth {
    max-width: 20em;
  }
</style>
