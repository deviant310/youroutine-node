const { resolve } = require('path');
const { readdirSync, rmSync, existsSync } = require('fs');
const { execSync } = require('child_process');

const { npm_config_watch: watch } = process.env;

function compile (entryPath, outputPath) {
  if (existsSync(outputPath)) {
    readdirSync(outputPath).forEach(baseName => {
      const path = resolve(outputPath, baseName);
      
      rmSync(path, { recursive: true });
    });
  }
  
  return new Promise((resolve, reject) => {
    try {
      if (watch) {
      
      } else {
        execSync([
          `eslint ${entryPath}`,
          'ttsc'
        ].join(' && '), {
          stdio: 'inherit'
        });
      }
      
      resolve();
    } catch (e) {
      reject(e.message);
    }
  });
}

module.exports = compile;
