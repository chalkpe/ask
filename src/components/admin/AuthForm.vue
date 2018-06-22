<template lang="html">
  <div class="auth">
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
import { mapState } from 'vuex'

import firebase from 'fb'
const auth = firebase.auth()
const db = firebase.firestore()

export default {
  data: () => ({
    email: '',
    password: '',
    token: null
  }),
  computed: mapState(['user']),

  async created () {
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
    }
  }
}
</script>

<style lang="scss">
  .auth {
    max-width: 20em;
  }
</style>
