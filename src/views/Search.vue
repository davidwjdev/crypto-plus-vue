<script setup lang="ts">
import { useFavoriteStore } from "../store/favorite";
import { useModalStore } from "../store/modal";
import { useSearchStore } from "../store/search";
const modalStore = useModalStore();
const searchStore = useSearchStore();
const favoriteStore = useFavoriteStore();

let search = "";

const handleChange = () => {
    searchStore.fetchData(search);
};

const resetSearch = () => {
    search = "";
    searchStore.resetSearch();
};
</script>
<template>
    <div class="h-full w-full backdrop-brightness-150 backdrop-blur-md flex justify-center pt-10 fixed inset-0 overflow-hidden"
        v-if="modalStore.showModal">
        <div
            class="border-1 border-zinc-800 border-solid border shadow-md bg-zinc-950 p-4 rounded-3xl md:w-2/3 md:h-2/3 sm:w-4/5 sm:h-5/6 md:max-w-lg">
            <div class="flex justify-end mb-3">
                <button
                    class="bg-purple-800 border-2 border-solid border-purple-950 rounded-full px-2 py-1 text-sm hover:shadow-md hover:shadow-purple-950"
                    @click="
                        resetSearch();
                    modalStore.toggleModal();
                    ">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </div>
            <div class="text-center mb-5">
                <span>Pesquisar Cryptomoeda</span>
            </div>
            <div class="bg-purple-800 rounded-full py-2 px-5 flex items-center border-2 border-solid border-violet-950">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="me-3" />
                <input type="text" class="bg-purple-800 focus:outline-none placeholder:text-purple-300 w-full"
                    v-model="search" @input="handleChange" placeholder="Ex: BTC" />
            </div>
            <div class="overflow-auto h-5/6">
                <div class="p-1 my-2 bg-zinc-900 rounded-3xl h-10 flex flex-col justify-center"
                    v-for="(coin, index) in searchStore.searchResult" :key="index">
                    <div class="flex flex-col">
                        <div class="flex flex-row justify-center ">
                            <img :src="coin['thumb']" class="rounded-full max-h-20 max-w-20 me-3" :alt="coin['name']" />

                            <span class="font-bold font uppercase text-lg">{{
                                coin["symbol"]
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
