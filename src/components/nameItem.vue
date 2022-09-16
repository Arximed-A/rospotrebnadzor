<template>
		<div class="form__item">
			<label 
				for="name" 
				class="form__text">
					ФИО* 
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
				v-show="error">
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
		}
	},
	methods: {
		checkName(name) {
			const rule = /^[а-яА-ЯёЁa-zA-Z]+\s+[а-яА-ЯёЁa-zA-Z]/;
			const result = rule.test(String(name));
			if (result) {
				this.pleaseSetName(this.name)
			} else {
				this.pleaseShowNameError();
			}
			
		},
		...mapActions({
			pleaseSetName: 'pleaseSetName',
			pleaseShowNameError: 'pleaseShowNameError',
		})
	},
	computed: {
		...mapState({
			error: state => state.nameError,
		})
	},
}
</script>

<style lang="scss">

</style>