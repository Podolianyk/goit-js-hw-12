import{a as L,S as b,i as m}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function g(t,o){const s="https://pixabay.com/api/",l=new URLSearchParams({key:"43032032-8eb24f10be4f06f56a6a96441",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),e=`${s}?${l}`;return(await L.get(e,{params:l})).data}function S({webformatURL:t,largeImageURL:o,tags:s,likes:l,views:e,comments:r,downloads:a}){return`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
        <img loading="lazy" class="gallery-image" src="${o}" alt="${s}" />
      </a>
        <div class="image-info">
    <ul class="infoBlock">
    <li class="title">Likes</li>
    <li class="info">${l}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Views</li>
    <li class="info">${e}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Comments</li>
    <li class="info">${r}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Downloads</li>
    <li class="info">${a}</li>
    </ul>
    </div>
  </li>`}function M(t){return t.map(S).join("")}function h(t){const o=M(t);i.gallery.insertAdjacentHTML("beforeend",o),v.refresh()}const v=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),i={formEl:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadMore")};let u,c=1,y=0;const P=15;i.formEl.addEventListener("submit",q);i.btnLoadMore.addEventListener("click",E);n();f();async function q(t){if(t.preventDefault(),d(),u=t.target.elements.request.value.trim(),i.gallery.innerHTML="",c=1,!u){n(),f(),m.error({message:"Please enter a request",position:"topRight"});return}try{d();const o=await g(u,c);if(console.log(o),o.hits.length===0){n(),m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y=Math.ceil(o.totalHits/P),h(o.hits)}catch(o){console.log(o)}n(),p(),i.formEl.reset()}async function E(){c+=1,d();try{const t=await g(u,c);h(t.hits)}catch(t){console.log(t)}$(),p(),n()}function w(){i.btnLoadMore.classList.remove("is-hidden")}function f(){i.btnLoadMore.classList.add("is-hidden")}function p(){c>=y?f():w()}function n(){i.loaderEl.classList.add("is-hidden")}function d(){i.loaderEl.classList.remove("is-hidden")}function $(){const t=i.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
