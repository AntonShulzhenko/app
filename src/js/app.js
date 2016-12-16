(() => {
  //=require 'routs/*.js'

  // Firebase Initialization
  const firebaseConfig = {
    apiKey: 'AIzaSyDDhvBn7pjXjh0I8o5SuKOhN4s7I_p0wZ8',
    authDomain: 'insta-294e1.firebaseapp.com',
    databaseURL: 'https://insta-294e1.firebaseio.com',
    storageBucket: 'insta-294e1.appspot.com',
    messagingSenderId: '230889605114'
  };
  firebase.initializeApp(firebaseConfig);

  const rootElement = document.getElementById('root');

  page('/', main);
  page('/login', login);
  page('/signup', signup);
  page();

  function render(tplName, ctx = {}) {
    rootElement.innerHTML = templates[tplName](ctx);
  }
})();
