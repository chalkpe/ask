<template>
  <div class="main">
    <router-view />
    <question-form />
    <answer-stream />
  </div>
</template>

<script>
import QuestionForm from '../components/public/QuestionForm.vue'
import AnswerStream from '../components/public/AnswerStream.vue'

export default {
  name: 'PublicView',
  components: { QuestionForm, AnswerStream }
}
</script>
