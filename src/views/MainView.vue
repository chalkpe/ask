<template>
  <div class="main">
    <question-form />
    <answer-stream />
  </div>
</template>

<script>
import QuestionForm from '../components/QuestionForm.vue'
import AnswerStream from '../components/AnswerStream.vue'

export default {
  name: 'MainView',
  components: { QuestionForm, AnswerStream }
}
</script>
