// Selectăm elementul ul#categories din HTML
const categoriesList = document.querySelector('#categories');

// Numărăm elementele li.item pentru a obține numărul total de categorii
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItems.length}\n`);

// Iterăm prin fiecare element li.item pentru a obține detaliile
categoryItems.forEach(categoryItem => {
  // Afișăm titlul categoriei (elementul h2)
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  // Afișăm numărul de elemente din categoria respectivă (elementele li din sub-listă)
  const categoryElements = categoryItem.querySelectorAll('ul > li');
  console.log(`Elements: ${categoryElements.length}\n`);
});
