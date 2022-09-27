export default {
  namespaced: true,
  root: true,
  state: () => ({
    name: null,
    nameError: false,
  }),
  mutations: {
    setName(state, name) {
      state.name = name;
      state.nameError = false;
    },
    nameError(state) {
      state.nameError = true;
      state.name = null;
    },
  },
  actions: {
    async pleaseSetName({ commit }, name) {
      const changeName = await this.dispatch("transformToLatinWords", name); // преобразует текст в латинницу
      this.dispatch("changeValidName", true);
      commit("setName", changeName);
    },
    pleaseShowNameError({ commit }) {
      this.dispatch("changeValidName", false);
      commit("nameError");
    },
  },
  getters: {},
};
