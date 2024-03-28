import{i as a,S as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(o){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"43032032-8eb24f10be4f06f56a6a96441",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${r}?${i}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function g({webformatURL:o,largeImageURL:r,tags:i,likes:s,views:e,comments:t,downloads:l}){return`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${r}" alt="${i}" />
      </a>
        <div class="image-info">
    <ul class="infoBlock">
    <li class="title">Likes</li>
    <li class="info">${s}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Views</li>
    <li class="info">${e}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Comments</li>
    <li class="info">${t}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Downloads</li>
    <li class="info">${l}</li>
    </ul>
    </div>
  </li>`}function p(o){return o.map(g).join("")}//! напиши всю логіку роботи додатка
const c=document.querySelector(".form"),u=document.querySelector(".gallery"),f=document.querySelector(".loader");function n(){f.classList.add("is-hidden")}function h(){f.classList.remove("is-hidden")}n();c.addEventListener("submit",o=>{o.preventDefault(),h(),u.innerHTML="";const r=o.target.elements.request.value.trim();if(!r){n(),a.error({message:"Please enter a request",position:"topRight"});return}d(r).then(i=>{if(i.hits.length===0){n(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=p(i.hits);u.insertAdjacentHTML("beforeend",s),y.refresh(),n()}).catch(i=>{console.log(i),n()}),c.reset()});const y=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
