<template>
  <div class="answers">
    <answer-skeleton
      v-if="!answers.length"
      v-for="n of 16" />

    <div
      v-for="answer of answers"
      :key="answer['.key']"
      class="answer card">

      <div class="card-header">
        <button
          class="btn btn-link float-right"
          @click="$router.push('/' + answer['.key'])">

          <i class="icon icon-share" />
        </button>

        <div class="card-title">
          {{ answer.question }}
        </div>

        <div class="card-subtitle text-gray">
          <rel-date :epoch="answer.repliedAt" /> &middot;

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
import firebase from '../firebase'
import RelDate from './RelDate.vue'
import AnswerSkeleton from './partial/AnswerSkeleton.vue'

export default {
  name: 'AnswerStream',
  components: { RelDate, AnswerSkeleton },
  firestore: () => ({
    answers: firebase.firestore().collection('answers').orderBy('repliedAt', 'desc')
  })
}
</script>

<style lang="scss">
  @import '../base.scss';

  .answers {
    .answer {
      margin-bottom: 0.75em;
    }

    .card-title {
      font-size: $font-size * 1.2;
    }

    .card-subtitle {
      font-size: $font-size-sm;
    }

    .card-body {
      font-size: $font-size;
    }
  }
</style>
