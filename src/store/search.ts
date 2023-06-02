import axios from "axios";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("searchStore", {
    state: () => ({
        API: "https://api.coingecko.com/api/v3/search",
        searchResult: []
    }),
    actions: {
        async fetchData(search: string) {
            try {
                const response = await axios
                    .get(`${this.API}?query=${search}`)
                    .then((res: any) => {
                        return res.data.coins.map((coin: any) => {
                            const searchCoin = coin;
                            return searchCoin;
                        });
                    });
                this.updateData(response);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        },
        updateData(data: any) {
            // Atualize o state com os dados recebidos
            this.searchResult = data;
            console.log(this.searchResult);
        },
        resetSearch() {
            this.searchResult = [];
        }
    }
});
