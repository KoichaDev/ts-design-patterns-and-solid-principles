abstract class Shape {
	abstract calculateArea(): number;
}

class Rectangle extends Shape {
	constructor(public width: number, public height: number) {
		super();
	}

	public calculateArea(): number {
		return this.width * this.height;
	}
}

class Square extends Shape {
	constructor(public side: number) {
		super();
	}

	public calculateArea(): number {
		return this.side * this.side;
	}
}

function area(shape: Shape) {
	return shape.calculateArea();
}

const rectangle = new Rectangle(10, 12);
const square = new Square(8);

console.log('Rectangle: ', area(rectangle));
console.log('Square: ', area(square));
