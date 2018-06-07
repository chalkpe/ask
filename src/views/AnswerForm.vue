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
          class="btn btn-primary"
          @click="uploadAnswer">답변하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'

const db = firebase.firestore()
const answers = db.collection('answers')
const questions = db.collection('questions')

export default {
  name: 'AnswerForm',

  data: () => ({ question: null, answer: '' }),
  computed: { id () { return this.$route.params.id } },

  watch: { '$route' () { this.update() } },
  created () { this.update() },

  methods: {
    async update () {
      this.question = (await questions.doc(this.id).get()).data()
    },

    close () {
      this.answer = ''
      this.$router.back()
    },

    async uploadAnswer () {
      const repliedAt = Date.now()
      const answer = this.answer.trim()
      const { question, askedAt, '.key': key } = this.question

      await questions.doc(key).delete()
      await answers.add({ question, answer, askedAt, repliedAt })

      this.close()
      alert('답변을 보냈습니다!')
    }
  }
}
</script>

<style lang="css">
</style>
