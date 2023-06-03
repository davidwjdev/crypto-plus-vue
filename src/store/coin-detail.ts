import { defineStore } from "pinia";
// import { useFavoriteStore } from "./favorite";

import axios from "axios";
export const useCoinDetailStore = defineStore("useCoinDetailStore", {
    state: () => ({
        API: `https://api.coingecko.com/api/v3/coins/`,
        API_PARAMS: `?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=true`,
        coin: []
    }),
    actions: {
        async fetchData(id: string) {
            try {
                // const favoriteStore = useFavoriteStore();
                const response = await axios
                    .get(this.API + id + this.API_PARAMS)
                    .then((res: any) => {
                        console.log(res.data);

                        return res.data;
                    });
                this.updateData(response);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        },
        updateData(data: any) {
            // Atualize o state com os dados recebidos
            this.coin = data;
        }
    }
});
