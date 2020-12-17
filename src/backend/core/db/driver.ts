type Driver<Client, QueryResult> = {
  connection: Client;
  init(host: string, port: number, database: string, user: string, password: string): Promise<Driver<Client, QueryResult>>;
  query(queryString: string, values?: any[]): QueryResult
};

export { Driver };