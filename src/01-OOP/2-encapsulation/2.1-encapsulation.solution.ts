class BankAccount {
	// This will not be exposed and cannot be edited directly outside from the class
	// This is encapsulation
	private _balance: number;

	constructor(initialBalance: number) {
		this._balance = initialBalance;
	}

	// We are providing this getter method to get the balance from the encapsulation
	public get balance(): number {
		return this._balance;
	}

	public deposit(amount: number): void {
		if (amount < 0) {
			throw new Error('Invalid deposit Amount');
		}

		this._balance += amount;
	}

	public withdraw(amount: number): void {
		if (amount < 0) {
			throw new Error('Invalid withdraw Amount');
		}

		const balanceRetracted = this._balance - amount;

		if (balanceRetracted < 0) {
			return console.log('Insufficient Funds');
		}

		this._balance -= amount;
	}
}

const bankAccount = new BankAccount(1000);

bankAccount.deposit(500);
bankAccount.withdraw(1200);

console.log('current balance: ', bankAccount.balance);
