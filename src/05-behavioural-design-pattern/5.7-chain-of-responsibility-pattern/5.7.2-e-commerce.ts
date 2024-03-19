(() => {
	class Order {
		public isValid() {
			return true;
		}

		public applyDiscount() {}

		public processPayment() {
			return true;
		}

		public ship() {
			// Shipping Order
		}
	}

	interface Handler {
		setNext(handler: Handler): Handler;
		handle(order: Order): string | null;
	}

	abstract class AbstractHandler implements Handler {
		private nextHandler: Handler | null = null;

		setNext(nextHandler: Handler): Handler {
			this.nextHandler = nextHandler;
			return nextHandler;
		}

		public handle(order: Order): string | null {
			if (this.nextHandler) {
				return this.nextHandler.handle(order);
			}

			return null;
		}
	}

	class ValidationHandler extends AbstractHandler {
		public handle(order: Order): string | null {
			if (order.isValid()) {
				return super.handle(order);
			}

			return 'Order is not valid';
		}
	}

	class DiscountHandler extends AbstractHandler {
		public handle(order: Order): string | null {
			order.applyDiscount();
			return super.handle(order);
		}
	}

	class PaymentHandler extends AbstractHandler {
		public handle(order: Order): string | null {
			if (order.processPayment()) {
				return super.handle(order);
			}

			return 'Payment failed';
		}
	}

	class ShippingHandler extends AbstractHandler {
		public handle(order: Order): string | null {
			order.ship();
			return 'Order processed and shipped';
		}
	}

	// Client Code
	const order = new Order();
	const orderHandler = new ValidationHandler();

	orderHandler.setNext(new DiscountHandler()).setNext(new PaymentHandler()).setNext(new ShippingHandler());

	console.log(orderHandler.handle(order));
})();
