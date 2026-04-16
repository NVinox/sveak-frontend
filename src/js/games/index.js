export class Games {
  _xs = 480;
  _lg = 1025;
  _xl = 1230;

  _gamesCounts = {};

  _gamesList = document.getElementById("games");

  init() {
    if (this._gamesList) {
      this._setGamesStates();
      this._attachMediaQueries();
      this._updateLayout();
    }
  }

  _setGamesStates() {
    this._gamesCounts[0] = 2;
    this._gamesCounts[this._xs] = 3;
    this._gamesCounts[this._lg] = 4;
    this._gamesCounts[this._xl] = 5;
  }

  _attachMediaQueries() {
    const breakpoints = [this._md, this._lg, this._xl];

    breakpoints.forEach((size) => {
      const query = window.matchMedia(`(min-width: ${size}px)`);

      query.addEventListener("change", () => this._updateLayout());
    });
  }

  _updateLayout() {
    const width = window.innerWidth;
    let columns = this._gamesCounts[0];

    if (width >= this._xl) columns = this._gamesCounts[this._xl];
    else if (width >= this._lg) columns = this._gamesCounts[this._lg];
    else if (width >= this._xs) columns = this._gamesCounts[this._xs];

    const articles = this._gamesList.querySelectorAll("article");

    articles.forEach((article) => (article.style.display = "block"));

    const remainder = articles.length % columns;

    if (remainder) {
      for (let i = 0; i < remainder; i++) {
        articles[articles.length - 1 - i].style.display = "none";
      }
    }
  }
}
