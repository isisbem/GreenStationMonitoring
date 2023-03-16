<script setup>
  /**routerlink */
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app" data-v-app="">
    <!-- main page -->
    <main class="h-full w-full overflow-x-hidden text-center font-poppins">
      <!-- navigation -->
      <Navbar></Navbar>
      <!-- for content of the page -->
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name" class="sw-components container mx-auto max-w-full overflow-x-hidden flex flex-col bg-white">  
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="css">
/* icons */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");
/* for the component */
.sw-components {
  min-height: calc(100vh - 75px) !important;
}
.fade-enter-active, .fade-leave-active {
  transition: all 300ms ease; 
  opacity: 1;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>