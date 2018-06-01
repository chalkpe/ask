<template>
  <div id="app">
    <navigation
      :nav="nav"
      :list="['ask', 'answers']"
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
import 'lato-webfont'
import 'noto-sans-kr'

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

<style lang="scss">
  @import './base.scss';

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  textarea {
    resize: none;
  }

  #app {
    display: flex;
    flex-direction: column;
    background-color: $light-color;
    height: 100%;
  }

  main {
    flex: 1;
  }

  footer {
    color: $gray-color;
    font-size: 0.8em;

    padding: 0.5em;
    text-align: center;
  }
</style>
