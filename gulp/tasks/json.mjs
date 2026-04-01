import { src, dest } from "gulp";

import { paths } from "../paths/index.mjs";
import { bs } from "./browserSync.mjs";

function json() {
  return src(paths.json.src).pipe(dest(paths.json.dest)).pipe(bs.stream());
}

export { json };
