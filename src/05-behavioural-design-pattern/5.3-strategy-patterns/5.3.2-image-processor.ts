(() => {
	interface FilterStrategy {
		apply(image: string): void;
	}

	class GreyScaleConcreteStrategy implements FilterStrategy {
		public apply(image: string): void {
			console.log(`Applying GreyScale filter to ${image}`);
		}
	}

	class SepiaConcreteStrategy implements FilterStrategy {
		public apply(image: string): void {
			console.log(`Applying Sepia filter to ${image}`);
		}
	}

	class NegativeConcreteStrategy implements FilterStrategy {
		public apply(image: string): void {
			console.log(`Applying Negative filter to ${image}`);
		}
	}

	class ImageProcessorContext {
		private filterStrategy: FilterStrategy;

		constructor(filterStrategy: FilterStrategy) {
			this.filterStrategy = filterStrategy;
		}

		public setFilterStrategy(filterStrategy: FilterStrategy): void {
			this.filterStrategy = filterStrategy;
		}

		public applyFilter(image: string): void {
			this.filterStrategy.apply(image);
		}
	}

	// Client Code
	const imageProcessor = new ImageProcessorContext(new GreyScaleConcreteStrategy());

	imageProcessor.applyFilter('image1.jpg');
	imageProcessor.setFilterStrategy(new SepiaConcreteStrategy());
	imageProcessor.applyFilter('image2.jpg');
})();
