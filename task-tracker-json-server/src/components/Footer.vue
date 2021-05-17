<template>
  <footer>
    <nav class="uk-subnav uk-subnav-divider uk-flex-center uk-margin-medium-top">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </nav>
    <p class="uk-text-muted uk-text-center uk-text-small">Copyright © 2021</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>