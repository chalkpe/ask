<template>
  <section
    v-if="answer || isLoading"
    class="single-answer">

    <answer-card :card="answer" />
    <div class="text-right bottom-bar">
      <button
        class="btn mr-1"
        @click="$router.push('/')">돌아가기</button>

      <button
        class="btn btn-primary"
        @click="share">공유하기</button>
    </div>
  </section>

  <h2 v-else>존재하지 않는 질문입니다. 주소를 제대로 입력했는지 확인해 보세요!</h2>
</template>

<script>
import firebase from 'fb'
import AnswerCard from './AnswerCard.vue'

const tweet = 'https://twitter.com/intent/tweet'
const answers = firebase.firestore().collection('answers')

const ellipsis = (text, limit) =>
  (text.length >= limit) ? (text.slice(0, limit - 1).trim() + '⋯') : text

export default {
  name: 'AnswerDetail',
  components: { AnswerCard },

  data: () => ({ answer: null, isLoading: true }),
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
    async update () {
      this.isLoading = true
      const snapshot = await answers.doc(this.id).get()

      this.isLoading = false
      this.answer = snapshot.data()
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

<style lang="scss" scoped>
  @import '../../base.scss';

  .single-answer {
    .bottom-bar {
      margin-top: 0.75em;
    }
  }
</style>
