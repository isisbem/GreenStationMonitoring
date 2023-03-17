<script setup>
    import Footer from '../components/Footer.vue'
</script>

<template>
    <div>
        <div class="about min-h-full">
            <div class="h-2/3 mt-4 flex flex-col justify-center items-center text-black">
                <div class="flex min-h-screen flex-col items-center justify-center w-full max-w-5xl mt-16 mx-auto">
                    <!-- title -->
                    <h1 class="font-semibold text-2xl">About us</h1>
                    <!-- table with all items -->
                    <div class="flex flex-wrap flex-col max-w-3xl w-full mt-4">
                        <div class="my-3 mx-3 flex flex-col sm:flex sm:flex-row">
                            <!-- 1 row -->
                            <div class="border border-gray-300 flex flex-col justify-center items-center rounded-md w-full mr-3">
                                <div class="flex flex-col p-2 my-2 tondo object-cover border-4 border-gray-200">
                                    <i class="bi bi-people-fill text-xl"></i>
                                </div>
                                <h1 class="font-semibold">Our teammate</h1>
                                <div class="rounded p-3 font-normal">
                                    <p class="font-regular">
                                        We are a fourth grade class, that we have
                                        all with the same passion in common, namely 
                                        that of information technology.
                                    </p>
                                    <p class="font-regular">
                                        We have undertaken the monitoring project of 
                                        this charging station, to make the manipulation
                                        of the information and data obtained from it 
                                        truly useful.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="my-3 mx-3 flex flex-col sm:flex sm:flex-row">
                            <!-- 2 row -->
                            <div class="border border-gray-300 rounded-md flex flex-col justify-center items-center w-full mr-3">
                                <div class="flex flex-col p-2 my-2 tondo object-cover border-4 border-gray-200">
                                    <i class="bi bi-graph-up text-xl"></i>
                                </div>
                                <h1 class="font-semibold">About the project</h1>
                                <div class="rounded p-3 font-normal">
                                    <p class="font-normal">
                                        This project was born thanks to the installation of 
                                        the Station Charge in the parking lot of our school.
                                    </p>
                                    <p class="font-normal">
                                        This will be a monitoring project.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- 3 row -->
                        <!-- if  it is -->
                    </div>
                    <div class="mt-20">
                        <h1 class="font-semibold text-2xl">Why this project?</h1>
                    </div>
                    <div class="flex min-h-full flex-col sm:flex-row gap-2 max-h-full mt-2 mb-20">
                        <!-- carousel of cards -->
                        <div class="card mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
                            <!-- image -->
                            <div class="flex justify-center items-center w-full p-3">
                                <img src="..//..//public/green-economy.png" class="w-10 h-10 object-cover" alt="">
                            </div>
                            <h1 class="font-medium my-2 text-md break-words">
                                Save cash
                            </h1>
                            <p class="font-normal text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quae voluptate alias repellendus, incidunt perferendis sint a atque modi expedita enim tempore consequuntur dolores corrupti aliquid eaque eveniet odit excepturi.
                            </p>
                        </div>
                        <div class="card mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
                            <!-- image -->
                            <div class="flex justify-center items-center w-full p-3">
                                <img src="..//..//public/paper.png" class="w-10 h-10 object-cover" alt="">
                            </div>
                            <h1 class="font-medium my-2 text-md break-words">
                                Precise analyses   
                            </h1>
                            <p class="font-normal text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quae voluptate alias repellendus, incidunt perferendis sint a atque modi expedita enim tempore consequuntur dolores corrupti aliquid eaque eveniet odit excepturi.
                            </p>
                        </div>
                        <div class="card mx-4 min-h-full my-2 m-w-3xl border border-gray-200 rounded-lg py-6 px-4">
                            <!-- image -->
                            <div class="flex justify-center items-center w-full p-3">
                                <img src="..//..//public/planet-earth.png" class="w-10 h-10 object-cover" alt="">
                            </div>
                            <h1 class="font-medium my-2 text-md break-words">
                                Saving the world
                            </h1>
                            <p class="font-normal text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quae voluptate alias repellendus, incidunt perferendis sint a atque modi expedita enim tempore consequuntur dolores corrupti aliquid eaque eveniet odit excepturi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer class="mt-auto"></Footer>
        </div>
    </div>
</template>

<style>
    .tondo {
        border-radius: 50%;
        width: 54px;
        height: 100%;
    }
</style>