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
                            <div class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
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
                            <div class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
                                <dt class="text-lg font-medium text-green-500"> Email address </dt>
                                <a href="mailto:greenstation.monitoring@gmail.com" class="w-full">
                                    <dd
                                        class="mt-3 font-semibold text-md text-gray-900 sm:mt-0 sm:col-span-2 hover:text-green-500 transition-colors">
                                        greenstation.monitoring@gmail.com
                                    </dd>
                                </a>
                            </div>
                            <div class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
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
            
            

        </div>
        <Footer></Footer>
</div></template>