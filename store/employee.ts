import { BASE_URL } from "~/constant/appConstant";

export const useEmployeeStore = defineStore("employee", () => {
	const employees = ref([]);

	async function getAll() {
		console.log("call GET in store");
		const response = await fetch(`${BASE_URL}/employees`);
		employees.value = await response.json();
	}

	async function create(name: string) {
		console.log("call POST in store");
		const response = await $fetch(`${BASE_URL}/employees`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
			}),
		});
		employees.value.push(response);
	}

	async function update(employee: Object) {
		console.log("call PUT in store");
		const response = await $fetch(`${BASE_URL}/employees/${employee.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: employee.name,
			}),
		});
		employees.value = employees.value.map((item) => {
			if (item.id === employee.id) {
				item.name = employee.name;
			}
			return item;
		});
	}

	async function deleteE(id: string) {
		console.log("call DELETE in store");
		try {
			const response = await $fetch(`${BASE_URL}/employees/${id}`, {
				method: "DELETE",
			});
			employees.value = employees.value.filter((e) => e.id !== id);
		} catch (error) {
			console.log(error);
		}
		// employees.value.push(response);
	}

	return { employees, getAll, create, deleteE, update };
});
