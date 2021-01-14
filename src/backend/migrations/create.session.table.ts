import { resolve } from "path";
import { readFileSync } from "fs";

import db from "core/db";

declare const NODE_MODULES_PATH: string;

//const { db, getConnection } = DBDefiner;
//const { driver } = getConnection();

class CreateSessionTable {
  async up(){
    const queryFilePath = resolve(NODE_MODULES_PATH, 'connect-pg-simple', 'table.sql');
    const queryString = readFileSync(queryFilePath).toString();
    const { query } = await db();
    
    await query(queryString);
  }
  
  down(){
  
  }
}

export default CreateSessionTable;
