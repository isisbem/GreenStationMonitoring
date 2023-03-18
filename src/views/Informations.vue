<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
    <div>
        <div class="Informations h-full max-w-3xl mx-auto w-full">
            <!-- .sectionNormal -->
            <div class="container w-full mt-4 flex flex-col text-black text-left">
                <h1 class="font-semibold text-2xl mt-16">
                    More Informations
                </h1>
                <!-- first table with some information -->
                <div class="mt-10 grid">
                    <dl>
                        <div class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
                            <dt class="text-lg font-medium text-green-500"> Name of project: </dt>
                            <dd class="mt-3 font-semibold text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                Green Station Monitoring
                            </dd>
                        </div>
                        <div class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
                            <dt class="text-lg font-medium text-green-500"> Group members: </dt>
                            <dd class="mt-3 font-medium text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                list of components
                            </dd>
                        </div>
                        <div class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-300">
                            <dt class="text-lg font-medium text-green-500"> Email address </dt>
                            <a href="mailto:greenstation.monitoring@gmail.com" class="w-full">
                                <dd class="mt-3 font-semibold text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                    greenstation.monitoring@gmail.com
                                </dd>
                            </a>
                        </div>
                        <div class="px-3 py-6 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-lg font-medium text-green-500"> More specs </dt>
                            <dd class="mt-3 text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                this project will fetch various statistics from a photovoltaic shelter.
                                This data can be of a purely technical nature such as instantaneous
                                electricity absorption or over time or data on its use such as the
                                number of available charging ports and occupied ports.
                            </dd>
                        </div>
                    </dl>
                </div>
                <!-- graph with flowchart -->
                <!-- rest of informations -->
            </div>
        </div>
        <!-- Sample HTML/tailwind Form -->
        <div class="min-h-full my-48 bg-gray-100 py-2 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 mx-0 sm:max-w-xl sm:mx-auto">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div>
                            <h1 class="text-2xl font-semibold">Send a message!</h1>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-5 space-y-7 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="relative">
                                    <input autocomplete="off" id="email" name="email" type="text"
                                        class="peer placeholder-transparent h-10 w-full focus:border-b-green-500 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Email address" />
                                    <label for="email"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm 
                                        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 
                                        peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5
                                        peer-focus:text-gray-600 peer-focus:text-sm">
                                        Email Address
                                    </label>
                                </div>
                                <div class="relative">
                                    <div class="relative w-full min-w-[200px]">
                                        <textarea
                                            class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border 
                                            border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 
                                            font-sans text-sm font-normal text-blue-gray-700 outline outline-0 
                                            transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                                            placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 
                                            focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 
                                            disabled:bg-blue-gray-50"
                                            placeholder=" "></textarea>
                                        <label
                                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 
                                            -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight 
                                            text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] 
                                            before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 
                                            before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 
                                            before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 
                                            after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow 
                                            after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 
                                            after:transition-all peer-placeholder-shown:text-sm 
                                            peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 
                                            peer-placeholder-shown:before:border-transparent 
                                            peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] 
                                            peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 
                                            peer-focus:before:border-l-2 peer-focus:before:border-green-500 
                                            peer-focus:after:border-t-2 peer-focus:after:border-r-2
                                             peer-focus:after:border-green-500 peer-disabled:text-transparent 
                                             peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
                                             peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Leave a message
                                        </label>
                                    </div>
                                </div>
                                <div class="relative w-full">
                                    <button class="bg-green-500 text-white rounded-md w-full px-6 py-2">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>