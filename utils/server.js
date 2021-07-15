const { exec } = require('child_process');
const { existsSync } = require('fs');

const { red } = require('chalk');

const args = process.argv.slice(2);

function demon (entryPath, options = {}) {
  if (typeof entryPath === 'undefined') {
    console.log(red('Demon entry path is not specified!')) || process.exit();
  }
  
  if (!existsSync(entryPath)) {
    console.log(red(`${entryPath} is not exist!`)) || process.exit();
  }
  
  const { watchPath, inspect, breakOnStart } = options;
  
  const nodemon = exec(
    [
      './node_modules/.bin/nodemon',
      inspect && `--inspect${breakOnStart ? '-brk' : ''}=${inspect}`,
      entryPath,
      '--watch',
      watchPath
    ]
      .filter(Boolean)
      .concat(args)
      .join(' ')
  );
  
  nodemon.stdout.pipe(process.stdout);
  nodemon.stderr.pipe(process.stderr);
}

function serve (entryPath, options = {}) {
  if (!entryPath || !existsSync(entryPath)) {
    console.log(red('Server entry path is not specified!')) || process.exit();
  }
  
  const { inspect, breakOnStart } = options;
  
  const node = exec(
    [
      'node',
      inspect && `--inspect${breakOnStart ? '-brk' : ''}=${inspect}`,
      entryPath
    ]
      .filter(Boolean)
      .concat(args)
      .join(' ')
  );
  
  node.stdout.pipe(process.stdout);
  node.stderr.pipe(process.stderr);
}

module.exports = { demon, serve };
