(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const a=document.querySelector(".exercises-nav-list"),m=document.querySelector(".exercises-container"),y="https://energyflow.b.goit.study/api";a.addEventListener("click",g);l("Muscles").then(d);async function g(t){const{filter:e}=t.target.dataset;if(!e)return;await l(e).then(d);const n=a.querySelector(".active"),i=t.target;n.disabled=!1,i.disabled=!0,n.classList.remove("active"),i.classList.add("active")}async function l(t){return fetch(`${y}/filters?filter=${t}&page=1&limit=12`).then(e=>e.json()).then(e=>e.results)}function h({name:t,filter:e,imgUrl:n}){return`
      <li class="exercise-card" data-filter="${t}">
      <div clas="exercise-card-img">
      <img class="exercises-card-img" src="${n}" alt="${t}">
      <div class="container-text">
      <h3 class="desription-category">${t}</h3>
        <p class="description-category-par">${e}</p>
      </div>
      </div>
      </li>
    `}function d(t){m.innerHTML=t.map(h)}document.querySelector(".exercises-nav-list");const o=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const x=document.querySelector(".exercises-gallery"),$="https://energyflow.b.goit.study/api/",u="is-hidden";o.addEventListener("click",v);o.classList.remove(u);p("Muscles").then(f);async function v(t){console.log(t.target);const{filter:e}=t.target.dataset;e&&(await p(e).then(f),o.classList.add(u))}async function p(t){return fetch(`${$}exercises?filter=${t}&page=1&limit=12`).then(e=>e.json()).then(e=>e.results)}function f(t){x.innerHTML=t.map(L).join("")}function L({bodyPart:t,target:e,name:n,burnedCalories:i,rating:s,time:r}){return`<li class = "list-exercises"><div class="options">
          <p class="options-item"> WORKOUT</p>
          <span class="options-item-span">${s}</span>
          <button type = "button" >START</button>
          <p class="options-item"> <span class="options-item-span">svg</span>${n}</p>
          <p class="options-item"> Burned calories:${i}/${r}</p>
          <p class="options-item">Body part:${t}</p>
          <p>Target:${e}</p></div>
          </li>`}
//# sourceMappingURL=commonHelpers.js.map
