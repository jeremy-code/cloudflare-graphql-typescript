module.exports = {
	env: {
		node: true,
		es6: true,
	},
	extends: ["eslint:recommended", "typescript", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	rules: {},
};
