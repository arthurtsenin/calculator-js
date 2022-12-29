module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["import", "prettier"],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  globals: {
    test: "writable",
    expect: "writable",
    describe: "writable",
  },

  rules: {
    "no-duplicate-imports": "error",
    "no-console": "warn",
  },
};
