const unlockedPaths = [
  '/',
  '/login',
  '/signup'
];

function auth(ctx, next) {
  const user = firebase.auth().currentUser;
  rootElement.classList.remove('fade-in');
  rootElement.classList.add('fade-out');
  if (user) {
    ctx.user = user.toJSON();
    setTimeout(function() {
      rootElement.classList.remove('fade-out');
      setTimeout(function() {
        rootElement.classList.add('fade-in');
      }, 100);
      next();
    }, 300);
    return;
  } else if (!unlockedPaths.includes(ctx.pathname)) {
    page.redirect('/login');
  }
  setTimeout(function() {
    rootElement.classList.remove('fade-out');
    setTimeout(function() {
      rootElement.classList.add('fade-in');
    }, 100);
    next();
  }, 300);
}
