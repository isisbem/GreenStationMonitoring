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
                                    <div class="flex flex-col p-2 my-2 tondo object-cover border-4 border-neutral-200 bg-green-500 hover:bg-green-400 transition-all">
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
                                            Abbiamo iniziato a sviluppare e a progettare questo progetto per la pensilina fotovoltaica
                                            per monitorare e gestire i dati che verranno raccolti direttamente da essa. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="my-4 mx-3 flex flex-col sm:flex sm:flex-row">
                                <!-- 2 row -->
                                <div
                                    class="hover:transition-shadow hover:shadow-lg border border-gray-300 rounded-md flex flex-col justify-center items-center w-full mr-3">
                                    <div class="flex flex-col p-2 my-2 tondo object-cover border-4 border-neutral-200 bg-green-500 hover:bg-green-400 transition-all">
                                        <i class="bi bi-graph-up text-xl text-neutral-100"></i>
                                    </div>
                                    <h1 class="font-semibold">About the project</h1>
                                    <div class="rounded p-3 regular">
                                        <p class="py-1">
                                            Questo progetto è nato dall'esigenza di monitorare l'utilizzo 
                                            della pensilina fotovoltaica realizzata dal 
                                            <span class="font-bold"> prof. Roberto Bertogna</span>
                                            , il quale ha realizzato la pensilina.
                                        </p>
                                        <p class="pt-2">
                                            Questi dati verranno raccolti 
                                            e convogliati in un server, dove verranno modellati dal nostro programma e la pensilina verrà regolata 
                                            in base alle misurarazioni effettuate. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- 3 row -->
                            <!-- if  it is -->
                        </div>
                    </div>
                    <!-- second section -->
                    <div class="mt-14 md:mt-24">
                        <h1 class="font-semibold text-2xl">Perché questo progetto?</h1>
                    </div>
                    <div class="sectionNormal2">
                        <div class="flex flex-col sm:flex-row gap-2 max-h-full mt-4 mb-24">
                            <!-- carousel of cards -->
                            <div class="card hover:transition-shadow hover:shadow-xl mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
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
                            <div class="card hover:transition-shadow hover:shadow-xl mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
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
                            <div class="card hover:transition-shadow hover:shadow-xl mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
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
            </div>
            <Footer class="mt-auto"></Footer>
        </div>
    </div>
</template>