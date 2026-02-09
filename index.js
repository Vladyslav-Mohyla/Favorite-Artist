import{i as k,a as q,S as _,N as j,P as T,A as x}from"./assets/vendor-DqprJnqb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const B=document.querySelector(".menu-icon"),P=document.querySelector(".close-icon"),v=document.querySelector(".mobile-menu");B.addEventListener("click",()=>{v.classList.remove("mobmenu-hidden"),document.body.classList.add("no-scroll")});P.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")});const I=document.querySelectorAll(".mobile-nav-list a");I.forEach(e=>{e.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")})});const N=document.querySelectorAll('a[href^="#"]');N.forEach(e=>{e.addEventListener("click",t=>{const r=e.getAttribute("href");if(r==="#")return;t.preventDefault(),document.querySelector(r).scrollIntoView({behavior:"smooth"})})});const F=document.querySelector(".mobile-menu .logo-icon");F.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")});const b=document.querySelector("#hero-scroll-btn"),y=document.querySelector("#artists");b&&y?b.addEventListener("click",()=>{y.scrollIntoView({behavior:"smooth",block:"start"})}):(console.log("Кнопка:",b),console.log("Секція:",y));const $="https://sound-wave.b.goit.study/api",S=4;async function O(e){const t=await fetch(`${$}/artists?page=${e}&limit=${S}`);if(!t.ok)throw new Error("Failed to fetch");return await t.json()}async function D(e){const t=await fetch(`${$}/artists/${e}`);if(!t.ok)throw new Error("Failed to fetch artist");return await t.json()}async function H(e){return[]}const R="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-play3'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M6%204l20%2012-20%2012z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-down2'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M27.414%2019.414l-10%2010c-0.781%200.781-2.047%200.781-2.828%200l-10-10c-0.781-0.781-0.781-2.047%200-2.828s2.047-0.781%202.828%200l6.586%206.586v-19.172c0-1.105%200.895-2%202-2s2%200.895%202%202v19.172l6.586-6.586c0.39-0.39%200.902-0.586%201.414-0.586s1.024%200.195%201.414%200.586c0.781%200.781%200.781%202.047%200%202.828z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";function Y(e){return e.map(({_id:t,strArtist:r,strArtistThumb:o,genres:n,strBiographyEN:s})=>{const a=s||"",i=a.length>300?a.substring(0,300)+"...":a;return`
      <li class="artists__item artist-card">
        <div class="artist-card__img-thumb">
          <img src="${o}" alt="${r}" class="artists__card--img" loading="lazy">
        </div>
        <div class="artist__card--content">
          <ul class="artist__card--genre-list">
            ${n.map(m=>`<li class="artist__card--genre-item">${m}</li>`).join("")}
          </ul>
          <h4 class="artist__card--name">${r}</h4>
          <p class="artist__card--info">${i}</p>
          <button class="artist__card--btn" type="button" data-id="${t}">
            Learn More 
            <svg width="24" height="24"><use href="${R}#icon-play3"></use></svg>
          </button>
        </div>
      </li>`}).join("")}function z(e,t){if(!e)return;const r=Y(t);e.insertAdjacentHTML("beforeend",r)}function V(){return{listElement:document.querySelector(".artists__list"),loadMoreBtn:document.querySelector(".artists__button"),loader:document.querySelector(".loader-backdrop")}}function A(){const{listElement:e,loadMoreBtn:t,loader:r}=V();let o=1;async function n(){r&&r.classList.remove("is-hidden"),t&&t.classList.add("is-hidden");try{const s=await O(o),a=Array.isArray(s)?s:s.results||s.artists||[],i=s.totalPages||0;if(a.length===0){k.info({message:"No artists found."});return}z(e,a);const m=a.length===S&&(i===0||o<i);if(t&&t.classList.toggle("is-hidden",!m),o>1&&e&&e.firstElementChild){const{height:u}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:u*2,behavior:"smooth"})}}catch(s){console.error("Помилка рендеру:",s),k.error({title:"Error",message:s.message})}finally{r&&r.classList.add("is-hidden")}}t&&t.addEventListener("click",()=>{o+=1,n()}),n()}const g=document.querySelector(".loader-backdrop");function U(){g&&g.classList.remove("is-hidden")}function Z(){g&&g.classList.add("is-hidden")}const f=document.querySelector(".artists-modal-backdrop"),G=document.querySelector(".artists-modal-window-btn"),p=document.querySelector(".artists-modal-window-content");async function J(e){if(!(!f||!p)){f.classList.remove("is-hidden-modal"),document.body.style.overflow="hidden",p.innerHTML="<p>Loading...</p>",U();try{const[t,r]=await Promise.all([D(e),H(e)]);K(t,r)}catch(t){p.innerHTML="<p>Failed to load artist data.</p>",console.error(t)}finally{Z()}}}function K(e){var o,n;if(!e)return;const t=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"Information missing",r={};(o=e.tracksList)==null||o.forEach(s=>{r[s.strAlbum]||(r[s.strAlbum]=[]),r[s.strAlbum].push(s)}),p.innerHTML=`
    <h2 class="artist-name">${e.strArtist}</h2>
    <div class="conteiner-img-paragraphs">
    <img src="${e.strArtistThumb}" alt="${e.strArtist}" class="artist-img" />
    <div class="artist-name-paragraphs-bio-genges">
    <div class="artist-name-paragraphs">
    <p class="artist-modal-meta-paragraphs"><strong>Years Active</strong> ${t}</p>
    <p class="artist-modal-meta-paragraphs"><strong>Sex</strong> ${e.strGender||"Information missing"}</p>
    <p class="artist-modal-meta-paragraphs"><strong>Members</strong> ${e.intMembers||"Information missing"}</p>
    <p class="artist-modal-meta-paragraphs"><strong>Country</strong> ${e.strCountry||"Information missing"}</p>
    </div>
    
    
    <div class="container-bio-genges">
    <p class="artist-modal-meta-paragraphs biography-text"><strong>Biography</strong> ${e.strBiographyEN||"No biography available"}</p>
    <ul class="artist-genres">
      ${((n=e.genres)==null?void 0:n.map(s=>`<li class="artist-genres-list">${s}</li>`).join(""))||"No genres available"}
    </ul>
    </div>
    </div>
    </div>


    <h3 class="albums-section-title">Albums</h3>
    <div class="albums-container">
      ${Object.entries(r).map(([s,a])=>`
        <div class="album">
          <h4 class="album-title">${s}</h4>
          <ul class="album-tracks">
            <li class="album-tracks-header">
              <span>Track</span>
              <span>Time</span>
              <span>Link</span>
            </li>
            ${a.map(i=>`
              <li class="track">
  <span>${i.strTrack}</span>
  <span>${i.intDuration?Q(parseInt(i.intDuration)):"-"}</span>
  ${i.movie?`
        <a href="${i.movie}" target="_blank" class="track-link" aria-label="YouTube">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005Z"/>
          </svg>
        </a>
      `:"<span></span>"}
</li>
            `).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  `}function Q(e){const t=Math.floor(e/6e4),r=Math.floor(e%6e4/1e3);return`${t}:${r<10?"0":""}${r}`}function E(){f.classList.add("is-hidden-modal"),document.body.style.overflow="",p.innerHTML=""}G.addEventListener("click",E);f.addEventListener("click",e=>{e.target===f&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&E()});document.addEventListener("click",e=>{const t=e.target.closest(".artist__card--btn");if(!t)return;const r=t.dataset.id;r&&J(r)});function W(){const e=document.querySelector(".js-open-feedback"),t=document.querySelector(".js-feedback-backdrop");if(!e||!t)return;const r=t.querySelector(".js-close-feedback"),o=t.querySelector(".js-feedback-form"),n=t.querySelector(".js-rating"),s=t.querySelector(".js-feedback-error"),a=t.querySelector(".js-feedback-loader");let i=0;function m(){t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}function u(){t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="",o.reset(),i=0,[...n.children].forEach(c=>c.classList.remove("active")),s.textContent=""}async function M(c){const l=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!l.ok){const d=await l.json();throw new Error(d.message||"Request failed")}}n.addEventListener("click",c=>{const l=c.target.dataset.value;l&&(i=Number(l),[...n.children].forEach(d=>{d.classList.toggle("active",Number(d.dataset.value)<=i)}))}),o.addEventListener("submit",async c=>{c.preventDefault(),s.textContent="";const l=o.name.value.trim(),d=o.message.value.trim();if(!l||!d||!i){s.textContent="Please fill all fields and select a rating";return}try{a.classList.remove("hidden"),await M({name:l,message:d,rating:i}),u(),Notify.success("Thank you for your feedback!")}catch(C){Notify.failure(C.message)}finally{a.classList.add("hidden")}}),e.addEventListener("click",m),r.addEventListener("click",u),t.addEventListener("click",c=>{c.target===t&&u()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&t.classList.contains("active")&&u()})}const X="https://sound-wave.b.goit.study/api/feedbacks";async function ee(){try{const{data:e}=await q.get(X,{headers:{"Content-Type":"application/json"}});let t=e.data||[];return t=t.slice(0,10).map(r=>({...r,rating:Math.round(r.rating)})),t}catch(e){k.error({message:`${e}`,position:"topRight"})}}const h=document.querySelector(".swiper-wrapper");let w=null;function te(e){return e.map(({descr:r,name:o,rating:n})=>`<div class="swiper-slide">
          <div class="feedback-card">
            <div class="rating">${"★".repeat(n)}${n<5?"☆".repeat(5-n):""}</div>
            <p class="descr">"${r}"</p>
            <h3 class="name">${o}</h3>
          </div>
        </div>`).join("")}function L(){w&&w.destroy(!0,!0),w=new _(".mySwiper",{modules:[j,T,x],slidesPerView:1,spaceBetween:0,centeredSlides:!0,loop:!0,speed:600,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{navigation:!1},768:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}},grabCursor:!0,watchOverflow:!0,keyboard:{enabled:!0},touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,followFinger:!0})}async function se(){try{const e=await ee();if(e&&e.length>0){h.innerHTML="";const t=te(e);h.innerHTML=t,requestAnimationFrame(()=>{L()})}else h.innerHTML=`
        <div class="swiper-slide">
          <div class="no-feedbacks">
            <p>No feedbacks available yet</p>
          </div>
        </div>
      `,L()}catch(e){console.error("Error loading feedbacks:",e),h.innerHTML=`
      <div class="swiper-slide">
        <div class="error-loading">
          <p>Failed to load feedbacks. Please try again later.</p>
        </div>
      </div>
    `,L()}}A();document.addEventListener("DOMContentLoaded",()=>{A(),W(),se()});
//# sourceMappingURL=index.js.map
