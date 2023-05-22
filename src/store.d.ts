import { createStore } from "vuex";

export default createStore({
    state: {
        showModal: false
    },
    mutations: {
        toggleModal(state) {
            state.showModal = !state.showModal;
        }
    }
});
