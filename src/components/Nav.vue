<script setup lang="ts"></script>

<template>
    <div class="flex justify-center items-center mb-5">
        <ul class="flex">
            <li class="me-3">
                <button href="#" class="bg-violet-800 border-2 border-violet-800 sm:p-2 md:p-3 rounded-full font-bold">
                    Cotação
                </button>
            </li>
            <li class="me-3">
                <button href="#" class="border-2 border-violet-800 sm:p-2 md:p-3 rounded-full font-bold">
                    Simulador
                </button>
            </li>
            <li class="">
                <button href="#" class="border-2 border-violet-800 sm:p-2 md:p-3 rounded-full font-bold">
                    Comparação
                </button>
            </li>
        </ul>
    </div>
    <div class="mb-5 px-5">
        <ul class="flex justify-between">
            <li class="me-3">
                <form action="">
                    <select name="moeda" id="moeda"
                        class="sm:p-1 md:p-2 rounded-full bg-violet-800 border-2 border-violet-800">
                        <option value="real">Real</option>
                        <option value="dolar">Dolar</option>
                        <option value="btn">Bitcoin</option>
                    </select>
                </form>

            </li>

            <li class="">
                <button href="#" class="bg-violet-800 border-2 border-violet-800 sm:p-2 md:p-3 rounded-s-full font-bold">
                    A
                </button>
                <button href="#" class="border-2 border-violet-800 sm:p-2 md:p-3 rounded-e-full font-bold">
                    B
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
