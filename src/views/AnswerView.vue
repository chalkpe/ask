<template>
  <div
    v-if="answer"
    class="single-answer card">

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
</template>

<script>
import RelDate from '../components/RelDate.vue'

import firebase from '../firebase'
const answers = firebase.firestore().collection('answers')

export default {
  name: 'AnswerView',
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
    }
  }
}
</script>

<style lang="scss">
  @import '../base.scss';

  .single-answer {

  }
</style>
