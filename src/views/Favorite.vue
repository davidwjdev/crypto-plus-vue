<script setup lang="ts">
import { useFavoriteStore } from "../store/favorite";
const favoriteStore = useFavoriteStore();
console.log(favoriteStore)
</script>
<template>
    <div class="flex justify-center">
        <div class="grid lg:grid-cols-3 md:grid-cols-2">
            <div class="p-3 m-2 md:m-4 bg-zinc-900 rounded-3xl w-[300px] h-48 flex justify-between"
                v-for="(coin, index) in favoriteStore.favorite" :key="index">
                <div class="">
                    <div class="w-10 h-10">
                        <img :src="coin['imageUrl']" class="" :alt="coin['fullName']" />
                    </div>

                    <div class="mt-2 flex flex-col">
                        <span class="font-black font uppercase text-2xl">{{
                            coin["name"]
                        }}</span>
                        <span class="text-sm uppercase">{{
                            coin["fullName"]
                        }}</span>
                    </div>

                    <div class="mt-2 flex flex-row items-end">
                        <span class="font-bold text-md me-1"> Preço: </span>
                        <span class="text-[0.8em]">
                            {{ coin["price"] as Number }}
                        </span>
                    </div>
                </div>

                <div class="mb-2">
                    <button @click="favoriteStore.addFavorite(coin)">
                        <font-awesome-icon :icon="coin['isChecked']
                            ? ['fas', 'star']
                            : ['fas', 'star']
                            " :class="{
        'text-yellow-500': coin['isChecked'],
        'text-black': !coin['isChecked']
    }" class="fa-xl" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>