<template>
	<fieldset>
		<legend>{{ title }}</legend>
		<div class="slot v-highlight">
			<slot />
		</div>
	</fieldset>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			required: true,
		},
	});
</script>

<style scoped>
	fieldset {
		border: 1px solid #ccc;
	}
	legend {
		width: auto;
		margin-left: 10px;
	}
	div.slot {
		margin: 10px;
	}
</style>
