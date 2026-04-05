import { src, dest } from "gulp";

import { paths } from "../paths/index.mjs";
import { bs } from "./browserSync.mjs";

function manifest() {
  return src(paths.manifest.src, { encoding: false })
    .pipe(dest(paths.manifest.dest))
    .pipe(bs.stream());
}

export { manifest };
