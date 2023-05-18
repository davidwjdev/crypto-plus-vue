<script setup lang="ts"></script>

<template>
    <div class="m-5">
        <form action="" class="md:flex md:justify-center">
            <input type="search" name="search" id="search" class="rounded-full text-black py-3 px-10 sm:w-full md:w-2/3" />
        </form>
    </div>
    <div class="flex justify-center items-center sm:overflow-x-auto sm:no-scrollbar mb-5">
        <ul class="flex sm:ms-16">
            <li class="me-3">
                <button href="#" class="bg-blue-500 border-2 border-blue-500 p-3 rounded-full font-bold">
                    Cotação
                </button>
            </li>
            <li class="me-3">
                <button href="#" class="border-2 border-blue-500 p-3 rounded-full font-bold">
                    Simulador
                </button>
            </li>
            <li class="me-3">
                <button href="#" class="border-2 border-blue-500 p-3 rounded-full font-bold">
                    Comparação
                </button>
            </li>
        </ul>
    </div>
    <div class="mb-5 px-5">
        <ul class="flex justify-between">
            <li class="me-3">
                <form action="">
                    <select name="moeda" id="moeda" class="p-2 rounded-full bg-blue-500 border-2 border-blue-500">
                        <option value="real">Real</option>
                        <option value="dolar">Dolar</option>
                        <option value="btn">Bitcoin</option>
                    </select>
                </form>

            </li>

            <li class="">
                <button href="#" class="bg-blue-500 border-2 border-blue-500 p-3 rounded-s-full font-bold">
                    A
                </button>
                <button href="#" class="border-2 border-blue-500 p-3 rounded-e-full font-bold">
                    B
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
