// Required so we don't need to install dependencies in eslint
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "plugin:@umbertix/eslint-plugin/recommended:overrides",
  ],
};
