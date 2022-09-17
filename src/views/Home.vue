<template>
  <h1 class="form__title">Заполните анкету</h1>
  <form action="#" class="form__container">
    <NameItem
			
		/>
    <AgeItem/>
		<EmailItem/>
		<Data-item/>
		<AdressItem/>
		<TimeItem/>
  </form>
    <button @click="checkForm">
			Записаться
		</button>
  
	
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
    TimeItem
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
			}
		},
		transformWord(str) {
			let ru = {
				'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
				'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
				'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
				'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
				'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
				'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
				'ъ': 'ie', 'ь': '', 'й': 'i'
			};
			let newString = [];

			return [...str].map(l => {
				let latL = ru[l.toLocaleLowerCase()];

				if (l !== l.toLocaleLowerCase()) {
					latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
				} else if (latL === undefined) {
					latL = l;
				}

				return latL;
			}).join('');
		}
  },
	created(){
		const name = 'москва';
		const text = this.transformWord(name);
		
	},
  computed:{
		...mapState({
			validForm: state => state.validForm
		})
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
.error{
		border: 1px solid red;
}
</style>