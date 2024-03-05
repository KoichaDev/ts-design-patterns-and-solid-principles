(() => {
	class MySQLDatabase {
		public connectToMySQL(url: string): void {
			console.log(`Connecting to MySQL database: ${url}`);
		}

		public executeMySQLQuery(query: string): void {
			console.log(`Executing MySQL query: ${query}`);
		}
	}

	class PostgreSQLDatabase {
		public connectToPostgreSQL(url: string): void {
			console.log(`Connecting to PostgreSQL database: ${url}`);
		}

		public executePostgreSQLQuery(query: string): void {
			console.log(`Executing PostgreSQL query: ${query}`);
		}
	}

	class DatabaseAdapter {
		constructor(private postgreSQL: PostgreSQLDatabase) {}

		public connectToMySQL(url: string): void {
			this.postgreSQL.connectToPostgreSQL(url);
		}

		public executeMySQLQuery(query: string): void {
			this.postgreSQL.executePostgreSQLQuery(query);
		}
	}

	// Client Code
	const mySQLDatabase = new MySQLDatabase();
	mySQLDatabase.connectToMySQL('mysql://localhost:3306/myDB');
	mySQLDatabase.executeMySQLQuery('SELECT * FROM users');

	const postgresqlDatabase = new PostgreSQLDatabase();
	postgresqlDatabase.connectToPostgreSQL('postgresql://localhost:5432/myDB');
	postgresqlDatabase.executePostgreSQLQuery('SELECT * FROM users');

	// Creating an adapter for MySQLDatabase
	const databaseAdapter = new DatabaseAdapter(new PostgreSQLDatabase());

	databaseAdapter.connectToMySQL('postgresql://localhost:3306/myDB');
	databaseAdapter.executeMySQLQuery('SELECT * FROM users');

	console.log(databaseAdapter);
})();
