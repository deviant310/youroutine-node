import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { parse, resolve } from 'path';

function exportStats (entryPath, outputPath) {
  const existedStats = existsSync(outputPath) ? JSON.parse(readFileSync(outputPath).toString()) : {};
  const stats = readdirSync(entryPath)
    .reduce((obj, baseName) => {
      const fileKey = parse(baseName).name;
      const filePath = resolve(entryPath, baseName);
      
      const { birthtimeMs } = statSync(filePath);
      
      obj[fileKey] = {
        createdAt: birthtimeMs
      };
      
      return obj;
    }, {});
  
  writeFileSync(outputPath, JSON.stringify({
    ...existedStats,
    ...stats
  }, null, 2));
}

module.exports = exportStats;
