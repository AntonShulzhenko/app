function signup() {
  render('signup');

  let form = document.getElementById('signup-form');
  let {email, password, passwordConfirm} = form;

  form.addEventListener('submit', submitHandler);

  // 1. Нет обработки серверных ошибок
  // 2. Нет обработки случая, когда пользователь успешно создан
  // 3. Нет информативности в ошибках при клиентской валидации

  function submitHandler(event) {
    let emailValue = email.value;
    let passwordValue = password.value;
    let passwordConfirmValue = passwordConfirm.value;

    if((emailValue.indexOf('@') === -1) || (emailValue.indexOf('.') === -1) || passwordValue.length < 6 || (passwordConfirmValue !== passwordValue)) {
      alert('Error');
    } else {
      firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .catch(function(error) {
          alert(error.message);
        });
    }

    event.preventDefault();
  }
}
