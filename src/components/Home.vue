<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <div class="flex justify-center items-center mb-5">
        <ul class="flex">
            <li class="me-3">
                <button href="#" class="bg-violet-800 border-2 border-violet-800 sm:p-2 md:p-3 rounded-full font-bold">
                    <FontAwesomeIcon :icon="['fas', 'star']" />
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
</template>

<style scoped></style>
