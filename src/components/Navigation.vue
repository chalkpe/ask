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

<style>
  nav {
    height: 3.5em;
    box-shadow: 0 2px 8px #f0f1f2;
    margin-bottom: 2em;
  }

  nav li {
    color: #333;
    padding: 0 1em;
    line-height: 3em;
    display: inline-block;
    cursor: pointer;
    border-top: 0.2em solid white;
  }

  nav li[active] {
    color: #1abd9d;
    border-top-color: #1abd9d;
  }
</style>
