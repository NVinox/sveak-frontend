import { src, dest } from "gulp";
import webpackStream from "webpack-stream";
import TerserPlugin from "terser-webpack-plugin";

import { paths } from "../paths/index.mjs";
import { bs } from "./browserSync.mjs";

function js() {
  return src(paths.js.src)
    .pipe(
      webpackStream({
        mode: "production",
        optimization: {
          minimize: true,
          minimizer: [new TerserPlugin()],
        },
        output: {
          filename: "index.min.js",
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              type: "javascript/auto",
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
              },
            },
          ],
        },
      }),
    )
    .pipe(dest(paths.js.dest))
    .pipe(bs.stream());
}

export { js };
