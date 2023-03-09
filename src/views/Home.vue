<script setup> 
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="home h-5/6 m-0">
        <div class="h-full w-full m-0 p-3 flex flex-col justify-center items-center text-white bg-green-500">
            <h1 class="text-xl font-bold">Green Station Monitoring</h1>
            <div class="container flex flex-col justify-center items-center w-fit pt-12 pb-2">
                <img src="" alt="logo" width="100" height="100">
            </div>
            <div class="flex flex-row justify-center items-center gap-4 w-64 py-10 px-2">
                <a href="/About" target="_self">
                    <button 
                     class="py-3 px-5 transition-colors border-2 rounded-lg hover:bg-slate-50 hover:text-black">
                        About us
                    </button>
                </a>
                <a href="/Analytics" target="_self">
                    <button
                     class="py-3 px-5 transition-colors border-2 hover:bg-slate-50 hover:text-black rounded-lg hover:">
                        Analytics
                    </button>
                </a>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>