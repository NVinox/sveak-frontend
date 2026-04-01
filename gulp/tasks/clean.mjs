import { deleteAsync } from "del";
import { BUILD_DIR } from "../paths/index.mjs";

function clean() {
  return deleteAsync([BUILD_DIR]);
}

export { clean };
