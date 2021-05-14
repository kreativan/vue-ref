<template>
  <li 
    class="uk-flex uk-flex-between uk-flex-middle" 
    :class="[task.reminder ? 'is-reminder' : '', 'task']"
    @dblclick="$emit('toggle-reminder', task.id)"
  >
    <div> 
      {{ task.text }} <br />
      <span v-if="task.reminder" uk-icon="icon:clock; ratio:0.8" class="uk-margin-small-right uk-text-muted"></span>
      <span class="uk-text-muted uk-text-small">{{ task.day }}</span>
    </div>
    <div>
      <button @click="$emit('delete-task', task.id)" class="uk-icon-button uk-text-danger" uk-icon="close"></button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>

<style lang="less">
@import "../../node_modules/uikit/src/less/components/variables.less";
li.task {
  user-select: none;
  &:hover {
    cursor:pointer;
  }

  &.is-reminder {
    border-left: 5px solid @global-primary-background;
  }
}
</style>