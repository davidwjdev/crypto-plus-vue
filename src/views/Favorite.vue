<script setup lang="ts">
import { useFavoriteStore } from "../store/favorite";
const favoriteStore = useFavoriteStore();
</script>
<template>
    <div class="flex justify-center">
        <div class="grid lg:grid-cols-3 md:grid-cols-2">
            <div class="p-5 m-2 md:m-4 bg-zinc-900 rounded-3xl w-[300px] flex justify-between"
                v-for="(coin, index) in favoriteStore.favorite" :key="index">
                <div class="">
                    <div class=" mb-5 flex items-start  max-h-12 max-w-12">
                        <img :src="coin['thumb']" class="rounded-full  max-h-12 max-w-12" :alt="coin['name']" />
                    </div>

                    <div class="mt-2 flex flex-col">
                        <span class="font-black font uppercase text-2xl">{{
                            coin["symbol"]
                        }}</span>
                        <span class="text-sm uppercase">{{
                            coin["fullName"]
                        }}</span>
                    </div>

                    <div class="mt-2 flex flex-row items-end">
                        <span class="font-bold text-md me-1"> Preço: </span>
                        <span class="text-[0.8em]">
                            {{ parseFloat(coin["price_btc"]) }}
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