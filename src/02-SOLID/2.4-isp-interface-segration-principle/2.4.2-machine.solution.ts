/* Challenge 1
interface Printer {
	print(document: Document): void;
	scan(document: Document): void;
	fax(document: Document): void;
}

class MultiFunctionPrinter implements Printer {
	print(document: Document): void {
		console.log('The machine is printing...');
	}

	scan(document: Document): void {
		console.log('The machine is scanning...');
	}

	fax(document: Document): void {
		console.log('The machine is sending a fax...');
	}
}
*/

// * Challenge 2
interface Printer {
	print(document: Document): void;
}

interface Scanner {
	scan(document: Document): void;
}

interface FaxMachine {
	fax(document: Document): void;
}

class SimplePrinterMachine implements Printer {
	print(document: Document): void {
		console.log('The machine is printing...');
	}
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
	print(document: Document): void {
		console.log('The machine is printing...');
	}

	scan(document: Document): void {
		console.log('The machine is scanning...');
	}

	fax(document: Document): void {
		console.log('The machine is sending a fax...');
	}
}
