// JavaScript Document

/*

console.log("hi");

var deEersteP = document.querySelector("li:nth-of-type(1) p");

deEersteP.onclick = maakDeParagraafRood;

/* of */

/*
deEersteP.addEventListener("click",maakDeParagraafRood);


function maakDeParagraafRood();
deEersteP.classList.toggle("ikBenRood");

*/

// javascript: 
var headerMenuButton = document.querySelector(".header-menu");

var navMenuButton = document.querySelector(".nav-menu");
var navMenu = document.querySelector("nav");

 

headerMenuButton.onclick = toggleMenu;
navMenuButton.onclick = toggleMenu;

 

function toggleMenu() {

    headerMenuButton.classList.toggle("open");
    navMenuButton.classList.toggle("open");
    navMenu.classList.toggle("open");

}

 