module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
  ],
  moduleFileExtensions: [
    'js',
    'json',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: [
    '**/tests/*.js',
  ],
  globals: {
    url: '',
    testTimeout: 50000,
  },
  verbose: true,
};
