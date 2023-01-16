// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/src/commons/yupSchema/$1',
    'node_modules',
  ],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@styles/(.*)': '<rootDir>/src/commons/styles/$1',
    '^@hooks/(.*)': '<rootDir>/src/commons/hooks/$1',
    '^@constants/(.*)': '<rootDir>/src/commons/constants/$1',
  },
  collectCoverageFrom: [
    'src/**/*.[jt]s?(x)',
    '!pages/',
    '!src/commons/yupSchema/*.[jt]s?(x)',
    '!**/*.styles.[jt]s?(x)',
    '!**/*.types.[jt]s?(x)',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-plugin-context/setup',
  ],
  verbose: true,
  transform: {
    '\\.(gpx|png|svg)$': '<rootDir>/assetTransformer.js',
  },
};

module.exports = createJestConfig(customJestConfig);
