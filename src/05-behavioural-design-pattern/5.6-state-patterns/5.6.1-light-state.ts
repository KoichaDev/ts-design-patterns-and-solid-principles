(() => {
	interface LightState {
		switchState(light: LightSwitch): void;
	}

	class OnState implements LightState {
		public switchState(lightSwitch: LightSwitch): void {
			console.log('Light state is On. Turning off...');

			lightSwitch.setState(new OffState());
		}
	}

	class OffState implements LightState {
		public switchState(lightSwitch: LightSwitch): void {
			console.log('Light state is Off. Turning on...');
			lightSwitch.setState(new OnState());
		}
	}

	class LightSwitch {
		constructor(private currentState: LightState) {}

		public setState(newState: LightState): void {
			this.currentState = newState;
		}

		public pressButton(): void {
			this.currentState.switchState(this);
		}
	}

	// Client Cpde
	const lightSwitch = new LightSwitch(new OffState());
	lightSwitch.pressButton();
	lightSwitch.pressButton();
})();
