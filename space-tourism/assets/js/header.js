"use strict"
// Header


const navbar = document.querySelector(".navbar");
const nav_links = document.querySelectorAll("[data-nav-link]");
const hamburger = document.querySelector("[data-hamburger]");
const header = document.querySelector("[data-header]");


function toggleBurger() {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
}

hamburger.addEventListener("click", toggleBurger, false);


function closeNav () {
    hamburger.classList.remove('active')
    navbar.classList.remove('active')
}

nav_links.forEach(link => {
    link.addEventListener('click', closeNav)
})


window.addEventListener('scroll', function() {
    if(window.scrollY >= 15) {
        header.classList.add('active')
    }else {
        header.classList.remove('active');
    }
})



