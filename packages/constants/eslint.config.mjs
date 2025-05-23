/** @type {import('eslint').Linter.Config} */
export default {
  ignores: ["node_modules", "dist", ".turbo", "coverage"],
  files: ["**/*.{js,ts}"],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  settings: {
  },
  rules: {
  }
};