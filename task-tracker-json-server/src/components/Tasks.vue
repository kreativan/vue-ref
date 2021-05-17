<template>
  <ul class="uk-list uk-list-striped">
    <template v-for="task in tasks" :key="task.id">
      <Task 
        :task="task" 
        @delete-task="$emit('delete-task', task.id)"
        @toggle-reminder="$emit('toggle-reminder', task.id)"
      />
    </template>
  </ul>
</template>

<script>
import Task from './Task';

export default {
  name: 'Tasks',
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ['delete-task', 'toggle-reminder']
}
</script>

<style lang="less" scoped>
// less / css here
</style>