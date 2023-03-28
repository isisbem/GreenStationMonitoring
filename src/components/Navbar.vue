<template>
  <!-- navbar -->
  <header class="m-0 flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
    <div ref="wrapper" @click="handleOutsideClick"
      class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full fullata relative flex justify-between ">
        <Router-Link
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white outline-none focus:outline-none active:outline-1 active:outline active:outline-slate-300 active:rounded p-3"
          to="/">
          <div>
            <img src="/favicon.jpeg" class="imageLogo" alt="">
          </div>
        </Router-Link>
        <button
          class="text-white hamburger cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none active:outline-1 active:outline active:outline-slate-300"
          type="button" ref="toggleButton" @click="isNavbarOpen = !isNavbarOpen; toggleActive()">
          <i class="bi bi-list Open active text-white text-2xl" ref="open"></i>
          <i class="bi bi-x-lg Close text-white text-2xl" ref="close"></i>
        </button>
      </div>

      <nav ref="navbar" v-show="isNavbarOpen" class="navbar flex w-full flex-col justify-start items-start text-left sm:justify-center sm:items-center">
        <div class="contenitore lg:flex flex-grow w-full justify-center items-center transition-all">
          <ul ref="lista" data-testid="nav-list" class="flex flex-col list-none mx-auto">
            <div class="md:w-full md:flex md:flex-row w-44 mx-auto"> 
              <li class="nav-item w-fit mx-2">
                <div class="flex my-1 items-center">
                  <span class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">01</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="Home"
                    to="/">
                    <span>Home</span>
                  </RouterLink>
                </div>
              </li>
              <li class="nav-item w-fit mx-2">
                <div class="flex my-1 items-center">
                  <span class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">02</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="About"
                    to="/About">
                    <span>Riguardo noi</span>
                  </RouterLink>
                </div>
              </li>
              <li class="nav-item w-fit mx-2">
                <div class="flex my-1 items-center">
                  <span class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">03</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="Analisi"
                    to="/Analytics">
                    <span>Analisi</span>
                  </RouterLink>
                </div>
              </li>
              <li class="nav-item w-fit ml-2">
                <div class="flex my-1 items-center">
                  <span class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">04</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="Informazioni"
                    to="/Informations">
                    <span>Informazioni</span>
                  </RouterLink>
                </div>
              </li>  
            </div>           
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
      let btnClose = this.$refs.close;
      let btnOpen = this.$refs.open;

      if (this.isNavbarOpen && event.target !== toggleButton && !navbar.contains(event.target) && !wrapper.contains(event.target)) {
        this.isNavbarOpen = false;
        document.body.style.overflow = 'hidden';
        if(!this.isNavbarOpen) {
          btnClose.classList.remove('active');
          btnOpen.classList.add('active');
        }
      }
    },
    toggleActive() {
      const navItems = this.$refs.lista.querySelectorAll('.nav-item');
      let btnClose = document.querySelector('.Close');
      let btnOpen = document.querySelector('.Open');
      navItems.forEach(item => {
        if (this.isNavbarOpen) {
          item.classList.add('active');
          btnClose.classList.add('active');
          btnOpen.classList.remove('active');
        } else {
          item.classList.remove('active');
          btnClose.classList.remove('active');
          btnOpen.classList.add('active');
        }
      });      
    },
  },
  watch: {
    isNavbarOpen(newVal) {
      document.body.style.overflow = newVal ? 'hidden' : 'auto';
    }
  }
};
</script>
<!-- style in the /src/main.css -->