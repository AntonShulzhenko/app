'use strict';
(() => {
  // Firebase Initialization
  const firebaseConfig = {
    apiKey: 'AIzaSyDDhvBn7pjXjh0I8o5SuKOhN4s7I_p0wZ8',
    authDomain: 'insta-294e1.firebaseapp.com',
    databaseURL: 'https://insta-294e1.firebaseio.com',
    storageBucket: 'insta-294e1.appspot.com',
    messagingSenderId: '230889605114'
  };

  firebase.initializeApp(firebaseConfig);

  //=require 'lib/*.js'
  //=require 'classes/*.js'
  //=require 'middlewares/*.js'
  //=require 'routes/*.js'

  const { location, history, templates } = window;
  const rootElement = qs('#root');

  function render(tplName, data = {}) {
    const user = firebase.auth().currentUser;
    const userData = user ? user.toJSON() : null;
    data = Object.assign(data, { user: userData });
    rootElement.innerHTML = templates[tplName](data);
  }

  function render404() {
    render('404');
  }

  page('*', auth);
  page('/', main);
  page('/login', login);
  page('/logout', logout);
  page('/signup', signup);
  page('/profile', profile);
  page('*', render404);

  render('preloader');

  // simulate firebase 'onready' behavior
  const unsubsribe = firebase.auth().onAuthStateChanged(() => {
    page();
    unsubsribe();
  });
})();
