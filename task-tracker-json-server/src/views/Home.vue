<template>
  <div class="uk-card uk-card-default">
    <div>
      <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" />
    </div>
  </div>
  <AddTaskModal @add-task="addTask" @close-modal="closeModal" />
</template>

<script>
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskModal from '../components/AddTaskModal';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

export default {
  name: 'Home',
  props: {
    version: String,
  },
  components: {
    Header,
    Tasks,
    AddTaskModal,
  },
  emits: ['close-modal'],
  data() {
    return {
      tasks: []
    } 
  },
  methods: {
    async addTask(task) {
      const response = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      });
      const data = await response.json()
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      let _this = this;
      UIkit.modal.confirm('<h3>Are you sure?</h3>').then(async function () {
        const response = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })
        response.status === 200 ? (_this.tasks = _this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task');
      }, function() {
        console.log("cancaled");
      });

    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
      const response = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      })
      const data = await response.json();
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
    },
    closeModal() {
      this.$emit('close-modal')
    },
    async fetchTasks() {
      const response = await fetch('api/tasks')
      const data = await response.json()
      return data
    },
    async fetchTask(id) {
      const response = await fetch(`api/tasks/${id}`)
      const data = await response.json()
      return data
    }
  },

  // created hook
  async created() {
    this.tasks = await this.fetchTasks()
  }
  
}
</script>