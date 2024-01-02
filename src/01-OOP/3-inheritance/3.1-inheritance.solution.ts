class Animal {
	constructor(public name: string) {}

	move(distance: number): void {
		console.log(`${this.name} moved ${distance} meters.`);
	}
}

class Dog extends Animal {
	constructor(public name: string = 'dog') {
		super(name);
	}
}
const dog = new Dog('Max');

dog.move(2);

console.log(dog);
