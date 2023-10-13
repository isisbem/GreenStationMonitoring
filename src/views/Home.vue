<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="font-poppins mx-auto h-full">
        <div class="max-h-full home w-full m-0 p-0 flex flex-col justify-center items-center text-black bg-white">
            <div class="gap-12 flex flex-col items-center text-center w-fit m-auto">
                <div class="my-0 flex flex-col justify-center items-center self-center mx-auto lg:mt-0">
                    <h1 title="project title: GreenStationMonitoring" data-aos="fade-up" data-aos-duration="250"
                        data-aos-delay="0"
                        class="text-2xl md:text-4xl lg:text-[2.85rem] font-normal tracking-tight flex flex-col flex-wrap mb-8">
                        GreenStationMonitoring
                        <span title="our slogan: green,save,sustain." data-aos="fade-up" data-aos-duration="300"
                            data-aos-delay="100"
                            class="text-green-600 font-bold text-2xl md:text-4xl lg:text-[2.80rem] pt-3 pb-2.5">
                            "Green, Save, Sustain."
                        </span>
                    </h1>
                    <!-- buttons -->
                    <div class="flex flex-row gap-4 mb-2">
                        <RouterLink title="Analisi" data-aos="fade-up" data-aos-duration="350" data-aos-delay="200" class="inline-block mt-3 px-7 py-3 md:px-12 md:py-5 md:text-base mr-2 bg-green-600
                                        text-white font-semibold text-sm leading-snug uppercase 
                                        rounded shadow-md hover:bg-green-700 hover:shadow-lg 
                                        focus:bg-green-700 focus:shadow-lg focus:outline-none 
                                        focus:ring-0 active:bg-green-800 active:shadow-xl transition 
                                        duration-150 ease-in-out" to="/Analytics" role="button">
                            Analisi
                        </RouterLink>
                        <RouterLink title="Su di noi" data-aos="fade-up" data-aos-duration="400" data-aos-delay="250" class="inline-block mt-3 px-7 py-3 md:px-12 md:py-5 md:text-base bg-neutral-50 
                                    text-green-600 font-semibold text-sm leading-snug uppercase 
                                    rounded hover:text-green-700 hover:shadow-lg
                                    focus:bg-gray-100 focus:outline-none focus:ring-0 
                                    active:bg-gray-200 active:shadow-xl transition duration-150 ease-in-out"
                            to="/About" role="button">
                            Su di noi
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="css">
:root { --size-vh: 215px }
@media screen and (min-width: 1250px) { :root { --size-vh: 276px } }
@media screen and (max-width: 767px) { :root { --size-vh: 215px } }
.home {
    height: calc(100dvh - var(--size-vh));
    height: calc(100vh - var(--size-vh));
}
</style>