import { galleryItems } from './gallery-items.js';
// Change code below this line
// підключаємо бібліотеки
const basicLightboxJs = document.querySelector("body")
const before = basicLightboxJs.querySelector("script")
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';
script.type = 'module'

basicLightboxJs.insertBefore(script, before);


const basicLightboxCss = document.querySelector("title");
basicLightboxCss.insertAdjacentHTML('afterend', `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"></link>`);


// 
const gallery = document.querySelector(".gallery");


const markup = galleryItems.map((el) => 
	`<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`
).join("");
 
gallery.insertAdjacentHTML('beforeend', markup);

// Реализация делегирования на div.gallery и получение url большого изображения.
gallery.addEventListener("click", preventDef);

function preventDef(event) {
	event.preventDefault();
	  if (event.target.nodeName !== "IMG") {
    return;
	};

	const selectedImage = event.target.dataset.source;

	const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${selectedImage}">
	`);
	instance.show();
console.log(selectedImage);
};

