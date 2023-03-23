<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
    <div>
        <div class="Analytics m-auto">
            <div class="h-4/5 container w-full max-w-4xl mx-auto mt-4 flex flex-col justify-center items-center text-black">
                <h1 class="font-semibold text-2xl mt-16">
                    Analisi
                </h1>
                <p class="font-light mt-5">
                    ...Siamo in attesa di ricevere informazioni dal server...
                </p>
                <p class="font-semibold mt-3 underline">
                    coming soon!
                </p>
                <div class="container my-8 flex flex-col justify-center items-center mx-auto">
                    <figure class="gif-disabled" aria-disabled="true">
                        <img src="/loading.gif" alt="loading" title="fig loading" loading="lazy" width="100" height="100">
                    </figure>
                </div>
            </div>
        </div>
        <Footer class="mt-auto"></Footer>
    </div>
</template>

<style>
    .Analytics {
        height: calc(100dvh - 228px) !important;
        height: calc(100vh - 228px);
    }
</style>