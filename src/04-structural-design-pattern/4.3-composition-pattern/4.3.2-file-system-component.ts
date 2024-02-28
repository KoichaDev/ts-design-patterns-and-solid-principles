(() => {
	// * Components
	interface FileSystemComponent {
		getName(): string;
		getSize(): number;
	}

	// * Implementation
	class FileComponent implements FileSystemComponent {
		constructor(private name: string, private size: number) {}

		getName(): string {
			return this.name;
		}

		getSize(): number {
			return this.size;
		}
	}

	// * Composite
	interface CompositeFileSystemComponent extends FileSystemComponent {
		addComponent(component: FileSystemComponent): void;
		removeComponent(component: FileSystemComponent): void;
		getComponents(): FileSystemComponent[];
	}

	class Folder implements CompositeFileSystemComponent {
		private components: FileSystemComponent[] = [];

		constructor(private name: string) {}

		getName(): string {
			return this.name;
		}

		getSize(): number {
			const sumTotalSize = this.components.reduce(
				(totalAcc, componentValue) => totalAcc + componentValue.getSize(),
				0
			);

			return sumTotalSize;
		}

		public addComponent(component: FileSystemComponent): void {
			this.components.push(component);
		}

		removeComponent(component: FileSystemComponent): void {
			const index = this.components.indexOf(component);
			if (index !== -1) {
				this.components.splice(index, 1);
			}
		}

		getComponents(): FileSystemComponent[] {
			return this.components;
		}
	}

	// Client Code
	const file1 = new FileComponent('file1.txt', 500);
	const file2 = new FileComponent('file2.txt', 800);
	const file3 = new FileComponent('file3.txt', 1200);

	const folder = new Folder('My Folder');
	folder.addComponent(file1);
	folder.addComponent(file2);
	folder.addComponent(file3);

	console.log(`Folder ${folder.getName()} contains:`);
	folder.getComponents().map((component) => {
		console.log(`- ${component.getName()} with the size of ${component.getSize()} bytes`);
	});

	console.log(`Total size ${folder.getSize()} bytes`);
})();
