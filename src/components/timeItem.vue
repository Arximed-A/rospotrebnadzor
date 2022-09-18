<template>
  <div class="form__item">
    <label 
      for="time"
      class="form__text"
    >
      Время
      <span class="necessarily">
        *
      </span>
    </label>
    <select 
      name="time" 
      id="time" 
      class="form__field" 
      v-bind:class="{error: error}"
      @click="chosenTime"
      v-model="time" 
    >
      <option 
        v-for="item of items"
        :key="item.id"
        :value="item.value"
      >
        {{item.value}}
      </option>
    </select>
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
  name: 'time-item',
  data() {
    return {
      time: '',
      errorMessage: 'Ошибка',
      items: null,
    };
  },
  methods: {
    chosenTime() {
      const rule = /^[0-9]/; //регулярное выражение 
      const result = rule.test(String(this.time).toLowerCase()); //возращает истину, если проходит проверку
      if (result) {
        this.pleaseSetTime(this.time); //устанавливает прошедшее проверку значение 
      };
    },
    ...mapActions({
      pleaseSetTime: 'pleaseSetTime',
      pleaseShowTimeError: 'pleaseShowTimeError',
    }),
  },
  computed: {
    ...mapState( {
      error: state => state.timeError,
      timeData: state => state.timeData,
    }),
  },
  mounted(){
    this.items = this.timeData; 
  },
}
</script>

<style lang="scss">

</style>