<script setup>
import Footer from '../components/Footer.vue'
import ChartLanguage from '../components/ChartsLanguage.vue'
</script>

<template>
    <div>
        <div class="Analytics m-auto">
            <div class="h-4/5 container w-full max-w-4xl mx-auto mt-4 flex flex-col justify-center items-center text-black">
                <h1 class="font-semibold text-2xl mt-16 mb-4">
                    Dati raccolti e Analisi
                </h1>
                <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
            </div>
            <div class="h-4/5 mt-12 w-full containerm mx-auto flex flex-col justify-center items-center text-black">
                <h1 class="font-semibold text-2xl mt-16 mb-4">
                    App realizzata con: 
                </h1>
                <ChartLanguage></ChartLanguage>
            </div>
            <div class="h-4/5 mt-12 mb-20 w-full containerm mx-auto flex flex-col justify-center items-center text-black">
                <h1 class="font-semibold text-2xl mt-16">
                    Conclusioni: 
                </h1>
                <p class="text-gray-200 text-xl pt-2">/ /</p>
            </div>
        </div>
        <Footer class="mt-auto"></Footer>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['wh/h', 'users', 'consumated'],
                datasets: [{ data: [40, 12, 26] }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>