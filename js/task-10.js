function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount > 0) {
      createBoxes(amount);
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes(); // Optional: Clears the previous boxes before creating new ones
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.margin = '5px'; // Optional: adds some space between divs
      elements.push(div);
      size += 10;
    }

    boxesContainer.append(...elements);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
});
