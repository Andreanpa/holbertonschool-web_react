const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",

  devServer: {
    hot: true,
    contentBase: path.resolve("./dist"),
    compress: true,
    port: 8564,
  },

  // plugins: [
  //   new HTMLWebpackPlugin({
  //     filename: "index.html",
  //     template: "./dist/index.html",
  //   }),
  // ],

  module: {
    rules: [
      {
        test: /\.js$|jsx$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};
