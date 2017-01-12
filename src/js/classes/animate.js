class Animate {
  constructor(el, props) {
    this.el       = isDomElement(el) ? el : qs(el);
    this.props    = Object.assign({}, Animate.defaults, props);
    this.elements = qsa(this.props.elements, this.el).concat(qsa(this.props.additionalElements, this.el));

    this.checkElem();
    this.render();
    console.log(this.elements);
  }

  checkElem() {
    if(!this.el) return;
  }

  _hide() {
    this.el.style.opacity = 0;
    this.el.style.transition = `opacity ${this.props.elTransitionDuration}ms ease-in-out`;
    this.elements.forEach((el) => {
      el.style.opacity = 0;
      el.style.transition
        = `all ${this.props.elementsTransitionDuration}ms ${this.props.elTimingFunction}`;
      el.style.transform
        = `${this.props.elementsTransformType}(${this.props.elementsTransformStartValue})`;
    });
  }

  _show() {
    this.el.style.opacity = 1;
    this.elements.forEach((elem, i) => {
      setTimeout(() => {
        elem.style.opacity = 1;
        elem.style.transform
          = `${this.props.elementsTransformType}(${this.props.elementsTransformEndValue})`;
      }, this.props.elementsDelay * (i + 1));
    });
  }

  render() {
    this._hide();

    setTimeout(() => {
      this._show();
    }, this.props.showDelay);
  }
}

Animate.defaults = {
  elements: '.form-group',
  additionalElements: ['.form-submit'],
  elementsDelay: 100,
  elementsTransitionDuration: 200,
  elementsTimingFunction: 'ease-in-out',
  elementsTransformType: 'translateY',
  elementsTransformStartValue: '-10px',
  elementsTransformEndValue: '0',
  elTransitionDuration: 200,
  elTimingFunction: 'ease-in-out',
  showDelay: 350
};
