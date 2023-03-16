<script setup> 
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="home font-poppins mx-auto">
        <div class="h-full w-full m-0 p-0 flex flex-col justify-center items-center text-black bg-white">
            <div class="gap-12 flex flex-col items-center text-center w-fit m-auto">
                <div class="my-0 flex flex-col justify-center items-center self-center mx-auto lg:mt-0">
                    <h1 class="text-2xl md:text-4xl font-medium tracking-tight flex flex-col flex-wrap mb-8">
                        GreenStationMonitoring
                        <span class="text-green-600 font-bold text-2xl md:text-4xl py-2">
                            Green, Save, Sustain.
                        </span>
                    </h1>
                    <!-- buttons -->
                    <div class="flex flex-row gap-2">
                        <RouterLink class="inline-block px-7 py-3 mr-2 bg-green-600
                                text-white font-medium text-sm leading-snug uppercase 
                                rounded shadow-md hover:bg-green-700 hover:shadow-lg 
                                focus:bg-green-700 focus:shadow-lg focus:outline-none 
                                focus:ring-0 active:bg-green-800 active:shadow-lg transition 
                                duration-150 ease-in-out"  
                                to="/Analytics" role="button">Analytics</RouterLink>
                        <RouterLink class="inline-block px-7 py-3 bg-transparent 
                                text-green-600 font-medium text-sm leading-snug uppercase 
                                rounded hover:text-green-700 hover:bg-gray-100 
                                focus:bg-gray-100 focus:outline-none focus:ring-0 
                                active:bg-gray-200 transition duration-150 ease-in-out" 
                                to="/About" role="button">About us</RouterLink>
                    </div>
                </div>
                <!-- logo image-->
                <!-- <div class="mb-12 mx-auto lg:mb-0">
                        <img></img>
                    </div> -->
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style>
    .home {
        height: calc(100vh - 275px) !important;
    }
</style>