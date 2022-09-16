<template>
	<div class="form__item">
		<label 
			class="form__text"
			for="date">
				Дата* 
		</label>
		<input 
			class="form__field"
			v-bind:class="{error: error}"
			id="date" 
			type="date" 
			v-model.trim="date" 
			@change="checkData(date)"
		>
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
	name: 'data-item',
	data() {
		return {
			date: null,
			errorMessage: 'Ошибка',
			today: null,
			nextMonth: null,
		}
	},
	methods: {
		checkData(date) {
			const selectedDate = new Date(date);
			if (this.today < selectedDate && selectedDate < this.nextMonth){
				this.pleaseSetDate(selectedDate.toLocaleDateString());
			}else{
				this.pleaseShowDateError();
			}
		
		},
		...mapActions({
			pleaseSetDate: 'pleaseSetDate',
			pleaseShowDateError: 'pleaseShowDateError',
		})
	},
	computed: {
		...mapState({
			error: state => state.dateError,
		})
	},
	created(){
		const now = new Date();
		this.nextMonth = new Date(now.setMonth(now.getMonth() + 1));
		this.today = new Date();
	}
}
</script>

<style lang="scss">

</style>