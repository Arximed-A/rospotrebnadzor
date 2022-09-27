import timeData from "../timeData.json";

export default {
  namespaced: true,
  state: () => ({
    time: null,
    timeError: false,
    timeData: timeData,
  }),
  mutations: {
    setTime(state, time) {
      state.time = time;
      state.timeError = false;
    },
    timeError(state) {
      state.timeError = true;
      state.time = null;
    },
  },
  actions: {
    pleaseSetTime({ commit }, time) {
      this.dispatch("changeValidTime", true);
      commit("setTime", time);
    },
    pleaseShowTimeError({ commit }) {
      this.dispatch("changeValidTime", false);
      commit("timeError");
    },
  },
  getters: {},
};
