"use strict";

const { off, error } = require("./levels");

module.exports = {
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": error,
    "@typescript-eslint/no-explicit-any": error,
    "@typescript-eslint/explicit-module-boundary-types": off,
    "@typescript-eslint/no-unused-vars": off,
    "@typescript-eslint/no-unused-vars-experimental": off,
    "@typescript-eslint/camelcase": off,
    "@typescript-eslint/no-var-requires": off,
    "@typescript-eslint/no-non-null-assertion": off,
  },
};
