(() => {
	interface ShapeProperties {
		color: string;
		x: number;
		y: number;
	}
	abstract class Shape {
		constructor(public shapeProperties: ShapeProperties) {}

		abstract clone(): Shape;
	}

	class Rectangle extends Shape {
		constructor(shapeProperties: ShapeProperties, public width: number, public height: number) {
			super(shapeProperties);
		}

		public clone(): Shape {
			let clonedShapeProperties: ShapeProperties = {
				color: this.shapeProperties.color,
				x: this.shapeProperties.x,
				y: this.shapeProperties.y,
			};

			return new Rectangle(clonedShapeProperties, this.width, this.height);
		}
	}

	class Circle extends Shape {
		constructor(shapeProperties: ShapeProperties, public radius: number) {
			super(shapeProperties);
		}

		clone(): Shape {
			let clonedShapeProperties: ShapeProperties = {
				color: this.shapeProperties.color,
				x: this.shapeProperties.x,
				y: this.shapeProperties.y,
			};

			return new Circle(clonedShapeProperties, this.radius);
		}
	}

	const redRectangle: Shape = new Rectangle(
		{
			color: 'red',
			x: 20,
			y: 100,
		},
		10,
		20
	);

	const clonedRectangle: Shape = redRectangle.clone();
	clonedRectangle.shapeProperties.color = 'blue';

	console.log(redRectangle);
	console.log(clonedRectangle);
})();
