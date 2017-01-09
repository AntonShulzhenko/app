class Color {
  constructor(el, props) {
    this.el    = isDomElement(el) ? el : qs(el);
    this.props = Object.assign({}, Color.defaults, props);

    this.setBackground(this.el);
  }

  _init(el) {
    el.style.transition = `background ${this.props.transitionDuration}ms ${this.props.transitionTimingFunction}`;
  }

  _generateNumber() {
    let number = Math.floor(Math.random() * (256 - 0) + 0);
    return number;
  }

  _generateColor() {
    let r, g, b, alpha, color;
    alpha = (this.props.alphaChanell).toFixed(1);
    r = this._generateNumber();
    g = this._generateNumber();
    b = this._generateNumber();
    return color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  setBackground(el) {
    this._init(el);
    setInterval(() => {
      el.style.background = this._generateColor();
    }, this.props.transitionDuration + this.props.changeInterval);
  }
}

Color.defaults = {
  transitionDuration: 1000,
  transitionTimingFunction: 'ease-in-out',
  changeInterval: 2000,
  alphaChanell: 0.1
};
