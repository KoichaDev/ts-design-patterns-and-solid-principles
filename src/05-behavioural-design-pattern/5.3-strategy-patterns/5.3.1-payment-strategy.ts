(() => {
	interface PaymentStrategy {
		pay(amount: number): void;
	}

	class PayPalConcreteStrategy implements PaymentStrategy {
		public pay(amount: number): void {
			console.log(`Paid ${amount} using PayPal`);
		}
	}

	class CreditCardConcreteStrategy implements PaymentStrategy {
		public pay(amount: number): void {
			console.log(`Paid ${amount} using Credit Card`);
		}
	}

	class BitcoinConcreteStrategy implements PaymentStrategy {
		public pay(amount: number): void {
			console.log(`Paid ${amount} using Bitcoin`);
		}
	}

	class ShoppingCartContext {
		private amount: number = 0;

		constructor(private paymentStrategy: PaymentStrategy) {}

		public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
			this.paymentStrategy = paymentStrategy;
		}

		public addToCart(value: number): void {
			this.amount += value;
		}

		public checkout(): void {
			this.paymentStrategy.pay(this.amount);
			this.amount = 0;
		}
	}

	// Client Code
	const shoppingCart = new ShoppingCartContext(new PayPalConcreteStrategy());

	shoppingCart.addToCart(100);
	shoppingCart.addToCart(50);
	shoppingCart.checkout();

	shoppingCart.setPaymentStrategy(new CreditCardConcreteStrategy());
	shoppingCart.addToCart(200);
	shoppingCart.checkout();
})();
