<template>
  <div class="ask">
    <textarea
      v-model="question"
      :maxlength="maxLength"
      class="form-input question"
      rows="3"
      placeholder="초크에게 질문을 남기세요!" />

    <span class="bottom-bar float-right">
      <span class="counter">{{ question.length }} / {{ maxLength }}</span>
      <button class="btn btn-primary submit">질문하기</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Ask',
  data: () => ({ question: '', maxLength: 120 })
}
</script>

<style lang="scss">
  @import '../base.scss';

  .ask {
    max-width: 40em;
    margin: 0 auto;

    .bottom-bar {
      margin-top: 0.4em;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .counter {
      color: $gray-color;
      font-size: $font-size-sm;
      margin-right: 1em;
    }
  }
</style>
