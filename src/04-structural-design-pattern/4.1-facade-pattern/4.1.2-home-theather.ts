(() => {
	class Amplifier {
		public turnOn(): void {
			console.log('Amplfier is turned on');
		}

		public setVolume(level: number): void {
			console.log(`Volume is set to ${level}`);
		}
	}

	class DvdPlayer {
		turnOn(): void {
			console.log('The DVD player is turned on');
		}

		public playMovie(movie: string) {
			console.log(`Playing ${movie}`);
		}
	}

	class Projector {
		public turnOn(): void {
			console.log('Projector is turned on');
		}

		public setInput(dvdPlayer: DvdPlayer): void {}
	}

	class Lights {
		public dim(level: number): void {
			console.log(`Lights dimmed to ${level}`);
		}
	}

	class HomeTheaterFacade {
		constructor(
			private amplifier: Amplifier,
			private dvdPlayer: DvdPlayer,
			private projector: Projector,
			private lights: Lights
		) {}

		public watchMovies(movieType: string, soundVolume: number, lightLevel: number) {
			console.log(`Get ready to watch ${movieType}`);
			this.lights.dim(lightLevel);
			this.amplifier.turnOn();
			this.amplifier.setVolume(soundVolume);
			this.dvdPlayer.turnOn();
			this.projector.turnOn();
			this.projector.setInput(this.dvdPlayer);
			this.dvdPlayer.playMovie(movieType);
		}
	}

	// Client Code
	const amplifier = new Amplifier();
	const dvdPlayer = new DvdPlayer();
	const projector = new Projector();
	const lights = new Lights();

	const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector, lights);

	homeTheater.watchMovies('Lord of the Rings', 50, 20);
})();
