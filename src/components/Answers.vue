<template>
  <div class="answers columns">
    <div
      v-for="answer of answers"
      :key="answer['.key']"
      class="column col-4">

      <div class="card">
        <div class="card-header">
          <div class="card-title">
            {{ answer.question }}
          </div>

          <div class="card-subtitle text-gray">
            {{ answer.askedAt }} -> {{ answer.repliedAt }}
          </div>
        </div>

        <div class="card-body">
          {{ answer.answer }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
const answersRef = firebase.database().ref('answers')

export default {
  name: 'Answers',
  firebase: {
    answers: answersRef
  },

  // created () {
  //   answersRef.child('aas').child('askedAt').set(Date.now())
  // }
}
</script>

<style lang="scss">
  @import '../base.scss';

  .answers {
    .card-body {
      font-size: $font-size;
    }
  }
</style>
