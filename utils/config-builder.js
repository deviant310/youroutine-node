const { resolve, parse } = require('path');
const { readdirSync, lstatSync } = require('fs');

function parseDirAliases (path) {
  return readdirSync(path).reduce((obj, dirent) => {
    const direntPath = resolve(path, dirent).replace(process.cwd(), '.');
    const direntName = lstatSync(direntPath).isDirectory() ? dirent : parse(dirent).name;
    obj[direntName] = direntPath;
    return obj;
  }, {});
}

module.exports = { parseDirAliases };
