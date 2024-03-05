(() => {
	interface Observer {
		update(subject: Subject): void;
	}

	interface Subject {
		addObserver(observer: Observer): void;
		removeObserver(observer: Observer): void;
		notifyObservers(): void;
		getState(): number;
		setState(state: number): void;
	}

	class ConcreteObserver implements Observer {
		constructor(private id: number) {}

		update(subject: Subject): void {
			console.log(`Observer: ${this.id} has a new state: ${subject.getState()}`);
		}
	}

	class ConcreteSubject implements Subject {
		private observer: Observer[] = [];
		private state: number = 0;

		public addObserver(observer: Observer): void {
			const isExist = this.observer.includes(observer);

			if (isExist) {
				return console.log('Object already exists');
			}

			this.observer.push(observer);
			console.log('Observer added Successfully');
		}

		public removeObserver(observer: Observer): void {
			const observerIndex = this.observer.indexOf(observer);

			if (observerIndex === -1) {
				return console.log('Observer not found');
			}

			this.observer.splice(observerIndex, 1);
			console.log('Observer was successfully removed');
		}

		public getState(): number {
			return this.state;
		}

		public setState(state: number): void {
			this.state = state;
			console.log('Setting states...');
			this.notifyObservers();
		}

		public notifyObservers(): void {
			this.observer.forEach((observer) => observer.update(this));
		}
	}

	// Client Code
	const subject = new ConcreteSubject();

	const observer1 = new ConcreteObserver(1);

	subject.addObserver(observer1);

	const observer2 = new ConcreteObserver(2);
	subject.addObserver(observer2);

	subject.setState(123);
})();
