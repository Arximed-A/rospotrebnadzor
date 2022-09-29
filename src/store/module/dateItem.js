export default {
  namespaced: true,
  state: () => ({
    date: null,
    dateError: false,
  }),
  mutations: {
    setDate(state, date) {
      state.date = date;
      state.dateError = false;
    },
    dateError(state) {
      state.dateError = true;
      state.date = null;
    },
  },
  actions: {
    pleaseSetDate({ commit }, date) {
      this.dispatch("changeValidDate", true);
      commit("setDate", date);
    },
    pleaseShowDateError({ commit }) {
      this.dispatch("changeValidDate", false);
      commit("dateError");
    },
  },
  getters: {},
};
