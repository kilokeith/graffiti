const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const paths = require("./paths");

let nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: paths.serverSrc,
  target: "node",
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  output: {
    filename: "server.js",
    // The build folder.
    path: paths.appBuild
  },
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win"
    // if there are any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: ["node_modules", paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: [".js", ".json"]
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Process JS with Babel.
      {
        test: /\.(js)$/,
        include: [paths.serverSrcDir],
        // exclude: [paths.appNodeModules],
        loader: require.resolve("babel-loader"),
        options: {
          compact: false,
          // babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "current"
                }
              }
            ]
          ],
          plugins: [
            ["@babel/plugin-proposal-object-rest-spread", { useBuiltIns: true }]
          ]
        }
      }
    ]
  },
  externals: nodeModules,
  plugins: [new webpack.IgnorePlugin(/\.(css|less)$/)]
  // devtool: 'sourcemap'
};
