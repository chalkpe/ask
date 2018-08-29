<template lang="html">
  <span :style="{ width: (a + Math.random() * b) + unit }" />
</template>

<script>
export default {
  name: 'RandomSpan',
  props: {
    a: {
      type: Number,
      required: true
    },

    b: {
      type: Number,
      default: 0
    },

    unit: {
      type: String,
      default: 'em'
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes move-skeleton {
    to { margin-left: 80vw; }
  }

  span {
    height: 1em;
    margin-bottom: 0.1em;
    background-color: #eee;

    overflow: hidden;
    display: inline-block;
  }

  span::after {
    content: "";
    display: block;

    width: 100px;
    height: 100%;

    margin-left: -20vw;
    animation: move-skeleton 1.5s infinite;
    background-image: linear-gradient(90deg,
      transparent 0, rgba(lightgrey, 0.75) 50%, transparent 100%);
  }
</style>
