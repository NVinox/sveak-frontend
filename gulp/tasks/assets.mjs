import { src, dest } from "gulp";
import gulpWebp from "gulp-webp";
import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminOptipng from "imagemin-optipng";

import { paths } from "../paths/index.mjs";
import { bs } from "./browserSync.mjs";

function createWebp() {
  return src(paths.assets.src, { encoding: false })
    .pipe(gulpWebp({ quality: 70 }))
    .pipe(dest(paths.assets.dest))
    .pipe(bs.stream());
}

function optimizeImages() {
  return src(paths.assets.src, { encoding: false })
    .pipe(
      imagemin([
        imageminMozjpeg({ quality: 75, progressive: true }),
        imageminOptipng({ optimizationLevel: 5 }),
      ]),
    )
    .pipe(dest(paths.assets.dest))
    .pipe(bs.stream());
}

// function assets() {
//   return src([paths.assets.src], { encoding: false })
//     .pipe(gulpWebp({ quality: 70 }))
//     .pipe(dest(paths.assets.dest))
//     .pipe(src(paths.assets.src), { encoding: false })
//     .pipe(
//       imagemin([
//         imageminMozjpeg({ quality: 75, progressive: true }),
//         imageminOptipng({ optimizationLevel: 5 }),
//       ]),
//     )
//     .pipe(dest(paths.assets.dest))
//     .pipe(bs.stream());
// }

export { createWebp, optimizeImages };
