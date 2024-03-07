<template>
	<h2>Counter component</h2>
	<p>Current count: {{ counterStore.counter }}</p>
	<button @click="counterStore.increment">Increment by method</button><br />
	<button @click="counterStore.decrement(input)">Decrement by method</button
	><br />
	<button @click="counterStore.counter++">Increment directly</button><br />
	<input v-model="input" type="text" />
</template>

<script setup>
import { useCounterStore } from "~/store/counter";

const counterStore = useCounterStore();
const input = ref("");
</script>

<style lang="scss" scoped></style>
