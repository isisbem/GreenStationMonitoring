<template>
    <Bar ref="barChart" :bind="true" :data="chartData" />
    <button @click="refresh" class="inline-flex justify-center items-center gap-1 bg-green-500 text-gray-50 uppercase 
               rounded-lg py-4 px-8 mt-6 hover:bg-green-600 transition
               hover:shadow-lg active:scale-95">
        <i class="bi bi-arrow-clockwise text-xl md:text-3xl"></i>
        <span>Refresh</span>
    </button>
</template>


<script lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
// import { options } from '../js/Charts1'
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
                        data: [12, 20, 37, 39, 42, 40, 39, 30, 40, 20, 12, 11],
                    },
                ],
            }
        }
    },
    methods: {
        refresh() {
            const labels = [
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
            ]
            const data = [12, 20, 37, 39, 42, 40, 39, 30, 40, 20, 12, 11]
            var i = 0;
            for (i = 0; i <= 12; i++) {
                this.chartData.labels[i] = labels[i];
            }
            // for(i = 0; i <= data.length; i++) {
            //     this.chartData.datasets.data[i] = data[i];
            // }
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

<!-- <template>
    <Bar ref="barChart" :bind="true" :data="chartData" />
    <button @click="refresh" class="inline-flex justify-center items-center gap-1 bg-green-500 text-gray-50 uppercase 
                 rounded-lg py-4 px-8 mt-6 hover:bg-green-600 transition
                 hover:shadow-lg active:scale-95">
        <i class="bi bi-arrow-clockwise text-xl md:text-3xl"></i>
        <span>Refresh</span>
    </button>
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import axios from 'axios'

export default {
    name: 'BarChart',
    components: {
        Bar
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'utilizzo',
                        backgroundColor: '#f87979',
                        data: []
                    }
                ]
            }
        }
    },
    mounted() {
        this.refresh()
    },
    methods: {
        async refresh() {
            const { data } = await axios.get('https://82.223.8.163')
            this.$set(this.chartData.labels, data.labels)
            this.$set(this.chartData.datasets[0].data, data.values)
            this.$refs.barChart.update()
        }
    }
}
</script> -->
  
<!-- <script lang="ts">
import { Bar } from 'vue-chartjs';
import axios from 'axios';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'BarChart',
    components: {
        Bar,
    },
    data() {
        return {
            chartData: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                datasets: [
                    {
                        label: 'utilizzo',
                        backgroundColor: '#f87979',
                        data: [],
                        unit: 'percent',
                    },
                ],
            },
        };
    },
    mounted() {
        this.refresh();
    },
    methods: {
        async refresh() {
            try {
                const response = await axios.get('http://82.223.8.163:22/your/api/path', {
                    // auth: {
                    //     //username:, //password: 
                    // },
                });

                if (response && response.data) {
                    const data = response.data.map((item) => item.yourIntegerProperty);
                    this.chartData.datasets[0].data = data;
                    this.$refs.barChart.update();
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script> -->

<!-- EXAMPLE CODE FETCHING TO API... -->
<!-- <template>
    <div class="row">
        <div class="col-md-12">
            <h3>Cat Facts</h3>
        </div>
        <div class="col-md-12">
            <ul class="list-group">
                <li v-for="(fact, index) in catFacts" :key="index" class="list-group-item">{{index + 1}}. {{fact.text}}</li>
            </ul>
        </div>
        <div class="row mt-3">
            <div class="col-md-12 text-center">
                <button @click="loadMoreFacts" class="btn btn-md btn-primary">{{ fetchingFacts ? '...' : 'Load more' }}</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import axios from 'axios'
    interface AnimalFacts {
        text: string
    }
    export default defineComponent({
        name: 'AnimalFacts',
        data() {
            return {
                catFacts: [] as AnimalFacts[],
                fetchingFacts: false
            }
        },
        methods: {
            async fetchCatFacts() {
                const catFactsResponse = await axios.get<AnimalFacts[]>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
                this.catFacts = catFactsResponse.data
            },
            async loadMoreFacts() {
                this.fetchingFacts = true
                const catFactsResponse = await axios.get<AnimalFacts[]>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
                this.catFacts.push(...(catFactsResponse.data || []))

                this.fetchingFacts = false
            }
        },
        async mounted() {
            await this.fetchCatFacts()
        }
    })
</script> -->