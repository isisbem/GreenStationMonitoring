<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
    <div>
        <div class="about min-h-full">
            <div class="h-2/3 mt-4 flex flex-col justify-center items-center text-black">
                <div class="flex min-h-full flex-col items-center justify-center w-full max-w-5xl mt-16 mx-auto">
                    <div class="sectionNormal">
                        <!-- title -->
                        <h1 class="font-semibold text-2xl">Informazioni sul team</h1>
                        <!-- table with all items -->
                        <div class="flex flex-wrap flex-col max-w-md lg:max-w-2xl w-full mt-4">
                            <div class="my-4 mx-3 flex flex-col sm:flex sm:flex-row">
                                <!-- 1 row -->
                                <div
                                    class="hover:transition-shadow hover:shadow-lg border border-gray-300 flex flex-col justify-center items-center rounded-md w-full mr-3">
                                    <div
                                        class="flex flex-col p-2 my-2 tondo object-cover border-4 border-neutral-200 bg-green-500 hover:bg-green-400 transition-all">
                                        <i class="bi bi-people-fill text-xl text-neutral-100"></i>
                                    </div>
                                    <h1 class="font-semibold">Teammate</h1>
                                    <div class="rounded p-3 font-regular">
                                        <p class="py-1">
                                            Siamo una quarta superiore (4IA) dell'istituto tecnico-informatico
                                            "G. Marconi" di Staranzano. La cosa che più ci accumuna è la passione
                                            per l'informatica e per i nuovi progetti.
                                        </p>
                                        <p class="pt-2">
                                            Abbiamo iniziato a sviluppare e a progettare questo progetto per la pensilina
                                            fotovoltaica
                                            per monitorare e gestire i dati che verranno raccolti direttamente da essa.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="my-4 mx-3 flex flex-col sm:flex sm:flex-row">
                                <!-- 2 row -->
                                <div
                                    class="hover:transition-shadow hover:shadow-lg border border-gray-300 rounded-md flex flex-col justify-center items-center w-full mr-3">
                                    <div
                                        class="flex flex-col p-2 my-2 tondo object-cover border-4 border-neutral-200 bg-green-500 hover:bg-green-400 transition-all">
                                        <i class="bi bi-graph-up text-xl text-neutral-100"></i>
                                    </div>
                                    <h1 class="font-semibold">progetto "GreenStation"</h1>
                                    <div class="rounded p-3 regular">
                                        <p class="py-1">
                                            Questo progetto è nato dall'esigenza di monitorare l'utilizzo
                                            della pensilina fotovoltaica realizzata dal
                                            <span class="font-bold"> prof. Roberto Bertogna</span>
                                            , il quale ha realizzato la pensilina.
                                        </p>
                                        <p class="pt-2">
                                            Questi dati verranno raccolti
                                            e convogliati in un server, dove verranno modellati dal nostro programma e la
                                            pensilina verrà regolata
                                            in base alle misurarazioni effettuate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- 3 row -->
                            <!-- if  it is -->
                        </div>
                    </div>

                    <div class="mt-44 mb-2">
                        <!-- second section -->
                        <div class="my-2">
                            <h1 class="font-semibold text-2xl">Perché questo progetto?</h1>
                        </div>
                        <div class="m-auto">
                            <div class="flex flex-col sm:flex-row gap-2 max-h-full mt-4 mb-24">
                                <!-- carousel of cards -->
                                <div
                                    class="card hover:transition-shadow hover:shadow-xl mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
                                    <!-- image -->
                                    <div class="flex justify-center items-center w-full p-3">
                                        <img src="/green-economy.png" class="w-10 h-10 object-cover" alt="">
                                    </div>
                                    <h1 class="font-medium my-2 text-md break-words">
                                        Risparmio di soldi
                                    </h1>
                                    <p class="font-normal text-sm">
                                        L'istruzione pubblica è una cosa molto importante per i cittadini,
                                        ed è proprio per questo che la scuola di
                                        particolare cerca di aiutare le persone fornendo i mezzi per
                                        facilitare il viaggio, ammortizzare tutti i costi e rendere l'accesso
                                        scuola accessibile a tutti.
                                    </p>
                                </div>
                                <div
                                    class="card hover:transition-shadow hover:shadow-xl mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
                                    <!-- image -->
                                    <div class="flex justify-center items-center w-full p-3">
                                        <img src="/paper.png" class="w-10 h-10 object-cover" alt="">
                                    </div>
                                    <h1 class="font-medium my-2 text-md break-words">
                                        Un'analisi precisa
                                    </h1>
                                    <p class="font-normal text-sm">
                                        grazie alle nostre analisi potrai risparmiare
                                        elettricità e risparmiare il più possibile. L'amministrazione
                                        il servizio sarà più fluido, immediato e alla portata di tutti
                                        portata, grazie all'interfaccia user-friendly del software.
                                    </p>
                                </div>
                                <div
                                    class="card hover:transition-shadow hover:shadow-xl mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
                                    <!-- image -->
                                    <div class="flex justify-center items-center w-full p-3">
                                        <img src="/planet-earth.png" class="w-10 h-10 object-cover" alt="">
                                    </div>
                                    <h1 class="font-medium my-2 text-md break-words">
                                        Salvare l'ambiente
                                    </h1>
                                    <p class="font-normal text-sm">
                                        Lo sviluppo sostenibile e l'uso di veicoli elettrici per tutti i giorni
                                        la mobilità sta diventando una pratica adottata da tutti in tutto il mondo,
                                        ed è sempre in evoluzione. Per questo, grazie alla stazione di ricarica
                                        e il nostro monitoraggio, saranno incoraggiati i viaggi su veicoli elettrici.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Photo/video -->
                    <div class="container w-full max-w-4xl mx-auto shadow-md min-h-screen relative">
                        <div class="container mx-auto text-center">
                            <h1 class="font-bold text-2xl sm:text-3xl py-2 mb-3">
                                Gallery
                            </h1>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 columns-2xs gap-4 px-2 w-full">
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="/GSM/1.jpeg" alt="photos"
                                    class="object-cover rounded-md shadow" title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="/GSM/2.jpeg" alt="photos"
                                    class="object-cover rounded-md shadow" title="green station physical photo">
                            </div>

                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="/GSM/3.jpeg" alt="photos"
                                    class="object-cover rounded-md shadow" title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="/GSM/4.jpeg" alt="photos"
                                    class="object-cover rounded-md shadow" title="green station physical photo">
                            </div>
                        </div>
                        <div class="container mx-auto text-center">
                            <h1 class="text-2xl sm:text-3xl font-bold py-2 mt-12 mb-4">
                                Video
                            </h1>
                        </div>
                        <div class="grid grid-cols-1 gap-4 px-2 w-full">
                            <div class="grid col-span-1 px-2 max-h-screen mx-auto object-cover max-w-full">
                                <Artplayer @get-instance="getInstance" :option="option" :style="style" />
                                <!-- <video 
                                    src="/GSM/IMG_2848.webm" type="video/webm"
                                    controls="" loop="" 
                                    class="max-h-[500px] max-w-full border-green-500 border rounded-lg border-double p-1"
                                    v-bind:aria-controls="true">
                                </video> -->
                            </div>
                        </div>
                        <!-- domande -->
                        <div class="my-24 min-h-full">
                            <div
                                class="flex flex-col sm:flex-row mx-2 sm:mx-auto justify-center items-center gap-2 max-h-full mt-4 mb-24">
                                <!-- container -->
                                <div class="full flex flex-col px-2 sm:p-0">
                                    <h1 class="font-semibold text-2xl">Altre domande?</h1>
                                    <a class="tags" data-gloss="Click hover the questions!">
                                        <span class="text-lg sm:text-xl py-2">
                                            Box domande
                                        </span>
                                    </a>

                                    <!-- box domande -->
                                    <div class="container w-full mx-auto flex flex-col justify-start items-start pt-8 mt-6">
                                        <button @click="toggleContent(1)" :class="{ 'button-active': showContent1 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Domanda 1
                                            <i :class="showContent1 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent1">Testo della domanda 1</div>

                                        <button @click="toggleContent(2)" :class="{ 'button-active': showContent2 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Domanda 2
                                            <i :class="showContent2 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent2">Testo della domanda 2</div>

                                        <button @click="toggleContent(3)" :class="{ 'button-active': showContent3 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Domanda 3
                                            <i :class="showContent3 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent3">Testo della domanda 3</div>

                                        <button @click="toggleContent(4)" :class="{ 'button-active': showContent4 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Domanda 4
                                            <i :class="showContent4 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent4">Testo della domanda 4</div>

                                        <button @click="toggleContent(5)" :class="{ 'button-active': showContent5 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Domanda 5
                                            <i :class="showContent5 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent5">Testo della domanda 5</div>

                                        <button @click="toggleContent(6)" :class="{ 'button-active': showContent6 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Domanda 6
                                            <i :class="showContent6 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent6">Testo della domanda 6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer class="mt-auto w-[100vw]"></Footer>
            </div>
        </div>
    </div>
</template>
  
<script>
import Artplayer from "../components/Videos.vue";

export default {
  data() {
    return {
      option: {
        url: "/GSM/IMG_2848.webm",
      },
      style: {
        width: "600px",
        height: "400px",
        margin: "60px auto 0",
      },
      showContent1: false,
      showContent2: false,
      showContent3: false,
      showContent4: false,
      showContent5: false,
      showContent6: false,
    };
  },
  components: {
    Artplayer,
  },
  methods: {
    getInstance(art) {
      console.info(art);
    },
    toggleContent(id) {
      switch (id) {
        case 1:
          this.showContent1 = !this.showContent1;
          break;
        case 2:
          this.showContent2 = !this.showContent2;
          break;
        case 3:
          this.showContent3 = !this.showContent3;
          break;
        case 4:
          this.showContent4 = !this.showContent4;
          break;
        case 5:
          this.showContent5 = !this.showContent5;
          break;
        case 6:
          this.showContent6 = !this.showContent6;
          break;
      }
    },
  },
};
</script>
