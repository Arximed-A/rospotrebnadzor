<template>
  <div class="form__item">
    <label 
      for="name" 
      class="form__text">
        ФИО
        <span class="necessarily">
          *
        </span>
    </label>
    <input 
      class="form__field"
      v-bind:class="{error: error}"
      id="name" 
      type="text" 
      placeholder="Фамилия, имя, отчество(при наличии)" 
      v-model.trim="name" 
      @change="checkName(name)"
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
  name: 'name-item',
  data() {
    return {
      name: '',
      errorMessage: 'Ошибка',
    };
  },
  methods: {
    checkName(name) {
      const rule = /^[а-яА-ЯёЁa-zA-Z]+\s+[а-яА-ЯёЁa-zA-Z]/; // регулярное выражение 
      const result = rule.test(String(name)); //возращает истину, если проходит проверку
      if (result) {
        this.pleaseSetName(name); //устанавливает прошедшее проверку значение 
      } else {
        this.pleaseShowNameError(); //вызывает ошибку 
      };
    },
    ...mapActions({
      pleaseSetName: 'nameItem/pleaseSetName',
      pleaseShowNameError: 'nameItem/pleaseShowNameError',
    }),
  },
  computed: {
    ...mapState('nameItem',{
      error: state => state.nameError,
    })
  },
}
</script>

<style lang="scss">

</style>