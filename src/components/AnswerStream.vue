<template>
  <div class="answers">
    <div
      v-for="answer of answers"
      :key="answer['.key']"
      class="answer card">

      <div class="card-header">
        <button class="btn btn-link float-right">
          <i class="icon icon-share" />
        </button>

        <div class="card-title">
          {{ answer.question }}
        </div>

        <div class="card-subtitle text-gray">
          <rel-date
            :epoch="answer.repliedAt" /> &middot;

          <rel-date
            :epoch="answer.askedAt"
            :diff="answer.repliedAt" /> 동안 기다린 질문
        </div>
      </div>

      <div class="card-body">
        {{ answer.answer }}
      </div>
    </div>
  </div>
</template>

<script>
import RelDate from './RelDate.vue'

import firebase from 'firebase'
const answersRef = firebase.database().ref('answers')

export default {
  name: 'AnswerStream',
  components: { RelDate },
  firebase: { answers: answersRef }
}
</script>

<style lang="scss">
  @import '../base.scss';

  .answers {
    .answer {
      margin-bottom: 0.75em;
    }

    .card-subtitle {
      font-size: $font-size-sm;
    }

    .card-body {
      font-size: $font-size;
    }
  }
</style>
