function logout(ctx, next) {
  firebase.auth().signOut().then(() => page.redirect('/'));
}
