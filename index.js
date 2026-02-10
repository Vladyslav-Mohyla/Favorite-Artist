import{i as E,a as _,S as j,N as T,P as x}from"./assets/vendor-DMl6gt-j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const B=document.querySelector(".menu-icon"),P=document.querySelector(".close-icon"),v=document.querySelector(".mobile-menu");B.addEventListener("click",()=>{v.classList.remove("mobmenu-hidden"),document.body.classList.add("no-scroll")});P.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")});const I=document.querySelectorAll(".mobile-nav-list a");I.forEach(e=>{e.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")})});const N=document.querySelectorAll('a[href^="#"]');N.forEach(e=>{e.addEventListener("click",t=>{const s=e.getAttribute("href");if(s==="#")return;t.preventDefault(),document.querySelector(s).scrollIntoView({behavior:"smooth"})})});const F=document.querySelector(".mobile-menu .logo-icon");F.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")});const y=document.querySelector("#hero-scroll-btn"),w=document.querySelector("#artists");y&&w?y.addEventListener("click",()=>{w.scrollIntoView({behavior:"smooth",block:"start"})}):(console.log("Кнопка:",y),console.log("Секція:",w));const S="https://sound-wave.b.goit.study/api",A=4;async function O(e){const t=await fetch(`${S}/artists?page=${e}&limit=${A}`);if(!t.ok)throw new Error("Failed to fetch");return await t.json()}async function D(e){const t=await fetch(`${S}/artists/${e}`);if(!t.ok)throw new Error("Failed to fetch artist");return await t.json()}async function H(e){return[]}const R="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-play3'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M6%204l20%2012-20%2012z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-down2'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M27.414%2019.414l-10%2010c-0.781%200.781-2.047%200.781-2.828%200l-10-10c-0.781-0.781-0.781-2.047%200-2.828s2.047-0.781%202.828%200l6.586%206.586v-19.172c0-1.105%200.895-2%202-2s2%200.895%202%202v19.172l6.586-6.586c0.39-0.39%200.902-0.586%201.414-0.586s1.024%200.195%201.414%200.586c0.781%200.781%200.781%202.047%200%202.828z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";function Y(e){return e.map(({_id:t,strArtist:s,strArtistThumb:o,genres:n,strBiographyEN:r})=>{const a=r||"",i=a.length>300?a.substring(0,300)+"...":a;return`
      <li class="artists__item artist-card">
        <div class="artist-card__img-thumb">
          <img src="${o}" alt="${s}" class="artists__card--img" loading="lazy">
        </div>
        <div class="artist__card--content">
          <ul class="artist__card--genre-list">
            ${n.map(d=>`<li class="artist__card--genre-item">${d}</li>`).join("")}
          </ul>
          <h4 class="artist__card--name">${s}</h4>
          <p class="artist__card--info">${i}</p>
          <button class="artist__card--btn" type="button" data-id="${t}">
            Learn More 
            <svg width="24" height="24"><use href="${R}#icon-play3"></use></svg>
          </button>
        </div>
      </li>`}).join("")}function z(e,t){if(!e)return;const s=Y(t);e.insertAdjacentHTML("beforeend",s)}function V(){return{listElement:document.querySelector(".artists__list"),loadMoreBtn:document.querySelector(".artists__button"),loader:document.querySelector(".loader-backdrop")}}function M(){const{listElement:e,loadMoreBtn:t,loader:s}=V();let o=1;async function n(){s&&s.classList.remove("is-hidden"),t&&t.classList.add("is-hidden");try{const r=await O(o),a=Array.isArray(r)?r:r.results||r.artists||[],i=r.totalPages||0;if(a.length===0){E.info({message:"No artists found."});return}z(e,a);const d=a.length===A&&(i===0||o<i);if(t&&t.classList.toggle("is-hidden",!d),o>1&&e&&e.firstElementChild){const{height:b}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:b*2,behavior:"smooth"})}}catch(r){console.error("Помилка рендеру:",r),E.error({title:"Error",message:r.message})}finally{s&&s.classList.add("is-hidden")}}t&&t.addEventListener("click",()=>{o+=1,n()}),n()}const g=document.querySelector(".loader-backdrop");function U(){g&&g.classList.remove("is-hidden")}function Z(){g&&g.classList.add("is-hidden")}const p=document.querySelector(".artists-modal-backdrop"),G=document.querySelector(".artists-modal-window-btn"),m=document.querySelector(".artists-modal-window-content");async function J(e){if(!(!p||!m)){p.classList.remove("is-hidden-modal"),document.body.style.overflow="hidden",m.innerHTML="<p>Loading...</p>",U();try{const[t,s]=await Promise.all([D(e),H(e)]);K(t,s)}catch(t){m.innerHTML="<p>Failed to load artist data.</p>",console.error(t)}finally{Z()}}}function K(e){var o,n;if(!e)return;const t=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"Information missing",s={};(o=e.tracksList)==null||o.forEach(r=>{s[r.strAlbum]||(s[r.strAlbum]=[]),s[r.strAlbum].push(r)}),m.innerHTML=`
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
      ${((n=e.genres)==null?void 0:n.map(r=>`<li class="artist-genres-list">${r}</li>`).join(""))||"No genres available"}
    </ul>
    </div>
    </div>
    </div>


    <h3 class="albums-section-title">Albums</h3>
    <div class="albums-container">
      ${Object.entries(s).map(([r,a])=>`
        <div class="album">
          <h4 class="album-title">${r}</h4>
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
  `}function Q(e){const t=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3);return`${t}:${s<10?"0":""}${s}`}function $(){p.classList.add("is-hidden-modal"),document.body.style.overflow="",m.innerHTML=""}G.addEventListener("click",$);p.addEventListener("click",e=>{e.target===p&&$()});document.addEventListener("keydown",e=>{e.key==="Escape"&&$()});document.addEventListener("click",e=>{const t=e.target.closest(".artist__card--btn");if(!t)return;const s=t.dataset.id;s&&J(s)});function W(){const e=document.querySelector(".js-open-feedback"),t=document.querySelector(".js-feedback-backdrop");if(!e||!t)return;const s=t.querySelector(".js-close-feedback"),o=t.querySelector(".js-feedback-form"),n=t.querySelector(".js-rating"),r=t.querySelector(".js-feedback-error"),a=t.querySelector(".js-feedback-loader");let i=0,d=null;function b(){d=document.activeElement,t.hidden=!1,t.classList.add("active"),t.removeAttribute("inert"),document.body.style.overflow="hidden",s.focus()}function f(){t.classList.remove("active"),t.hidden=!0,t.setAttribute("inert",""),document.body.style.overflow="",o.reset(),i=0,[...n.children].forEach(c=>c.classList.remove("active")),r.textContent="",d&&d.focus()}async function C(c){const l=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!l.ok){const u=await l.json();throw new Error(u.message||"Request failed")}}n.addEventListener("click",c=>{const l=c.target.dataset.value;l&&(i=Number(l),[...n.children].forEach(u=>{u.classList.toggle("active",Number(u.dataset.value)<=i)}))}),o.addEventListener("submit",async c=>{c.preventDefault(),r.textContent="";const l=o.name.value.trim(),u=o.message.value.trim();if(!l||!u||!i){r.textContent="Please fill all fields and select a rating";return}try{a.classList.remove("hidden"),await C({name:l,message:u,rating:i}),f(),Notify.success("Thank you for your feedback!")}catch(q){Notify.failure(q.message)}finally{a.classList.add("hidden")}}),e.addEventListener("click",b),s.addEventListener("click",f),t.addEventListener("click",c=>{c.target===t&&f()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&!t.hidden&&f()})}const X="https://sound-wave.b.goit.study/api/feedbacks";async function ee(){try{const{data:e}=await _.get(X,{headers:{"Content-Type":"application/json"}});let t=e.data||[];return t=t.slice(0,10).map(s=>({...s,rating:Math.round(s.rating)})),t}catch(e){E.error({message:`${e}`,position:"topRight"})}}const h=document.querySelector(".swiper-wrapper");let L=null;function te(e){return e.map(({descr:s,name:o,rating:n})=>`<div class="swiper-slide">
          <div class="feedback-card">
            <div class="rating">${"★".repeat(n)}${n<5?"☆".repeat(5-n):""}</div>
            <p class="descr">"${s}"</p>
            <h3 class="name">${o}</h3>
          </div>
        </div>`).join("")}function k(){L&&L.destroy(!0,!0),L=new j(".mySwiper",{modules:[T,x],slidesPerView:1,spaceBetween:0,centeredSlides:!0,speed:600,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{navigation:!1},768:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}},grabCursor:!0,watchOverflow:!0,keyboard:{enabled:!0},touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,followFinger:!0})}async function se(){try{const e=await ee();if(e&&e.length>0){h.innerHTML="";const t=te(e);h.innerHTML=t,requestAnimationFrame(()=>{k()})}else h.innerHTML=`
        <div class="swiper-slide">
          <div class="no-feedbacks">
            <p>No feedbacks available yet</p>
          </div>
        </div>
      `,k()}catch(e){console.error("Error loading feedbacks:",e),h.innerHTML=`
      <div class="swiper-slide">
        <div class="error-loading">
          <p>Failed to load feedbacks. Please try again later.</p>
        </div>
      </div>
    `,k()}}M();document.addEventListener("DOMContentLoaded",()=>{M(),W(),se()});
//# sourceMappingURL=index.js.map
