<template>
	<div>user-[group]/[id]</div>
	<p>with group: {{ $route.params.group }}</p>
	<p>with id: {{ $route.params.id }}</p>
</template>

<script setup>
const route = useRoute();

console.log({
	group: route.params.group,
	id: route.params.id,
});
</script>

<style lang="scss" scoped></style>
