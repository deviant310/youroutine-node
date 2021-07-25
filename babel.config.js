const { resolve } = require('path');

const { sourceDir } = require('./config.json');
const { parseDirAliases } = require('./utils/config-builder');

const sourcePath = resolve(sourceDir);

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': 'current'
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    ['module-resolver', {
      'alias': parseDirAliases(sourcePath)
    }]
  ]
};
