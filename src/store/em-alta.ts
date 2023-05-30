import { defineStore } from "pinia";
import { useFavoriteStore } from "./favorite";

import axios from "axios";

export const useEmAltaStore = defineStore("emAltaStore", {
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
                                id: crypto.item.coin_id,
                                thumb: crypto.item.small,
                                name: crypto.item.name,
                                symbol: crypto.item.symbol,
                                price_btc: crypto.item.price_btc,
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
