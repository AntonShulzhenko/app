function profile(ctx, next) {
  render('profile-show', ctx);

  new Animate('.profile', {
    additionalElements: ['.profile__pic', '.profile__name', 'a.btn'],
    showDelay: 100,
    elementsTransformType: 'scale',
    elementsTransformStartValue: '0.5',
    elementsTransformEndValue: '1',
    elementsTransitionDuration: 700,
    elementsDelay: 250
  });
}
