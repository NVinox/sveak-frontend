import { src, dest } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import GulpCleanCss from "gulp-clean-css";
import rename from "gulp-rename";

import { paths } from "../paths/index.mjs";
import { bs } from "./browserSync.mjs";

const scssGulp = gulpSass(dartSass);

function scss() {
  return src(paths.scss.src, { sourcemaps: true })
    .pipe(scssGulp({ outputStyle: "expanded" }).on("error", scssGulp.logError))
    .pipe(
      autoPrefixer({
        overrideBrowserslist: ["last 10 versions"],
        grid: true,
      }),
    )
    .pipe(dest(paths.scss.dest))
    .pipe(GulpCleanCss())
    .pipe(rename({ suffix: ".min", basename: "index" }))
    .pipe(dest(paths.scss.dest, { sourcemaps: "." }))
    .pipe(bs.stream());
}

export { scss };
