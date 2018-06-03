<template>
  <div class="questions">
    <div
      v-for="question of questions"
      :key="question['.key']"
      class="question tile tile-centered">

      <div class="tile-content">
        <p class="tile-title">
          {{ question.question }}
        </p>

        <div class="tile-subtitle text-gray">
          <rel-date :epoch="question.askedAt" />
        </div>
      </div>

      <div class="tile-action">
        <button
          class="btn"
          @click="$emit('open', question)">답변하기</button>
      </div>
    </div>

    <div
      v-if="!questions.length"
      class="empty">
      <div class="empty-icon"><i class="icon icon-mail" /></div>
      <p class="empty-title h5">받은 질문이 없습니다</p>
      <p class="empty-subtitle">흑흑... 다들 너무해... 아무도 관심 없어 이거</p>
      <div class="empty-action">
        <button
          class="btn btn-primary"
          @click="$router.replace('/')">돌아가기</button>
      </div>
    </div>
  </div>
</template>

<script>
import RelDate from './RelDate.vue'
import firebase from '../firebase'

const db = firebase.firestore()

export default {
  name: 'QuestionStream',
  components: { RelDate },
  firestore: () => ({
    questions: db.collection('questions').orderBy('askedAt')
  })
}
</script>

<style lang="scss">
  @import '../base.scss';

  .questions {
    .question {
      margin-bottom: 0.75em;
    }

    .empty-icon {
      font-size: 3em;
    }

    .tile-subtitle,
    .empty-subtitle {
      font-size: $font-size-sm;
    }
  }

  .modal {
    .modal-body p {
      margin-bottom: 0.5em;
      font-size: $font-size;
    }
  }
</style>
