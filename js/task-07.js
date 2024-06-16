// Selectați elementele input și span din DOM
const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

// Adăugați un eveniment input pe elementul input
fontSizeControl.addEventListener('input', () => {
  // Actualizați stilul font-size al elementului span în funcție de valoarea curentă a inputului
  text.style.fontSize = `${fontSizeControl.value}px`;
});
