import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export function tanstackConfig({ tsconfigRootDir }) {
  return defineConfig(
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    {
      files: ["**/*.{js,cjs,mjs}"],
      extends: [tseslint.configs.disableTypeChecked],
    },
    eslintConfigPrettier,
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        parserOptions: { projectService: true, tsconfigRootDir },
      },
      plugins: { react, "react-hooks": reactHooks },
      settings: { react: { version: "detect" } },
      rules: {
        "no-console": "warn",
        "no-duplicate-imports": "error",
        "no-constant-binary-expression": "error",
        "no-unreachable": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "object-shorthand": ["error", "always"],
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/no-danger": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-unknown-property": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/set-state-in-effect": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports" },
        ],
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/only-throw-error": "off",
        "@typescript-eslint/no-confusing-void-expression": [
          "error",
          { ignoreArrowShorthand: true },
        ],
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          { allowNumber: true },
        ],
        "@typescript-eslint/explicit-function-return-type": "warn",
      },
    },
  );
}
