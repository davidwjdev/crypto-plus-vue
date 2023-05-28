import { createStore } from "vuex";

const store = createStore({
    state: {
        showModal: false,
        favorite: []
    },
    mutations: {
        toggleModal(state: { showModal: boolean }) {
            state.showModal = !state.showModal;
        }
    }
});

export default store;
