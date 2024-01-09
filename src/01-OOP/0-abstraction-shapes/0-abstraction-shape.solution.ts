/* type Shape = {
	area(): number;
	perimeter(): number;
};

class Circle implements Shape {
	constructor(private radius: number) {}

	area(): number {
		return Math.PI * this.radius * this.radius;
	}

	perimeter(): number {
		return 2 * Math.PI * this.radius;
	}
}

class Rectangle implements Shape {
	constructor(private width: number, private height: number) {}

	area(): number {
		return this.width * this.height;
	}

	perimeter(): number {
		return 2 * (this.width + this.height);
	}
}

function calculateTotalArea(shape: Shape): number {
	return shape.area();
}

// client code - this is what they need to use enough amount of the code,
// and the class of the shapes above itself is abstracted away, and shouldn't be visible to the user

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(4, 6);

console.log('Area of circle: ', calculateTotalArea(circle));
console.log('Area of rectangle: ', calculateTotalArea(rectangle));

*/
