<script lang="ts">
interface Coin {
    id: string;
    imageUrl: string;
    name: string;
    fullName: string;
    price: string;
    toSymbol: string;
    isChecked: boolean;
}

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
    name: "EmAltaVue",
    data() {
        return {
            tsym: "BRL",
            API: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=15&tsym=BRL`,
            API_KEY:
                "4100f7b060ae6b7a923c40807fbf3a44bbc6ffbd45eceee8fcbc2c735dfb5e3a",
            API_IMG: "https://www.cryptocompare.com",
            coins: [],
            favorite: []
        };
    },
    mounted() {
        this.getFavorites();
        axios.get(`${this.API}&api_key=${this.API_KEY}`).then((res: any) => {
            this.coins = res.data.Data.map((item: any) => {
                const coin: Coin = {
                    id: item['CoinInfo']['Id'],
                    imageUrl: 'https://www.cryptocompare.com' + item['CoinInfo']['ImageUrl'],
                    name: item['CoinInfo']['Name'],
                    fullName: item['CoinInfo']['FullName'],
                    price: (item['DISPLAY'][this.tsym]['PRICE']).replace(/\.(\d$)/, ".$10"),
                    toSymbol: item['DISPLAY'][this.tsym]['TOSYMBOL'],
                    isChecked: false,
                };
                return coin;
                //isChecked: this.favorite.some((coin: any) => coin.id === item['CoinInfo']['Id']) ?? false,

                // isChecked: this.favorite.find((coin: any) => (item['CoinInfo']['Id'] === coin.id)).length > 0
            });
        });
    },
    methods: {
        addFavorite(coin: any) {
            this.favorite = this.getFavorites();
            console.log(this.favorite);
            const found = this.favorite.some(
                (element: any) => element.id === coin.id
            );
            console.log(found);
            if (found) {
                coin.isChecked = false;
                this.favorite = this.favorite.filter(
                    (element: any) => element.id !== coin.id
                );
            } else {
                coin.isChecked = true;
                this.favorite.push(coin);
            }

            window.localStorage.clear();
            window.localStorage.setItem(
                "favorite",
                JSON.stringify(this.favorite)
            );
        },
        getFavorites() {
            const ls = window.localStorage.getItem("favorite");
            if (ls !== null) {
                this.favorite = JSON.parse(ls);
            }
            return this.favorite;
        }
    }
};
</script>

<template>
    <!-- <div class="flex justify-center items-center mb-5">
        <ul class="flex">
            <li class="me-3">
                <button href="#" class=" border-2 border-violet-800 sm:p-2 md:p-3 rounded-full font-bold">
                    <FontAwesomeIcon :icon="['fas', 'star']" />
                </button>
            </li>
            <li class="me-3">
                <button href="#" class="bg-violet-800 border-2 border-violet-800 sm:p-2 md:p-3 rounded-full font-bold">
                    Em alta
                </button>
            </li>
            <li class="">
                <button href="#" class="border-2 border-violet-800 sm:p-2 md:p-3 rounded-full font-bold">
                    Novas
                </button>
            </li>
        </ul>
    </div> -->
    <div class="flex justify-center">
        <div class="grid lg:grid-cols-3 md:grid-cols-2">
            <div class="p-3 m-2 md:m-4 bg-zinc-900 rounded-3xl w-[300px] h-48 flex justify-between"
                v-for="(coin, index) in coins" :key="index">
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
                    <button @click="addFavorite(coin)">
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

<style scoped></style>
