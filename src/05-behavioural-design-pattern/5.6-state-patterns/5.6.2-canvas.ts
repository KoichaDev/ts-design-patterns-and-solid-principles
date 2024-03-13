(() => {
	interface Tool {
		onMouseDown(): void;
		onMouseUp(): void;
	}

	class SelectionTool implements Tool {
		onMouseDown(): void {
			console.log('Selection started');
		}

		onMouseUp(): void {
			console.log('Selection drawn');
		}
	}

	class BrushTool implements Tool {
		onMouseDown(): void {
			console.log('Brush started');
		}

		onMouseUp(): void {
			console.log('Brush drawn');
		}
	}

	class EraserTool implements Tool {
		onMouseDown(): void {
			console.log('Eraser started');
		}

		onMouseUp(): void {
			console.log('Eraser drawn');
		}
	}

	class Canvas {
		constructor(private currentTool: Tool) {}

		public setTool(newTool: Tool): void {
			this.currentTool = newTool;
		}

		public onMouseDown(): void {
			this.currentTool.onMouseDown();
		}

		public onMouseUp(): void {
			this.currentTool.onMouseUp();
		}
	}

	// Client Code
	const canvas = new Canvas(new SelectionTool());
	canvas.onMouseDown();
	canvas.onMouseUp();

	canvas.setTool(new BrushTool());
	canvas.onMouseDown();
	canvas.onMouseUp();

	canvas.setTool(new EraserTool());
	canvas.onMouseDown();
	canvas.onMouseUp();
})();
