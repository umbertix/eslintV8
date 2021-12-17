const jestCommonConfig = require("../../jest.common.js");
const { name } = require("./package");

module.exports = {
  ...jestCommonConfig,
  displayName: name,
};
