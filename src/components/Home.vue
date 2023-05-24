<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
export default {
    data() {
        return {
            isChecked: false,
            tsym: 'BRL',
            API: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=15&tsym=BRL`,
            API_KEY: '4100f7b060ae6b7a923c40807fbf3a44bbc6ffbd45eceee8fcbc2c735dfb5e3a',
            API_IMG: 'https://www.cryptocompare.com',
            coins: [],
        }
    },
    mounted() {
        axios.get(`${this.API}&api_key=${this.API_KEY}`).then((res: any) => {
            let data = res.data.Data;
            console.log(data)
            this.coins = data;

        })
    }
}
</script>

<template>
    <div class="flex justify-center items-center mb-5">
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
    </div>
    <div class="flex justify-center ">
        <div class="grid md:grid-cols-3 ">
            <div class="p-3 m-5 bg-zinc-900 rounded-lg w-48 h-48 flex justify-between" v-for="(coin, index) in  coins "
                :key="index">

                <div class="">
                    <div class="w-10 h-10">
                        <img :src="API_IMG + coin['CoinInfo']['ImageUrl']" class="" :alt="coin['CoinInfo']['FullName']">
                    </div>

                    <div class="mt-2 flex flex-col

                    ">
                        <span class="font-black font uppercase text-2xl ">{{ coin['CoinInfo']['Name'] }}</span>
                        <span class="text-sm uppercase ">{{ coin['CoinInfo']['FullName'] }}</span>
                    </div>


                    <div class="mt-2 flex flex-row items-end">
                        <span class="font-bold text-md me-1">
                            Preço:
                        </span>
                        <span class="text-[0.8em]">
                            {{ ((coin['DISPLAY'][tsym]['PRICE']) as number) }}
                        </span>
                    </div>
                </div>



                <div class="mb-2">
                    <input type="checkbox" v-model="isChecked" class="hidden" />
                    <label for="checkbox" class="cursor-pointer">
                        <font-awesome-icon :icon="isChecked ? ['fas', 'star'] : ['fas', 'star']"
                            :class="{ 'text-yellow-500': isChecked, 'text-black': !isChecked }" class="fa-xl" />
                    </label>
                </div>





            </div>

        </div>
    </div>
</template>

<style scoped></style>
