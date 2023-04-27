import { createApp } from 'vue'
import App from './App.vue'

//Import tailwind, css main
import './style.css'
import './assets/main.css'

//import axios
//import axios from 'axios';
//Vue.prototype.$http = axios;

//import the charts
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

//gsap animation
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin.js'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin)

//import aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'
//starting aos
render: h => h(App)
AOS.init()

//Create router
import { createRouter, createWebHistory } from 'vue-router'
//import @views
import Home from './views/Home.vue'
import About from './views/About.vue'
import Analytics from './views/Analytics.vue'
import Informations from './views/Informations.vue'

//Get all pages
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Analytics',
      name: 'Analytics',
      component: Analytics
    },
    {
      path: '/Informations',
      name: 'Informations',
      component: Informations
    }
  ]
})

//Create the app
createApp(App).use(router).mount('#app')
