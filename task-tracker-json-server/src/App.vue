<template>
  <div class="uk-section">
    <div class="uk-container uk-container-xsmall">

      <div class="uk-card uk-card-default">
        
        <div class="uk-padding-small">
          <Header 
            :title="title" 
            class="default" 
            @open-modal="openModal" 
            :show-modal="showModal" 
            :showButton='showButton' 
          />
        </div>

        <router-view :version='version' @close-modal='closeModal'></router-view>

      </div>

      <Footer :version='version' />
      
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      version: "1.0",
      showModal: false,
      tasks: [],
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
      let newTaskModalElement = document.querySelector("#new-task-modal");
      UIkit.modal(newTaskModalElement).show();
    },
    closeModal() {
      this.showModal = false;
      let newTaskModalElement = document.querySelector("#new-task-modal");
      UIkit.modal(newTaskModalElement).hide();
    },
  },
  computed: {
    title() {
      return "Task Tracker " + this.version
    },
    showButton() {
      return this.$route.path === '/' ? true : false;
    }
  },
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.theme.less";
</style>