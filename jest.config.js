module.exports = {
    roots: ['<rootDir>'],
    clearMocks: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.js',
      '!<rootDir>/src/index.js',
    ],
    collectCoverage: true,
    coverageDirectory: './coverage',
    coverageReporters: ['lcov', 'cobertura', 'text-summary'],
    reporters: ['default', 'jest-junit'],
    coverageProvider: 'v8',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/**/*.js'],
    verbose: true,
    transformIgnorePatterns: ['<rootDir>/(build|config|dist|node_modules|docker)/'],
    moduleFileExtensions: ['js', 'ts', 'json'],
    moduleDirectories: ['node_modules'],
  };
  