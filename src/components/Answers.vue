<template>
  <div class="answers columns">
    <div
      v-for="answer of answers"
      :key="answer['.key']"
      class="column col-sm-12 col-lg-6">

      <div class="card">
        <div class="card-header">
          <div class="card-title">
            {{ answer.question }}
          </div>

          <div class="card-subtitle text-gray">
            {{ answer.askedAt | rd }}에 질문 &middot; {{ answer.repliedAt | rd }}에 답변
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
import moment from 'moment'
import 'moment/locale/ko'

const answersRef = firebase.database().ref('answers')

export default {
  name: 'Answers',

  firebase: {
    answers: answersRef
  },

  filters: {
    rd (epoch) {
      moment.locale('ko')
      return moment(epoch).fromNow()
    }
  }
}
</script>

<style lang="scss">
  @import '../base.scss';

  .answers {
    .column {
      margin-bottom: 0.75em;
    }

    .card-subtitle {
      font-size: $font-size-sm;
    }

    .card-body {
      font-size: $font-size;
    }
  }
</style>
