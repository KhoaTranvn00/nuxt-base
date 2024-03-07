<template>
	<button></button>
	<span class="id">{{ employee.id }} </span>
	<span>{{ employee.name }} </span>
</template>

<script setup>
const props = defineProps({
	employee: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.id {
	display: inline-block;
	width: 35px;
}
</style>
