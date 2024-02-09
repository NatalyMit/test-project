(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const a=document.querySelector(".exercises-nav-list"),g=document.querySelector(".exercises-container"),h="https://energyflow.b.goit.study/api";a.addEventListener("click",v);l("Muscles").then(d);async function v(s){const{filter:e}=s.target.dataset;if(!e)return;await l(e).then(d);const r=a.querySelector(".active"),n=s.target;r.disabled=!1,n.disabled=!0,r.classList.remove("active"),n.classList.add("active")}async function l(s){return fetch(`${h}/filters?filter=${s}&page=1&limit=12`).then(e=>e.json()).then(e=>e.results)}function m({name:s,filter:e,imgUrl:r}){return`
      <li class="exercise-card" data-filter="${s}">
      <div clas="exercise-card-img">
      <img class="exercises-card-img" src="${r}" alt="${s}">
      <div class="container-text">
      <h3 class="desription-category">${s}</h3>
        <p class="description-category-par">${e}</p>
      </div>
      </div>
      </li>
    `}function d(s){g.innerHTML=s.map(m)}document.querySelector(".exercises-nav-list");const o=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const y=document.querySelector(".exercises-gallery"),x="https://energyflow.b.goit.study/api/",u="is-hidden";o.addEventListener("click",$);o.classList.remove(u);p("Muscles").then(f);async function $(s){console.log(s.target);const{filter:e}=s.target.dataset;e&&(await p(e).then(f),o.classList.add(u))}async function p(s){return fetch(`${x}exercises?filter=${s}&page=1&limit=12`).then(e=>e.json()).then(e=>e.results)}function L({bodyPart:s,target:e,name:r,burnedCalories:n,rating:t,time:i}){return`<li class = "list-exercises" data-filter="${r}"><div class="options">
  <div class="box-up">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><span class="options-item-span">${t}</span><svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-star"></use></svg></div>
  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <p class="options-item"> <span class="options-item-span">svg</span>${r}</p>
            <p class="options-item"> Burned calories:${n}/${i}</p>
            <p class="options-item">Body part:${s}</p>
            <p>Target:${e}</p></div>
            </li>`}function f(s){y.innerHTML=s.map(L).join("")}
//# sourceMappingURL=commonHelpers.js.map
