export const useCounterStore = defineStore("counter", () => {
	const counter = ref(3);

	function increment() {
		counter.value++;
	}

	function decrement(amount: number) {
		counter.value -= amount;
	}

	const getCounter = computed(() => {
		return counter;
	});

	return { counter, increment, decrement, getCounter };
});
