<template>
  <div>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div class="m-auto mb-44">
        <div class="flex flex-col sm:flex-row gap-2 max-h-full mt-4 mb-24">
          <!-- carousel of cards -->
          <div
            class="card hover:transition-shadow hover:shadow-xl mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
            <!-- image -->
            <div class="flex justify-center items-center w-full p-3">
              <img src="/green-economy.webp" class="w-10 h-10 object-cover" alt="">
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
              <img src="/paper.webp" class="w-10 h-10 object-cover" alt="">
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
              <img src="/planet-earth.webp" class="w-10 h-10 object-cover" alt="">
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
    </transition>
  </div>
</template>

<script lang="ts">
import gsap from 'gsap'

export default {
  methods: {
    //start animation
    beforeEnter(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(-175px)'
    },
    //end animation
    enter(el) {
      gsap.to(el, {
        duration: 2.5,
        y: 0,
        ease: 'bounce.out',
        opacity: 1,
        delay: 0.5,
      })
    },
    afterEnter(el) {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0px)'
    }
  }
}
</script>