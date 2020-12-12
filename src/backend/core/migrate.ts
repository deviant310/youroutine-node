import { parse, resolve } from "path";
import { existsSync, readFileSync, statSync, writeFileSync } from "fs";

declare const STORAGE_PATH: string;
declare const MIGRATIONS_PATH: string;

const migrations = require.context('migrations', false, /\.ts$/);

export default async function() {
  const dataFilePath = resolve(STORAGE_PATH, 'migrations.json');
  const existedMigrationData: { [ key: string ]: any } = existsSync(dataFilePath) ? JSON.parse(readFileSync(dataFilePath).toString()) : {};
  const migrationData = await migrations.keys()
    .sort((next, current) => {
      const [
        { birthtimeMs: nextBirthTimeMs },
        { birthtimeMs: currentBirthTimeMs }
      ] = [ next, current ]
        .map(fileBaseName => statSync(resolve(MIGRATIONS_PATH, fileBaseName)));
      
      return nextBirthTimeMs - currentBirthTimeMs;
    })
    .reduce((p, rawKey) => p.then(async (obj: { [ key: string ]: any }) => {
      const key = parse(rawKey).name;
      
      if(existedMigrationData[ key ])
        return obj;
      
      const Migration = migrations(rawKey).default;
      const migration = new Migration;
      
      await migration.up();
      
      obj[ key ] = { key, time: new Date().toLocaleString('ru') };
      return obj;
    }), Promise.resolve({}));
  
  writeFileSync(dataFilePath, JSON.stringify({
    ...existedMigrationData,
    ...migrationData
  }, null, 2));
}