<template>
  <!-- navbar -->
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <Router-Link class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white outline-none focus:outline-none active:outline-1 active:outline active:outline-slate-300 active:rounded p-3"
          to="/">
          Logo
        </Router-Link>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none active:outline-1 active:outline active:outline-slate-300"
          type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex flex-grow lg:flex-grow-0 w-full lg:w-fit md:justify-end md:items-end justify-center items-center transition-all">
        <ul class="flex flex-col lg:flex-row list-none mx-auto">
          <li class="nav-item">
            <RouterLink class="px-3 py-2 flex my-1 justify-center items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/">
              <span class="ml-2">Home</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="px-3 py-2 flex my-1 justify-center items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/About">
              <span class="ml-2">About</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="px-3 py-2 flex my-1 justify-center items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/Analytics">
              <span class="ml-2">Analytics</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="px-3 py-2 flex my-1 justify-center items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/Informations">
              <span class="ml-2">Informations</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>