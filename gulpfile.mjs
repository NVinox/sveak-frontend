import { parallel, series, watch } from "gulp";

import { js } from "./gulp/tasks/js.mjs";
import { json } from "./gulp/tasks/json.mjs";
import { html } from "./gulp/tasks/html.mjs";
import { scss } from "./gulp/tasks/scss.mjs";
import { fonts } from "./gulp/tasks/fonts.mjs";
import { publicImg } from "./gulp/tasks/public.mjs";
import { manifest } from "./gulp/tasks/manifest.mjs";
import { createWebp, optimizeImages } from "./gulp/tasks/assets.mjs";
import { clean } from "./gulp/tasks/clean.mjs";
import { bs } from "./gulp/tasks/browserSync.mjs";
import { BUILD_DIR, paths } from "./gulp/paths/index.mjs";

function watching() {
  bs.init({ server: { baseDir: BUILD_DIR + "/" } });
  watch([paths.html.watch], html);
  watch([paths.scss.watch], scss);
  watch([paths.js.watch], js);
  watch([paths.json.watch], json);
  watch([paths.assets.watch], createWebp);
  watch([paths.assets.watch], optimizeImages);
  watch([paths.public.watch], publicImg);
  watch([paths.manifest.watch], manifest);
  watch([paths.fonts.watch], fonts);
}

const build = series(
  clean,
  parallel(
    html,
    scss,
    js,
    json,
    createWebp,
    optimizeImages,
    publicImg,
    manifest,
    fonts,
  ),
);

export { build };
export default series(
  clean,
  parallel(
    html,
    scss,
    js,
    json,
    createWebp,
    optimizeImages,
    publicImg,
    manifest,
    fonts,
  ),
  watching,
);
