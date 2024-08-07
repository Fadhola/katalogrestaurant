module.exports = {
  testMatch: ['**/test/**/*.test.js'],
  setupFiles: ['fake-indexeddb/auto', 'text-encoding'],
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
