<script setup>
  /**routerlink */
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app" data-v-app="">
    <!-- main page -->
    <main class="Main w-full scrollbar overflow-y-auto overflow-x-hidden text-center font-Inter">
      <!-- navigation -->
      <Navbar></Navbar>
      <!-- for content of the page -->
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name" class="container mx-auto max-w-full overflow-x-hidden flex flex-col bg-white">  
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
.Main {
  height: 100dvh;
  height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: all 300ms ease; 
  opacity: 1;
}
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>