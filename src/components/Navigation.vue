<template>
  <nav>
    <div class="container">
      <li
        v-for="item of list"
        :active="nav === item"
        @click="$emit('select', item)">{{ item }}</li>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    nav: { type: String, required: true },
    list: { type: Array, required: true }
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
      padding: 0 1em;
      display: inline-block;
      border-top: 0.2em solid transparent;

      line-height: 3em;
      color: $dark-color;
      font-size: $font-size-lg;
      text-transform: capitalize;

      cursor: pointer;
    }

    li[active] {
      color: $primary-color;
      border-top-color: $primary-color;
    }
  }
</style>
