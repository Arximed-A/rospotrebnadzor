import { createStore } from 'vuex';

export default createStore({
  state: {
    name: null,
    nameError: false,
    age: null,
    ageError: false,
    email: null,
    emailError: false,
    date: null,
    dateError: false,
    adress: null,
    adressError: false,
    time: null,
    timeError: false,
    form: false,
  },
  mutations: {
    setName(state, name) {
      state.name = name;
      state.nameError = false;
    },
    nameError(state) {
      state.nameError = true;
      state.name = null;
    },
    setEmail(state, email) {
      state.email = email;
      state.emailError = false;
    },
    emailError(state) {
      state.emailError = true;
      state.email = null;
    },
    setAge(state, age) {
      state.age = age;
      state.ageError = false;
    },
    ageError(state) {
      state.ageError = true;
      state.age = null;
    },
    setDate(state, date) {
      state.date = date;
      state.dateError = false;
    },
    dateError(state) {
      state.dateError = true;
      state.date = null;
    },
    setAdress(state, adress) {
      state.adress = adress;
      state.adressError = false;
    },
    adressError(state) {
      state.adressError = true;
      state.adress = null;
    },
    setTime(state, time) {
      state.time = time;
      state.timeError = false;
    },
    timeError(state) {
      state.timeError = true;
      state.time = null;
    },
    validForm(state) {
      state.form = true;
    }
  },
  actions: {
    pleaseSetName({ commit }, name) {
      commit('setName', name)
    },
    pleaseShowNameError({ commit }) {
      commit('nameError')
    },
    pleaseSetEmail({ commit }, email) {
      commit('setEmail', email)
    },
    pleaseShowEmailError({ commit }) {
      commit('emailError')
    },
    pleaseSetAge({ commit }, age) {
      commit('setAge', age)
    },
    pleaseShowAgeError({ commit }) {
      commit('ageError')
    },
    pleaseSetAge({ commit }, age) {
      commit('setAge', age)
    },
    pleaseShowAgeError({ commit }) {
      commit('ageError')
    },
    pleaseSetAdress({ commit }, adress) {
      commit('setAdress', adress)
    },
    pleaseShowAdressError({ commit }) {
      commit('adressError')
    },
    pleaseSetDate({ commit }, date) {
      commit('setDate', date)
    },
    pleaseShowDateError({ commit }) {
      commit('dateError')
    },
    pleaseSetTime({ commit }, time) {
      commit('setTime', time)
    },
    pleaseShowTimeError({ commit }) {
      commit('timeError')
    },
    pleaseCheckForm({ commit }) {
      if (!this.state.name) {
        commit('nameError');
      }
      if (!this.state.age) {
        commit('ageError');
      }
      if (!this.state.email) {
        commit('emailError');
      }
      if (!this.state.date) {
        commit('dateError');
      }
      if (!this.state.time) {
        commit('timeError');
      }
      if (this.state.name && this.state.age && this.state.email && this.state.date && this.state.time) {
        commit('validForm');
      }

    }
  },
})
