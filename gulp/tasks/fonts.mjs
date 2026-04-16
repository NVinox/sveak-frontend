import { src, dest } from "gulp";

import { paths } from "../paths/index.mjs";
import { bs } from "./browserSync.mjs";

function fonts() {
  return src(paths.fonts.src, { encoding: false })
    .pipe(dest(paths.fonts.dest))
    .pipe(bs.stream());
}

export { fonts };
