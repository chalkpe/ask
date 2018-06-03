<template>
  <nav class="navigation-tab">
    <div class="container">
      <router-link
        tag="li"
        to="/">Ask</router-link>

      <router-link
        tag="li"
        to="/admin">Admin</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationTab'
}
</script>

<style lang="scss">
  @import '../base.scss';

  .navigation-tab {
    margin-bottom: 2em;
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

    li.router-link-exact-active {
      color: $primary-color;
      border-top-color: $primary-color;
    }
  }
</style>
