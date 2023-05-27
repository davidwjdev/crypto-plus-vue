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
    <div class="absolute h-full w-full backdrop-blur-sm  flex justify-center pt-10" v-if="$store.state.showModal">

        <div class="border border-1 border-white  bg-zinc-950 p-4 rounded-lg md:w-2/3 md:h-2/3 sm:max-h-96 md:max-w-lg">
            <div class=" flex justify-end">
                <button class="bg-purple-800 rounded-full px-2 py-1 roun" @click="toggleModal">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </div>
            <div class="text-center mb-5">
                <span>Pesquisar Cryptomoeda</span>
            </div>
            <div class="bg-purple-800 rounded-full py-2 px-5 flex  items-center">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="me-3 " />
                <input type="text" class="bg-purple-800 focus:outline-none placeholder:text-purple-300"
                    placeholder="Ex: BTC">
            </div>

        </div>


    </div>
</template>

<style scoped></style>
