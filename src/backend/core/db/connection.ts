type Connection = {
  driver: string;
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

type Connections = { [key: string]: Connection}

export { Connection, Connections };