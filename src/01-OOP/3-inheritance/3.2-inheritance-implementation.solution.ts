class Product {
	constructor(public id: string, public price: number, public description: string) {}

	public display(): void {
		console.log(
			`Product ID: ${this.id}. Product Price: $${this.price}. Product Description: ${this.description}`
		);
	}
}

class Book extends Product {
	constructor(
		public id: string,
		public price: number,
		public description: string,
		public author: string,
		public title: string
	) {
		super(id, price, description);
	}

	public display(): void {
		super.display();
		console.log(`Book Author: ${this.author}, Book Title ${this.title}`);
	}
}

class Electronic extends Product {
	constructor(
		public id: string,
		public price: number,
		public description: string,
		public brand: string,
		public model: string
	) {
		super(id, price, description);
	}

	public display(): void {
		super.display();
		console.log(` Electronic Brand: ${this.brand}, Electronic Model: ${this.model}`);
	}
}

const book = new Book('1', 19.99, 'A good book', 'John Doe', 'Journey of John Does Book');

book.display();

const laptop = new Electronic('2', 2999, 'This is a good laptop', 'Dell', 'XPS 15');

laptop.display();
