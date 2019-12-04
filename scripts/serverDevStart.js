// Do this as the first thing so that any code reading it knows the right env.
if (!process.env.BABEL_ENV) process.env.BABEL_ENV = "development";
if (!process.env.NODE_ENV) process.env.NODE_ENV = "development";

require("babel-register")({
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
});

const paths = require("../config/paths");
require(paths.serverSrc);
