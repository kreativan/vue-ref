<template>
  <div class="uk-section">
    <div class="uk-container uk-container-xsmall">
    <Header title="Task Tracker" class="default" @open-modal="openModal" :show-modal="showModal" />
    <AddTask @add-task="addTask" @close-modal="closeModal" />
    <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" />
  </div>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showModal: false
    }
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      let _this = this;
      UIkit.modal.confirm('<h3>Are you sure?</h3>').then(function () {
        _this.tasks = _this.tasks.filter((task) => task.id !== id);
      }, function() {
        console.log("cancaled");
      });
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    openModal() {
      this.showModal = true;
      let newTaskModalElement = document.querySelector("#new-task-modal");
      UIkit.modal(newTaskModalElement).show();
    },
    closeModal() {
      this.showModal = false;
      let newTaskModalElement = document.querySelector("#new-task-modal");
      UIkit.modal(newTaskModalElement).hide();
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Go to Sofia',
        day: 'May 15 at 8:00am',
        reminder: false,
      },
      {
        id: 2,
        text: 'Hug Eevryone',
        day: 'May 15 at 11:00am',
        reminder: true,
      },
      {
        id: 3,
        text: 'Go Back to Serbia',
        day: 'May 16 at 20:00pm',
        reminder: false,
      },
    ]
  }
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.theme.less";
</style>