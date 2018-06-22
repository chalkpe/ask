<template>
  <div v-if="true">
    <question-stream />
    <router-view />
  </div>
  <auth-form v-else />
</template>

<script>
import AuthForm from '../components/admin/AuthForm.vue'
import QuestionStream from '../components/admin/QuestionStream.vue'

export default {
  name: 'AdminView',
  components: { AuthForm, QuestionStream }
}
</script>
