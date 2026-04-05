import { Aside } from "./aside";
import { Games } from "./games";

document.addEventListener("DOMContentLoaded", () => {
  const aside = new Aside();
  const games = new Games();

  aside.init();
  games.init();
});
