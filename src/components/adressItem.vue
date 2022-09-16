<template>
	<div class="form__item list">
		<label 
		class="form__text"
		for="adress"> 
			Адрес 
	</label>
	<!-- В задании не указано что поле обязательно -->
		<input 
			class="form__field "
			v-bind:class="{error: error}"
			id="adress" 
			type="text" 
			placeholder="Город и улица" 
			v-model="adress" 
			v-on:keyup="checkCity(adress)"
		>
		<div 
			class="list__wrapper" 
			v-if="showList"
		>
			<div 
				@click="chooseAdress(item.value, item.data.street)" 
				class="list__item" 
				v-for="item of items" 
				:key="item.id"
			>
				{{item.value}}
			</div>
		</div>
		<span 
			class="form__error"
			v-show="error">
				{{errorMessage}}
		</span>
		
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	name: 'adress-item',
	data() {
		return {
			adress: '',
			errorMessage: 'Ошибка',
			items:[],
			showList: false,
		}
	},
	methods: {
		chooseAdress(adress, street){
			this.adress = adress;
			if (street){
				this.pleaseSetAdress(adress);
			}else{
				this.pleaseShowAdressError();
			}
			this.showList = false;
		},
		...mapActions({
			pleaseSetAdress: 'pleaseSetAdress',
			pleaseShowAdressError: 'pleaseShowAdressError',
		}),
		async checkCity(adress){
			const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
			const token = "d3ad8ae62a7f264b0be02696b72d549b2ed31f38";
			let query = adress;
			let options = {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
					"Authorization": "Token " + token
				},
				body: JSON.stringify({ query: query })
			}

			this.showList = true;

			this.items = await fetch(url, options).then(res => {
				return res.json()}).then(data => {
					return data.suggestions;
				})
		}
	},
	computed: {
		...mapState( {
			error: state => state.adressError,
		})
	},
}
</script>

<style lang="scss">
.list {
	position: relative;
	&__wrapper {
		position: absolute;
		top: 30px;
		left: 170px;
		border: 1px solid teal;
	}

	&__item {
		background-color:white;
		width: 400px;
		height: 30px;
		padding: 0px 0px 0px 10px;
		display: flex;
		align-items: center;
		transition: all 0.3s ease 0s;
		&:hover{
			cursor: pointer;
			background-color: rgb(60, 110, 247);
		}
	}
}
</style>