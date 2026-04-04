export class Aside {
  _activeClass = "active";
  _burgerButton = document.getElementById("burgerButton");
  _aside = document.getElementById("aside");
  _overlay = document.getElementById("overlay");

  init() {
    if (this._burgerButton && this._aside && this._overlay) {
      this._addClickEvent();
    }
  }

  _isAsideActive() {
    return this._aside.classList.contains(this._activeClass);
  }

  _addClickEvent() {
    this._burgerButton.addEventListener(
      "click",
      this._clickBurgerButton.bind(this),
    );
    this._overlay.addEventListener("click", this._clickOverlay.bind(this));
  }

  _clickBurgerButton() {
    this._aside.classList.toggle(this._activeClass);

    if (this._isAsideActive()) {
      this._burgerButton.classList.add(this._activeClass);
      this._overlay.classList.add(this._activeClass);
    } else {
      this._burgerButton.classList.remove(this._activeClass);
      this._overlay.classList.remove(this._activeClass);
    }
  }

  _clickOverlay() {
    this._burgerButton.classList.remove(this._activeClass);
    this._overlay.classList.remove(this._activeClass);
    this._aside.classList.remove(this._activeClass);
  }
}
