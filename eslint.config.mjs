import globals from "globals";
import pluginJs from "@eslint/js";
import cypress from "eslint-plugin-cypress";

export default [
	{
		languageOptions: {
			globals: { ...globals.browser, ...cypress.env },
		},
		plugins: {
			cypress,
		},
		rules: {
			"cypress/no-unnecessary-waiting": "off",
			"no-unused-vars": "off",
		},
	},
	pluginJs.configs.recommended,
	{
		files: ["**/*.cy.js"],
		extends: ["plugin:cypress/recommended"],
	},
];
