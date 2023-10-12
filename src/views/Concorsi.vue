<script setup>
import Artplayer from '../components/VideoWinner.vue';
import Footer from '../components/Footer.vue';
import { ref } from 'vue';

const images = [
  '/img-gruppo-tpl-winer/G-1.jpeg',
  '/img-gruppo-tpl-winer/G-2.jpeg',
];

const images2 = [
  '/GSM_Foto_Premiazioni/93E4E25E-1DDD-4461-8CFB-4828DC868172.webp',
  '/GSM_Foto_Premiazioni/748F6C22-8067-4070-9A3C-78FB302D58A8.webp',
  '/GSM_Foto_Premiazioni/D0BB284D-064A-4A36-8099-E365FC6942EB_1.webp',
  '/GSM_Foto_Premiazioni/EA171FDC-F79D-4B6E-9408-42DC2FF6F95D_1.webp'
];

function openModal(imageSrc) {
  modalImageUrl.value = imageSrc;
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
  modalImageUrl.value = '';
}
const modalImageUrl = ref('');
</script>


<template>
  <div class="container mx-auto min-h-screen mb-24">
    <h1 class="title mt-8 mx-0 max-w-[800px] sm:mx-4 md:mx-auto font-bold text-[21px] sm:text-3xl md:text-4xl">
      Concorsi vinti / a cui abbiamo partecipato
    </h1>

    <div class="container mx-auto aspect-video flex flex-col justify-center items-center responsive max-w-[900px]">
      <!-- VIDEO GSM WINNER FVG TPL 2023 -->
      <div class="grid col-span-1 px-2 max-h-screen mx-auto object-cover max-w-full">
        <Artplayer @get-instance="getInstance" id="webm/mp4" aria-label="video" :option="option" :style="style" />
      </div>
    </div>

    <div class="container mx-auto mt-4 mb-0 flex flex-col justify-center items-center max-w-[900px]">
      <a href="https://www.tplfvg.it" target="_blank" role="link" class="mx-auto my-0">
        <img src="/TPL_FVG_logo.png" class="mx-auto my-0" alt="TPL" width="700" height="300">
      </a>
    </div>

    <ul class="list max-w-[750px] mt-0 mx-6 sm:mx-4 md:mx-auto">
      <li class="flex flex-col text-left ml-1 sm:mx-4 md:mx-auto justify-start items-start">
        <h1 class="title pl-6 mt-8 font-bold text-xl">
          Concorso tpl FVG
        </h1>
        <p class="par text-lg mt-4 pl-6">
          <span class="underline underline-offset-2 max-w-fit font-sans text-xl">Tipologia di concorso: </span>
          Il concorso a cui abbiamo partecipato era incentrato sulla realizzazione
          di un video, basato sulla mobilità sostenibile, e allo sviluppo di nuove tecnologie
          per avere mezzi sempre più sostenibili e accessibili a tutti.
        </p>
        <p class="par text-lg mt-10 pl-6">
          <span class="underline underline-offset-2 max-w-fit font-sans text-xl">Requisiti: </span>
          I requisiti per la corretta partecipazione a questo concorso, era produrre
          un video di almeno 50 secondi, con al suo interno dello "storytelling",
          ovvero saper raccontare una storia attraverso una sequenza di video o immagini
          al fine di comprendere a pieno lo scopo e l'obiettivo.
        </p>
        <p class="par text-lg mt-10 pl-6">
          <span class="underline underline-offset-2 max-w-fit font-sans text-xl">Premio in palio / vincita: </span>
          Il premio assegnato ad una scuola che vinceva, del Friuli-Venezia-Giulia, è di
          1500 &euro;, il quale usufruibile dalla scuola di appartenenza per rinnovo di infrastrutture,
          tecnologie o materiale scolastico utile al fine dell'apprendimento.
        </p>
      </li>
    </ul>

    <div class="container mt-24 mb-4 max-w-[800px] mx-auto min-h-screen flex flex-col gap-4 flex-wrap">
      <h1 class="font-bold text-xl sm:text-2xl md:text-3xl:" id="vincitoriTPL">
        Vincitori TPL&times; Friuli-Venezia-Giulia
      </h1>
      <!-- photo winners -->
      <img v-for="(image, index) in images" :key="index" :src="image" @click="openModal(image)"
        class="myImg max-w-full max-h-fit rounded-md h-full mx-auto" />
      <div id="myModal" class="modal" @click="closeModal">
        <span class="close">&times;</span>
        <img class="modal-content" id="modalImg" :src="modalImageUrl" />
        <div id="caption"></div>
      </div>
    </div>

    <!-- premiazione 10.10.2023 a palazzo Belgrado Antonini Udine -->
    <div class="container mt-24 mb-4 max-w-[800px] mx-auto min-h-screen flex flex-col gap-4 flex-wrap">
      <h1 class="font-bold text-xl sm:text-2xl md:text-3xl:" id="vincitoriTPL">
        Premiazione Vincitori TPL fvg - concorso
      </h1>
      <!-- photo winners -->
      <img v-for="(image, index) in images2" :key="index" :src="image" @click="openModal(image)"
        class="myImg max-w-full max-h-fit rounded-md h-full mx-auto" />
      <div id="myModal" class="modal" @click="closeModal">
        <span class="close">&times;</span>
        <img class="modal-content" id="modalImg" :src="modalImageUrl" />
        <div id="caption"></div>
      </div>
    </div>

    <!-- video premiazione -->
    <div class="container mt-24 mb-4 max-w-[800px] mx-auto min-h-screen flex flex-col gap-4 flex-wrap">
      <h1 class="font-bold text-xl sm:text-2xl md:text-3xl:" id="vincitoriTPL">
        Video Premiazione 
      </h1>
      <div class="grid col-span-1 px-2 max-h-screen mx-auto object-cover max-w-full">
        <Artplayer @get-instance="getInstance" id="webm/mp4" aria-label="video" :option="option2" :style="style" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      option: {
        url: "/video-tpl-official/Video-HD-720.mp4",
        url: "/video-tpl-official/video_TPL_ciclomobilita_sostenibile_BEM.mp4",
        poster: "/video-tpl-official/Poster.png",
      },
      option2: {
        url: "/GSM_Foto_Premiazioni/IMG_4975.mp4",
        url: "/GSM_Foto_Premiazioni/IMG_4975.mp4",  /** aggiungere 480,1080 */
        poster: "/GSM_Foto_Premiazioni/PosterVideoPremiaz.png",
      },
    }
  },
  setup() {
    const modalImageUrl = ref('');
    const modal = ref(null);

    function openModal(imageSrc) {
      modalImageUrl.value = imageSrc;
      modal.value.style.display = 'block';
    }

    function closeModal() {
      modalImageUrl.value = '';
      modal.value.style.display = 'none';
    }

    // Attach event listener to modal for closing
    window.addEventListener('click', (e) => {
      if (modal.value && e.target === modal.value) {
        closeModal();
      }
    });

    return {
      modalImageUrl,
      modal,
      openModal,
      closeModal,
    };
  },
};
</script>