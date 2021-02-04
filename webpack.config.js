const webpack = require("webpack");
const path = require("path");

let config = {
    entry: {
      bundle : "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
  }
  
  module.exports = config;