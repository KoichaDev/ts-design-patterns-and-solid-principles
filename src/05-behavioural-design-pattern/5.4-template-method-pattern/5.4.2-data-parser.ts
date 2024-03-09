(() => {
	abstract class DataParser {
		public parseData(): void {
			this.loadData();

			const data = 'Sample Data';
			const parsedData = this.parse(data);
			this.validate(parsedData);
			this.parse(parsedData);
		}

		protected loadData(): void {
			console.log('Loading data...');
		}

		protected validate<TData>(data: TData): void {
			console.log('Validate data...');
		}

		protected useData(): void {
			console.log('Using Data...');
		}

		protected abstract parse<TParseData>(data: TParseData): void;
	}

	class JSONParser extends DataParser {
		protected parse<TParseData>(data: TParseData): TParseData {
			console.log('Parsing data as JSON');

			return data;
		}
	}

	class XMLParser extends DataParser {
		protected parse<TParseData>(data: TParseData): TParseData {
			console.log('Parsing data as XML');

			return data;
		}
	}

	// Client Code

	function parseData(dataParser: DataParser) {
		dataParser.parseData();
	}

	console.log('Parsing JSON Data');
	parseData(new JSONParser());

	console.log('Parsing XML Data');
	parseData(new XMLParser());
})();
