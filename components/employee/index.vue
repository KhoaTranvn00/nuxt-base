<template>
	<h2>Employee Component</h2>
	<input @keyup.enter="enter" v-model="name" ref="inputE" />
	<ul>
		<li v-for="employee in employeeStore.employees" :key="employee.id">
			<button @click="deleteE(employee.id)">delete</button>
			<button @click="onUpdateClick(employee)">update</button>
			<span :style="{ color: employee.id === idEmployeeSelected ? 'red' : '' }">
				<span class="id">{{ employee.id }} </span>
				<span>{{ employee.name }} </span>
			</span>
		</li>
	</ul>
</template>

<script setup>
import { useEmployeeStore } from "~/store/employee";

const employeeStore = useEmployeeStore();
const name = ref("");
const inputE = ref(null);
const idEmployeeSelected = ref("");
onMounted(() => {
	console.log("on mounted");
	employeeStore.getAll();
});

const enter = () => {
	if (!idEmployeeSelected.value) {
		add();
	} else {
		update();
	}
	name.value = "";
};

const add = () => {
	employeeStore.create(name.value);
};
const update = () => {
	employeeStore.update({
		id: idEmployeeSelected.value,
		name: name.value,
	});
	idEmployeeSelected.value = "";
};

const onUpdateClick = (employee) => {
	idEmployeeSelected.value = employee.id;
	name.value = employee.name;
	inputE.value.focus();
};

const deleteE = (id) => {
	employeeStore.deleteE(id);
};
</script>

<style lang="scss" scoped>
.id {
	display: inline-block;
	width: 35px;
}
</style>
