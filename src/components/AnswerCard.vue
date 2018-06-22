<template lang="html">
  <div
    :key="answer['.key']"
    class="answer card">

    <div class="card-header">
      <button
        v-if="button"
        class="btn btn-link float-right"
        @click="$router.push('/' + answer['.key'])">

        <i class="icon icon-share" />
      </button>

      <div class="card-title">
        {{ answer.question }}
      </div>

      <div class="card-subtitle text-gray">
        <rel-date :epoch="answer.repliedAt" /> &middot;

        <rel-date
          :epoch="answer.askedAt"
          :diff="answer.repliedAt" /> 동안 기다린 질문
      </div>
    </div>

    <div class="card-body">
      {{ answer.answer }}
    </div>
  </div>
</template>

<script>
import RelDate from './partial/RelDate.vue'
export default {
  components: { RelDate },
  props: {
    answer: {
      type: Object,
      required: true
    },

    button: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import '../base.scss';

  .card.answer {
    margin-bottom: 0.75em;

    .card-title {
      font-size: $font-size * 1.2;
    }

    .card-subtitle {
      font-size: $font-size-sm;
    }

    .card-body {
      font-size: $font-size;
    }
  }
</style>
