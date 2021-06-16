const { resolve } = require('path');

const { build } = require(resolve('utils/compiler'));

(async () => {
  await build();
})();
