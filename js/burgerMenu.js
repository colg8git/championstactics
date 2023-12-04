"use strict"

const nav__links = document.querySelector('.nav__links');
const body = document.querySelector('body')

if (nav__links) {
    const menu = document.querySelector('.burger-menu');
    menu.addEventListener("click", function(e) {
        body.classList.toggle('_lock')
        menu.classList.toggle('_active');
        nav__links.classList.toggle('_active');
    })
}