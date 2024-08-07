/* eslint-disable import/no-extraneous-dependencies */
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// Turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// Enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: '**/tests/**/*.test.js',
  output: './tests/output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://127.0.0.1:8080/',
      show: true,
    },
  },
  name: 'Submission Akhir',
  retries: 2, // Number of retries for failed tests
};
