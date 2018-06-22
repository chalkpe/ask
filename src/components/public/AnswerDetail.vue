<template>
  <section
    v-if="answer"
    class="single-answer">

    <div class="card">
      <div class="card-header">
        <div class="card-title h4">{{ answer.question }}</div>

        <div class="card-subtitle text-gray">
          <rel-date :epoch="answer.repliedAt" /> &middot;
          <rel-date
            :epoch="answer.askedAt"
            :diff="answer.repliedAt" /> 동안 기다린 질문
        </div>
      </div>

      <div class="card-body">{{ answer.answer }}</div>
    </div>

    <div class="text-right bottom-bar">
      <button
        class="btn mr-1"
        @click="$router.back()">돌아가기</button>

      <button
        class="btn btn-primary"
        @click="share">공유하기</button>
    </div>
  </section>

  <h2 v-else>
    존재하지 않는 질문입니다. 주소를 제대로 입력했는지 확인해 보세요!
  </h2>
</template>

<script>
import firebase from 'fb'
import RelDate from '../partial/RelDate.vue'

const tweet = 'https://twitter.com/intent/tweet'
const answers = firebase.firestore().collection('answers')

const ellipsis = (text, limit) =>
  (text.length >= limit) ? (text.slice(0, limit - 1).trim() + '⋯') : text

export default {
  name: 'AnswerDetail',
  components: { RelDate },

  data: () => ({ answer: null }),
  computed: {
    id () {
      return this.$route.params.id
    }
  },

  watch: {
    '$route' (to, from) {
      this.update()
    }
  },

  created () {
    this.update()
  },

  methods: {
    update () {
      answers.doc(this.id).get()
        .then(snapshot => (this.answer = snapshot.data()))
    },

    share () {
      const answer = ellipsis(this.answer.answer, 70)
      const question = ellipsis(this.answer.question, 70)

      const url = encodeURIComponent(window.location.href)
      const text = encodeURIComponent(`${question} — ${answer}`)

      window.open(`${tweet}?url=${url}&text=${text}`, '_blank')
    }
  }
}
</script>

<style lang="scss">
  @import '../../base.scss';

  .single-answer {
    .bottom-bar {
      margin-top: 0.75em;
    }
  }
</style>
