<template>
    <Bar id="my-chart-id" :bind="true" :data="chartData" />
</template>

<script lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { options } from '../js/Charts1'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    datasets: [{ label: 'Analytics'}],
    data() {
        return {
            chartData: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                datasets: [
                    {
                        label: "utilizzo",
                        backgroundColor: "#f87979",
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
                    },
                ],
            }
        }
    }
}
</script>

<style>
#my-chart-id {
 width: 100%;
 height: 100%; 
 image-rendering: optimizeQuality;  
}
</style>