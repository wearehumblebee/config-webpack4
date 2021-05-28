

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|jsx|ts|tsx)', '!**/*.test.*', '!**/*.d.ts'],
  coverageDirectory: '<rootDir>/reports/coverage',
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/src/cli.ts'],
  coverageReporters: ['lcov', 'text'],
  displayName: 'unit',
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    "src": "<rootDir>/src",
    "src/(.*)": "<rootDir>/src/$1"
  },
  rootDir: './',
  /**
   * We are not testing any UI at all
   * @see https://jestjs.io/docs/en/configuration.html#testenvironment-string
   */
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.(js|ts)'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
};
