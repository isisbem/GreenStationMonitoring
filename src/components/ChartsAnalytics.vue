<template>
    <Bar id="my-chart-id" :bind="true" :data="chartData" />
</template>

<script lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    datasets: [{ label: 'Analytics' }],
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
                        data: [15, 22, 40, 45, 45, 35, 5, 20, 15, 10, 10, 5],
                        unit: "percent",
                    },
                ],
            },
            methods: {
                //in the main.js 
                //import axios from 'axios';
                //Vue.prototype.$http = axios;
                async getData() {
                    try {
                        const response = await this.$http.get("82.223.8.168");
                        // JSON responses are automatically parsed.
                        this.posts = response.data;
                    } catch (error) {
                        console.log(error);
                    }
                },
            },
            created() {
                this.getData();
            },
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