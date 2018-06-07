<template>
  <span
    :data-tooltip="uas"
    class="tooltip tooltip-right"
    @click="click">
    {{ browser }} &middot; {{ os }}
  </span>
</template>

<script>
export default {
  name: 'UserAgentString',
  props: { uas: { type: String, default: '' } },
  data: () => ({ browser: '모르는 브라우저', os: '모르는 OS' }),

  watch: { uas () { this.updateString() } },
  created () { this.updateString() },

  methods: {
    click () { alert(this.uas) },
    updateString () {
      const uas = encodeURIComponent(this.uas)
      fetch(`https://uas.chalk.pe/?getJSON=all&uas=${uas}`)
        .then(res => res.json())
        .then(res => {
          const v = res.agent_version
          this.os = `${res.os_name} ${res.os_versionNumber}`
          this.browser = `${res.agent_name} ${v === '--' ? '' : v}`
        })
        .catch(err => console.error('cannot fetch userAgent info', err))
    }
  }
}
</script>
