(() => {
	interface IDatabase {
		save(data: string): void;
	}

	class MySQLDatabase implements IDatabase {
		save(data: string): void {
			console.log(`${data} is being saved by MySQL`);
		}
	}

	class MongoDBDatabase implements IDatabase {
		save(data: string): void {
			console.log(`${data} is being saved by MongoDB Database`);
		}
	}

	class HighLevelModule {
		constructor(private database: IDatabase) {}

		execute(data: string) {
			this.database.save(data);
		}
	}

	const mySqlDatabase = new MySQLDatabase();
	const mongoDBDatabase = new MongoDBDatabase();

	const highLevelModule = new HighLevelModule(mySqlDatabase);
	const highLevelModule2 = new HighLevelModule(mongoDBDatabase);

	highLevelModule.execute('data');
	highLevelModule2.execute('data');
})();
