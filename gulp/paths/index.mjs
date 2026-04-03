const BUILD_DIR = "./build";
const SOURCE_DIR = "./src";

const paths = {
  html: {
    src: SOURCE_DIR + "/*.html",
    watch: SOURCE_DIR + "/**/*.html",
    dest: BUILD_DIR,
  },
  scss: {
    src: [
      SOURCE_DIR + "/scss/index.scss",
      SOURCE_DIR + "/components/**/*.scss",
    ],
    watch: SOURCE_DIR + "/**/*.scss",
    dest: BUILD_DIR + "/css",
  },
  js: {
    src: [SOURCE_DIR + "/js/index.js", SOURCE_DIR + "/components/**/*.js"],
    watch: SOURCE_DIR + "/**/*.js",
    dest: BUILD_DIR + "/js",
  },
  assets: {
    src: SOURCE_DIR + "/assets/**/*.*",
    watch: SOURCE_DIR + "/assets/**/*.*",
    dest: BUILD_DIR + "/assets/",
  },
  json: {
    src: SOURCE_DIR + "/data/**/*.json",
    watch: SOURCE_DIR + "/data/**/*.json",
    dest: BUILD_DIR + "/data/",
  },
};

export { paths, BUILD_DIR, SOURCE_DIR };
