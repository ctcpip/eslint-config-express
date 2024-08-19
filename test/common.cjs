const assert = require('node:assert');

module.exports = function test(expressLintConfig) {
  assert.strictEqual(expressLintConfig[expressLintConfig.length - 1].rules.expressLintConfig, 0);

  // make sure expected globals do not trigger eslint/no-undef
  try {
    noop(require); // from commonjs
  } catch (e) {
    noop(e);
  }
};

function noop () {
  // the function!  it does nothing!
}
