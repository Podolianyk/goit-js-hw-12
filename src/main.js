//! напиши всю логіку роботи додатка

import iziToast from 'izitoast'; // Описаний у документації
import 'izitoast/dist/css/iziToast.min.css'; // Додатковий імпорт стилів

import SimpleLightbox from 'simplelightbox'; // Описаний у документації
import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів

import { getImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-function';

const formEl = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

function deleteLoader() {
  loaderEl.classList.add('is-hidden');
}

function createLoader() {
  loaderEl.classList.remove('is-hidden');
}

deleteLoader();
formEl.addEventListener('submit', e => {
  e.preventDefault();
  createLoader();
  gallery.innerHTML = '';
  const query = e.target.elements.request.value.trim();

  if (!query) {
    deleteLoader();
    iziToast.error({
      message: 'Please enter a request',
      position: 'topRight',
    });
    return;
  }

  getImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        deleteLoader();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      const markup = imagesTemplate(data.hits);
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      deleteLoader();
    })
    .catch(err => {
      console.log(err);
      deleteLoader();
    });
  formEl.reset();
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
