const { alias } = require("react-app-rewire-alias")

module.exports = {
  webpack: (config) => {
    alias({
      "@components": "./src/components",
      "@consts": "./src/consts",
      "@images": "./public/assets/images",
    })(config);

    return config;
  }
}