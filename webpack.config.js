const path = require("path");
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const binding_path = "./inst/htmlwidgets/bindings/";
const src_path = "./inst/htmlwidgets/src/";
const build_path = path.resolve(__dirname, "./inst/htmlwidgets/build");

let library_prod = function(name, filename = name, library = undefined) {
  let foldername = filename;
  filename = filename + "-prod"
  var ret = {
    mode: "production", // minify the files
    entry: name,
    devtool: "source-map", // produce a sibling source map file
    externals: {
      // if 'leaflet' is required, pull from window.L
      leaflet: "L",
    },
    module: {
      rules: [
        // copy files to destination folder who have these extensions
        { test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
          use: [{
              loader: 'file-loader',
              options: {
                name: "css/[name].[ext]"}}]},
        // copy from https://github.com/webpack-contrib/mini-css-extract-plugin/tree/e307e251a476e24f3d1827e74e0434de52ce6ea3
        { test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader" ]}
      ]
    },
    plugins: [
      // copy from https://github.com/webpack-contrib/mini-css-extract-plugin/tree/e307e251a476e24f3d1827e74e0434de52ce6ea3
      new MiniCssExtractPlugin({
        filename: filename + ".css"
      })
    ],
    output: {
      // save to this javascript file
      filename: filename + ".js",
      // save all files in this folder
      path: build_path + "/" + foldername
    }
  }
  // if saving the module to something...
  if (typeof library != 'undefined') {
    // save the library as a variable
    // https://webpack.js.org/configuration/output/#output-library
    ret.output.library = library;
    // do not use 'var' in the assignment
    // https://webpack.js.org/configuration/output/#output-librarytarget
    ret.output.libraryTarget = "assign";
  }
  return ret;
}
let add_externals = function(config, externals) {
  config.externals = Object.assign(config.externals, externals);
  return config;
}
let add_attachments = function(config, attachments, output_folder) {
  config.plugins = config.plugins.concat([
    new CopyWebpackPlugin(
      [{
        from: attachments,
        to: build_path + "/" + output_folder,
        flatten: true
      }]
    )
  ]);
  return config;
}

let library_binding = function(name) {
  let filename = binding_path + name + "-bindings.js";
  return {
    mode: "production", // minify everything
    devtool: "source-map", // include external map file
    entry: binding_path + name + "-bindings.js",
    module: {
      rules: [
        // lint the bindings using ./inst/htmlwidgets/bindings/.eslintrc.js
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        },
      ]
    },
    // save bindings to build bindings folder
    output: {
      filename: name + "-bindings.js", // save file in path on next line
      path: build_path + "/" + name // save all files in this path
    }
  }
}


const config = [
  // "fuse.js": "3.2.0",
  // "leaflet-search": "2.3.7",
  library_prod("fuse.js", "fuse_js", "Fuse"),
  library_prod(
    ["leaflet-search", "leaflet-search/dist/leaflet-search.min.css"],
    "lfx-search"
  ),
  library_binding("lfx-search"),
];

module.exports = config
