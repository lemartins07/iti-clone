"use strict";var enableBtn=function(e,n){var e=document.querySelector(e),t=document.querySelector(n);console.log(e,t),e&&t&&t.addEventListener("keydown",function(){console.log(t.value)})},showMenu=(enableBtn(".js-btn-abrir-conta",".card__cpf"),function(e,n){var t=document.querySelector(e),e=document.getElementById(n);e&&t&&e.addEventListener("click",function(){t.classList.toggle("is-active")})});showMenu(".js-nav-mobile__list","nav-toggle");