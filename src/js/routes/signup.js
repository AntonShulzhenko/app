function signup(ctx, next) {
  if (ctx.user) {
    return page.redirect('/profile');
  }

  render('signup');

  const signupForm      = document.forms['signup-form'];
  const errorsContainer = qs('#errors', signupForm);
  const submitBtn       = qs('.btn', signupForm);
  const auth            = firebase.auth();

  function renderErrors(errors = []) {
    return [].concat(errors).map(err => {
      return `
        <li class="list-group-item list-group-item-danger">
          <span>${err}</span>
        </li>
      `;
    }).join('');
  }

  function showErrors(errors = []) {
    errorsContainer.innerHTML = renderErrors(errors);
    errorsContainer.hidden = false;
  }

  function hideErrors() {
    errorsContainer.hidden = true;
    errorsContainer.innerHTML = '';
  }

  function setLoadingState() {
    signupForm.classList.add('is-loading');
    submitBtn.setAttribute('disabled', 'disabled');
  }

  function unsetLoadingState() {
    signupForm.classList.remove('is-loading');
    submitBtn.removeAttribute('disabled');
  }

  function onUserCreated(user) {
    // const usersRef = firebase.database().ref(`users/${user.uid}`);
    // const userData = pick(user, ['uid', 'email', 'displayName', 'photoURL']);
    // usersRef.set(userData)
    //   .then(() => {
    //     user.sendEmailVerification();
    //     page('/profile');
    //   });
    console.log('Success');
    return page.redirect('/temp');
  }

  function onUserCreationError(error) {
    unsetLoadingState();
    showErrors(error.message);
  }

  function handler(e) {
    const form = e.target;
    const { email, password, password_confirm } = form.elements;
    const errors = [];

    if (email.value.indexOf('@') === -1) {
      errors.push('Email is invalid');
    }

    if (!password.value.length) {
      errors.push('Please enter password');
    } else if (password.value !== password_confirm.value) {
      errors.push('Password is incorrect');
    }

    e.preventDefault();

    if (errors.length) {
      return showErrors(errors);
    }

    hideErrors();
    setLoadingState();

    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(onUserCreated)
      .catch(onUserCreationError);

  }

  signupForm.addEventListener('submit', handler);
}
