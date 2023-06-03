<script setup lang="ts">
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useFavoriteStore } from "../store/favorite";
import { useCoinDetailStore } from "../store/coin-detail"
import { useRoute } from "vue-router";
import { onBeforeMount } from "vue";


const favoriteStore = useFavoriteStore();
const coinDetailStore = useCoinDetailStore();
const route = useRoute();

const fetchData = async () => {
    const id = route.params.id as string;
    try {
        await coinDetailStore.fetchData(id);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    favoriteStore.checkIsFavorite(id);


};

onBeforeMount(async () => {
    await fetchData();
    favoriteStore.getFavorites();
});

const changeFullDescription = () => {
    coinDetailStore.changeFullDescription();
}

favoriteStore.getFavorites();

</script>

<template>
    <div class="flex justify-center mt-5">
        <div class="flex flex-col bg-zinc-900 rounded-lg md:p-10 sm:p-3 sm:w-[250px] md:w-[500px] lg:w-[900px]"
            v-if="coinDetailStore.coin !== null">

            <div class="mb-5 flex justify-end">
                <button class="border rounded-full p-2 border-yellow-300 text-yellow-300">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    Add Favorites
                </button>
            </div>
            <div class="mb-5 flex md:flex-row sm:flex-col   items-center md:justify-center">
                <div class="flex flex-col me-5">
                    <div class="mb-3">
                        <img class="w-32 rounded-full border-8 border-solid border-purple-800"
                            :src="coinDetailStore.coin.image" :alt="coinDetailStore.coin.name">
                    </div>
                    <div class="text-center">
                        <span class="font-black text-2xl uppercase">{{ coinDetailStore.coin.name }}</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    teste
                </div>
            </div>
            <div class="mb-3 text-center ">

                <span class="font-bold">Categories:</span>
            </div>
            <div class="mb-3 flex flex-wrap justify-center">
                <div v-for="(category, index) in coinDetailStore.coin.categories" :key="index">
                    <div class="border-2 border-solid border-purple-700 p-3 sm:p-2 rounded-full m-2  text-center">
                        <span class="">{{ category }}</span>
                    </div>
                </div>
            </div>

            <div>
                <div class="mb-3 text-center ">

                    <span class="font-bold">Description:</span>
                </div>
                <div class="mb-5">
                    <div class=" text-justify" v-if="coinDetailStore.coin.isFullDescription">
                        <span class="sm:text-sm md:text-md text-base">
                            {{
                                coinDetailStore.coin.description.en
                            }}
                        </span>

                    </div>
                    <div class="relative text-justify" v-else>
                        <span class="sm:text-sm md:text-md text-base">
                            {{
                                coinDetailStore.coin.description.en.toString().slice(0, 250)
                            }} ...
                        </span>
                        <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-zinc-900 ">
                        </div>
                    </div>
                    <div class="text-center mt-2">

                        <a class="text-sm text-purple-600 font-bold cursor-pointer" @click="changeFullDescription">
                            {{ coinDetailStore.coin.isFullDescription ? 'Read less...' : 'Read more...' }}
                        </a>
                    </div>

                </div>

            </div>


        </div>
    </div>
</template>

<style scoped></style>
