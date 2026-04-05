export class Aside {
  _lg = 1025;

  _activeClass = "active";
  _burgerButton = document.getElementById("burgerButton");
  _aside = document.getElementById("aside");
  _overlay = document.getElementById("overlay");

  init() {
    if (this._burgerButton && this._aside && this._overlay) {
      this._attachClickEvent();
      this._attachMediaQueries();
    }
  }

  _isAsideActive() {
    return this._aside.classList.contains(this._activeClass);
  }

  _attachMediaQueries() {
    const query = window.matchMedia(`(min-width: ${this._lg}px)`);

    query.addEventListener("change", this._changeQueryScreen.bind(this));
  }

  _attachClickEvent() {
    this._burgerButton.addEventListener(
      "click",
      this._clickBurgerButton.bind(this),
    );
    this._overlay.addEventListener("click", this._clickOverlay.bind(this));
  }

  _changeQueryScreen(e) {
    if (e.target.matches) {
      document.body.style.overflow = "auto";
    } else {
      if (this._isAsideActive()) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }

  _clickBurgerButton() {
    this._aside.classList.toggle(this._activeClass);

    if (this._isAsideActive()) {
      this._burgerButton.classList.add(this._activeClass);
      this._overlay.classList.add(this._activeClass);
      document.body.style.overflow = "hidden";
    } else {
      this._burgerButton.classList.remove(this._activeClass);
      this._overlay.classList.remove(this._activeClass);
      document.body.style.overflow = "auto";
    }
  }

  _clickOverlay() {
    this._burgerButton.classList.remove(this._activeClass);
    this._overlay.classList.remove(this._activeClass);
    this._aside.classList.remove(this._activeClass);
    document.body.style.overflow = "auto";
  }
}
