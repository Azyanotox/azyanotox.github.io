'use strict'

document.addEventListener('DOMContentLoaded', () => {
  let burger = document.getElementById("burger");
  const ul = document.querySelector('nav ul');
  const nav = document.querySelector('nav');

  console.log(burger);

  function btn() {
    ul.classList.toggle('show');
  }

  burger.addEventListener('click', btn);
});