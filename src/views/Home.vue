<script setup> 
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="home h-4/5 font-poppins">
        <div class="h-full w-full m-0 p-0 flex flex-col justify-center items-center text-black bg-white">
            <div class="container flex flex-col h-fit justify-center items-center">
                <h1 class="text-xl font-bold">Green Station Monitoring</h1>
                <div class="container flex flex-col justify-center items-center w-fit py-3">
                    <img src="../../public/GreenStationMonitoring.png" alt="logo" class="rounded-md" width="220" height="auto">
                </div>
                <div class="flex flex-row justify-center items-center gap-3 w-64 py-3">
                    <a href="/About" target="_self">
                        <button 
                        class="py-4 px-6 transition-colors bg-white border-2 rounded-lg hover:bg-slate-50 hover:text-black">
                            About us
                        </button>
                    </a>
                    <a href="/Analytics" target="_self">
                        <button
                        class="py-4 px-6 transition-colors bg-white border-2 hover:bg-slate-50 hover:text-black rounded-lg hover:">
                            Analytics
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css');
</style>