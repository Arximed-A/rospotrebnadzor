<template>
  <h1 class="form__title">
    Проверьте данные
  </h1>
  <div class="form__item">
    <span class="form__text">
      ФИО
    </span>
    <span class="form__field">
      {{name}}
    </span>
  </div>
  <div class="form__item">
    <span class="form__text">
      Возраст
    </span>
    <span class="form__field">
      {{age}}
    </span>
  </div>
  <div class="form__item">
    <span class="form__text">
      Email
    </span>
    <span class="form__field">
      {{email}}
    </span>
  </div>
  <div class="form__item">
    <span class="form__text">
      Дата
    </span>
    <span class="form__field">
      {{date}}
    </span>
  </div>
  <div class="form__item">
    <span class="form__text">
      Адрес
    </span>
    <span class="form__field">
      {{adress}}
    </span>
  </div>
  <div class="form__item">
    <span class="form__text">
      Время
    </span>
    <span class="form__field">
      {{time}}
    </span>
  </div>
  <router-link to="/">
    <button class="button">
      Назад
    </button>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Result',
  computed:{
    ...mapState({
      name: state => state.name,
      age: state => state.age,
      email: state => state.email,
      date: state => state.date,
      adress: state => state.adress,
      time: state => state.time,
    }),
  },
}
</script>

<style>

</style>