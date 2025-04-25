import globals from "globals";
import tseslint from "typescript-eslint";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import vue from "eslint-plugin-vue";

export default defineConfig([
  globalIgnores(["node_modules", "dist", "out", "build", ".astro"]),
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  { files: ["**/*.css"], plugins: { css }, language: "css/css" },

  {
    files: ["**/*.{vue}"],
    plugins: { vue },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".vue"],
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
  },

  {
    files: ["**/*.astro"],
    plugins: { astro },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: astroParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        extraFileExtensions: [".astro"],
      },
    },
  },
]);
