<template lang="html">
  <article
    v-if="!card"
    class="skeleton card">

    <div class="card-header">
      <div class="card-title">
        <random-span
          :a="5"
          :b="8" />
      </div>

      <div class="card-subtitle">
        <random-span
          :a="11"
          :b="4" />
      </div>
    </div>

    <div class="card-body">
      <random-span
        :a="40"
        :b="50"
        unit="%" />
    </div>
  </article>

  <article
    v-else
    class="card">

    <div class="card-header">
      <span class="float-right">
        <slot name="options" />
      </span>

      <div class="card-title">
        {{ card.question }}
      </div>

      <div class="card-subtitle text-gray">
        <relative-date :epoch="card.repliedAt || card.askedAt" />
        <relative-date
          v-if="card.repliedAt"
          :epoch="card.askedAt"
          :diff="card.repliedAt" /> 동안 기다린 질문
      </div>
    </div>

    <div
      v-if="card.answer"
      class="card-body">{{ card.answer }}</div>
  </article>
</template>

<script>
import RandomSpan from '../partial/RandomSpan.vue'
import RelativeDate from '../partial/RelativeDate.vue'

export default {
  name: 'AnswerCard',
  components: { RelativeDate, RandomSpan },

  props: {
    card: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../base.scss';

  .card {
    margin-bottom: 0.75em;

    .card-title {
      font-size: $font-size * 1.2;
    }

    .card-subtitle {
      font-size: $font-size-sm;

      span + span::before {
        content: " · ";
      }
    }

    .card-body {
      font-size: $font-size;
      white-space: nowrap;
    }
  }

  .card.skeleton {
    .card-subtitle span {
      background-color: #f5f5f5;
    }
  }
</style>
