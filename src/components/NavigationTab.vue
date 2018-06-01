<template>
  <nav>
    <div class="container">
      <li>Ask</li>
      <li @click="openTwitter">Twitter</li>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationTab',
  methods: {
    openTwitter () {
      window.open('https://twitter.com/amato17', '_blank')
    }
  }
}
</script>

<style lang="scss">
  @import '../base.scss';

  nav {
    height: 2.75em;
    box-shadow: 0 0.1em 0.4em #f0f1f2;

    li {
      padding: 0 1em;
      line-height: 2.75em;
      border-top: 0.25em solid transparent;

      color: $dark-color;
      font-size: $font-size-lg;
      text-transform: capitalize;

      cursor: pointer;
      display: inline-block;
    }

    li:first-of-type {
      color: $primary-color;
      border-top-color: $primary-color;
    }
  }
</style>
