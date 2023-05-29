import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
    state: () => ({
        showModal: false
    }),
    actions: {
        toggleModal() {
            this.showModal = !this.showModal;
        }
    }
});
