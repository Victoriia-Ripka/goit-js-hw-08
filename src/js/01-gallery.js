import { galleryItems } from './gallery-items';
import SimpleLightbox from "simpleLightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryDiv = document.querySelector('.gallery');
const galleryList = createCardsMarkUp(galleryItems);
galleryDiv.insertAdjacentHTML('beforeend', galleryList);

function createCardsMarkUp(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`}).join('');
}

new SimpleLightbox ('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: "bottom",
});