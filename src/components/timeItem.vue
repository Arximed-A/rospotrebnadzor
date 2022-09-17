<template>
	<div class="form__item">
		<label 
			for="time"
			class="form__text">
				Время*
		</label>
		<select 
			name="time" 
			id="time" 
			class="form__field" 
			v-bind:class="{error: error}"
			@click="chosenTime"
			v-model.trim="time" 
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
			v-show="error">
				{{errorMessage}}
		</span>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import data from './timeData.json';
export default {
	name: 'time-item',
	data() {
		return {
			time: '',
			errorMessage: 'Ошибка',
			items: null,
		}
	},
	methods: {
		chosenTime() {
			const rule = /^[0-9]/;
			const result = rule.test(String(this.time).toLowerCase());
			if (result) {
				this.pleaseSetTime(this.time);
			}
		},
		...mapActions({
			pleaseSetTime: 'pleaseSetTime',
			pleaseShowTimeError: 'pleaseShowTimeError',
		})
	},
	computed: {
		...mapState( {
			error: state => state.timeError,
		}),
		
	},
	created(){
		this.items = data;
	}
}
</script>

<style lang="scss">

</style>