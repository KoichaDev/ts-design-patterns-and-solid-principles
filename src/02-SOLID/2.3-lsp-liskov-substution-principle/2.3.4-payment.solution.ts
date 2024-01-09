abstract class PaymentProcessor {
	abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
	processPayment(amount: number): void {
		console.log(`Processing Credit Card Payment - Amount $${amount}`);
	}
}

class DebitCardProcessor extends PaymentProcessor {
	processPayment(amount: number): void {
		console.log(`Processing Debit Card Payment - Amount $${amount}`);
	}
}

class PayPalProcessor extends PaymentProcessor {
	processPayment(amount: number): void {
		console.log(`Processing PayPal Payment - Amount $${amount}`);
	}
}

class BitcoinProcessor extends PaymentProcessor {
	processPayment(amount: number): void {
		console.log(`Processing Bitcoin Payment - Amount $${amount}`);
	}
}

function executePayment(paymentProcessor: PaymentProcessor, amount: number): void {
	paymentProcessor.processPayment(amount);
}

const creditCardProcessor = new CreditCardProcessor();
const debitCardProcessor = new DebitCardProcessor();
const payPalProcessor = new PayPalProcessor();

executePayment(creditCardProcessor, 100);
executePayment(debitCardProcessor, 200);
executePayment(payPalProcessor, 300);
