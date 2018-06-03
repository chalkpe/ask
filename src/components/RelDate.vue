<template>
  <span
    :data-tooltip="full"
    class="rel-date tooltip tooltip-right">{{ rel }}</span>
</template>

<script>
import moment from 'moment'
import 'moment/locale/ko'
moment.locale('ko')

export default {
  name: 'RelDate',
  props: {
    epoch: { type: Number, required: true },
    diff: { type: Number, default: 0 }
  },

  computed: {
    rel () {
      return this.diff
        ? moment(this.epoch).from(this.diff, true)
        : moment(this.epoch).fromNow()
    },

    full () {
      return moment(this.epoch).format('LLL')
    }
  }
}
</script>

<style lang="scss">
  .rel-date {
    font-weight: bold;
  }
</style>
