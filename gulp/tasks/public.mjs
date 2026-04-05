import { src, dest } from "gulp";

import { paths } from "../paths/index.mjs";
import { bs } from "./browserSync.mjs";

function publicImg() {
  return src(paths.public.src, { encoding: false })
    .pipe(dest(paths.public.dest))
    .pipe(bs.stream());
}

export { publicImg };
