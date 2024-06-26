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
                <div class="py-4 mt-16 flex flex-row justify-center items-center">
                    <p class="text-2xl" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <span>Update: finished developing
                            <a 
                                href="https://www.soft-serv.it/gsm/index.php" 
                                target="_blank"
                                class="text-blue-500 font-bold font-mono underline underline-offset-4 hover:no-underline"
                            >
                                WEB APP
                            </a> 
                            for 
                        </span>
                        <span class="text-green-600 font-bold"> ECO </span> 
                        <span>mobility</span>
                    </p>
                </div>
                <div>
                    <h1 class="font-bold text-2xl sm:text-3xl mt-8 mb-4" data-aos="fade-down" data-aos-offset="400" data-aos-delay="150" data-aos-easing="ease-in-sine">
                        Preview APP:
                    </h1>
                    <div class="max-w-full h-auto block">
                        <div class="grid col-span-1 px-2 object-cover max-w-full">
                            <a href="https://www.soft-serv.it/gsm/index.php" target="_blank">
                            <img src="/preview_app_gsm.png" loading="lazy" alt="photos"
                                class="object-cover rounded-md shadow" title="Eco mobility app">
                            </a>
                        </div>
                    </div>
                </div>
                
                <h1 class="font-bold text-2xl sm:text-3xl my-4 pt-24">
                    Dati raccolti e Analisi
                    <!-- <p>{{ messageError }}</p> -->
                </h1>
                <ChartAnalytics class="my-8"></ChartAnalytics>
            </div>
            <div
                class="h-4/5 mx-4 px-3 sm:mx-auto w-full container my-20 flex flex-col justify-center items-center text-black">
                <h1 class="font-bold text-2xl sm:text-3xl mt-16 mb-4">
                    ...Invece questo sito web è realizzato con:
                </h1>
                <ChartLanguage class="my-8"></ChartLanguage>
            </div>
            <div
                class="h-4/5 min-h-[40vh]  mx-4 my-10 px-3 sm:mx-auto w-full container max-w-5xl flex flex-col justify-items-start items-center text-black">
                <hr class="w-full my-8 mx-auto">
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
            messageError: 'Presto in arrivo qualche dato...'
        }
    },

    // methods: {
    //     showMessageError: (chartData) => {
    //         if (chartData != null) {
    //             todo
    //         } else {
    //             this.messageError = 'Non ci sono dati raccolti e analisi';
    //         }
    //     }
    // },
    // data() {
    //     return {
    //         messageError: ''
    //     }
    // },
    // created() {
    //     this.showMessageError(chartData);
    // }
}
</script>
