<!-- Home.vue -->
<template>
    <div class="d-flex">
      <Sidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './SideBar.vue';
  
  export default {
    components: {
      Sidebar,
    },
  };
  </script>
  
  <style scoped>
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  </style>
  