type Connection<Client, QueryResult> = {
  connection: Client;
  init(): Promise<Connection<Client, QueryResult>>;
  query(queryString: string, values?: any[]): QueryResult
};

export { Connection };