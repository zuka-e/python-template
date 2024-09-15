/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  quoteProps: 'consistent',
  plugins: ['prettier-plugin-toml'],
};

export default config;
