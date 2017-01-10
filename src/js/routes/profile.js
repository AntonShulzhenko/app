function profile(ctx, next) {
  render('profile-show', ctx);

  new Animate('.profile', {
    additionalElements: ['.profile__pic', '.profile__name', 'a.btn'],
    showDelay: 100
  });
}
