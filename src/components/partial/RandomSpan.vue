<template lang="html">
  <span :style="{ width: (a + Math.random() * b) + f }" />
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

    f: {
      type: String,
      default: 'em'
    }
  }
}
</script>

<style lang="css">
</style>
