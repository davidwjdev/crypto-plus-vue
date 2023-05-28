<script  lang="ts">
import { mapMutations } from 'vuex';

export default {

    name: 'SearchVue',
    methods: {
        ...mapMutations(['toggleModal'])
    }
}

</script>
<template>
    <div class="absolute h-full w-full backdrop-brightness-150 backdrop-blur-md  flex justify-center pt-10 "
        v-if="$store.state.showModal">

        <div
            class="border-1 border-zinc-800 border-solid border shadow-md bg-zinc-950 p-4 rounded-3xl md:w-2/3 md:h-2/3 sm:max-h-96 md:max-w-lg">
            <div class=" flex justify-end">
                <button
                    class="bg-purple-800 border-2 border-solid border-purple-950 rounded-full px-2 py-1 text-sm hover:shadow-md hover:shadow-purple-950"
                    @click="toggleModal">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </div>
            <div class="text-center mb-5">
                <span>Pesquisar Cryptomoeda</span>
            </div>
            <div class="bg-purple-800 rounded-full py-2 px-5 flex  items-center border-2 border-solid border-violet-950">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="me-3 " />
                <input type="text" class="bg-purple-800 focus:outline-none placeholder:text-purple-300 w-full"
                    placeholder="Ex: BTC">
            </div>

        </div>


    </div>
</template>

<style scoped></style>
