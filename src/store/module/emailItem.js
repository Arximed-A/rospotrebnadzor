export default {
  namespaced: true,
  state: () => ({
    email: null,
    emailError: false,
  }),
  mutations: {
    setEmail(state, email) {
      state.email = email;
      state.emailError = false;
    },
    emailError(state) {
      state.emailError = true;
      state.email = null;
    },
  },
  actions: {
    pleaseSetEmail({ commit }, email) {
      // не уверен что необходимо email в латиницу переводить
      this.dispatch("changeValidEmail", true);
      commit("setEmail", email);
    },
    pleaseShowEmailError({ commit }) {
      this.dispatch("changeValidEmail", false);
      commit("emailError");
    },
  },
  getters: {},
};
