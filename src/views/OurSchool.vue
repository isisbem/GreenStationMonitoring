<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <!-- 100dvh / 100vh -->
    <div class="min-h-[100dvh] min-h-screen">
      <div class="Our-School min-h-[40vh] max-w-4xl mx-auto w-full">
        <div class="max-w-4xl mx-auto w-full min-h-full mt-4 flex flex-col 
                    justify-center items-center text-black text-center">
          <h1 class="font-bold text-2xl w-full text-center mt-16 mx-4 sm:mx-auto">Our school</h1>
          <h1 class="font-semibold text-2xl w-full text-center mt-2 mb-8 sm:mx-auto">ITI "Guglielmo Marconi", Staranzano
            (GO)</h1>
          <p class=" font-normal text-lg md:text-xl text-neutral-900">Ingresso principale dell'istituto</p>
          <div class="container mx-auto block max-w-7xl h-full w-full">
            <figure class="mx-auto w-full my-2 flex flex-row justify-center items-center">
              <img src="/school-ph/th-912641979.jpg"
                class="max-w-[900px] px-6 md:px-0 rounded-lg md:mx-auto w-full h-full" alt="">
            </figure>
          </div>
          <div class="container mx-auto block max-w-7xl mt-8 h-full w-full">
            <p class=" font-normal text-lg md:text-xl text-neutral-900">Parte sul retro dell'istituto</p>
            <figure class="mx-auto w-full my-2 flex flex-row justify-center items-center">
              <img src="/school-ph/Foto-2-external.jpg"
                class="max-w-[900px] px-6 md:px-0 rounded-lg md:mx-auto w-full h-full" alt="">
            </figure>
          </div>
        </div>

        <div class="container flex flex-col my-20 h-full justify-center items-center">
          <div class="max-w-3xl mx-auto">
            <h1 class="font-bold text-2xl w-full text-center mt-16 mx-4 sm:mx-auto">Contatti</h1>
            <a href="https://bem.goiss.edu.it/" target="_blank" class="my-4 inline-block w-fit mx-auto">
              <button
                class="w-full border border-gray-300 active:border-2 active:border-gray-400 hover:shadow-lg rounded-lg py-3 px-6">sito
                web <span class="font-bold">"Isis bem G.
                  Marconi"</span></button>
            </a>
            <div class="grid grid-cols-1 text-left mb-4">
              <p class="my-1 text-lg font-semibold">Lista completa:</p>
              <ul class="pl-4 list-disc ">
                <li>
                  <p>Via Roma, 9 - 34072 Gradisca d'Isonzo (GO)</p>
                </li>
                <li>
                  <p>Tel: 0481-99863</p>
                </li>
                <li>
                  <p><a href="mailto:gois006009@istruzione.it" class="underline">E-Mail</a></p>
                </li>
                <li>
                  <p><a href="mailto:gois006009@pec.istruzione.it" class="underline">PEC</a></p>
                </li>
                <li>
                  <p>C.F.: 91035220317</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- others stuff -->
        <div class="container text font-normal text-lg md:text-xl">
          <h1 class="font-bold text-2xl w-full text-center mt-16 mx-4 sm:mx-auto">La nostra scuola...</h1>
          <p class="font-normal mt-1">Indirizzo: </p>
          <div class="w-full h-full text-lg mb-10">
            <iframe class="mb-3 mt-1 shadow-lg rounded-lg mx-auto h-[767px] w-full"
              src="https://www.google.com/maps/embed?pb=!4v1649334139755!6m8!1m7!1sUw8yM8AmJdGep2ws7w__Tw!2m2!1d45.80424854558367!2d13.51056052364267!3f221.22875545248564!4f-10.714724616806095!5f1.2236759176200285"
              v-bind:frameborder="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>