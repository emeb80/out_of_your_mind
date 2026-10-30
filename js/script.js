"use strict";

//HAMBURGERMENY MOBIL

//kopplar javascript till knappen i html//
const menuButton = document.querySelector(".menu-toggle");
//kopplar javascript till listan nav(länkarna)//
const menu = document.querySelector("nav ul");
//funktion för vad som händer vid klick på hamburgermeny--
menuButton.addEventListener("click", function () {
  menu.classList.toggle("open");
});
