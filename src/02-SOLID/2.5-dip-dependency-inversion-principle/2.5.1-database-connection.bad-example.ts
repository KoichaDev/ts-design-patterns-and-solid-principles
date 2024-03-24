(() => {
	interface IDatabase {
		save(data: string): void;
	}

	class MySQLDatabase implements IDatabase {
		save(data: string): void {}
	}

	class HighLevelModule {
		constructor(private database: MySQLDatabase) {}

		execute(data: string) {
			this.database.save(data);
		}
	}

	const mySqlDatbase = new MySQLDatabase();
	const highLevelModule = new HighLevelModule(mySqlDatbase);

	highLevelModule.execute('data');
})();
