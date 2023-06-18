"use strict";

const head = document.querySelector('#header');
const links = head.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
