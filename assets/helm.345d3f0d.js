document.addEventListener("DOMContentLoaded",()=>{// Burger Menu
// ---------------------
// Get all "navbar-burger" elements
let e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);// Add a click event on each of them
e.forEach(e=>{e.addEventListener("click",()=>{// Get the target from the "data-target" attribute
let t=e.dataset.target,l=document.getElementById(t);// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
e.classList.toggle("is-active"),l.classList.toggle("is-active")})});// Tabbar
// ---------------------
let t=Array.prototype.slice.call(document.querySelectorAll(".tab"),0);t.forEach(e=>{e.addEventListener("click",()=>{let t=e.dataset.for;!function(e){let t=document.getElementsByClassName("content-tab");for(let e=0;e<t.length;e++)t[e].style.display="none";let l=document.getElementsByClassName("tab");for(let e=0;e<l.length;e++)l[e].className=l[e].className.replace("is-active","");let a=document.getElementById(e);a.style.display="block";let c=document.getElementById(e+"Tab");c.className+=" is-active"}(t)})})});//# sourceMappingURL=helm.345d3f0d.js.map

//# sourceMappingURL=helm.345d3f0d.js.map
