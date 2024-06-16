const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Selectăm lista <ul> cu clasa "gallery" din HTML
const galleryList = document.querySelector('ul.gallery');

// Creăm marcajele HTML pentru fiecare imagine folosind template strings și inserăm într-o singură operație
const galleryMarkup = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>
`).join('');

// Adăugăm toate elementele în lista <ul> folosind insertAdjacentHTML()
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
