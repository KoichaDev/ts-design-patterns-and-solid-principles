(() => {
	class ArrayIterator<TCollection> {
		private position: number = 0;
		constructor(private collection: TCollection[]) {}

		/**
		 * The `next` function returns the next element in a collection and increments the position.
		 * @returns The next element in the collection is being returned.
		 */
		public next(): TCollection {
			// get the next element in the collection
			const result = this.collection[this.position];
			this.position++;
			return result;
		}

		/**
		 * The hasNext function checks if the current position is within the bounds of the collection length.
		 * @returns The hasNext() method is returning a boolean value, specifically whether the current
		 * position is less than the length of the collection.
		 */
		public hasNext(): boolean {
			return this.position < this.collection.length;
		}
	}

	// Client Code
	const array: number[] = [1, 2, 3, 4, 5, 6];
	const iterator = new ArrayIterator<number>(array);
	console.log(iterator.hasNext());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.hasNext());

	const arrayString = ['Hello', 'world'];
	const iteratorString = new ArrayIterator<string>(arrayString);

	console.log(iteratorString.hasNext());
	console.log(iteratorString.next());
	console.log(iteratorString.next());
})();
