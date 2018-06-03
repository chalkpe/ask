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

export default {
  name: 'AnswerForm',
  props: {
    question: { type: Object, default: null }
  },

  data: () => ({ answer: '' }),
  methods: {
    close () {
      this.answer = ''
      this.$emit('close')
    },

    async uploadAnswer () {
      const repliedAt = Date.now()
      const answer = this.answer.trim()
      const { question, askedAt, '.key': key } = this.question

      await db.collection('questions').doc(key).delete()
      await db.collection('answers').add({ question, answer, askedAt, repliedAt })

      this.close()
      alert('답변을 보냈습니다!')
    }
  }
}
</script>

<style lang="css">
</style>
