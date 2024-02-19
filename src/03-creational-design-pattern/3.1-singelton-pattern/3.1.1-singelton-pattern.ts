class Singleton {
	private static instance: Singleton;
	private static _value: number;

	/**
	 * The Singleton's constructor should always be private to prevent direct
	 * construction calls with the `new` operator.
	 */
	private constructor() {}

	/**
	 * The static method that controls the access to the singleton instance.
	 *
	 * This implementation let you subclass the Singleton class while keeping
	 * just one instance of each subclass around.
	 */
	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}

		return Singleton.instance;
	}

	/**
	 * Finally, any singleton should define some business logic, which can be
	 * executed on its instance.
	 */
	set value(value: number) {
		Singleton._value = value;
	}

	get Value() {
		return Singleton._value;
	}
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.value = 10;

console.log(singleton1.value); // output: 10
console.log(singleton2.value); // output: 10

console.log(singleton1 === singleton2); // true
