function login(ctx, next) {
  render('login');

  const loginForm = document.forms['login-form'];
  const field     = qs('#login-form .form-group');

  window.field = new FormField(field, {
    validate: [
      'maxLength[10]',
      'required',
      'email',
      'minLength[2]',
      'unknown',
      'blabla'
    ]
  });

  console.dir(FormField);
}
