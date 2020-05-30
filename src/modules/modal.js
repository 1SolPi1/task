const state = {
    currentModal: null,
    showModal: false,
    modalPayload: null,
};
const getters = {
    CURRENT: state => state.currentModal,
    SHOW_MODAL: state => state.showModal,
    MODAL_PAYLOAD: state => state.modalPayload,
};
const mutations = {
    SET_CURRENT_MODAL: (state, modal) => {
        state.currentModal = modal.name;
        state.showModal = true;
        state.modalPayload = modal.payload;
    },
    CLOSE_MODAL: state => {
        state.currentModal = null;
        state.showModal = false;
        state.modalPayload = null;
    },
};
const actions = {
    open_modal: ({ commit }, item) => {
        commit('SET_CURRENT_MODAL', item);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
