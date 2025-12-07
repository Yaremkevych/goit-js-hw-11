import{a as u,S as g,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(i){return u.get("https://pixabay.com/api/",{params:{key:"53601919-f7ce8619a2e643043945fb1be",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>s)}const l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function d({webformatURL:i,largeImageURL:s,tags:r,likes:a,views:e,comments:t,downloads:o}){return`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${i}" alt="${r}">
            </a>
            <ul class="image-statistic">
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Likes</h3>
                    <p class="statistic-value">${a}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Views</h3>
                    <p class="statistic-value">${e}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Comments</h3>
                    <p class="statistic-value">${t}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Downloads</h3>
                    <p class="statistic-value">${o}</p>
                </li>
            </ul>
          </li>`}const p=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(i){const s=i.map(d).join("");l.gallery.innerHTML=s,p.refresh()}function y(){l.gallery.innerHTML=""}function L(){l.loader.classList.remove("hidden")}function n(){l.loader.classList.add("hidden")}const m=document.querySelector(".form");m.addEventListener("submit",i=>{i.preventDefault(),y();const r=new FormData(i.target).get("search-text");if(r.trim()===""){c.show({title:"⚠️",message:"Please enter a search query!",messageColor:"white",messageSize:"16px",backgroundColor:"red",position:"topRight",timeout:2e3}),m.reset();return}L(),h(r.trim()).then(a=>{a.hits.length===0?(c.show({title:"⚠️",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",backgroundColor:"red",position:"topRight",timeout:2e3}),n()):f(a.hits),n()}).catch(a=>{n(),c.show({title:"⚠️",message:"Your request is fail!",messageColor:"white",messageSize:"16px",backgroundColor:"red",position:"topRight",timeout:2e3})}),m.reset()});
//# sourceMappingURL=index.js.map
