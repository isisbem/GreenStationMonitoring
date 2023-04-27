<template>
  <div>
    <Doughnut :data="data" :options="options" />
  </div>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from '../js/Charts1'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false
  },
  data() {
    return chartConfig
  }
}
</script>