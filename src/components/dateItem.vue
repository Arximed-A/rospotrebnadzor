<template>
  <div class="form__item">
    <label 
      class="form__text"
      for="date"
    >
      Дата
      <span class="necessarily">
        *
      </span>
    </label>
    <input 
      class="form__field"
      v-bind:class="{error: error}"
      id="date" 
      type="date" 
      v-model.trim="date" 
      @change="checkDate(date)"
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
  name: 'date-item',
  data() {
    return {
      date: null,
      errorMessage: 'Ошибка',
      today: null,
      nextMonth: null,
    };
  },
  methods: {
    checkDate(date) {
      const selectedDate = new Date(date); //преобразует выбранную пользователем дату в формат для сравнения
      const now = this.today.toLocaleDateString() === selectedDate.toLocaleDateString() ? true : false;
      // объект сегодня сосздаётся с текущим временем, поэтому 
      if (now || this.today < selectedDate && selectedDate < this.nextMonth){ // сравнение дат
        this.pleaseSetDate(selectedDate.toLocaleDateString());//устанавливает прошедшее проверку значение
      }else{
        this.pleaseShowDateError();//вызывает ошибку
      };
    },
    ...mapActions({
      pleaseSetDate: 'dateItem/pleaseSetDate',
      pleaseShowDateError: 'dateItem/pleaseShowDateError',
    })
  },
  computed: {
    ...mapState('dateItem',{
      error: state => state.dateError,
    }),
  },
  mounted(){
    this.today = new Date(); //создаёт новый объект с сегодняшним днём
    const now = new Date(); // вспомогательный объект с сегодняшним днём 
    this.nextMonth = new Date(now.setMonth(now.getMonth() + 1)); //устанавливает значение даты на 1 месяц вперёд 
  },
}
</script>

<style lang="scss">

</style>