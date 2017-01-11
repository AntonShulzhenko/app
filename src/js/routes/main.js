function main(ctx) {
  render('main', ctx);

  if (!ctx.user) {
    return;
  }

  const feed = qs('#feed');
  const dbRef = firebase.database().ref();
  const storage = firebase.storage();

  dbRef
    .child('posts')
    .limitToLast(10)
    .once('value', snapshot => {
      const entries = snapshot.val();
      console.log(entries);
      sortBy(entries, 'created').forEach(entrie => {
        const post = new Post(entrie, { currentUser: ctx.user });
        feed.insertBefore(post.element, feed.firstElementChild);
        new Animate(feed, {
          elements: '.post',
          showDelay: 100,
          elementsDelay: 300,
          elementsTransitionDuration: 300
        });
      });
    });
}
