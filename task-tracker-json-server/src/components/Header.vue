<template>
  <header class="uk-flex uk-flex-between uk-flex-middle">
    <h1 class="uk-h3 uk-text-uppercase uk-margin-remove">{{ title }}</h1>
    <Button 
      v-show='showButton'
      :text="showModal ? 'New Task...' : 'Add Task'" 
      buttonClass="primary" 
      @btn-click="$emit('open-modal')"
    />
    <router-link v-show='!showButton' to="/" class="uk-button uk-button-default uk-button-small">
      <span uk-icon="arrow-left"></span>
      Back
    </router-link>
  </header>
</template>

<script>
import Button from './Button';

export default {
  name: 'Header',
  props: {
    title: String,
    showModal: Boolean,
    showButton: Boolean
  },
  components: {
    Button
  },
}
</script>