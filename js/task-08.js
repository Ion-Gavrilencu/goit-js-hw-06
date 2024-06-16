document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (email === '' || password === '') {
      alert('Toate câmpurile trebuie completate.');
      return;
    }

    const formData = {
      email,
      password,
    };

    console.log(formData);
    form.reset();
  });
});

