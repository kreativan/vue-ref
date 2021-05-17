<template>
  <ul class="uk-list uk-list-striped uk-margin-remove">
    <li v-for="(value, key, index) in about" :key="index" class="uk-flex uk-flex-between">
      <em class="uk-text-muted">{{ key }}</em> 
      <span>{{ value }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'About',
  props: {
    version: String
  },
  data() {
    return {
      about: {
        Version: this.version,
        Developer: 'Ivan Milincic',
        Website: 'kreativan.dev'
      }
    }
  }
}
</script>