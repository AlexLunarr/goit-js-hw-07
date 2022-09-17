import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// підключаємо бібліотеки JS
const basicLightboxJs = document.querySelector("body")
const before = basicLightboxJs.querySelector("script")
const script = document.createElement('script');

script.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.min.js';
script.type = 'module'

basicLightboxJs.insertBefore(script, before);
// підключаємо бібліотеки CSS

const basicLightboxCss = document.querySelector("title");
basicLightboxCss.insertAdjacentHTML('afterend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.css"></link>`);




// виконуємо розмітку
const gallery = document.querySelector(".gallery");


const markup = galleryItems.map((el) => 
	`<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
).join("");
 
gallery.insertAdjacentHTML('beforeend', markup);

// делегування div.gallery отримання url вел. зображення.
gallery.addEventListener("click", preventDef);

function preventDef(event) {
	event.preventDefault();
	  if (event.target.nodeName !== "IMG") {
    return;
	};
	


	var lightbox = new SimpleLightbox('.gallery .gallery__item', { captionsData: 'alt', captionDelay: 250, animationSpeed: 250, });
console.log(lightbox);
};
