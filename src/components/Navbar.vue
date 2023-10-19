<template>
  <!-- navbar -->
  <header class="m-0 flex flex-wrap items-center justify-between px-2 py-3 bg-green-500">
    <div ref="wrapper" @click="handleOutsideClick"
      class="container container-navbar-first lg:px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full fullata relative flex justify-between">
        <!-- HOME PHOTO LOGO -->
        <Router-Link
          class="logo-home text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white outline-none focus:outline-none active:outline-1 active:outline active:outline-slate-300 active:rounded p-3"
          to="/">
          <div>
            <img src="/Logo.webp" class="imageLogo" alt="">
          </div>
        </Router-Link>
        <!-- HAMBURGER -->
        <button
          class="text-white hamburger cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none active:outline-1 active:outline active:outline-slate-300"
          type="button" ref="toggleButton" @click="isNavbarOpen = !isNavbarOpen; toggleActive()">
          <i class="bi bi-list Open active text-white text-2xl" ref="open"></i>
          <i class="bi bi-x-lg Close text-white text-2xl" ref="close"></i>
        </button>
      </div>

      <nav ref="navbar" v-show="isNavbarOpen"
        class="navbar flex w-full flex-col justify-start items-start text-left lg:justify-center lg:items-center">
        <div class="contenitore lg:flex flex-grow w-full justify-center items-center  transition-all">
          <!-- SEARCH BAR **MOBILE** -->
          <div ref="SearchContainer" class="search-bar mobile mx-0">
            <form class="flex items-center">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full search-container">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <!-- INPUT -->
                <input
                  v-model="search"
                  @focus="OpenResults"
                  id="voice-search"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm search-bar-input
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Search"
                  required
                >
              </div>
            </form>
          </div>

          <!-- NAVIGATION LIST -->
          <ul ref="lista" data-testid="nav-list" class="flex flex-col list-none mx-auto">
            <div class="md:w-full p-0 md:flex md:flex-row w-44 mx-auto">
              <li class="nav-item w-fit mx-2">
                <div class="flex my-1 items-center">
                  <span
                    class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">01</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="Home" to="/">
                    <span>Home</span>
                  </RouterLink>
                </div>
              </li>
              <li class="nav-item w-fit mx-2">
                <div class="flex my-1 items-center">
                  <span
                    class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">02</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="About" to="/About">
                    <span>Riguardo noi</span>
                  </RouterLink>
                </div>
              </li>
              <li class="nav-item w-fit mx-2">
                <div class="flex my-1 items-center">
                  <span
                    class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">03</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="Concorsi" to="/Concorsi">
                    <span>Concorsi</span>
                  </RouterLink>
                </div>
              </li>
              <li class="nav-item w-fit mx-2">
                <div class="flex my-1 items-center">
                  <span
                    class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">04</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="Analisi" to="/Analytics">
                    <span>Analisi</span>
                  </RouterLink>
                </div>
              </li>
              <li class="nav-item w-fit ml-2">
                <div class="flex my-1 items-center">
                  <span
                    class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">05</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="Informazioni" to="/Informations">
                    <span>Informazioni</span>
                  </RouterLink>
                </div>
              </li>
              <li class="nav-item w-fit mx-2">
                <div class="flex my-1 items-center">
                  <span
                    class="text-white font-mono pl-2 inline-flex justify-center items-center w-6 h-6 text-base ml-2 font-bold">06</span>
                  <RouterLink
                    class="pl-3 py-2 flex justify-center items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    title="Home" to="/OurSchool">
                    <span>School</span>
                  </RouterLink>
                </div>
              </li>
            </div>
          </ul>

          <!-- SEARCH BAR for **DESKTOP** -->
          <div ref="SearchContainerDesktop" class="search-bar isClose desktop mx-0">
            <form class="flex items-center">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full search-container">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <!-- INPUT -->
                <input
                  v-model="search"
                  @focus="OpenResults"
                  id="voice-search"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm search-bar-input
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Search"
                  required
                >
              </div>
            </form>
          </div>

          <!-- TPL BADGE -->
          <div class="ribbon-navbar-mobile">
            <div class="wrap">
              <span class="ribbon6">
                <img src="/Tpl_logo_piccolo.webp" width="40" height="40" alt="TPL LOGO" title="Winner TPL fvg 1*"
                  role="img">
                <a href="https://www.tplfvg.it" target="_blank" role="link">TPL fvg Winner 1</a>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div class="ribbon">
        <div class="wrap">
          <span class="ribbon6">
            <img src="/Tpl_logo_piccolo.webp" width="40" height="40" alt="TPL LOGO" title="Winner TPL fvg 1*"
              role="img">
            <a href="https://www.tplfvg.it" target="_blank" role="link">TPL fvg Winner 1</a>
          </span>
        </div>
      </div>
    </div>
  </header>

  <!-- ALL RESULTS -->
  <div ref="ResultContainer" class="result-search transition-all overflow-hidden font-sans w-full h-screen absolute inset-0 m-auto">
    <div ref="SearchContainer" class="search-bar search-bar-open desktop mt-32">
      <form class="flex items-center">
        <label for="search-input-desktop" class="sr-only">Search</label>
        <!-- input search -->
        <div class="relative w-full search-container">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <!-- ... (previous code) -->
          </div>
          <!-- INPUT -->
          <input
            v-model="search"
            @focus="OpenResults"
            id="search-input-desktop"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm search-bar-input
              rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search"
            required
          >
        </div>
        <!-- close button -->
        <div
          ref="closeButton"
          @click="CloseSearch" 
          class="Close-search ml-2 hover:cursor-pointer w-[30px] h-[30px] hover:scale-105 flex justify-center items-center">
          <i class="bi bi-x-square text-3xl"></i>
        </div>
      </form>
    </div>
    <!-- results -->
    <div ref="result-display" class="mt-10 ml-0 w-[205px] md:w-[470px] text-left result-display">
      <h1 class="title text-xl sm:text-2xl ml-0 mr-auto text-left mt-8 sm:mt-4"> 
        Results: 
      </h1>
      <ul  :class="{ 'hidden': !search }" class="product-list flex flex-col justify-start w-60 py-6 border-b border-b-gray-400">
        <span class="mt-2 mb-4 text-base">Local links:</span>
        <li v-for="product in filteredProducts" :key="product.route" class="flex flex-row gap-2">
          <RouterLink :to="product.route" class="text-lg" @click="CloseSearch">
            {{ product.name }}
          </RouterLink>
        </li>
      </ul>
    
      <ul :class="{ 'hidden': !search }" class="product-list flex flex-col justify-start w-60 py-6 border-b border-b-gray-400">
        <span class="mt-2 mb-4 text-base">External links:</span>
        <li v-for="item in filteredStuff" :key="item.path" class="flex flex-row gap-2">
          <a :href="item.path" class="text-lg" target="_blank" @click="CloseSearch">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'; // Import RouterLink from Vue Router

