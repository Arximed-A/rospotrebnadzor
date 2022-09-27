<template>
  <div class="form__item">
    <label 
      class="form__text"
      for="age"
    >
      Возраст
      <span class="necessarily">
        *
      </span>
    </label>
    <input 
      class="form__field"
      v-bind:class="{error: error}"
      id="age" 
      type="number" 
      placeholder="Возраст" 
      v-model.number="age" 
      @change="checkAge(age)"
    >
    <span 
      class="form__error"
      v-show="error"
    >
      {{errorMessage}}
    </span>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
  name: 'age-item',
  data() {
    return {
      age: '',
      errorMessage: 'Ошибка',
    };
  },
  methods: {
    checkAge(age) {//простая проверка на возраст
      if (0 <= age && age <= 150) {
        this.pleaseSetAge(age); //устанавливает прошедшее проверку значение
      } else {
        this.pleaseShowAgeError(); //вызывает ошибку
      };
    },
    ...mapActions({
      pleaseSetAge: 'ageItem/pleaseSetAge',
      pleaseShowAgeError: 'ageItem/pleaseShowAgeError',
    }),
  },
  computed: {
    ...mapState('ageItem',{
      error: state => state.ageError,
    }),
  },
}
</script>

<style lang="scss">

</style>