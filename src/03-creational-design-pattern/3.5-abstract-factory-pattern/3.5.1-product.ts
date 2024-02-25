(() => {
	interface IProductA {
		operationA(): string;
	}

	interface IProductB {
		operationB(): string;
		combinedOperation(collaborator: IProductA): string;
	}

	interface IFactory {
		createProductA(): IProductA;
		createProductB(): IProductB;
	}

	class ProductA implements IProductA {
		operationA(): string {
			return 'This is the result of Operation A!';
		}
	}

	class ProductB implements IProductB {
		operationB(): string {
			return 'This is the result of Operation B!';
		}

		combinedOperation(collaborator: IProductA): string {
			const result = collaborator.operationA();
			return `The result of Product B Collaborating with (${result})`;
		}
	}

	class Factory implements IFactory {
		public createProductA(): IProductA {
			return new ProductA();
		}

		public createProductB(): IProductB {
			return new ProductB();
		}
	}

	// Client Code

	const factory = new Factory();

	const productA = factory.createProductA();
	console.log(productA.operationA());

	const productB = factory.createProductB();
	console.log(productB.combinedOperation(productA));
	console.log(productB.operationB());
})();
