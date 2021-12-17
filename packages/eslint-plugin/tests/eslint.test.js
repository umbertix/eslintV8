const path = require("path");
const { ESLint } = require("eslint");

async function getEslintErrors(fileToTest, eslintConfig) {
  const eslint = new ESLint(
    eslintConfig ?? {
      useEslintrc: true,
      ignore: false,
    }
  );

  return eslint.lintFiles([fileToTest]);
}

const eslintTypeList = [
  ["json", ".json"],
  ["md", ".md"],
  ["ts", ".ts"],
  ["jest", ".test.ts"],
];

describe.each(eslintTypeList)(
  "Validate ESLint rules for %s",
  (type, extension) => {
    it(`should flag invalid style for files with ${type} extension`, async () => {
      const response = await getEslintErrors(
        path.resolve(__dirname, `resources/${type}/invalid${extension}`)
      );

      expect(response[0].messages).toMatchSnapshot();
    });

    it(`should flag valid style for files with ${type} extension`, async () => {
      const response = await getEslintErrors(
        path.resolve(__dirname, `resources/${type}/valid${extension}`)
      );

      expect(response[0].messages).toMatchInlineSnapshot(`Array []`);
    });
  }
);
