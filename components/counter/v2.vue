<template>
	<h2>Counter v2</h2>
	<p>current counter: {{ counterStore.counter }}</p>
	<p>current counter by get: {{ counterStore.getCounter }}</p>
</template>

<script setup>
import { useCounterStore } from "~/store/counter";

const counterStore = useCounterStore();
</script>

<style lang="scss" scoped></style>
