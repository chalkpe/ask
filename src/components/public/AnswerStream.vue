<template>
  <section class="answers">
    <template v-if="!answers.length">
      <base-card
        v-for="n of 16"
        :key="n" />
    </template>

    <base-card
      v-for="answer of answers"
      :card="answer"
      :key="answer['.key']">

      <button
        slot="options"
        class="btn btn-link"
        @click="$router.push('/' + answer['.key'])">

        <i class="icon icon-share" />
      </button>
    </base-card>
  </section>
</template>

<script>
import firebase from 'fb'
import BaseCard from '../BaseCard.vue'

export default {
  name: 'AnswerStream',
  components: { BaseCard },
  firestore: () => ({
    answers: firebase.firestore().collection('answers').orderBy('repliedAt', 'desc')
  })
}
</script>
