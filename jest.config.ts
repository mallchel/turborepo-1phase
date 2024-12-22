export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      { configFile: require.resolve('./babel.config.json') },
    ],
    '^.+\\.(scss|css)$': 'jest-transform-css',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: './coverage/test-1',
  testMatch: ['<rootDir>/src/**/*.spec.[jt]s?(x)'],
  testPathIgnorePatterns: ['node_modules'],
};
