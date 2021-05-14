<template>
  <header class="uk-flex uk-flex-between">
    <h1 class="uk-margin-remove">{{ title }}</h1>
    <Button text="Add Task" buttonClass="primary" />
  </header>
</template>

<script>
import Button from './Button';

export default {
  name: 'Header',
  props: {
    title: String
  },
  components: {
    Button
  }
}
</script>

<style lang="less" scoped>
.uk-button {
  max-height: 40px;
}
</style>