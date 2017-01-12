const unlockedPaths = [
  '/',
  '/login',
  '/signup'
];

function auth(ctx, next) {
  const user = firebase.auth().currentUser;
  rootElement.classList.remove('fade-in');
  rootElement.classList.add('fade-out');

  // render('preloader');

  if (user) {
    firebase
      .database()
      .ref(`users/${user.uid}`)
      .once('value')
      .then(snapshot => {
        ctx.user = ctx.profile = snapshot.val();
        setTimeout(function() {
          rootElement.classList.remove('fade-out');
          setTimeout(function() {
            rootElement.classList.add('fade-in');
          }, 100);
          next();
        }, 300);
      })
      .catch(err => console.log(err));
  } else if (!unlockedPaths.includes(ctx.pathname)) {
    return page.redirect('/login');
  } else {
    setTimeout(function() {
      rootElement.classList.remove('fade-out');
      setTimeout(function() {
        rootElement.classList.add('fade-in');
      }, 100);
      next();
    }, 300);
  }
}
