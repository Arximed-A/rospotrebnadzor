import { createStore } from "vuex";
import nameItem from "./module/nameItem";
import ageItem from "./module/ageItem";
import emailItem from "./module/emailItem";
import dataItem from "./module/dataItem";
import adressItem from "./module/adressItem";
import timeItem from "./module/timeItem";

export default createStore({
  modules: {
    nameItem,
    ageItem,
    emailItem,
    dataItem,
    adressItem,
    timeItem,
  },
  state: {
    name: false,
    age: false,
    email: false,
    data: false,
    time: false,
    validForm: false,
  },
  mutations: {
    validForm(state, valid) {
      state.validForm = valid;
    },
    validName(state, valid) {
      state.name = valid;
    },
    validAge(state, valid) {
      state.age = valid;
    },
    validEmail(state, valid) {
      state.email = valid;
    },
    validData(state, valid) {
      state.data = valid;
    },
    validTime(state, valid) {
      state.time = valid;
    },
  },
  actions: {
    changeValidName({ commit }, valid) {
      commit("validName", valid);
    },
    changeValidAge({ commit }, valid) {
      commit("validAge", valid);
    },
    changeValidEmail({ commit }, valid) {
      commit("validEmail", valid);
    },
    changeValidData({ commit }, valid) {
      commit("validData", valid);
    },
    changeValidTime({ commit }, valid) {
      commit("validTime", valid);
    },
    transformToLatinWords({ commit }, str) {
      let alphabet = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "j",
        з: "z",
        и: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ы: "y",
        э: "e",
        ю: "u",
        я: "ya",
        ъ: "ie",
        ь: "",
        й: "y",
      };
      let newString = [];
      return [...str]
        .map((letter) => {
          let latL = alphabet[letter.toLocaleLowerCase()];
          if (letter !== letter.toLocaleLowerCase()) {
            latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
          } else if (latL === undefined) {
            latL = letter;
          }
          return latL;
        })
        .join("");
    },
    pleaseCheckForm({ commit }) {
      if (!this.state.name) {
        commit("nameItem/nameError");
      }
      if (!this.state.age) {
        commit("ageItem/ageError");
      }
      if (!this.state.email) {
        commit("emailItem/emailError");
      }
      if (!this.state.date) {
        commit("dataItem/dateError");
      }
      if (!this.state.time) {
        commit("timeItem/timeError");
      }

      /*
      if (state.name && state.age && state.email && state.date && state.time) {
        commit("validForm");
      }
			*/
    },
  },
});
