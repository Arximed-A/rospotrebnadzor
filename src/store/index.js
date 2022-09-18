import { createStore } from 'vuex';
import timeData from './timeData.json';

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
    timeData: timeData,
    validForm: false,
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
      state.validForm = true;
    }
  },

  actions: {
    async pleaseSetName({ commit }, name) {
      const changeName = await this.dispatch('transformToLatinWords', name); // преобразует текст в латинницу
      commit('setName', changeName);
    },
    pleaseShowNameError({ commit }) {
      commit('nameError');
    },
    pleaseSetEmail({ commit }, email) {
      // не уверен что необходимо email в латиницу переводить
      commit('setEmail', email);
    },
    pleaseShowEmailError({ commit }) {
      commit('emailError');
    },
    pleaseSetAge({ commit }, age) {
      commit('setAge', age);
    },
    pleaseShowAgeError({ commit }) {
      commit('ageError');
    },
    pleaseSetAge({ commit }, age) {
      commit('setAge', age);
    },
    pleaseShowAgeError({ commit }) {
      commit('ageError');
    },
    async pleaseSetAdress({ commit }, adress) {
      const changAdress = await this.dispatch('transformToLatinWords', adress); // преобразует текст в латинницу
      commit('setAdress', changAdress);
    },
    pleaseShowAdressError({ commit }) {
      commit('adressError');
    },
    pleaseSetDate({ commit }, date) {
      commit('setDate', date);
    },
    pleaseShowDateError({ commit }) {
      commit('dateError');
    },
    pleaseSetTime({ commit }, time) {
      commit('setTime', time);
    },
    pleaseShowTimeError({ commit }) {
      commit('timeError');
    },
    transformToLatinWords({ commit }, str) {
      let alphabet = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'kh', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
        'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
        'ъ': 'ie', 'ь': '', 'й': 'y'
      };
      let newString = [];
      return [...str].map(letter => {
        let latL = alphabet[letter.toLocaleLowerCase()];
        if (letter !== letter.toLocaleLowerCase()) {
          latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
        } else if (latL === undefined) {
          latL = letter;
        };
        return latL;
      }).join('');
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
    },
  },
})
