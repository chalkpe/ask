<template>
  <section
    v-if="questions && questions.length"
    class="questions">

    <question-tile
      v-for="question of questions"
      :question="question"
      :key="question['.key']" />
  </section>

  <section
    v-else-if="isLoading"
    class="questions skeleton">

    <question-tile
      v-for="n of 16"
      :key="n" />
  </section>

  <section
    v-else
    class="questions empty">

    <div class="empty-icon"><i class="icon icon-mail" /></div>
    <p class="empty-title h5">받은 질문이 없습니다</p>
    <p class="empty-subtitle">흑흑... 다들 너무해... 아무도 관심 없어...</p>
    <div class="empty-action">
      <button
        class="btn btn-primary"
        @click="$router.back()">돌아가기</button>
    </div>
  </section>
</template>

<script>
import QuestionTile from './QuestionTile.vue'

import firebase from 'fb'
const db = firebase.firestore()

export default {
  name: 'QuestionStream',
  components: { QuestionTile },
  data: () => ({ isLoading: true }),

  firestore: () => ({
    questions: db.collection('questions').orderBy('askedAt')
  }),

  watch: {
    questions () { this.isLoading = false }
  },

  methods: {
    remove (question) {
      if (!confirm(`정말로 "${question.question}" 질문을 삭제하시겠어요?`)) return

      db.collection('questions').doc(question['.key'])
        .delete()
        .catch(err => console.error('err on delete', err))
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../base.scss';

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
