(() => {
	interface Coffee {
		cost(): number;
		description(): string;
	}

	class SimpleCoffee implements Coffee {
		cost(): number {
			return 10;
		}

		description(): string {
			return 'Simple Coffee';
		}
	}

	abstract class CoffeeDecorator implements Coffee {
		constructor(protected coffee: SimpleCoffee) {}

		abstract cost(): number;
		abstract description(): string;
	}

	class MilkDecorator extends CoffeeDecorator {
		constructor(coffee: Coffee) {
			super(coffee);
		}

		cost(): number {
			return this.coffee.cost() + 2;
		}

		public description(): string {
			return `${this.coffee.description()}, with milk`;
		}
	}

	// Client Code
	let coffee: Coffee = new SimpleCoffee();

	console.log('Original price: ', coffee.cost());
	console.log(coffee.description());

	coffee = new MilkDecorator(coffee);

	console.log('Updated Price: ', coffee.cost());
	console.log(coffee.description());
})();
