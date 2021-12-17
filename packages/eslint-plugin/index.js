"use strict";

const environmentParameters = {
  node: true,
  es6: true,
  jest: true,
};

const tsParser = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};

module.exports = {
  configs: {
    "recommended:overrides": {
      env: environmentParameters,
      ...tsParser,
      plugins: [
        ...new Set([
          "@typescript-eslint"
        ]),
      ],
      extends: [
        ...new Set([
          "plugin:@typescript-eslint/recommended"
        ]),
      ]
    },
  },
};
