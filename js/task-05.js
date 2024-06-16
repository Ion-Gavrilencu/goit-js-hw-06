// Selectați elementele input și span din DOM
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Adăugați un eveniment input pe elementul input
nameInput.addEventListener('input', () => {
  // Actualizați textul din span cu valoarea curentă din input
  // Dacă input-ul este gol, afișați "Anonymous"
  nameOutput.textContent = nameInput.value.trim() === '' ? 'Anonymous' : nameInput.value;
});
