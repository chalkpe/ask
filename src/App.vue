<template>
  <div id="app">
    <navigation-tab />

    <main class="container">
      <question-form />
      <answer-stream />
    </main>

    <footer>
      Ask &copy; 2018 Chalk
    </footer>
  </div>
</template>

<script>
import 'lato-webfont'
import 'noto-sans-kr'
import 'spectre.css/dist/spectre-icons.css'

import QuestionForm from './components/QuestionForm.vue'
import AnswerStream from './components/AnswerStream.vue'
import NavigationTab from './components/NavigationTab.vue'

export default {
  name: 'App',
  components: { QuestionForm, AnswerStream, NavigationTab },

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
