(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();const f=document.querySelector("input[type=button]"),l=document.querySelector("#crosswordForm"),c=document.querySelector("#results"),u=document.querySelector("#length"),d=document.querySelector("#inputs"),m=15;function a(){document.querySelector('input[name="1"]').focus()}function p(o){d.innerHTML="";for(let t=3;t<3+o;t++){const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("maxlength","1"),e.setAttribute("name",`${t-2}`),d.appendChild(e)}a(),g()}function y(){for(let o=3;o<=m;o++){const t=document.createElement("option");t.setAttribute("value",o),t.innerText=o,u.appendChild(t)}p(3)}y();function g(){const o=document.querySelectorAll("input[type=text]");o.forEach(t=>{t.addEventListener("keydown",e=>{const r=window.event?window.event:e;r.keyCode==39&&e.target.nextElementSibling&&e.target.nextElementSibling.focus(),r.keyCode==37&&e.target.previousElementSibling&&e.target.previousElementSibling.focus()})}),o.forEach(t=>{t.addEventListener("keyup",e=>{const r=window.event?window.event:e;e.target.nextElementSibling&&r.keyCode!=39&&r.keyCode!=37&&r.keyCode!=8&&r.keyCode!=46&&e.target.nextElementSibling.focus()})})}u.addEventListener("change",o=>{p(+u.value)});f.addEventListener("click",o=>{document.querySelectorAll("input[type=text]").forEach(e=>{e.value="",c.innerHTML=""}),a()});l.addEventListener("submit",async o=>{o.preventDefault();const t={};new FormData(l).forEach((i,s)=>{s!="length"&&(t[s]=i)});const r=new Headers;r.append("Content-Type","application/json");const n=await fetch("http://crossword-lookup.eu-4.evennode.com/api/crossword",{headers:r,method:"POST",body:JSON.stringify(t)});n.ok&&h(await n.json())});const h=o=>{c.innerHTML="",o.forEach(t=>{const e=document.createElement("p");e.innerText=t.word,c.appendChild(e)})};
