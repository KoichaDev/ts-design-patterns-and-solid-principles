(() => {
	interface MyIteratorResult<TValue> {
		value: TValue | null;
		done: boolean;
	}

	interface MyIterator<TMyIterator> {
		next(): MyIteratorResult<TMyIterator>;
		hasNext(): boolean;
	}

	interface Collection<TCollection> {
		createIterator(): MyIterator<TCollection>;
	}

	class User {
		constructor(public name: string) {}
	}

	class UserCollection implements Collection<User> {
		constructor(private users: User[]) {}

		/**
		 * The function createCollection() returns a new UserIterator object.
		 * @returns An instance of the `UserIterator` class is being returned, which implements the
		 * `MyIterator<User>` interface.
		 */
		public createIterator(): MyIterator<User> {
			return new UserIterator(this);
		}

		/**
		 * The function `getItems` returns an array of `User` objects.
		 * @returns An array of User objects is being returned.
		 */
		public getItems(): User[] {
			return this.users;
		}
	}

	// We will try to encapsulate this UserIterator process into a separated class
	// instead of keeping it inside this class UserCollection
	class UserIterator implements MyIterator<User> {
		private collection: UserCollection;
		private position: number = 0;

		constructor(collection: UserCollection) {
			this.collection = collection;
		}

		/**
		 * The hasNext function returns true if the current position is less than the total number of items
		 * in the collection.
		 * @returns The hasNext() method is returning a boolean value, which indicates whether there are more
		 * items in the collection to iterate over.
		 */
		public hasNext(): boolean {
			return this.position < this.collection.getItems().length;
		}

		/**
		 * The next function returns the next element in the collection if it exists, along with a flag
		 * indicating if there are more elements.
		 * @returns The `next()` method is returning an object with two properties: `value` and `done`. If
		 * there is a next item in the collection, it returns an object with the next item's value and `done`
		 * set to `false`. If there are no more items in the collection, it returns an object with `value`
		 * set to `null` and `done` set to `true
		 */
		public next(): MyIteratorResult<User> {
			if (this.hasNext()) {
				const nextPosition = this.position++;

				return {
					value: this.collection.getItems()[nextPosition],
					done: false,
				};
			}

			return { value: null, done: true };
		}
	}

	// Client Code
	const users = [new User('Alice'), new User('Bob'), new User('Charlie')];

	// Convert Array of Users into a Collection
	const userCollection = new UserCollection(users);

	// Create an iterator
	const iterator = userCollection.createIterator();

	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());

	const iterator2 = userCollection.createIterator();

	console.log(iterator2.next());
	console.log(iterator2.next());
})();
