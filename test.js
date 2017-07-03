const { createConfig } = require("webpack-blocks");
const elm = require("./index");
const elmConfig = options => createConfig([elm(options)]);

test("bare", () => {
  expect(elmConfig()).toEqual({
    module: {
      rules: [
        {
          exclude: [/elm-stuff/, /node_modules/],
          test: /\.elm$/,
          use: [{ loader: "elm-webpack-loader", options: {} }]
        }
      ]
    },
    plugins: [],
    resolve: { extensions: [".js", ".json"] }
  });
});

test("with debugger", () => {
  expect(elmConfig({ debug: true })).toEqual({
    module: {
      rules: [
        {
          exclude: [/elm-stuff/, /node_modules/],
          test: /\.elm$/,
          use: [{ loader: "elm-webpack-loader", options: { debug: true } }]
        }
      ]
    },
    plugins: [],
    resolve: { extensions: [".js", ".json"] }
  });
});

test("hot loader", () => {
  expect(elmConfig({ hot: true })).toEqual({
    module: {
      rules: [
        {
          exclude: [/elm-stuff/, /node_modules/],
          test: /\.elm$/,
          use: [
            { loader: "elm-hot-loader" },
            { loader: "elm-webpack-loader", options: {} }
          ]
        }
      ]
    },
    plugins: [],
    resolve: { extensions: [".js", ".json"] }
  });
});

test("hot loader + debug", () => {
  expect(elmConfig({ hot: true, debug: true })).toEqual({
    module: {
      rules: [
        {
          exclude: [/elm-stuff/, /node_modules/],
          test: /\.elm$/,
          use: [
            { loader: "elm-hot-loader" },
            { loader: "elm-webpack-loader", options: { debug: true } }
          ]
        }
      ]
    },
    plugins: [],
    resolve: { extensions: [".js", ".json"] }
  });
});
