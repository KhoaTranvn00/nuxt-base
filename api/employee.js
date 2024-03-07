import { useEmployeeStore } from "~/store/employee";

export async function getAll() {
	const employeeStore = useEmployeeStore();
	try {
		const response = await fetch("/api/todos");
		employeeStore.employees = await response.json();
	} catch (err) {
		console.error("Error fetching employees:", error);
	}
}
