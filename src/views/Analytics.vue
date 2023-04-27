<script setup>
import Footer from '../components/Footer.vue'
import ChartLanguage from '../components/ChartsLanguage.vue'
import ChartAnalytics from '../components/ChartsAnalytics.vue'
</script>

<template>
    <div>
        <div class="Analytics m-auto">
            <div
                class="h-4/5 mx-4 px-3 sm:mx-auto container w-full max-w-4xl mt-4 flex flex-col justify-center items-center text-black">
                <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
                    class="font-bold text-2xl sm:text-3xl mt-16 mb-4">
                    Dati raccolti e Analisi
                    <p>{{ messageError }}</p>
                </h1>
                <ChartAnalytics class="my-8"></ChartAnalytics>
            </div>
            <div
                class="h-4/5 mx-4 px-3 sm:mx-auto w-full container my-20 flex flex-col justify-center items-center text-black">
                <h1 class="font-bold text-2xl sm:text-3xl mt-16 mb-4">
                    App realizzata con:
                </h1>
                <ChartLanguage class="my-8"></ChartLanguage>
            </div>
            <div
                class="h-4/5 min-h-[35vh] mx-4 px-3 sm:mx-auto mt-10 mb-20 w-full container max-w-5xl flex flex-col justify-items-start items-center text-black">
                <h1 class="font-semibold text-2xl sm:text-3xl mt-8">
                    Conclusioni:
                </h1>
                <p class="text-neutral-900 text-xl mt-4 max-w-3xl mx-auto text-left pt-2">
                    Dai dati analizzati e dai grafici si può concludere che l'utilizzo della pensilina
                    avviene in special modo in autunno e primavera, con utilizzo medio del <i>50%</i> di presenze
                    di picco, con un minimo d'estate di poche utenze. Questi dati comportano un'adeguamento
                    della pensilina in modo che sia efficiente nei mesi dove ci sono più utenze.
                </p>
            </div>
        </div>
        <Footer class="mt-auto"></Footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messageError: 'Non ci sono dati raccolti e analisi'
        }
    }
}
  /*
methods: {
      showMessageError: (chartData) => {
          if (chartData != null) {
              //todo
          } else {
              this.messageError = 'Non ci sono dati raccolti e analisi';
          }
      }
  },
  data() {
      return {
          messageError: ''
      }
  },
  created() {
      this.showMessageError(chartData);
  }*/
</script>
