// Declarați variabila counterValue și setați valoarea inițială la 0
let counterValue = 0;

// Selectați butoanele și elementul <span> din DOM
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById('value');

// Funcția pentru actualizarea valorii afișate a contorului
function updateCounterDisplay() {
  valueSpan.textContent = counterValue;
}

// Adăugați handler pentru evenimentul click pe butonul de decrementare
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterDisplay();
});

// Adăugați handler pentru evenimentul click pe butonul de incrementare
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounterDisplay();
});
