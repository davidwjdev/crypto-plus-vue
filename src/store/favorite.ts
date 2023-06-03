import axios from "axios";
import { defineStore } from "pinia";
export const useFavoriteStore = defineStore("favoriteStore", {
    state: () => ({
        favorite: [{}],
        API: `https://api.coingecko.com/api/v3/coins/`,
        API_PARAMS: `?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
    }),
    actions: {
        async fetchData(id: string) {
            try {
                // const favoriteStore = useFavoriteStore();
                const response = await axios
                    .get(this.API + id)
                    .then((res: any) => {
                        console.log(res.data);
                        // const data: any = {
                        //     name: res.data.name,
                        //     categories: res.data.categories,
                        //     image: res.data.image.large,
                        //     description: res.data.description,
                        //     isFullDescription: false,
                        //     sentimentVotesDownPercentage:
                        //         res.data.sentiment_votes_down_percentage,
                        //     sentimentVotesUpPercentage:
                        //         res.data.sentiment_votes_up_percentage,
                        //     symbol: res.data.symbol,
                        //     links: res.data.links,
                        //     marketData: res.data.market_data
                        // };
                        // return data;
                    });
                return response;
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        },
        addFavorite(coin: any) {
            this.favorite = this.getFavorites();
            const found = this.favorite.some(
                (element: any) => element.id === coin.id
            );
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
        },
        checkIsFavorite(idCoin: string) {
            const favorites = this.getFavorites();
            const isFavorite = favorites.find((coin: any) => {
                console.log(idCoin);
                console.log(coin.name, "*");

                console.log(coin.id === idCoin);
                return coin.id === idCoin;
            });
            return isFavorite;
        }
    }
});
