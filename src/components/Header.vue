<script  lang="ts">
import { mapMutations } from 'vuex';

export default {

    name: 'HeaderVue',
    methods: {
        ...mapMutations(['toggleModal'])
    }
}

</script>

<template>
    <div class="flex sm:flex-col md:flex-row md:justify-between md:mx-10 my-5 ">
        <div class="sm:mb-5">
            <h1 class="font-[900] text-4xl text-center">Crypto +</h1>
        </div>
        <div class="sm:mb-5 flex justify-center">
            <button class="bg-violet-800 border-2 border-violet-950 px-7 rounded-full sm:py-2 md:py-3 "
                @click="toggleModal">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="me-3" />
                Pesquisar cryptomoeda...
            </button>
        </div>
    </div>
</template>

<style scoped></style>
