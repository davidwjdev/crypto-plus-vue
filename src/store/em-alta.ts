import { defineStore } from "pinia";
import { useFavoriteStore } from "./favorite";

import axios from "axios";

export const useEmAltaStore = defineStore("emAltaStore", {
    state: () => ({
        tsym: "BRL",
        API_IMG: "https://www.cryptocompare.com",
        API: `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull`,
        coins: []
    }),
    actions: {
        async fetchData() {
            try {
                const favoriteStore = useFavoriteStore();
                const response = await axios
                    .get(
                        `${this.API}?limit=15&tsym=${this.tsym}&api_key=${
                            import.meta.env.VITE_API_KEY
                        }`
                    )
                    .then((res: any) => {
                        return res.data.Data.map((item: any) => {
                            const coin: any = {
                                id: item["CoinInfo"]["Id"],
                                imageUrl:
                                    this.API_IMG + item["CoinInfo"]["ImageUrl"],
                                name: item["CoinInfo"]["Name"],
                                fullName: item["CoinInfo"]["FullName"],
                                price: item["DISPLAY"][this.tsym][
                                    "PRICE"
                                ].replace(/\.(\d$)/, ".$10"),
                                toSymbol:
                                    item["DISPLAY"][this.tsym]["TOSYMBOL"],
                                isChecked:
                                    favoriteStore.favorite.some(
                                        (coin: any) =>
                                            coin.id === item["CoinInfo"]["Id"]
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
        },
        handleSelectChange(tsym: string) {
            this.tsym = tsym;
            this.fetchData();
        }
    }
});
