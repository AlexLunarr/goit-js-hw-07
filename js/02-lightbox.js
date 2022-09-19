import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// підключаємо бібліотеки JS
const basicLightboxJs = document.querySelector("body")
const before = basicLightboxJs.querySelector("script")
const script = document.createElement('script');

script.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.min.js';
script.type = 'module';
script.integrity = "sha512-XGiM73niqHXRwBELBEktUKuGXC9yHyaxEsVWvUiCph8yxkaNkGeXJnqs5Ls1RSp4Q+PITMcCy2Dw7HxkzBWQCw==";
script.crossorigin = "anonymous";
script.referrerpolicy = "no-referrer";

basicLightboxJs.insertBefore(script, before);
// підключаємо бібліотеки CSS

const basicLightboxCss = document.querySelector("title");
basicLightboxCss.insertAdjacentHTML('afterend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.min.css"
    integrity="sha512-Ne9/ZPNVK3w3pBBX6xE86bNG295dJl4CHttrCp3WmxO+8NQ2Vn8FltNr6UsysA1vm7NE6hfCszbXe3D6FUNFsA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />`);




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
	event.preventDefault(event);
	if (event.target.nodeName !== "IMG") {
		return;
	};

	if (!document.querySelector(".simple-lightbox")) {
		new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, animationSpeed: 250, });
	};
}
