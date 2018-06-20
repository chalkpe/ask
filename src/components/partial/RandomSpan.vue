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
