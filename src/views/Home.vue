<template>
  <h1 class="form__title">Заполните анкету</h1>
  <form 
    action="#" 
    class="form__container" 
    v-on:submit.prevent="onSubmit"
  >
    <NameItem/>
    <AgeItem/>
    <EmailItem/>
    <Data-item/>
    <AdressItem/>
    <TimeItem/>
    <button 
      class="button"
      @click="checkForm"
    >
      Записаться
    </button>
  </form>
</template>

<script>

import NameItem from "@/components/nameItem.vue";
import AgeItem from "@/components/ageItem.vue";
import EmailItem from "@/components/emailItem.vue";
import DataItem from '@/components/dataItem.vue';
import AdressItem from "@/components/adressItem.vue";
import TimeItem from "@/components/timeItem.vue";
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    NameItem,
    AgeItem,
    EmailItem,
    DataItem,
    AdressItem,
    TimeItem,
},
  data(){
    return{
    }
  },
  methods:{
    ...mapActions({
      pleaseCheckForm: 'pleaseCheckForm',
    }),
    checkForm(){
      this.pleaseCheckForm();
      if (this.validForm){
        this.$router.push('/result');
      };
    },
  },
  computed:{
    ...mapState({
      validForm: state => state.validForm
    }),
  },
}

</script>

<style lang="scss">
.form{
  &__title{
  font-size: 30px;
  }
  &__item {
    display: flex;
    align-items: center;
    margin: 0px 0px 20px 0px;
    height: 30px;
  }
  &__text {
    flex: 0 0 160px;
    margin: 0px 10px 0px 0px;
  }
  &__field {
    flex: 0 0 400px;
    margin: 0px 10px 0px 0px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    
  }
  &__field,input{
    height: 100%;
  }
  &__error {
    flex: 0 0 100px;
    color: red;
    font-weight: 700;
  }
}
.necessarily{
  color: red;
  font-size: 25px;
}
.error{
    border: 1px solid red;
}

.button{
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  &:hover{
    background-color: rgba(21, 128, 0, 0.1);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
}
</style>