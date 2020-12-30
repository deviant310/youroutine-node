import connections from "config/db";

import { buildContext } from "../module/require";

import { DB } from "../";

type Connections = typeof connections;

const context = buildContext<DB.DriverStatic>(require.context('./drivers', false, /\.ts$/));

const defaultConnection = 'default';

class DBDefiner {
  static getConnection(connectionName: keyof Connections = defaultConnection){
    return connections[connectionName];
  }
  
  static dbClass(driverName: string): DB.DriverStatic {
    return context[driverName];
  }
  
  static async db(connectionName: keyof Connections = defaultConnection) {
    const connection = this.getConnection(connectionName);
    const { driver, host, port, database, user, password } = connection;
    const DBDriverStatic = this.dbClass(driver);
    return (new DBDriverStatic).init(host, port, database, user, password)
  }
}

export default DBDefiner;
