<template lang="html">
  <div class="answer skeleton card">
    <div class="card-header">
      <div class="card-title">
        <random-span :a="5" :b="8" />
      </div>

      <div class="card-subtitle">
        <random-span :a="11" :b="4" />
      </div>
    </div>
    <div class="card-body">
      <random-span :a="40" :b="50" unit="%" />
    </div>
  </div>
</template>

<script>
import RandomSpan from './RandomSpan.vue'
export default {
  name: 'AnswerSkeleton',
  components: { RandomSpan }
}
</script>

<style lang="scss">
  @keyframes move-skeleton {
    to { margin-left: 80vw; }
  }

  .answer.skeleton {
    span {
      height: 1em;
      margin-bottom: 0.1em;
      background-color: #eee;

      overflow: hidden;
      display: inline-block;

      &::after {
        content: "";
        display: block;

        width: 100px;
        height: 100%;

        margin-left: -20vw;
        animation: move-skeleton 1.5s infinite;
        background-image: linear-gradient(90deg,
          transparent 0, rgba(lightgrey, 0.75) 50%, transparent 100%);
      }
    }

    .card-subtitle span {
      background-color: #f5f5f5;
    }
  }
</style>
