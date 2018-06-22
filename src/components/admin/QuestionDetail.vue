<template lang="html">
  <div
    v-if="question"
    class="modal active">

    <div class="modal-container">
      <div class="modal-header">
        <a
          class="btn btn-clear float-right"
          @click="close" />

        <div class="modal-title h5">답변 작성하기</div>
      </div>
      <div class="modal-body">
        <p>
          <b>질문:</b>
          {{ question.question }}
        </p>

        <textarea
          v-model="answer"
          class="form-input"
          rows="3" />
      </div>
      <div class="modal-footer">
        <button
          class="btn btn-link"
          @click="close">닫기</button>

        <button
          :disabled="!answer || pending"
          class="btn btn-primary"
          @click="uploadAnswer">답변하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'fb'
const db = firebase.firestore()
const answers = db.collection('answers')
const questions = db.collection('questions')

export default {
  name: 'QuestionDetail',

  data: () => ({ question: null, answer: '', pending: false }),
  computed: { id () { return this.$route.params.id } },

  watch: { '$route' () { this.update() } },
  created () { this.update() },

  methods: {
    async update () {
      this.question = (await questions.doc(this.id).get()).data()
    },

    close () {
      this.answer = ''
      this.pending = false
      this.$router.push('/admin')
    },

    async uploadAnswer () {
      this.pending = true

      const repliedAt = Date.now()
      const answer = this.answer.trim()
      const { question, askedAt } = this.question

      await questions.doc(this.id).delete()
      await answers.add({ question, answer, askedAt, repliedAt })

      this.close()
      setTimeout(() => alert('답변을 보냈습니다!'))
    }
  }
}
</script>

<style lang="css">
</style>
