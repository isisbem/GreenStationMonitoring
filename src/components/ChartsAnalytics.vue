<template>
    <Bar id="my-chart-id" :bind="true" :data="chartData" />
    <button @click="refresh">Refresh data</button>
</template>
  
<script lang="ts">
import axios from 'axios';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'BarChart',
    components: { Bar },
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
                        data: [],
                        unit: "percent",
                    },
                ],
            },
        };
    },
    methods: {
        refresh() {
            this.chartData.datasets[0].data = [];
            this.chartData.datasets[0].unit = "percent";
            axios
              .get(
                    "http://localhost:8080/api/v1/utilizzo/utilizzo/" +
                        this.$route.params.id
                )
              .then((response) => {
                    this.chartData.datasets[0].data = response.data;
                });
        },
        fetchData() {
            const url = 'https://82.223.8.163';
            const data = {
                username: 'gsm',
                password: 'GsM!2023',
                // Add any other data to send to the API here
            };

            axios.post(url, data, {
                withCredentials: true, // Consentire i cookie nel contesto CORS
                headers: {
                    'Access-Control-Allow-Origin': '*', // Consentire l'accesso cross-origin
                },
            })
                .then(response => {
                    // Extract the data from the API response and update the chart
                    const newData = response.data;
                    for (let i = 0; i < newData.length; i++) {
                        this.chartData.datasets[0].data.push(newData[i].utilizzo);
                    }
                    this.$refs.chart.update();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>
  
<style>
#my-chart-id {
    width: 100%;
    height: 100%;
    image-rendering: optimizeQuality;
}
</style>


<!-- latest code -->
<!-- <template>
    <div>
        <button @click="fetchData">Refresh Data</button>
        <Bar id="my-chart-id" :chart-data="chartData" />
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart', components: { Bar }, datasets: [{ label: 'Analytics' }],
    setup() {
        const chartData = ref({
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",],
            datasets: [{ 
                label: "utilizzo", 
                backgroundColor: "#f87979", 
                data: [15, 22, 40, 45, 45, 35, 5, 20, 15, 10, 10, 5], 
                unit: "percent", 
            }],
        });
        const loading = ref(false);
        const error = ref(null);
        axios.interceptors.request.use(config => {
            config.auth = { username: 'gsm', password: 'GsM!2023' };
            return config;
        });
        const fetchData = async () => {
            try {
                loading.value = true;
                const response = await axios.get('https://82.223.8.168');
                if (response.data) {
                    chartData.value.datasets[0].data = response.data;
                    error.value = null;
                } else {
                    error.value = 'Invalid response from the API';
                }
            } catch (err) {
                console.error(err);
                error.value = 'Failed to fetch data from the API';
            } finally {
                loading.value = false;
            }
        };
        fetchData();
        // return { chartData, loading, error };
    },
    methods: {
        fetchData() {
            this.fetchData();
        },
    },
};
</script> -->


<!-- code (1) -->
<!-- <template>
    <div>
        <button @click="fetchData">Refresh Data</button>
        <Bar id="my-chart-id" :chart-data="chartData" /> 
        <div v-if="loading">Loading...</div>
        <Bar v-else />
    </div>
</template> -->
  
<!-- <script>
// imports...
import axios from 'axios';
// import { ref } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    // same as before
    name: 'BarChart',
    components: { Bar },
    datasets: [{ label: 'Analytics' }],
    data() {
        return {
            // same as before
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
            //axios catch errors
            posts: [],
            errors: [],
            loading: false
        }
    },

    methods: {
        fetchData() {
            this.loading = true;
            axios.get('http://82.223.8.168')
                .then(response => {
                    this.chartData = formatChartData(response);
                    this.loading = false;
                })
                .catch(err => {
                    // console.error(this.errors);
                    this.loading = false;
                })
        }
    },
    setup() {
        axios.interceptors.request.use(config => {
            config.auth = { username: 'gsm', password: 'GsM!2023' };
            return config;
        });

        const fetchData = async () => {
            try {
                const response = await axios.get('http://82.223.8.168');
                const data = formatChartData(response);
                chartData.value = data;
            } catch (err) {
                console.error(err);
                this.loading = false;  // Add this
            }
        };

        // rest of setup...
        fetchData();
        return { fetchData, chartData };
    }
}
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