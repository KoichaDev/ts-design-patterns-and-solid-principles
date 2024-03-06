(() => {
	interface Observer {
		update(temperature: number, humidity: number, pressure: number): void;
	}

	interface Subject {
		registerObserver(observer: Observer): void;
		removeObserver(observer: Observer): void;
		notifyObservers(): void;
	}

	class WeatherData implements Subject {
		private observers: Observer[] = [];
		private temperature: number | undefined;
		private humidity: number | undefined;
		private pressure: number | undefined;

		public registerObserver(observer: Observer): void {
			this.observers.push(observer);
		}

		public removeObserver(observer: Observer): void {
			const index = this.observers.indexOf(observer);

			if (index > -1) {
				this.observers.splice(index, 1);
			}
		}

		public notifyObservers(): void {
			if (this.temperature !== undefined && this.humidity !== undefined && this.pressure !== undefined) {
				for (const observer of this.observers) {
					observer.update(this.temperature, this.humidity, this.pressure);
				}
			}
		}

		public setMeasurements(temperature: number, humidity: number, pressure: number): void {
			this.temperature = temperature;
			this.humidity = humidity;
			this.pressure = pressure;
			this.notifyObservers();
		}
	}

	class CurrentConditionDisplay implements Observer {
		private temperature: number | undefined;
		private humidity: number | undefined;
		private pressure: number | undefined;

		constructor(private weatherData: Subject) {
			this.weatherData.registerObserver(this);
		}

		update(temperature: number, humidity: number, pressure: number): void {
			this.temperature = temperature;
			this.humidity = humidity;
			this.pressure = pressure;
			this.display();
		}

		public display(): void {
			if (this.temperature !== undefined && this.humidity !== undefined && this.pressure !== undefined) {
				return console.log(`Temperature: ${this.temperature}, Humidity: ${this.humidity}%`);
			}

			return console.log('No weather data is available');
		}
	}

	// Client Code
	const weatherData = new WeatherData(); // Subject
	const currentDisplay = new CurrentConditionDisplay(weatherData); // Observer

	// Simulate new weather adjustments
	weatherData.setMeasurements(80, 65, 30.4);
	weatherData.setMeasurements(82, 65, 30.4);
})();
