<template>  
<div id="new-task-modal" class="uk-flex-top" uk-modal>
  <div class="uk-modal-dialog uk-margin-auto-vertical">

    <div class="uk-modal-header uk-background-primary uk-light">
      <h3>New Task</h3>
    </div>

    <div class='uk-modal-body'>
      <form @submit="onSubmit" id="new-task-form" class="uk-form uk-form-stacked uk-margin-remove">
        <div class="uk-margin">
          <label class="uk-form-label">Task</label>
          <input 
            class="uk-input" 
            type="text" 
            v-model="text" 
            name="text" 
            placeholder="Add Task" 
          />
        </div>
        <div class="uk-margin">
          <label class="uk-form-label">Day & Time</label>
          <input
            class="uk-input"
            type="text"
            v-model="day"
            name="day"
            placeholder="Add Day & Time"
          />
        </div>
        <div class="uk-margin">
          <label class="uk-form-label">
            <input 
              class="uk-checkbox" 
              type="checkbox" 
              v-model="reminder" 
              name="reminder" 
            />
            <span class="uk-margin-small-left">Set Reminder</span>
          </label>
        </div>
      </form>
    </div>

    <div class="uk-modal-footer uk-flex uk-flex-between uk-background-muted">
      <button type="button" class="uk-button uk-button-default uk-modal-close">Cancel</button>
      <button type="submit" form="new-task-form" value="save_task" class="uk-button uk-button-primary">
        Save Task
      </button>
    </div>

  </div>
</div>
</template>

<script>
import UIkit from 'uikit';
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if(!this.text) {
        UIkit.notification('Please add task text', {status: 'danger', timeout: 1500});
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 10000),
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.$emit('add-task', newTask);

      let newTaskModal = document.querySelector("#new-task-modal");
      UIkit.modal(newTaskModal).hide();

      this.text = '';
      this.day = '';
      this.reminder = false;
      

    }
  }
}
</script>

<style lang="less">
</style>