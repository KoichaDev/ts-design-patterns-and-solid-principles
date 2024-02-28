(() => {
	// * Components
	interface Employee {
		getName(): string;
		getSalary(): number;
		getRole(): string;
	}

	// * Leafs
	class Developer implements Employee {
		constructor(private name: string, private salary: number) {}

		public getName(): string {
			return this.name;
		}

		public getSalary(): number {
			return this.salary;
		}

		public getRole(): string {
			return 'DEVELOPER';
		}
	}

	class Designer implements Employee {
		constructor(private name: string, private salary: number) {}

		public getName(): string {
			return this.name;
		}

		public getSalary(): number {
			return this.salary;
		}

		public getRole(): string {
			return 'DESIGNER';
		}
	}

	//* Composite
	interface CompositeEmployee extends Employee {
		addEmployee(employee: Employee): void;
		removeEmployee(employee: Employee): void;
		getEmployees(): Employee[];
	}

	class Manager implements CompositeEmployee {
		private employees: Employee[] = [];

		constructor(private name: string, private salary: number) {}

		public getName(): string {
			return this.name;
		}

		public getSalary(): number {
			return this.salary;
		}

		public getRole(): string {
			return 'MANAGER';
		}

		public addEmployee(employee: Employee): void {
			this.employees.push(employee);
		}

		public removeEmployee(employee: Employee): void {
			const employeeIndexPosition = this.employees.indexOf(employee);

			if (employeeIndexPosition !== -1) {
				this.employees.splice(employeeIndexPosition, 1);
			}
		}

		getEmployees(): Employee[] {
			return this.employees;
		}
	}

	// Client Code
	const developer1 = new Developer('John Doe', 12_000);
	const developer2 = new Developer('Jane Doe', 15_000);

	const designer = new Designer('Jane Mark Doe', 17_500);

	const manager = new Manager('Michael', 50_000);

	manager.addEmployee(developer1);
	manager.addEmployee(developer2);
	manager.addEmployee(designer);

	console.log(manager);
})();
