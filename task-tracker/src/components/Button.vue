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
import UIkit from 'uikit';
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
      let newTaskModal = document.querySelector("#new-task-modal");
      UIkit.modal(newTaskModal).show();
    }
  }
}
</script>