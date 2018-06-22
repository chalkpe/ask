<template>
  <footer>
    Ask &copy; 2018 Chalk<br>
    {{ pkg.license }} License &middot;
    <a
      :href="pkg.repository"
      class="text-gray c-hand"
      target="_blank">View on GitHub</a>
  </footer>
</template>

<script>
import pkg from '../../package.json'
export default {
  name: 'AskFooter',
  computed: { pkg: () => pkg }
}
</script>
