<template>
  <div class="ask">
    <textarea
      v-model="question"
      :class="{ 'is-error': invalid }"
      rows="3"
      class="form-input question"
      placeholder="초크에게 질문을 남기세요!" />

    <span class="bottom-bar">
      <span class="counter">
        {{ question.length }} / {{ maxLength }}
      </span>

      <button
        :class="{ 'btn-error': invalid }"
        :disabled="invalid"
        class="btn btn-primary submit"
        @click="submitQuestion">질문하기</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Ask',
  data: () => ({ question: '', maxLength: 120 }),

  computed: {
    invalid () {
      return this.question.length > this.maxLength
    }
  },

  methods: {
    submitQuestion () {
      // TODO
    }
  }
}
</script>

<style lang="scss">
  @import '../base.scss';

  .ask {
    margin-bottom: 2.5em;

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
  }
</style>
