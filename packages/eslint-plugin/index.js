"use strict";

const { off } = require("./rules/levels");
const eslintConfig = require("./rules/eslint");
const typescriptConfig = require("./rules/typescript");

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
    recommended: {
      env: environmentParameters,
      ...tsParser,
      plugins: [
        ...new Set([
          ...typescriptConfig.plugins,
        ]),
      ],
      extends: [
        ...new Set([
          ...eslintConfig.extends,
          ...typescriptConfig.extends,
        ]),
      ],
      rules: {
        ...eslintConfig.rules,
        ...typescriptConfig.rules,
      },
    },
    "recommended:overrides": {
      env: environmentParameters,
      ...tsParser,
      plugins: [
        ...new Set([
          ...typescriptConfig.plugins,
        ]),
      ],
      extends: [
        ...new Set([
          ...eslintConfig.extends,
          ...typescriptConfig.extends,
        ]),
      ],
      rules: {
        ...eslintConfig.rules,
        ...typescriptConfig.rules,
      },
      overrides: [
        {
          files: ["*.js", "*.jsx"],
          rules: {
            "@typescript-eslint/explicit-function-return-type": off,
          },
        },
        {
          files: ["*.test.ts", "*.spec.ts"],
          plugins: [
            ...new Set([...typescriptConfig.plugins]),
          ],
          extends: [
            ...new Set([
              ...eslintConfig.extends,
              ...typescriptConfig.extends,
            ]),
          ],
          rules: {
            ...eslintConfig.rules,
            ...typescriptConfig.rules,
          },
          settings: {
            "import/resolver": {
              jest: {
                jestConfigFile: "./jest.config.js",
              },
            },
          },
        },
        {
          files: ["*.tsx"],
          env: { ...environmentParameters, browser: true },
          ...tsParser,
          settings: {
            react: {
              pragma: "React",
              version: "detect",
            },
          },
        },
      ],
    },
  },
};
