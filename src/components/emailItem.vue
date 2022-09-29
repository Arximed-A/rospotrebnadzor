<template>
  <div class="form__item">
    <label 
      for="email"
      class="form__text"
    >
      Email
      <span class="necessarily">
        *
      </span>
    </label>
    <input 
      class="form__field" 
      v-bind:class="{error: error}"
      id="email" 
      type="email" 
      placeholder="E-mail" 
      v-model.trim="email"
      @change="checkEmail(email)"
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
  name: 'email-item',
  data() {
    return {
      email: '',
      errorMessage: 'Ошибка',
    };
  },
  methods: {
    checkEmail( email) {
      const rule = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu; // регулярное выражение
      const result = rule.test(String(email).toLowerCase());//возращает истину, если проходит проверку
      if (result) {
        this.pleaseSetEmail(email);//устанавливает прошедшее проверку значение
      } else {
        this.pleaseShowEmailError();//вызывает ошибку
      };
    },
    ...mapActions({
      pleaseSetEmail: 'emailItem/pleaseSetEmail',
      pleaseShowEmailError: 'emailItem/pleaseShowEmailError',
    }),
  },
  computed: {
    ...mapState( 'emailItem',{
      error: state => state.emailError,
    }),
  },
}
</script>

<style lang="scss">

</style>