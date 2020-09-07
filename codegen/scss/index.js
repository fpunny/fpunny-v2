const fs = require('fs/promises');
require('dotenv').config();

module.exports = function () {
  return fs.writeFile(
    `./src/scss/_env.scss`,
    `$primary: ${process.env.PRIMARY_COLOR};
    $font: "${process.env.FONT}", sans-serif;`,
  );
};
