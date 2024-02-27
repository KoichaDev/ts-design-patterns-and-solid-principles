(() => {
	// * Implementation Layer
	interface Database {
		connect(): void;
		query(query: string): void;
		close(): void;
	}

	class PostgreSQLDatabase implements Database {
		public connect(): void {
			console.log('Connecting to PostgreSQL');
		}

		public query(query: string): void {
			console.log(`Executing query: ${query}`);
		}

		public close(): void {
			console.log('Closing connection PostgreSQL');
		}
	}

	class MongoDBDatabase implements Database {
		public connect(): void {
			console.log('Connecting to MongoDB');
		}

		public query(query: string): void {
			console.log(`Executing query: ${query}`);
		}

		public close(): void {
			console.log('Closing connection MongoDB');
		}
	}

	// * Abstraction Layer
	abstract class DatabaseService {
		constructor(protected database: Database) {}

		abstract fetchData(query: string): void;
	}

	class ClientDatabaseService extends DatabaseService {
		fetchData(query: string): void {
			this.database.connect();
			this.database.query(query);
			this.database.close();
		}
	}

	// Client Code
	const postgresService = new ClientDatabaseService(new PostgreSQLDatabase());
	postgresService.fetchData('USERS');

	const mongoDBService = new ClientDatabaseService(new MongoDBDatabase());
	mongoDBService.fetchData('USERS');
})();
