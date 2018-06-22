<template>
  <div class="answers">
    <template v-if="!answers.length">
      <answer-skeleton
        v-for="n of 16"
        :key="n" />
    </template>

    <answer-card
      v-for="answer of answers"
      :button="true"
      :answer="answer"
      :key="answer['.key']" />
  </div>
</template>

<script>
import firebase from 'fb'
import AnswerCard from '../AnswerCard.vue'
import AnswerSkeleton from '../AnswerSkeleton.vue'

export default {
  name: 'AnswerStream',
  components: { AnswerCard, AnswerSkeleton },
  firestore: () => ({
    answers: firebase.firestore().collection('answers').orderBy('repliedAt', 'desc')
  })
}
</script>
