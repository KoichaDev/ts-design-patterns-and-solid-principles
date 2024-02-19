interface UserDetails {
	name: string;
	age: number;
	email: string;
}

interface Prototype {
	clone(): Prototype;
	getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
	constructor(private user: UserDetails) {}

	// This is the main and bread and butter of this pattern, which is responsible for cloning
	// the exisiting concrete instance, and returning it to you.
	clone(): Prototype {
		const clone = Object.create(this);

		clone.user = { ...this.user };
		return clone;
	}

	public getUserDetails(): UserDetails {
		return this.user;
	}
}

const user1 = new ConcretePrototype({ name: 'John Doe', age: 22, email: 'john.doe@example.com' });

// These are 2 separate instances, but they are not the same, they are just a clone of each other.
// This is the whole point of using the prototype pattern, because you are avoiding reference types,
// and you are using an existing instance in order to create a new one.
const user2 = user1.clone();

if (user1 === user2) {
	console.log('Both instances are the same');
} else {
	console.log('Cloned objects are separate instances');
}
