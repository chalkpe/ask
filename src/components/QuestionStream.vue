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
          <rel-date :epoch="question.askedAt" /> &middot;
          <user-agent-string :uas="question.userAgent" />
        </div>
      </div>

      <div class="tile-action">
        <div class="btn-group">
          <button
            class="btn btn"
            @click="remove(question)">삭제하기</button>

          <button
            class="btn btn-primary"
            @click="$router.push('/admin/' + question['.key'])">답변하기</button>
        </div>
      </div>
    </div>

    <div
      v-if="!questions.length"
      class="empty">
      <div class="empty-icon"><i class="icon icon-mail" /></div>
      <p class="empty-title h5">받은 질문이 없습니다</p>
      <p class="empty-subtitle">흑흑... 다들 너무해... 아무도 관심 없어...</p>
      <div class="empty-action">
        <button
          class="btn btn-primary"
          @click="$router.back()">돌아가기</button>
      </div>
    </div>
  </div>
</template>

<script>
import RelDate from './RelDate.vue'
import UserAgentString from './UserAgentString.vue'
import firebase from '../firebase'

const db = firebase.firestore()

export default {
  name: 'QuestionStream',
  components: { RelDate, UserAgentString },

  firestore: () => ({
    questions: db.collection('questions').orderBy('askedAt')
  }),

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
