<template>
  <!-- navigation -->
  <main class="h-screen text-center">
    <nav class="w-full h-14 m-0 flex justify-center align-middle items-center gap-6">
      <router-link to="/" class="p-2">Home</router-link>
      <router-link to="/about" class="p-2">About</router-link>
      <router-link to="/Analytics" class="p-2">Analytics</router-link>
      <router-link to="/Informations" class="p-2">Informations</router-link>
    </nav>

    <!-- for content of the page -->
    <router-view />
  </main>
</template>