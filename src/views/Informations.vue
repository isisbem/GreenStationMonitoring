<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
    <div>
        <div class="min-h-[100dvh] min-h-screen">
            <div class="Informations min-h-[40vh] max-w-3xl mx-auto w-full">
                <!-- .sectionNormal -->
                <div class="container w-full mt-4 flex flex-col text-black text-left">
                    <h1 class="font-semibold text-2xl w-full text-center mt-16 mx-4 sm:mx-auto">
                        Di più +
                    </h1>
                    <!-- first table with some information -->
                    <div class="mt-10 grid mx-4 sm:mx-auto">
                        <dl class="z-10">
                            <div
                                class="rounded-t-lg px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
                                <dt class="text-lg font-medium text-green-500"> Nome del progetto: </dt>
                                <dd class="mt-3 font-semibold text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                    Green Station Monitoring
                                </dd>
                            </div>
                            <div
                                class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
                                <dt class="text-lg font-medium text-green-500"> Membri del gruppo: </dt>
                                <dd class="mt-3 font-medium text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                    <div class="grid grid-cols-2">
                                        <!-- 1 -->
                                        <div class="grid grid-cols-1 w-full">
                                            <p class="font-semibold">Area Tecnica</p>
                                        </div>
                                        <div class="grid grid-cols-1 w-full max-w-max">
                                            <p class="font-normal">
                                                Bertotti, Santaniello, Pecenkovic, Bonaldo,
                                                Dima, Silvano, Sizzi, Bossio, Scognamiglio,
                                                La Battaglia, Pernice, Cassola, Mennella.
                                            </p>
                                        </div>
                                        <!-- 2 -->
                                        <div class="grid grid-cols-1 w-full pt-3">
                                            <p class="font-semibold">Area Creativa</p>
                                        </div>
                                        <div class="grid grid-cols-1 w-full pt-3 max-w-max">
                                            <p class="font-normal">
                                                Manià, Malaroda, Moratti,
                                                Lapira, Nisi, Apostoli.
                                            </p>
                                        </div>
                                        <!-- 3 -->
                                        <div class="grid grid-cols-1 pt-3">
                                            <p class="font-semibold">Area Gestionale</p>
                                        </div>
                                        <div class="grid grid-cols-1 pt-3 w-full max-w-max">
                                            <p class="font-normal">Rogoza, Corsi, Nisi.</p>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                            <div
                                class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
                                <dt class="text-lg font-medium text-green-500"> Email address </dt>
                                <a href="mailto:greenstation.monitoring@gmail.com" class="w-full">
                                    <dd
                                        class="mt-3 font-semibold text-md text-gray-900 sm:mt-0 sm:col-span-2 hover:text-green-500 transition-colors">
                                        greenstation.monitoring@gmail.com
                                    </dd>
                                </a>
                            </div>
                            <div
                                class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
                                <dt class="text-lg font-medium text-green-500"> Ringraziamenti: </dt>
                                <dd class="mt-3 font-medium text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                    <p class="font-normal">
                                        Rigraziamo i prof. che hanno aderito a questo
                                        progetto e che ci hanno supportato:
                                    </p>
                                    <ul class="list-disc pl-5 pt-2 m-1">
                                        <li>
                                            <span class="font-semibold w-full">prof. Pierdomenico</span>
                                        </li>
                                        <li>
                                            <span class="font-semibold w-full">prof. Apollo</span>
                                        </li>
                                        <li>
                                            <span class="font-semibold w-full">prof. Spessot</span>
                                        </li>
                                    </ul>
                                </dd>
                            </div>

                            <div class="rounded-b-lg px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-lg font-medium text-green-500"> Nel dettaglio: </dt>
                                <dd class="mt-3 text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                    Questo progetto recupererà
                                    <span class="font-semibold">varie statistiche</span>
                                    dalla pensilina fotovoltaica. Questi dati possono essere
                                    di natura prettamente tecnica come l'assorbimento di energia
                                    elettrica istantaneo o nel tempo o dati sul suo utilizzo,
                                    ma ci sono anche dati user-friendly come il numero di prese
                                    di ricarica disponibili e prese occupate.
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <!-- graph with flowchart -->
                    <!-- rest of informations -->
                </div>
            </div>
            <!-- Sample HTML/tailwind Form -->
            <div class="min-h-full my-48 bg-white py-2 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 mx-0 sm:max-w-full sm:mx-auto">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:py-24 sm:px-28">
                        <!-- form (basin form)-->
                        <form action="https://usebasin.com/f/37a6db30912f" method="POST" enctype="multipart/form-data"
                            id="form">
                            <div class="py-8 sm:min-w-[375px] text-base leading-5 space-y-7 text-gray-700 sm:text-lg sm:leading-7">
                                <h1 class="font-bold py-2 mx-auto w-full text-xl sm:text-2xl">Send a message</h1>
                                <div class="relative">
                                    <input v-model="email" @input="validateEmail"
                                        :class="{ 'border-red-500': !isValidEmail }" autocomplete="off" required
                                        id="email" name="email" type="text" placeholder="Email address" class="peer placeholder-transparent h-10 w-full 
                                                    focus:border-b-green-500 border-b-2 border-gray-300
                                                    text-gray-900 focus:outline-none focus:borer-rose-600
                                                    focus:shadow-sm" />
                                    <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm 
                                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 
                                                    peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5
                                                    peer-focus:text-gray-600 peer-focus:text-sm">
                                        Email Address
                                    </label>
                                </div>
                                <div class="relative">
                                    <div class="relative w-full min-w-[200px]">
                                        <textarea class="peer h-full min-h-[150px] w-full resize-none rounded-[7px] border 
                                                      border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 
                                                      font-sans text-sm font-normal text-blue-gray-700 outline outline-0 
                                                      transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                                                      placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 
                                                      focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 
                                                      disabled:bg-blue-gray-50 focus:shadow-md" placeholder=""
                                            name="message" required></textarea>
                                        <label
                                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 
                                                      -top-1.5 flex h-full w-full select-none text-[13px] font-normal leading-tight 
                                                      text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] 
                                                      before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 
                                                      before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 
                                                      before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 
                                                      after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow 
                                                      after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 
                                                      after:transition-all peer-placeholder-shown:text-sm
                                                      peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 
                                                      peer-placeholder-shown:before:border-transparent 
                                                      peer-placeholder-shown:after:border-transparent peer-focus:text-[13px] 
                                                      peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 
                                                      peer-focus:before:border-l-2 peer-focus:before:border-green-500 
                                                      peer-focus:after:border-t-2 peer-focus:after:border-r-2peer-focus:after:border-green-500"
                                            for="message">
                                            Message
                                        </label>
                                    </div>
                                </div>
                                <div class="relative">
                                    <button type="submit"
                                        class="bg-green-500 hover:bg-green-600 text-white font-medium 
                                                    py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline-green 
                                                    active:bg-green-700 transition-all hover:-translate-y-1 hover:shadow-md">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                        <!-- finish form -->
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
export default {
    data() {
        return {
            email: '',
            isValidEmail: true
        }
    },
    methods: {
        validateEmail() {
            this.isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
        },
    }
}
</script>