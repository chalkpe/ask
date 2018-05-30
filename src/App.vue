<template>
  <div id="app">
    <navigation
      :nav="nav"
      @select="nav = $event"/>

    <main class="container">
      <ask v-if="nav === 'ask'" />
      <answers v-if="nav === 'answers'" />
    </main>

    <footer>
      Ask &copy; 2018 Chalk
    </footer>
  </div>
</template>

<script>
import Ask from './components/Ask.vue'
import Answers from './components/Answers.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: { Ask, Answers, Navigation },

  data () {
    return {
      nav: 'ask'
    }
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    background-color: #fff;

    height: 100%;
    font-size: 18px;
  }

  main {
    flex: 1;
  }
</style>
