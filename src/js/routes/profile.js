function profile(ctx) {
  render('profile-show', {
    profile: ctx.user
  });

  new Animate('.profile', {
    additionalElements: ['.profile__pic', '.profile__name', 'a.btn']
  });
}
