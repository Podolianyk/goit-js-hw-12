//! напиши всю логіку роботи додатка

import axios from 'axios';
import iziToast from 'izitoast'; // Описаний у документації
import 'izitoast/dist/css/iziToast.min.css'; // Додатковий імпорт стилів

import SimpleLightbox from 'simplelightbox'; // Описаний у документації
import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів

import { getImages } from './js/pixabay-api';
import { renderGallery } from './js/render-function';

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export const refs = {
  formEl: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loaderEl: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.loadMore'),
};

let query;
let currentPage = 1;
let maxPage = 0;
const perPage = 15;

refs.formEl.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

deleteLoader();
hideLoadMore();

async function onFormSubmit(e) {
  e.preventDefault();
  createLoader();

  query = e.target.elements.request.value.trim();
  refs.gallery.innerHTML = '';
  currentPage = 1;

  if (!query) {
    deleteLoader();
    iziToast.error({
      message: 'Please enter a request',
      position: 'topRight',
    });
    return;
  }

  try {
    createLoader();
    const data = await getImages(query, currentPage);
    console.log(data);
    if (data.hits.length === 0) {
      deleteLoader();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    maxPage = Math.ceil(data.totalHits / perPage);
    renderGallery(data.hits);
  } catch (err) {
    console.log(err);
  }

  deleteLoader();
  checkBtnStatus();
  refs.formEl.reset();
}

async function onLoadMoreClick() {
  currentPage += 1;
  createLoader();
  try {
    const data = await getImages(query, currentPage);
    renderGallery(data.hits);
  } catch (err) {
    console.log(err);
  }

  myScroll();
  checkBtnStatus();
  deleteLoader();
}

function showLoadMore() {
  refs.btnLoadMore.classList.remove('is-hidden');
}
function hideLoadMore() {
  refs.btnLoadMore.classList.add('is-hidden');
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
  } else {
    showLoadMore();
  }
}

function deleteLoader() {
  refs.loaderEl.classList.add('is-hidden');
}

function createLoader() {
  refs.loaderEl.classList.remove('is-hidden');
}

function myScroll() {
  const height = refs.gallery.firstChild.getBoundingClientRect().height;

  scrollBy({
    top: height,
    behavior: 'smooth',
  });
}
