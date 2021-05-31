module.exports = {
  root: true,
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // cannot make it work with subfolders tsconfig path mapping at the moment
    // 'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  ignorePatterns: ['dist/**/*', 'node_modules/**/*', 'reports/**/*'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  settings: {
    // 'import/extensions': ['.ts', '.tsx', '.d.s', '.js', '.jsx', '.json'],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    // 'import/resolvers': {
    //   typescript: {
    //     // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
    //     // alwaysTryTypes: true,
    //     project: 'tsconfig.json'
    //   }
    // }
  },
  rules: {
    'func-names': ['error', 'never'],
    // cannot make it work with subfolders tsconfig path mapping at the moment
    // 'import/no-unresolved': [2, { caseSensitive: true, commonjs: true }],
    'prefer-destructuring': 0,
    // disable the rule for all files by default
    // @see https://github.com/typescript-eslint/typescript-eslint/issues/964
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      // @see https://github.com/typescript-eslint/typescript-eslint/issues/964
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
};
