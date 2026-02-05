(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const g="https://sound-wave.b.goit.study/api",l=8;let c=1;const d=document.querySelector(".artists__list"),s=document.querySelector(".artists__button");async function p(o){const e=await fetch(`${g}/artists?page=${o}&limit=${l}`);if(!e.ok)throw new Error("Failed to fetch");return(await e.json()).artists}function m(o){return o.map(({_id:e,strArtist:i,strArtistThumb:a,genres:t,strBiographyEN:r})=>{const n=r||"",f=n.length>70?n.substring(0,70)+"...":n;return`
        <li class="artists__item artist-card">
          <div class="artist-card__img-thumb">
            <img src="${a}" alt="${i}" class="artists__card--img" width="288" height="177">
          </div>
          <div class="artist__card--content">
            <ul class="artist__card--genres">
              ${t.map(h=>`<li class="artist__card--genre">${h}</li>`).join("")}
            </ul>
            <h4 class="artist__card--name">${i}</h4>
            <p class="artist__card--info">${f}</p>
            <button class="artist__card--btn" type="button" data-id="${e}">
              Learn More 
              <svg width="24" height="24"><use href="./images/sprite.svg#icon-arrow-right"></use></svg>
            </button>
          </div>
        </li>
      `}).join("")}async function u(){s.disabled=!0;const o=s.textContent;s.textContent="Loading...";try{const e=await p(c);if(!e||e.length===0){s.classList.add("is-hidden");return}if(d.insertAdjacentHTML("beforeend",m(e)),c>1){const{height:i}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:i*1.5,behavior:"smooth"})}e.length<l?s.classList.add("is-hidden"):s.classList.remove("is-hidden")}catch(e){console.error("Error:",e)}finally{s.disabled=!1,s.textContent=o}}s.addEventListener("click",()=>{c+=1,u()});u();
//# sourceMappingURL=index.js.map
