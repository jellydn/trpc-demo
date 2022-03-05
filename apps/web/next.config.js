const withTM = require("next-transpile-modules")(["@productsway/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
