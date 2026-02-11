import{i as A,a as q,S as T,N as x,P as j}from"./assets/vendor-DMl6gt-j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const B=document.querySelector(".menu-icon"),N=document.querySelector(".close-icon"),y=document.querySelector(".mobile-menu");B.addEventListener("click",()=>{y.classList.remove("mobmenu-hidden"),document.body.classList.add("no-scroll")});N.addEventListener("click",()=>{y.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")});const P=document.querySelectorAll(".mobile-nav-list a");P.forEach(e=>{e.addEventListener("click",()=>{y.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")})});const I=document.querySelectorAll('a[href^="#"]');I.forEach(e=>{e.addEventListener("click",t=>{const s=e.getAttribute("href");if(s==="#")return;t.preventDefault(),document.querySelector(s).scrollIntoView({behavior:"smooth"})})});const F=document.querySelector(".mobile-menu .logo-icon");F.addEventListener("click",()=>{y.classList.add("mobmenu-hidden"),document.body.classList.remove("no-scroll")});const L=document.querySelector("#hero-scroll-btn"),k=document.querySelector("#artists");L&&k?L.addEventListener("click",()=>{k.scrollIntoView({behavior:"smooth",block:"start"})}):(console.log("Кнопка:",L),console.log("Секція:",k));const M="https://sound-wave.b.goit.study/api",_=4;async function D(e){const t=await fetch(`${M}/artists?page=${e}&limit=${_}`);if(!t.ok)throw new Error("Failed to fetch");return await t.json()}async function H(e){const t=await fetch(`${M}/artists/${e}`);if(!t.ok)throw new Error("Failed to fetch artist");return await t.json()}async function O(e){return[]}const Y="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-play3'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M6%204l20%2012-20%2012z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-down2'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M27.414%2019.414l-10%2010c-0.781%200.781-2.047%200.781-2.828%200l-10-10c-0.781-0.781-0.781-2.047%200-2.828s2.047-0.781%202.828%200l6.586%206.586v-19.172c0-1.105%200.895-2%202-2s2%200.895%202%202v19.172l6.586-6.586c0.39-0.39%200.902-0.586%201.414-0.586s1.024%200.195%201.414%200.586c0.781%200.781%200.781%202.047%200%202.828z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";function R(e){return e.map(t=>{const{_id:s,strArtist:o,strArtistThumb:r,strBiographyEN:n,genres:i,genre:a,strGenre:m}=t;let u=["Artist"];Array.isArray(i)&&i.length>0?u=i:m?u=[m]:a&&(u=[a]);const p=n||"",g=p.length>300?p.substring(0,300)+"...":p||"No biography available for this artist.";return`
      <li class="artists__item artist-card">
        <div class="artist-card__img-thumb">
          <img src="${r}" alt="${o}" class="artists__card--img" loading="lazy">
        </div>
        <div class="artist__card--content">
          <ul class="artist__card--genre-list">
            ${u.map(c=>`<li class="artist__card--genre-item">${c}</li>`).join("")}
          </ul>
          <h4 class="artist__card--name">${o}</h4>
          <p class="artist__card--info">${g}</p>
          <button class="artist__card--btn" type="button" data-id="${s}">
            Learn More 
            <svg width="24" height="24"><use href="${Y}#icon-play3"></use></svg>
          </button>
        </div>
      </li>`}).join("")}function z(e,t){if(!e)return;const s=R(t);e.insertAdjacentHTML("beforeend",s)}function U(){return{listElement:document.querySelector(".artists__list"),loadMoreBtn:document.querySelector(".artists__button"),loader:document.querySelector(".loader-backdrop")}}function V(){const{listElement:e,loadMoreBtn:t,loader:s}=U();let o=1,r=!1;async function n(){if(!r){r=!0,s&&s.classList.remove("is-hidden"),t&&t.classList.add("is-hidden");try{const i=await D(o),a=Array.isArray(i)?i:i.results||i.artists||[],m=i.totalPages||0;if(a.length===0){o===1&&(e.innerHTML="<p>No artists found.</p>"),A.info({message:"No artists found."});return}o===1&&e&&(e.innerHTML=""),z(e,a);const u=a.length===_&&(m===0||o<m);if(t&&t.classList.toggle("is-hidden",!u),o>1&&(e!=null&&e.firstElementChild)){const{height:p}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:p*2,behavior:"smooth"})}}catch(i){console.error("Ошибка рендеринга:",i),A.error({title:"Error",message:"Something went wrong. Please try again."})}finally{r=!1,s&&s.classList.add("is-hidden")}}}t&&t.addEventListener("click",()=>{o+=1,n()}),n()}const b=document.querySelector(".loader-backdrop");function G(){b&&b.classList.remove("is-hidden")}function Z(){b&&b.classList.add("is-hidden")}const h=document.querySelector(".artists-modal-backdrop"),J=document.querySelector(".artists-modal-window-btn"),f=document.querySelector(".artists-modal-window-content");async function K(e){if(!(!h||!f)){h.classList.remove("is-hidden-modal"),document.body.style.overflow="hidden",f.innerHTML='<div class="loader-modal"></div>',G();try{const[t,s]=await Promise.all([H(e),O(e)]);Q(t,s)}catch(t){f.innerHTML="<p>Failed to load artist data.</p>",console.error(t)}finally{Z()}}}function Q(e){var o,r;if(!e)return;const t=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"Information missing",s={};(o=e.tracksList)==null||o.forEach(n=>{s[n.strAlbum]||(s[n.strAlbum]=[]),s[n.strAlbum].push(n)}),f.innerHTML=`
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
      ${Object.entries(s).map(([n,i])=>`
        <div class="album">
          <h4 class="album-title">${n}</h4>
          <ul class="album-tracks">
            <li class="album-tracks-header">
              <span>Track</span>
              <span>Time</span>
              <span>Link</span>
            </li>
            ${i.map(a=>`
              <li class="track">
  <span>${a.strTrack}</span>
  <span>${a.intDuration?W(parseInt(a.intDuration)):"-"}</span>
  ${a.movie?`
        <a href="${a.movie}" target="_blank" class="track-link" aria-label="YouTube">
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
  `}function W(e){const t=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3);return`${t}:${s<10?"0":""}${s}`}function S(){h.classList.add("is-hidden-modal"),document.body.style.overflow="",f.innerHTML=""}J.addEventListener("click",S);h.addEventListener("click",e=>{e.target===h&&S()});document.addEventListener("keydown",e=>{e.key==="Escape"&&S()});document.addEventListener("click",e=>{const t=e.target.closest(".artist__card--btn");if(!t)return;const s=t.dataset.id;s&&K(s)});function X(){const e=document.querySelector(".js-open-feedback"),t=document.querySelector(".js-feedback-backdrop");if(!e||!t)return;const s=t.querySelector(".js-close-feedback"),o=t.querySelector(".js-feedback-form"),r=t.querySelector(".js-rating"),n=t.querySelector(".js-feedback-error");let i=0,a=null;function m(){a=document.activeElement,t.hidden=!1,t.classList.add("active"),t.removeAttribute("inert"),document.body.style.overflow="hidden",s.focus()}function u(){t.classList.remove("active"),t.hidden=!0,t.setAttribute("inert",""),document.body.style.overflow="",o.reset(),i=0,[...r.children].forEach(c=>c.classList.remove("active")),n.textContent="",a&&a.focus()}async function p(c){try{const d=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),l=await d.json().catch(()=>({}));if(!d.ok)throw new Error(l.message||"Ошибка при отправке отзыва");return l.message||""}catch(d){throw new Error(d.message||"Ошибка сети")}}function g(c,d="success"){const l=document.createElement("div");l.className=`feedback-notification ${d}`,l.textContent=c,document.body.appendChild(l),setTimeout(()=>l.classList.add("visible"),10),setTimeout(()=>{l.classList.remove("visible"),setTimeout(()=>l.remove(),300)},3e3)}r.addEventListener("click",c=>{const d=c.target.closest("[data-value]");d&&(i=Number(d.dataset.value),[...r.children].forEach(l=>{l.classList.toggle("active",Number(l.dataset.value)<=i)}))}),o.addEventListener("submit",async c=>{c.preventDefault(),n.textContent="";const d=o.name.value.trim(),l=o.message.value.trim();if(!d||!l||i===0){n.textContent="Заполните все поля и выберите рейтинг";return}const C={name:d,descr:l,rating:i};try{console.log("Отправляем на сервер:",C),await p(C),u(),g("Спасибо за ваш отзыв!")}catch(w){console.error("Ошибка при отправке отзыва:",w),n.textContent=w.message,g(w.message,"error")}}),e.addEventListener("click",m),s.addEventListener("click",u),t.addEventListener("click",c=>{c.target===t&&u()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&!t.hidden&&u()})}const ee="https://sound-wave.b.goit.study/api/feedbacks";async function te(){try{const{data:e}=await q.get(ee,{headers:{"Content-Type":"application/json"}});let t=e.data||[];return t=t.slice(0,10).map(s=>({...s,rating:Math.round(s.rating)})),t}catch(e){A.error({message:`${e}`,position:"topRight"})}}const v=document.querySelector(".swiper-wrapper");let E=null;function se(e){return e.map(({descr:s,name:o,rating:r})=>`<div class="swiper-slide">
          <div class="feedback-card">
            <div class="rating">${"★".repeat(r)}${r<5?"☆".repeat(5-r):""}</div>
            <p class="descr">"${s}"</p>
            <h3 class="name">${o}</h3>
          </div>
        </div>`).join("")}function $(){E&&E.destroy(!0,!0),E=new T(".mySwiper",{modules:[x,j],slidesPerView:1,spaceBetween:0,centeredSlides:!0,speed:600,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{navigation:!1},768:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}},grabCursor:!0,watchOverflow:!0,keyboard:{enabled:!0},touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,followFinger:!0})}async function re(){try{const e=await te();if(e&&e.length>0){v.innerHTML="";const t=se(e);v.innerHTML=t,requestAnimationFrame(()=>{$()})}else v.innerHTML=`
        <div class="swiper-slide">
          <div class="no-feedbacks">
            <p>No feedbacks available yet</p>
          </div>
        </div>
      `,$()}catch(e){console.error("Error loading feedbacks:",e),v.innerHTML=`
      <div class="swiper-slide">
        <div class="error-loading">
          <p>Failed to load feedbacks. Please try again later.</p>
        </div>
      </div>
    `,$()}}document.addEventListener("DOMContentLoaded",()=>{V(),X(),re()});
//# sourceMappingURL=index.js.map
