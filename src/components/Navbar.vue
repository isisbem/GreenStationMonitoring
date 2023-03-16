<template>
  <!-- navbar -->
  <header class="m-0 flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
    <div ref="wrapper" @click="handleOutsideClick" class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full fullata relative flex justify-between ">
        <Router-Link
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white outline-none focus:outline-none active:outline-1 active:outline active:outline-slate-300 active:rounded p-3"
          to="/">
          <div class="">
            <img src="../../public/favicon.jpeg" class="imageLogo" alt="">
          </div>
        </Router-Link>
        <button
          class="text-white hamburger cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none active:outline-1 active:outline active:outline-slate-300"
          type="button" ref="toggleButton" @click="isNavbarOpen = !isNavbarOpen">
          <i class="bi bi-list text-white text-2xl"></i>
        </button>
      </div>
    
      <nav ref="navbar" v-show="isNavbarOpen" class="navbar flex w-full flex-col justify-center items-center">
        <div class="contenitore lg:flex flex-grow w-full justify-center items-center transition-all">
          <ul class="flex flex-col list-none mx-auto">
            <li class="nav-item">
              <RouterLink
                class="px-3 py-2 flex my-1 justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/">
                <span class="ml-2">Home</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="px-3 py-2 flex my-1 justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/About">
                <span class="ml-2">About</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="px-3 py-2 flex my-1 justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/Analytics">
                <span class="ml-2">Analytics</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="px-3 py-2 flex my-1 justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/Informations">
                <span class="ml-2">Informations</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleOutsideClick(event) {
      const toggleButton = this.$refs.toggleButton;
      const navbar = this.$refs.navbar;
      const wrapper = this.$refs.wrapper;

      if (this.isNavbarOpen && event.target !== toggleButton && !navbar.contains(event.target) && !wrapper.contains(event.target)) {
        this.isNavbarOpen = false;
        document.body.style.overflow = 'hidden';
      }
    }
  },
  watch: {
    isNavbarOpen(newVal) {
      document.body.style.overflow = newVal ? 'hidden' : 'auto';
    }
  }
};
</script>

<style>
@media screen and (min-width: 768px) {
  .hamburger {
    display: none !important;
  }
  .navbar, .navbar .contenitore, .fullata {
    display: flex !important;
    width: fit-content !important;
  }
  .navbar ul {
    flex-direction: row !important;
  }
}
.imageLogo {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
}
</style>