import { src, dest } from "gulp";
import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";

import { paths } from "../paths/index.mjs";
import { bs } from "./browserSync.mjs";

const version = Date.now();

function html() {
  return src([paths.html.src])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        context: {
          rev: version,
        },
      }),
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(dest(paths.html.dest))
    .pipe(bs.stream());
}

export { html };
