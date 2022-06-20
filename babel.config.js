module.exports = {
  presets: ["babel-preset-expo"],
  env: {
    production: {},
  },
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
    [
      "module-resolver",
      {
        root: ["./app"],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
          "@components": "./app/components",
          "@navigators": "./app/navigators",
          "@config": "./app/config",
          "@services": "./app/services",
          "@styles": "./app/styles",
          "@theme": "./app/theme",
          "@utils": "./app/utils",
          "@models": "./app/models",
          "@assets": "./assets",
          "@screens": "./app/screens",
          "@constants": "./app/constants",
          "@types": "./app/types",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
}
