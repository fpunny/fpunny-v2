const fs = require('fs/promises');
const path = require('path');
const IGNORE = [`index.js`];

(async () => {
  const files = await fs
    .readdir(__dirname)
    .then((_) => _.filter((f) => !IGNORE.includes(f)));

  try {
    await Promise.all(
      files.map(async (file) => {
        await require(path.join(__dirname, file))();
      }),
    );
  } catch (err) {
    console.error(`Error in codegen`);
    throw new Error(err);
  }
})();
