<template>
  <button 
    @click="onClick()"
    class="uk-button uk-button-small" 
    :class="`uk-button-${buttonClass}`"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    buttonClass: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    onClick() {
      this.$emit('btn-click');
    }
  }
}
</script>