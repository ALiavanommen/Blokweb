// JavaScript Document

var headerMenuButton = document.querySelector(".header-menu");

var navMenuButton = document.querySelector(".header-menu");
var navMenu = document.querySelector("nav");
var body = document.body;

headerMenuButton.onclick = toggleMenu;

function toggleMenu() {

    headerMenuButton.classList.toggle("open");
    navMenu.classList.toggle("open");
    body.classList.toggle("scroll-lock")
}


