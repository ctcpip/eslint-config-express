# eslint-config-express

the express eslint config 🔧🔥⚙️

## use

`npm install eslint-config-express --save-dev`

then in your eslint config file:

for ESM:

```js
import expressLintConfig from 'eslint-config-express';

export default [
  ...expressLintConfig,
];
```

or for CJS:

```js
const expressLintConfig = require('eslint-config-express');

module.exports = [
  ...expressLintConfig,
];
```

see the [eslint docs](https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config) for more information
