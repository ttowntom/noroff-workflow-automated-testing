import globals from "globals";
import pluginJs from "@eslint/js";
import cypress from "eslint-plugin-cypress";
import jest from "eslint-plugin-jest";

export default [
	{
		languageOptions: {
			globals: { ...globals.browser, ...cypress.env, "jest/globals": true },
			ecmaVersion: 12,
			sourceType: "module",
		},
		plugins: {
			cypress,
			jest,
		},
		rules: {
			// Jest-specific rules
			"jest/no-disabled-tests": "warn",
			"jest/no-focused-tests": "error",
			"jest/no-identical-title": "error",
			"jest/prefer-to-have-length": "warn",
			"jest/valid-expect": "error",

			// Cypress-specific rules
			"cypress/no-unnecessary-waiting": "off",
			"no-unused-vars": "off",
		},
		env: {
			browser: true,
			es2021: true,
			node: true,
		},
		extends: [
			"eslint:recommended",
			"plugin:jest/recommended", // This enables recommended Jest rules
			"plugin:cypress/recommended", // This enables recommended Cypress rules
		],
	},
	pluginJs.configs.recommended,
	{
		files: ["**/*.cy.js"],
		extends: ["plugin:cypress/recommended"],
	},
];