export default {
  data() {
    return {
      isNavbarOpen: false,
      /* for search bar */
      products: [
        {name: "Home", route: "/"},
        {name: "Riguardo a noi", route: "/About"},
        {name: "Concorsi", route: "/Concorsi"},
        {name: "Analisi dati raccolti", route: "/Analytics"},
        {name: "Informazioni", route: "/Informations"},
        {name: "La nostra Scuola", route: "/OurSchool"},
      ],
      stuff: [
        /** others stuff **/
        {name: "Sito ISIS BEM G. MARCONI", path: "https://bem.goiss.edu.it/"},
        {name: "Articolo Vincitori TPL FVG", path: "https://bem.goiss.edu.it/pagine/ciclomobilit-e-mobilit-sostenibile-il-marconi-ancora-in-vetta"},
      ],
      search: ""
    };
  },
  /* computed for search bar */
  computed: {
    /** two filters **/
    filteredProducts() {
      return this.products.filter((p) => {
        return (
          p.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        );
      });
    },
    filteredStuff() {
      return this.stuff.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        );
      });
    },
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
        if (!this.isNavbarOpen) {
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
    OpenResults() {
      const ResultContainer = this.$refs.ResultContainer;
      const searchContainerDesktop = this.$refs.SearchContainerDesktop;
      if (searchContainerDesktop.classList.contains('isClose')) {
        ResultContainer.classList.add('result-active');
      }
    },
    CloseSearch() {
      const ResultContainer = this.$refs.ResultContainer;      
      ResultContainer.classList.remove('result-active');
    }
  },
  watch: {
    isNavbarOpen(newVal) {
      document.body.style.overflow = newVal ? 'hidden' : 'auto';
    }
  }
};
</script>
<!-- style in the /src/main.css -->