module.exports = {
  bracketSpacing: true,
  jsxSingleQuote: true,
  printWidth: 100,
  proseWrap: "always",
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  plugins: [
    "prettier-plugin-packagejson",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: ["^[./]"],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
};
