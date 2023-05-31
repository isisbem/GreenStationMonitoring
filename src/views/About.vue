<script setup>
import Footer from '../components/Footer.vue'
import heroAbout from '../components/transition-component/FirstSectAbout.vue'
import Artplayer from "../components/Videos.vue";
import Cards from '../components/transition-component/Cards.vue'
</script>

<template>
    <div>
        <div class="about min-h-full">
            <div class="h-2/3 mt-4 flex flex-col justify-center items-center text-black">
                <div class="flex min-h-full flex-col items-center justify-center w-full max-w-5xl mt-16 mx-auto">
                    <div class="sectionNormal">
                        <!-- title transition -->
                        <heroAbout></heroAbout>
                        <!-- table with all items -->
                        <div class="flex flex-wrap flex-col max-w-md lg:max-w-2xl w-full mt-4">
                            <div class="my-4 mx-3 flex flex-col sm:flex sm:flex-row" data-aos="zoom-in" data-duration="500"
                                data-easing="ease-in">
                                <!-- 1 row -->
                                <div data-aos="zoom-in" data-duration="600" data-delay="200" data-easing="ease-in"
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
                            <div class="my-4 mx-3 flex flex-col sm:flex sm:flex-row" data-aos="zoom-in" data-duration="500"
                                data-delay="200" data-easing="ease-in">
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
                        <Cards></Cards>
                    </div>

                    <!-- Photo/video -->
                    <div class="container w-full flex flex-col gap-8 max-w-4xl mx-auto shadow-md min-h-screen relative">
                        <div class="container mx-auto text-center">
                            <h1 class="font-bold text-2xl sm:text-3xl py-2 mb-3">
                                Gallery
                            </h1>
                        </div>
                        <div class="grid layout-1 grid-cols-1 sm:grid-cols-2 columns-2xs gap-4 px-2 w-full">
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="/GSM/1.jpeg" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="/GSM/2.jpeg" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>

                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="/GSM/3.jpeg" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="/GSM/4.jpeg" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <!-- new image -->
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="../../public/GSM/IMG_7119.JPG" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="../../public/GSM/IMG_7143.JPG" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="../../public/GSM/IMG_7148.JPG" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="../../public/GSM/IMG_7150.JPG" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="../../public/GSM/IMG_7151.JPG" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="../../public/GSM/IMG_7156.JPG" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="../../public/GSM/IMG_7157.JPG" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                            <div class="grid col-span-1 px-2 object-cover max-w-full">
                                <img src="../../public/GSM/IMG_7118.JPG" alt="photos" class="object-cover rounded-md shadow"
                                    title="green station physical photo">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-4 px-2 w-full">
                            <div class="container mx-auto text-center mt-20 mb-0">
                                <h1 class="text-2xl sm:text-3xl font-bold m-0">
                                    Video
                                </h1>
                            </div>
                            <div class="grid col-span-1 px-2 max-h-screen mx-auto object-cover max-w-full">
                                <Artplayer @get-instance="getInstance" id="webm/mp4" :option="option" :style="style" />
                            </div>
                        </div>
                        <!-- domande -->
                        <div class="my-24 min-h-full">
                            <div
                                class="flex flex-col sm:flex-row mx-2 sm:mx-auto justify-center items-center gap-2 max-h-full my-24">
                                <!-- container -->
                                <div class="full flex flex-col px-2 sm:p-0">
                                    <h1 class="font-semibold text-2xl">Altre domande?</h1>
                                    <a class="tags" data-gloss="Click below for the answer!">
                                        <span class="text-lg sm:text-xl py-2">
                                            Box domande
                                        </span>
                                    </a>

                                    <!-- box domande -->
                                    <div class="container w-full mx-auto flex flex-col justify-start items-start pt-8 mt-6">
                                        <button @click="toggleContent(1)" :class="{ 'button-active': showContent1 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Cosa tratta il progetto?
                                            <i :class="showContent1 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent1" class=" max-w-[383px] text-left mt-2 mb-6 pl-2">
                                            "GreenStation" si occupa di monitorare e analizzare i dati di una
                                            pensilina fotovoltaica. I dati riguardanti le prese, i consumi ecc.
                                            verranno raccolti e analizzati per un utilizzo più sostenibile della
                                            pensilina.
                                        </div>

                                        <button @click="toggleContent(2)" :class="{ 'button-active': showContent2 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Quali tipi di mezzi possono essere ricaricati?
                                            <i :class="showContent2 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent2" class=" max-w-[383px] text-left mt-2 mb-6 pl-2">
                                            I tipi di mezzi consentiti sono il monopattino elettrico, la bici elettrica
                                            e gli scooter elettrici.
                                        </div>

                                        <button @click="toggleContent(3)" :class="{ 'button-active': showContent3 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Come si ricaricano i mezzi elettrici?
                                            <i :class="showContent3 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent3" class=" max-w-[383px] text-left mt-2 mb-6 pl-2">
                                            I mezzi elettrici vengono caricati tramite l'ausilio delle porte elettroniche
                                            che possono erogare al massimo: 240v - 48Amp.
                                        </div>

                                        <button @click="toggleContent(4)" :class="{ 'button-active': showContent4 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            L'energia da dove viene presa?
                                            <i :class="showContent4 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent4" class=" max-w-[383px] text-left mt-2 mb-6 pl-2">
                                            L'energia che serve per ricaricare fino a 6 mezzi contemporaneamente viene
                                            presa direttamente dai pannelli fotovoltaici posti al di sopra della pensilina,
                                            in modo totalmente <i>sostenibile</i>.
                                        </div>

                                        <button @click="toggleContent(5)" :class="{ 'button-active': showContent5 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            Fino a quante ore posso caricare?
                                            <i :class="showContent5 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent5" class=" max-w-[383px] text-left mt-2 mb-6 pl-2">
                                            In genere le ore consentite massime si aggirano intorno alle 2 ore, per
                                            consentire
                                            di liberare le prese in caso fossero occupate e consentire alle altre persone
                                            di poter ricaricare i propri mezzi.
                                        </div>

                                        <button @click="toggleContent(6)" :class="{ 'button-active': showContent6 }"
                                            class="flex justify-between min-w-full w-64 sm:w-96 px-4 py-2 mt-3 text-md font-medium text-left text-dark-500 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                            GreenStation che informazioni raccoglie?
                                            <i :class="showContent6 ? 'bi bi-arrow-up' : 'bi bi-arrow-down'"
                                                class="text-dark-500"></i>
                                        </button>
                                        <div v-show="showContent6" class=" max-w-[383px] text-left mt-2 mb-6 pl-2">
                                            Noi ci occupiamo di prelevare e analizzare i dati riguardanti l'erogazione della
                                            corrente
                                            in tempo reale, lo storico delle prese, gli utilizzi per ogni giorno, settimana
                                            e mese. Questo
                                            ci permette di modificare l'erogazione e i vari stati di accensione e
                                            spegnimento della pensilina
                                            al fine di avere il massimo rendimento.
                                        </div>
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
export default {
    data() {
        return {
            option: {
                url: "/GSM/IMG_2848.webm",
                url: "/GSM/IMG_2848_MP4.mp4",
                poster: "/GSM/GSM_Poster_1.png",
            },
            style: {
                /**width and height**/
                margin: "60px auto",
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
        //AOS animation
        mounted() {
            AOS.init()
        },
    },
};
</script>

<style>
.layout-1 img {
    aspect-ratio: 5 / 4 !important;
    margin: 1rem 0 !important;
}
</style>