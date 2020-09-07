const fs = require('fs/promises');
const path = require('path');
const fss = require('fs');
require('dotenv').config();

const IGNORE = [`index.js`];
const STATIC = `./static/fonts`;

const _url = (path, weight) => (format) =>
  `url('/fonts/${weight}/${path}') format('${format}')`;
const generate = (weight, files) => `
@font-face {
  font-family: '${process.env.FONT}';
  font-weight: ${weight};
  font-display: swap;
  font-style: normal;
  src: ${files
    .map((file) => {
      const format = file.split('.')[1];
      const url = _url(file, weight);
      switch (format) {
        case `ttf`:
          return url(`truetype`);
        default:
          return url(format);
      }
    })
    .join(', ')};
}
`;

module.exports = async function () {
  if (!fss.existsSync(`./static`)) {
    await fs.mkdir(`./static`);
  }
  await fs.rmdir(STATIC, { recursive: true });
  await fs.mkdir(STATIC);
  const folders = await fs
    .readdir(__dirname)
    .then((_) => _.filter((f) => !IGNORE.includes(f)));

  const content = await Promise.all(
    folders.map(async (folder) => {
      const files = await fs.readdir(path.join(__dirname, folder));
      await fs.mkdir(path.join(STATIC, folder));
      await Promise.all(
        files.map((file) =>
          fs
            .readFile(path.join(__dirname, folder, file))
            .then((_) => fs.writeFile(path.join(STATIC, folder, file), _)),
        ),
      );
      return generate(folder, files);
    }),
  ).then((_) => _.join('\n'));

  await fs.writeFile(`./src/scss/_fonts.scss`, content);
};
