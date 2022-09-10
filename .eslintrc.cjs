module.exports = {
  root: true,
  extends: 'vuepress',
  env: {
    node: true,
    browser: true,
    commonjs: true,
    amd: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.vue', '*.cts'],
      extends: 'vuepress-typescript',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      env: {
        node: true,
        browser: true,
        commonjs: true,
        amd: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      files: ['**/client/config.ts'],
      env: {
        node: true,
        browser: true,
        commonjs: true,
        amd: true,
      },
      rules: {
        'vue/match-component-file-name': 'off',
      },
    },
  ],
}
