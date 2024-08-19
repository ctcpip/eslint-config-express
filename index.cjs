const js = require('@eslint/js');
const stylisticJS = require('@stylistic/eslint-plugin-js');
const neostandard = require('neostandard');

module.exports = [
  js.configs.recommended,
  ...neostandard(),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: { ecmaFeatures: { impliedStrict: true } },
    },
    files: ['**/*.cjs', '**/*.js', '**/*.mjs'],
    plugins: { '@stylistic/js': stylisticJS },
    rules: {
      expressLintConfig: 0,
      'dot-notation': ['error'],
      semi: ['error', 'always'],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/space-before-function-paren': 'off',
    },
  },
];
