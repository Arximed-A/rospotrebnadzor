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
      this.dispatch("changeValidData", true);
      commit("setDate", date);
    },
    pleaseShowDateError({ commit }) {
      this.dispatch("changeValidData", false);
      commit("dateError");
    },
  },
  getters: {},
};
