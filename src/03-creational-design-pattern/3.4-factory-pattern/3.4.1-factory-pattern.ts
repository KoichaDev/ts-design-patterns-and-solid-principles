(() => {
	abstract class Car {
		constructor(public model: string, public productionYear: number) {}

		abstract displayCarInfo(): void;
	}

	class Sedan extends Car {
		displayCarInfo(): void {
			console.log(`This is Sedan. Model ${this.model}. Production Year: ${this.productionYear}`);
		}
	}

	class SUV extends Car {
		displayCarInfo(): void {
			console.log(`This is SUV. Model ${this.model}. Production Year: ${this.productionYear}`);
		}
	}

	class Hatchback extends Car {
		displayCarInfo(): void {
			console.log(`This is Hatchback. Model ${this.model}. Production Year: ${this.productionYear}`);
		}
	}

	class CarFactory {
		public createCar(type: 'Sedan' | 'SUV' | 'Hatchback', model: string, productionYear: number): Car {
			switch (type) {
				case 'Sedan':
					return new Sedan(model, productionYear);
				case 'SUV':
					return new SUV(model, productionYear);
				case 'Hatchback':
					return new Hatchback(model, productionYear);
				default:
					throw new Error('Invalid car type');
			}
		}
	}

	const carFactory = new CarFactory();

	const sedan = carFactory.createCar('Sedan', 'Camry', 2023);
	sedan.displayCarInfo();

	const suv = carFactory.createCar('SUV', 'RAB4', 2023);
	suv.displayCarInfo();

	const hatchback = carFactory.createCar('Hatchback', 'Corolla', 2023);
	hatchback.displayCarInfo();
})();
