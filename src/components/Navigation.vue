<template>
  <nav>
    <div class="container">
      <li
        :active="nav === 'ask'"
        @click="$emit('select', 'ask')">Ask</li>

      <li
        :active="nav === 'answers'"
        @click="$emit('select', 'answers')">Answers</li>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    nav: { type: String, required: true }
  }
}
</script>

<style lang="scss">
  @import '../base.scss';

  nav {
    height: 3em;
    margin-bottom: 2em;
    box-shadow: 0 2px 8px #f0f1f2;

    li {
      color: $dark-color;
      padding: 0 1em;
      display: inline-block;

      cursor: pointer;
      line-height: 2.8em;
      border-top: 0.2em solid transparent;
    }

    li[active] {
      color: $primary-color;
      border-top-color: $primary-color;
    }
  }
</style>
