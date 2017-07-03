module.exports = {
  elm: (options = {}) => (context, { merge }) => {
    const options_ = Object.assign({}, options);
    delete options_.hot;

    const loaders = [{ loader: "elm-webpack-loader", options: options_ }];

    if (options.hot) {
      loaders.unshift({ loader: "elm-hot-loader" });
    }

    return merge({
      module: {
        rules: [
          Object.assign(
            {
              test: /\.elm$/,
              exclude: [/elm-stuff/, /node_modules/],
              use: loaders
            },
            context.match
          )
        ]
      }
    });
  }
};
