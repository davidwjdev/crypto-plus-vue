import { defineStore } from "pinia";
// import { useFavoriteStore } from "./favorite";

import axios from "axios";
export const useCoinDetailStore = defineStore("useCoinDetailStore", {
    state: () => ({
        API: `https://api.coingecko.com/api/v3/coins/`,
        API_PARAMS: `?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`,
        coin: {
            name: "",
            categories: [""],
            image: "",
            description: {
                en: ""
            },
            isFullDescription: false,
            sentimentVotesDownPercentage: 0,
            sentimentVotesUpPercentage: 0,
            symbol: "",
            links: {},
            marketData: {}
        }
    }),
    actions: {
        async fetchData(id: string) {
            try {
                // const favoriteStore = useFavoriteStore();
                const response = await axios
                    .get(this.API + id + this.API_PARAMS)
                    .then((res: any) => {
                        const data: any = {
                            name: res.data.name,
                            categories: res.data.categories,
                            image: res.data.image.large,
                            description: res.data.description,
                            isFullDescription: false,
                            sentimentVotesDownPercentage:
                                res.data.sentiment_votes_down_percentage,
                            sentimentVotesUpPercentage:
                                res.data.sentiment_votes_up_percentage,
                            symbol: res.data.symbol,
                            links: res.data.links,
                            marketData: res.data.market_data
                        };
                        return data;
                    });
                this.updateData(response);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        },
        updateData(data: any) {
            // Atualize o state com os dados recebidos
            this.coin = data;
        },
        changeFullDescription() {
            this.coin.isFullDescription = !this.coin.isFullDescription;
        }
    }
});
