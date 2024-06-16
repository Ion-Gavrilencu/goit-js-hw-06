// Selectați elementul input din DOM
const validationInput = document.getElementById('validation-input');

// Adăugați un eveniment blur pe elementul input
validationInput.addEventListener('blur', () => {
  // Obțineți lungimea necesară din atributul data-length
  const requiredLength = parseInt(validationInput.getAttribute('data-length'), 10);

  // Verificați lungimea textului introdus
  if (validationInput.value.length === requiredLength) {
    // Adăugați clasa valid și eliminați clasa invalid
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    // Adăugați clasa invalid și eliminați clasa valid
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
