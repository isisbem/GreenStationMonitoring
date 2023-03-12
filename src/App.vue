<script setup>
  /**routerlink */
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <!-- main page -->
    <main class="h-screen text-center font-poppins">
      <!-- navigation -->
      <div id="nav">
        <Navbar></Navbar>
      </div>

      <!-- for content of the page -->
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name" class="h-full m-0 p-0 font-poppins">  
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: all 300ms ease; 
  opacity: 1;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>