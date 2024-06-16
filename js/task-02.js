// Matricea cu ingrediente
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Selectăm lista goală <ul> din HTML
const ingredientsList = document.querySelector('#ingredients');

// Creăm elementele <li> pentru fiecare ingredient din matrice
const listItems = ingredients.map(ingredient => {
  // Creăm un element <li>
  const listItem = document.createElement('li');
  // Adăugăm textul ingredientului în interiorul elementului <li>
  listItem.textContent = ingredient;
  // Adăugăm clasa "item" la elementul <li>
  listItem.classList.add('item');
  return listItem;
});

// Inserăm toate elementele <li> în lista <ul> într-o singură operație
ingredientsList.append(...listItems);
