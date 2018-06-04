<template>
  <div class="ask">
    <textarea
      v-model="question"
      :class="{ 'is-error': invalid }"
      class="form-input question"
      rows="3"
      placeholder="초크에게 질문을 남기세요!" />

    <span class="bottom-bar">
      <span
        :class="{ invalid }"
        class="counter">{{ question.length }} / {{ maxLength }}</span>

      <button
        :disabled="invalid"
        :class="{ 'btn-error': invalid }"
        class="btn btn-primary submit"
        @click="submitQuestion">질문하기</button>
    </span>
  </div>
</template>

<script>
import firebase from '../firebase'
const db = firebase.firestore()

export default {
  name: 'QuestionForm',
  data: () => ({ question: '', maxLength: 140 }),

  computed: {
    invalid () {
      return this.question.length > this.maxLength
    }
  },

  methods: {
    submitQuestion () {
      if (!this.question.length) return

      db.collection('questions').add({
        askedAt: Date.now(),
        question: this.question,
        userAgent: navigator.userAgent
      })

      this.question = ''
      alert('질문을 보냈습니다!')
    }
  }
}
</script>

<style lang="scss">
  @import '../base.scss';

  .ask {
    margin-bottom: 2em;

    .bottom-bar {
      margin-top: 0.5em;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }

    .counter {
      color: $gray-color;
      font-size: $font-size-sm;
      margin-right: 1em;
    }

    .counter.invalid {
      font-weight: bolder;
    }
  }
</style>
