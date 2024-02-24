(() => {
	abstract class ProcessPayment {
		constructor(public amount: number) {}

		abstract processPayment(): void;
	}

	class PayPalProcessor extends ProcessPayment {
		public processPayment(): void {
			console.log(`Processing PayPal Payment ${this.amount}`);
		}
	}

	class StripeProcessor extends ProcessPayment {
		public processPayment(): void {
			console.log(`Processing Stripe Payment ${this.amount}`);
		}
	}

	class BankTransferProcessor extends ProcessPayment {
		public processPayment(): void {
			console.log(`Processing BankTransfer Payment ${this.amount}`);
		}
	}

	type PaymentType = 'payPal' | 'stripe' | 'bankTransfer';

	class PaymentProcessorFactory {
		public createProcessor(paymentType: PaymentType, amount: number) {
			switch (paymentType) {
				case 'payPal':
					return new PayPalProcessor(amount);
				case 'stripe':
					return new StripeProcessor(amount);
				case 'bankTransfer':
					return new BankTransferProcessor(amount);
				default:
					throw new Error('Invalid payment processor type');
			}
		}
	}

	const processPaymentFactory = new PaymentProcessorFactory();

	const payPalPayment = processPaymentFactory.createProcessor('payPal', 200);
	const stripePayment = processPaymentFactory.createProcessor('stripe', 200);
	const bankTransferPayment = processPaymentFactory.createProcessor('bankTransfer', 200);

	payPalPayment.processPayment();
	stripePayment.processPayment();
	bankTransferPayment.processPayment();
})();
