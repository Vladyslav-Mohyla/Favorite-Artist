import{i as A,a as _,S as q,N as T,P as j}from"./assets/vendor-DMl6gt-j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const N=document.querySelector(".menu-icon"),B=document.querySelector(".close-icon"),v=document.querySelector(".mobile-menu");N.addEventListener("click",()=>{v.classList.remove("mobmenu-hidden"),document.body.classList.add("no-scroll")});B.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")});const P=document.querySelectorAll(".mobile-nav-list a");P.forEach(e=>{e.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")})});const I=document.querySelectorAll('a[href^="#"]');I.forEach(e=>{e.addEventListener("click",t=>{const s=e.getAttribute("href");if(s==="#")return;t.preventDefault(),document.querySelector(s).scrollIntoView({behavior:"smooth"})})});const F=document.querySelector(".mobile-menu .logo-icon");F.addEventListener("click",()=>{v.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")});const L=document.querySelector("#hero-scroll-btn"),w=document.querySelector("#artists");L&&w?L.addEventListener("click",()=>{w.scrollIntoView({behavior:"smooth",block:"start"})}):(console.log("Кнопка:",L),console.log("Секція:",w));const $="https://sound-wave.b.goit.study/api",M=4;async function x(e){const t=await fetch(`${$}/artists?page=${e}&limit=${M}`);if(!t.ok)throw new Error("Failed to fetch");return await t.json()}async function H(e){const t=await fetch(`${$}/artists/${e}`);if(!t.ok)throw new Error("Failed to fetch artist");return await t.json()}async function O(e){return[]}function D(e){return e.map(t=>{const{_id:s,strArtist:o,strArtistThumb:r,strBiographyEN:n,genres:a,genre:i,strGenre:d}=t;let u=["Artist"];Array.isArray(a)&&a.length>0?u=a:d?u=[d]:i&&(u=[i]);const l=n||"",y=l.length>300?l.substring(0,300)+"...":l||"No biography available for this artist.";return`
      <li class="artists__item artist-card">
        <div class="artist-card__img-thumb">
          <img src="${r}" alt="${o}" class="artists__card--img" loading="lazy">
        </div>
        <div class="artist__card--content">
          <ul class="artist__card--genre-list">
            ${u.map(c=>`<li class="artist__card--genre-item">${c}</li>`).join("")}
          </ul>
          <h4 class="artist__card--name">${o}</h4>
          <p class="artist__card--info">${y}</p>
          <button class="artist__card--btn" type="button" data-id="${s}">
            Learn More 
            <svg width="24" height="24"><use href="/img/icon/artists-section.svg#icon-play3"></use></svg>
          </button>
        </div>
      </li>`}).join("")}function R(e,t){if(!e)return;const s=D(t);e.insertAdjacentHTML("beforeend",s)}function Y(){return{listElement:document.querySelector(".artists__list"),loadMoreBtn:document.querySelector(".artists__button"),loader:document.querySelector(".loader-backdrop")}}function V(){const{listElement:e,loadMoreBtn:t,loader:s}=Y();let o=1,r=!1;async function n(){if(!r){r=!0,s&&s.classList.remove("is-hidden"),t&&t.classList.add("is-hidden");try{const a=await x(o),i=Array.isArray(a)?a:a.results||a.artists||[],d=a.totalPages||0;if(i.length===0){o===1&&(e.innerHTML="<p>No artists found.</p>"),A.info({message:"No artists found."});return}o===1&&e&&(e.innerHTML=""),R(e,i);const u=i.length===M&&(d===0||o<d);if(t&&t.classList.toggle("is-hidden",!u),o>1&&(e!=null&&e.firstElementChild)){const{height:l}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:l*2,behavior:"smooth"})}}catch(a){console.error("Ошибка рендеринга:",a),A.error({title:"Error",message:"Something went wrong. Please try again."})}finally{r=!1,s&&s.classList.add("is-hidden")}}}t&&t.addEventListener("click",()=>{o+=1,n()}),n()}const b=document.querySelector(".loader-backdrop");function z(){b&&b.classList.remove("is-hidden")}function G(){b&&b.classList.add("is-hidden")}const g=document.querySelector(".artists-modal-backdrop"),U=document.querySelector(".artists-modal-window-btn"),p=document.querySelector(".artists-modal-window-content");async function Z(e){if(!(!g||!p)){g.classList.remove("is-hidden-modal"),document.body.style.overflow="hidden",p.innerHTML="<p>Loading...</p>",z();try{const[t,s]=await Promise.all([H(e),O(e)]);J(t,s)}catch(t){p.innerHTML="<p>Failed to load artist data.</p>",console.error(t)}finally{G()}}}function J(e){var o,r;if(!e)return;const t=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"Information missing",s={};(o=e.tracksList)==null||o.forEach(n=>{s[n.strAlbum]||(s[n.strAlbum]=[]),s[n.strAlbum].push(n)}),p.innerHTML=`
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
      ${((r=e.genres)==null?void 0:r.map(n=>`<li class="artist-genres-list">${n}</li>`).join(""))||"No genres available"}
    </ul>
    </div>
    </div>
    </div>


    <h3 class="albums-section-title">Albums</h3>
    <div class="albums-container">
      ${Object.entries(s).map(([n,a])=>`
        <div class="album">
          <h4 class="album-title">${n}</h4>
          <ul class="album-tracks">
            <li class="album-tracks-header">
              <span>Track</span>
              <span>Time</span>
              <span>Link</span>
            </li>
            ${a.map(i=>`
              <li class="track">
  <span>${i.strTrack}</span>
  <span>${i.intDuration?K(parseInt(i.intDuration)):"-"}</span>
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
  `}function K(e){const t=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3);return`${t}:${s<10?"0":""}${s}`}function S(){g.classList.add("is-hidden-modal"),document.body.style.overflow="",p.innerHTML=""}U.addEventListener("click",S);g.addEventListener("click",e=>{e.target===g&&S()});document.addEventListener("keydown",e=>{e.key==="Escape"&&S()});document.addEventListener("click",e=>{const t=e.target.closest(".artist__card--btn");if(!t)return;const s=t.dataset.id;s&&Z(s)});function Q(){const e=document.querySelector(".js-open-feedback"),t=document.querySelector(".js-feedback-backdrop");if(!e||!t)return;const s=t.querySelector(".js-close-feedback"),o=t.querySelector(".js-feedback-form"),r=t.querySelector(".js-rating"),n=t.querySelector(".js-feedback-error"),a=t.querySelector(".js-feedback-loader");let i=0,d=null;function u(){d=document.activeElement,t.hidden=!1,t.classList.add("active"),t.removeAttribute("inert"),document.body.style.overflow="hidden",s.focus()}function l(){t.classList.remove("active"),t.hidden=!0,t.setAttribute("inert",""),document.body.style.overflow="",o.reset(),i=0,[...r.children].forEach(c=>c.classList.remove("active")),n.textContent="",d&&d.focus()}async function y(c){const m=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!m.ok){const f=await m.json();throw new Error(f.message||"Request failed")}}r.addEventListener("click",c=>{const m=c.target.dataset.value;m&&(i=Number(m),[...r.children].forEach(f=>{f.classList.toggle("active",Number(f.dataset.value)<=i)}))}),o.addEventListener("submit",async c=>{c.preventDefault(),n.textContent="";const m=o.name.value.trim(),f=o.message.value.trim();if(!m||!f||!i){n.textContent="Please fill all fields and select a rating";return}try{a.classList.remove("hidden"),await y({name:m,message:f,rating:i}),l(),Notify.success("Thank you for your feedback!")}catch(C){Notify.failure(C.message)}finally{a.classList.add("hidden")}}),e.addEventListener("click",u),s.addEventListener("click",l),t.addEventListener("click",c=>{c.target===t&&l()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&!t.hidden&&l()})}const W="https://sound-wave.b.goit.study/api/feedbacks";async function X(){try{const{data:e}=await _.get(W,{headers:{"Content-Type":"application/json"}});let t=e.data||[];return t=t.slice(0,10).map(s=>({...s,rating:Math.round(s.rating)})),t}catch(e){A.error({message:`${e}`,position:"topRight"})}}const h=document.querySelector(".swiper-wrapper");let k=null;function ee(e){return e.map(({descr:s,name:o,rating:r})=>`<div class="swiper-slide">
          <div class="feedback-card">
            <div class="rating">${"★".repeat(r)}${r<5?"☆".repeat(5-r):""}</div>
            <p class="descr">"${s}"</p>
            <h3 class="name">${o}</h3>
          </div>
        </div>`).join("")}function E(){k&&k.destroy(!0,!0),k=new q(".mySwiper",{modules:[T,j],slidesPerView:1,spaceBetween:0,centeredSlides:!0,speed:600,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{navigation:!1},768:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}},grabCursor:!0,watchOverflow:!0,keyboard:{enabled:!0},touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,followFinger:!0})}async function te(){try{const e=await X();if(e&&e.length>0){h.innerHTML="";const t=ee(e);h.innerHTML=t,requestAnimationFrame(()=>{E()})}else h.innerHTML=`
        <div class="swiper-slide">
          <div class="no-feedbacks">
            <p>No feedbacks available yet</p>
          </div>
        </div>
      `,E()}catch(e){console.error("Error loading feedbacks:",e),h.innerHTML=`
      <div class="swiper-slide">
        <div class="error-loading">
          <p>Failed to load feedbacks. Please try again later.</p>
        </div>
      </div>
    `,E()}}document.addEventListener("DOMContentLoaded",()=>{V(),Q(),te()});
//# sourceMappingURL=index.js.map
