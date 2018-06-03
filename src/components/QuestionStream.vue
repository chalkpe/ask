<template>
  <div class="questions">
    <div
      v-for="question of questions"
      :key="question['.key']"
      class="question tile">

      <div class="tile-content">
        <p class="tile-title">
          {{ question.question }}
        </p>

        <div class="tile-subtitle text-gray">
          <rel-date
            :epoch="question.askedAt"
            :diff="Date.now()" /> 동안 대기 중
        </div>
      </div>

      <div class="tile-action">
        <button class="btn">답변하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import RelDate from './RelDate.vue'
import firebase from '../firebase'

export default {
  name: 'QuestionStream',
  components: { RelDate },
  firestore: () => ({ questions: firebase.firestore().collection('questions') })
}
</script>

<style lang="scss">
  @import '../base.scss';

  .questions {
    .question {
      margin-bottom: 0.75em;
    }

    .tile-subtitle {
      font-size: $font-size-sm;
    }
  }
</style>
