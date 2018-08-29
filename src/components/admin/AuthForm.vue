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
      :disabled="!email || !password"
      class="btn btn-primary btn-block"
      @click="auth">어드민 로그인</button>
  </div>
</template>

<script>
export default {
  data: () => ({ email: '', password: '' }),
  methods: {
    auth () {
      this.$store
        .dispatch('signIn', { email: this.email, password: this.password })
        .catch(err => alert(`cannot sign in: ${err.code} => ${err.message}`))
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth {
    max-width: 20em;
  }
</style>
