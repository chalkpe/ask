<template>
  <div
    v-if="question"
    class="question tile tile-centered">

    <div class="tile-content">
      <p class="tile-title">
        {{ question.question }}
      </p>

      <div class="tile-subtitle text-gray">
        <relative-date :epoch="question.askedAt" /> &middot;
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
    v-else
    class="question tile tile-centered skeleton">

    <div class="tile-content">
      <p class="tile-title">
        <random-span
          :a="8"
          :b="8" />
      </p>

      <div class="tile-subtitle">
        <random-span
          :a="14"
          :b="4" />
      </div>
    </div>

  </div>
</template>

<script>
import RandomSpan from '../partial/RandomSpan.vue'
import RelativeDate from '../partial/RelativeDate.vue'
import UserAgentString from '../partial/UserAgentString.vue'

export default {
  name: 'QuestionTile',
  components: { RelativeDate, RandomSpan, UserAgentString },
  props: {
    question: { type: Object, default: null }
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
  .question.skeleton {
    .tile-subtitle span {
      background-color: #f5f5f5;
    }
  }
</style>
