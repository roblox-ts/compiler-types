const { fixupPluginRules } = require("@eslint/compat");
const js = require("@eslint/js");
const noAutofix = require("eslint-plugin-no-autofix");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const tseslint = require("typescript-eslint");

module.exports = [
	{ ignores: ["types/eslintIgnore.d.ts"] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	prettierRecommended,
	{
		files: ["**/*.ts"],
		languageOptions: {
			parserOptions: {
				project: "./types/tsconfig.json",
				tsconfigRootDir: __dirname,
			},
		},
		plugins: {
			"no-autofix": fixupPluginRules(noAutofix),
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"prettier/prettier": [
				"warn",
				{
					semi: true,
					trailingComma: "all",
					singleQuote: false,
					printWidth: 120,
					tabWidth: 4,
					useTabs: true,
					arrowParens: "avoid",
				},
			],
			"@typescript-eslint/array-type": [
				"warn",
				{
					default: "generic",
					readonly: "generic",
				},
			],
			"@typescript-eslint/no-floating-promises": [
				"error",
				{
					ignoreVoid: true,
				},
			],
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-empty-function": "off",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/no-unused-expressions": "warn",
			"@typescript-eslint/no-empty-object-type": "off",
			curly: ["warn", "multi-line", "consistent"],
			"no-autofix/prefer-const": "warn",
			"no-constant-condition": [
				"error",
				{
					checkLoops: false,
				},
			],
			"no-debugger": "off",
			"no-empty": [
				"error",
				{
					allowEmptyCatch: true,
				},
			],
			"no-extra-boolean-cast": "off",
			"no-undef-init": "error",
			"prefer-const": "off",
			"simple-import-sort/exports": "warn",
			"simple-import-sort/imports": "warn",
			"@typescript-eslint/triple-slash-reference": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unsafe-function-type": "off",
			"@typescript-eslint/no-wrapper-object-types": "off",
		},
	},
];
