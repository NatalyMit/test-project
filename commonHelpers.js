(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const a=document.querySelector(".exercises-nav-list"),m=document.querySelector(".exercises-container"),y="https://energyflow.b.goit.study/api";a.addEventListener("click",g);l("Muscles").then(d);async function g(t){const{filter:e}=t.target.dataset;if(!e)return;await l(e).then(d);const i=a.querySelector(".active"),n=t.target;i.disabled=!1,n.disabled=!0,i.classList.remove("active"),n.classList.add("active")}async function l(t){return fetch(`${y}/filters?filter=${t}&page=1&limit=12`).then(e=>e.json()).then(e=>e.results)}function h({name:t,filter:e,imgUrl:i}){return`
      <li class="exercise-card" data-filter="${t}">
      <div clas="exercise-card-img">
      <img class="exercises-card-img" src="${i}" alt="${t}">
      <div class="container-text">
      <h3 class="desription-category">${t}</h3>
        <p class="description-category-par">${e}</p>
      </div>
      </div>
      </li>
    `}function d(t){m.innerHTML=t.map(h)}document.querySelector(".exercises-nav-list");const o=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const v=document.querySelector(".exercises-gallery"),x="https://energyflow.b.goit.study/api/",u="is-hidden";o.addEventListener("click",$);o.classList.remove(u);p("Muscles").then(f);async function $(t){console.log(t.target);const{filter:e}=t.target.dataset;e&&(await p(e).then(f),o.classList.add(u))}async function p(t){return fetch(`${x}exercises?filter=${t}&page=1&limit=12`).then(e=>e.json()).then(e=>e.results)}function L({bodyPart:t,target:e,name:i,burnedCalories:n,rating:s,time:r}){return`<li class = "list-exercises" data-filter="${i}"><div class="options">
            <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
            
            <span class="options-item-span">${s}</span>
            <button type = "button" >START</button>
            <p class="options-item"> <span class="options-item-span">svg</span>${i}</p>
            <p class="options-item"> Burned calories:${n}/${r}</p>
            <p class="options-item">Body part:${t}</p>
            <p>Target:${e}</p></div>
            </li>`}function f(t){v.innerHTML=t.map(L).join("")}
//# sourceMappingURL=commonHelpers.js.map
