import{i as l}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="https://sound-wave.b.goit.study/api",d=4;async function m(s){const r=await fetch(`${f}/artists?page=${s}&limit=${d}`);if(!r.ok)throw new Error("Failed to fetch");return await r.json()}function g(s){return s.map(({_id:r,strArtist:i,strArtistThumb:n,genres:e,strBiographyEN:t})=>{const o=t||"",a=o.length>300?o.substring(0,300)+"...":o;return`
      <li class="artists__item artist-card">
        <div class="artist-card__img-thumb">
          <img src="${n}" alt="${i}" class="artists__card--img" loading="lazy">
        </div>
        <div class="artist__card--content">
          <ul class="artist__card--genres">
            ${e.map(c=>`<li class="artist__card--genre">${c}</li>`).join("")}
          </ul>
          <h4 class="artist__card--name">${i}</h4>
          <p class="artist__card--info">${a}</p>
          <button class="artist__card--btn" type="button" data-id="${r}">
            Learn More 
            <svg width="24" height="24"><use href="icon/symbol-defs.svg#icon-play3"></use></svg>
          </button>
        </div>
      </li>`}).join("")}function h(s,r){if(!s)return;const i=g(r);s.insertAdjacentHTML("beforeend",i)}function p(){return{listElement:document.querySelector(".artists__list"),loadMoreBtn:document.querySelector(".artists__button"),loader:document.querySelector(".loader-backdrop")}}function y(){const{listElement:s,loadMoreBtn:r,loader:i}=p();let n=1;async function e(){i&&i.classList.remove("is-hidden"),r&&r.classList.add("is-hidden");try{const t=await m(n),o=Array.isArray(t)?t:t.results||t.artists||[],a=t.totalPages||0;if(o.length===0){l.info({message:"No artists found."});return}h(s,o);const c=o.length===d&&(a===0||n<a);if(r&&r.classList.toggle("is-hidden",!c),n>1&&s&&s.firstElementChild){const{height:u}=s.firstElementChild.getBoundingClientRect();window.scrollBy({top:u*2,behavior:"smooth"})}}catch(t){console.error("Помилка рендеру:",t),l.error({title:"Error",message:t.message})}finally{i&&i.classList.add("is-hidden")}}r&&r.addEventListener("click",()=>{n+=1,e()}),e()}document.addEventListener("DOMContentLoaded",()=>{y()});
//# sourceMappingURL=index.js.map
