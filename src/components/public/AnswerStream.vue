<template>
  <section class="answers">
    <template v-if="!answers.length">
      <answer-card
        v-for="n of 16"
        :key="n" />
    </template>

    <answer-card
      v-for="answer of answers"
      :card="answer"
      :key="answer['.key']">

      <button
        slot="options"
        class="btn btn-link"
        @click="$router.push('/' + answer['.key'])">

        <i class="icon icon-share" />
      </button>
    </answer-card>
  </section>
</template>

<script>
import firebase from 'fb'
import AnswerCard from './AnswerCard.vue'

export default {
  name: 'AnswerStream',
  components: { AnswerCard },
  firestore: () => ({
    answers: firebase.firestore().collection('answers').orderBy('repliedAt', 'desc')
  })
}
</script>
