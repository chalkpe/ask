<template>
  <footer>
    Ask &copy; 2018 Chalk<br>
    {{ pkg.license }} License &middot;
    <a
      :href="pkg.repository"
      target="_blank"
      class="text-gray c-hand">View on GitHub</a>
  </footer>
</template>

<script>
import pkg from '../../package.json'
export default {
  name: 'AskFooter',
  computed: { pkg: () => pkg }
}
</script>

<style lang="css">
</style>
