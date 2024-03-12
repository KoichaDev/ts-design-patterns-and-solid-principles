(() => {
	interface ICommand {
		execute(): void;
		undo(): void;
	}

	class MyFileSystem {
		private commandQueue: ICommand[] = [];

		public addCommand(command: ICommand): void {
			this.commandQueue.push(command);
		}

		public executeCommands(): void {
			if (this.commandQueue.length > 0) {
				let command = this.commandQueue.shift();
				command?.execute();
			}
		}

		public undoCommands(): void {
			if (this.commandQueue.length > 0) {
				let command = this.commandQueue.pop();
				command?.undo();
			}
		}

		public hasCommands(): boolean {
			return this.commandQueue.length > 0;
		}
	}

	class CreateFileCommand implements ICommand {
		constructor(private path: string) {}

		public execute(): void {
			console.log(`Creating file at ${this.path}`);
		}

		public undo(): void {
			console.log(`Deleting file at ${this.path}`);
		}
	}

	class DeleteFileCommand implements ICommand {
		constructor(private path: string) {}

		public execute(): void {
			console.log(`Deleting file at ${this.path}`);
		}

		public undo(): void {
			console.log(`Restoring file at ${this.path}`);
		}
	}

	class ReadFileCommand implements ICommand {
		constructor(private path: string) {}

		public execute(): void {
			console.log(`Reading file at ${this.path}`);
		}

		public undo(): void {
			console.log('Undo Operation not available');
		}
	}

	class UpdateFileCommand implements ICommand {
		constructor(private path: string, private newContent: string, private oldContent: string) {}

		public execute(): void {
			console.log(`Updating file at ${this.path}, new content: ${this.newContent}`);
		}

		public undo(): void {
			console.log(`Reverting file ${this.path}, old content: ${this.oldContent}`);
		}
	}

	// Client Code
	const myFileSystem = new MyFileSystem();

	// Creating a file
	myFileSystem.addCommand(new CreateFileCommand('/path/file.txt'));

	const updateFile = new UpdateFileCommand('/path/file.txt', 'new content', 'old content');
	myFileSystem.addCommand(updateFile);

	// Read File
	myFileSystem.addCommand(new ReadFileCommand('/path/file.txt'));

	// Deleting a file
	myFileSystem.addCommand(new DeleteFileCommand('/path/file.txt'));

	// Deferred Opertation

	// while (myFileSystem.hasCommands()) {
	// 	myFileSystem.executeCommands();
	// }

	myFileSystem.undoCommands();
})();
