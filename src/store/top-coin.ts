import { defineStore } from "pinia";
import { useFavoriteStore } from "./favorite";

import axios from "axios";

export const useTopCoinStore = defineStore("topCoinStore", {
    state: () => ({
        API: `https://api.coingecko.com/api/v3/search/trending`,
        coins: []
    }),
    actions: {
        async fetchData() {
            try {
                const favoriteStore = useFavoriteStore();
                const response = await axios
                    .get(`${this.API}`)
                    .then((res: any) => {
                        return res.data.coins.map((crypto: any) => {
                            const coin: any = {
                                coin_id: crypto.item.coin_id,
                                id: crypto.item.id,
                                thumb: crypto.item.large,
                                name: crypto.item.name,
                                symbol: crypto.item.symbol,
                                price_btc: Number(
                                    crypto.item.price_btc
                                ).toFixed(10),
                                score: crypto.item.score,
                                isChecked:
                                    favoriteStore.favorite.some(
                                        (coin: any) =>
                                            coin.id === crypto.item.coin_id
                                    ) ?? false
                            };

                            return coin;
                        });
                    });
                this.updateData(response);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        },
        updateData(data: any) {
            // Atualize o state com os dados recebidos
            this.coins = data;
        }
    }
});
