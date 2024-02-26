(() => {
	class Grinder {
		public grindBeans(): void {
			console.log('🫘 Grinding beans...');
		}
	}

	class Boiler {
		public boilWater(): void {
			console.log('💦 Boiling water...');
		}
	}

	class Brewer {
		public brewCoffee(): void {
			console.log('☕️ Brewing Coffee...');
		}
	}

	class CoffeeMakerFacade {
		constructor(private grinder: Grinder, private boiler: Boiler, private brewer: Brewer) {}

		public makeCoffee(): void {
			this.grinder.grindBeans();
			this.boiler.boilWater();
			this.brewer.brewCoffee();

			console.log('✅ The coffee is ready!');
		}
	}

	// Client Code
	const grinder = new Grinder();
	const boiler = new Boiler();
	const brewer = new Brewer();

	const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);

	coffeeMaker.makeCoffee();
})();
