(async () => {
  const { default: expressLintConfig } = await import('../index.cjs');
  const { default: commonTest } = await import('./common.cjs');
  commonTest(expressLintConfig);
})();
