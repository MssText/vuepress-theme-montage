module.exports = {
  root: true,
  extends: 'vuepress',
  env: {
    node: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.vue', '*.cts'],
      extends: 'vuepress-typescript',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      files: ['**/client/config.ts'],
      rules: {
        'vue/match-component-file-name': 'off',
      },
    },
  ],
}
