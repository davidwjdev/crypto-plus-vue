import { defineStore } from "pinia";
// interface Coin {
//     id: string;
//     imageUrl: string;
//     name: string;
//     fullName: string;
//     price: string;
//     toSymbol: string;
//     isChecked: boolean;
// }
export const useFavoriteStore = defineStore("favoriteStore", {
    state: () => ({
        favorite: []
    }),
    actions: {
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
});
