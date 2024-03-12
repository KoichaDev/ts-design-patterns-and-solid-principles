(() => {
	abstract class CakeRecipe {
		public bakeCake(): void {
			this.preHeatOven();
			this.mixIngredients();
			this.bake();
			this.coolingDown();
			this.decorate();
		}

		protected preHeatOven(): void {
			console.log('Preheat oven to 175 degrees Celsius');
		}

		protected bake(): void {
			console.log('Baking cake...');
		}

		protected coolingDown(): void {
			console.log('Cooling down the cake...');
		}
		protected decorate(): void {
			console.log('Decorating the vanilla cake...');
		}

		protected abstract mixIngredients(): void;
	}

	class ChocolateCake extends CakeRecipe {
		protected mixIngredients(): void {
			console.log('Mixing: Chocolate, sugar, butter, flour and eggs');
		}

		protected decorate(): void {
			console.log('Decorating the chocolate cake with chocolate chips');
		}
	}

	class VanillaCake extends CakeRecipe {
		protected mixIngredients(): void {
			console.log('Mixing: Vanilla extract, sugar, butter, flour and eggs');
		}
	}

	// Client Code
	function bakeCake(cake: CakeRecipe) {
		cake.bakeCake();
	}

	console.log('Baking a Chocolate Cake');
	bakeCake(new ChocolateCake());

	console.log('Baking a Vanilla Cake');
	bakeCake(new VanillaCake());
})();
