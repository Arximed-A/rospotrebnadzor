<template>
	<div class="form__item">
		<label 
			for="email"
			class="form__text">
				Email* 
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
			v-show="error">
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
		}
	},
	methods: {
		checkEmail( email) {
			const rule = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
			const result = rule.test(String(email).toLowerCase());
			if (result) {
				this.pleaseSetEmail(email);
			} else {
				this.pleaseShowEmailError();
			}
		},
		...mapActions({
			pleaseSetEmail: 'pleaseSetEmail',
			pleaseShowEmailError: 'pleaseShowEmailError',
		})
	},
	computed: {
		...mapState( {
			error: state => state.emailError,
		})
	},
}
</script>

<style lang="scss">

</style>