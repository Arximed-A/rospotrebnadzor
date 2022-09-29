export default {
  namespaced: true,
  state: () => ({
    adress: null,
    adressError: false,
  }),
  mutations: {
    setAdress(state, adress) {
      state.adress = adress;
      state.adressError = false;
    },
    adressError(state) {
      state.adressError = true;
      state.adress = null;
    },
  },
  actions: {
    async pleaseSetAdress({ commit }, adress) {
      const changAdress = await this.dispatch("transformToLatinWords", adress); // преобразует текст в латинницу
      commit("setAdress", changAdress);
    },
    pleaseShowAdressError({ commit }) {
      commit("adressError");
    },
  },
  getters: {},
};
