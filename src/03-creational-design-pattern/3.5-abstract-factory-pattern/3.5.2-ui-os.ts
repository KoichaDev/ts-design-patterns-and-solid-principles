(() => {
	interface Button {
		render(): void;
		onClick(cb: Function): void;
	}

	interface Checkbox {
		render(): void;
		toggle(): void;
	}

	interface GUIFactory {
		createButton(): Button;
		createCheckbox(button: Button): Checkbox;
	}

	class WindowsButton implements Button {
		render(): void {
			console.log('Rendering a button in Windows style');
		}

		onClick(cb: Function): void {
			console.log('Windows button was clicked');
			cb();
		}
	}
	class WindowsCheckbox implements Checkbox {
		constructor(private button: Button) {}

		render(): void {
			console.log('Render a checkbox in Windows style');
		}

		toggle(): void {
			this.button.onClick(() => console.log('Windows checkbox toggled'));
		}
	}

	class WindowsFactory implements GUIFactory {
		public createButton(): Button {
			return new WindowsButton();
		}

		createCheckbox(button: Button): Checkbox {
			return new WindowsCheckbox(button);
		}
	}

	class MacOSButton implements Button {
		render(): void {
			console.log('Rendering a button in MacOS style');
		}

		onClick(cb: Function): void {
			console.log('MacOS button was clicked');
			cb();
		}
	}

	class MacOSCheckbox implements Checkbox {
		constructor(private button: Button) {}

		render(): void {
			console.log('Render a checkbox in MacOS style');
		}

		toggle(): void {
			this.button.onClick(() => console.log('MacOS checkbox toggled'));
		}
	}

	class MacOSFactory implements GUIFactory {
		public createButton(): Button {
			return new MacOSButton();
		}

		createCheckbox(button: Button): Checkbox {
			return new MacOSCheckbox(button);
		}
	}

	function renderUI(factory: GUIFactory) {
		const button = factory.createButton();
		const checkbox = factory.createCheckbox(button);

		button.render();
		checkbox.render();

		button.onClick(() => console.log('Button clicked'));

		checkbox.toggle();
	}

	renderUI(new WindowsFactory());

	renderUI(new MacOSFactory());
})();
