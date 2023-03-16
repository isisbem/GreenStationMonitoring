<template>
    <div>
        <div class="about h-full">
            <div class="h-2/3 mt-4 flex justify-center items-center text-black">
                <div class="flex flex-col items-center justify-center w-full max-w-5xl mt-16 mx-auto">
                    <!-- title -->
                    <h1 class="font-semibold">About us</h1>
                    <!-- table with all items -->
                    <div class="flex flex-wrap flex-col max-w-3xl w-full mt-4">
                        <div class="my-3 mx-3 flex flex-col sm:flex sm:flex-row">
                            <!-- 1 row -->
                            <div class="border border-gray-300 flex flex-col justify-center items-center rounded-md w-full mr-3">
                                <div class="flex flex-col p-2">
                                    <i class="bi bi-people-fill text-xl"></i>
                                    Our teammate
                                </div>
                            </div>
                            <div class="border border-gray-300 rounded-md w-full my-3 sm:my-0">
                                <div class="flex p-2 flex-col justify-center items-center align-middle h-full">
                                    <p class="font-regular">
                                        We are a fourth grade class
                                    </p>
                                </div>                     
                            </div>
                        </div>
                        <div class="my-3 mx-3 flex flex-col sm:flex sm:flex-row">
                            <!-- 2 row -->
                            <div class="border border-gray-300 rounded-md flex flex-col justify-center items-center w-full mr-3">
                                <div class="flex flex-col p-2">
                                    <i class="bi bi-people-fill text-xl"></i>
                                    About the project
                                </div>
                            </div>
                            <div class="border border-gray-300 rounded-md w-full my-3 sm:my-0">
                                <div class="flex p-2 flex-col justify-center items-center align-middle h-full">
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
                    <div class="flex gap-2 h-72 mt-16">
                        <!-- carousel of cards -->
                        <div class="card mx-4 border border-gray-200 rounded-lg p-4">
                            <!-- image -->
                            <div class="flex justify-center items-center w-full p-3">
                                <img src="..//..//public/green-economy.png" class="w-10 h-10 object-cover" alt="">
                            </div>
                            <p class="font-normal">
                                the cart
                            </p>
                        </div>
                        <div class="card mx-4 border border-gray-200 rounded-lg p-4">
                            <!-- image -->
                            <div class="flex justify-center items-center w-full p-3">
                                <img src="..//..//public/paper.png" class="w-10 h-10 object-cover" alt="">
                            </div>
                            <p class="font-normal">
                                the cart
                            </p>
                        </div>
                        <div class="card mx-4 border border-gray-200 rounded-lg p-4">
                            <!-- image -->
                            <div class="flex justify-center items-center w-full p-3">
                                <img src="..//..//public/planet-earth.png" class="w-10 h-10 object-cover" alt="">
                            </div>
                            <p class="font-normal">
                                the cart
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>