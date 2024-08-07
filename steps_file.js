// steps_file.js

const { setWorldConstructor } = require('codeceptjs');

class CustomWorld {
  constructor(config) {
    // Set up CodeceptJS actor (I object)
    const { I } = inject();
    this.I = I;

    // Add any other custom configurations or setup here
  }
}

// Set the world constructor
setWorldConstructor(CustomWorld);

// Export the necessary functions
module.exports = function () {
  return actor({
    // Add any custom functions or configurations for the 'I' object here

    // Add the mockRequest function
    mockRequest: require('codeceptjs').container.plugins('REST').mockRequest,
  });
};
