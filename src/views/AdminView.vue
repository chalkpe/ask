<template>
  <div v-if="user">
    <question-stream />
    <router-view />
  </div>
  <auth-form v-else />
</template>

<script>
import { mapState } from 'vuex'

import AuthForm from '../components/admin/AuthForm.vue'
import QuestionStream from '../components/admin/QuestionStream.vue'

export default {
  name: 'AdminView',
  components: { AuthForm, QuestionStream },
  computed: mapState(['user'])
}
</script>
