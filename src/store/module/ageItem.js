export default {
  namespaced: true,
  state: () => ({
    age: null,
    ageError: false,
  }),
  mutations: {
    setAge(state, age) {
      state.age = age;
      state.ageError = false;
    },
    ageError(state) {
      state.ageError = true;
      state.age = null;
    },
  },
  actions: {
    pleaseSetAge({ commit }, age) {
      this.dispatch("changeValidAge", true);
      commit("setAge", age);
    },
    pleaseShowAgeError({ commit }) {
      this.dispatch("changeValidAge", false);
      commit("ageError");
    },
  },
  getters: {},
};
