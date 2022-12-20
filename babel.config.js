module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@components": "./components",
            "@constants": "./constants",
            "@hooks": "./hooks",
            "@navigation": "./navigation",
            "@screens": "./screens",
            "@types": "./types",
            "@stores": "./stores",
            "@utils": "./utils",
            "@themes": "./themes",
          },
        },
      ],
    ],
  };
};
