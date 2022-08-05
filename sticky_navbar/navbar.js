`use strict`;

const nav = document.querySelector(`.nav`);
const home = document.querySelector(`.home`);
const about = document.querySelector(`.about`);
const services = document.querySelector(`.services`);
const contact = document.querySelector(`.contact`);

const listBtns = document.querySelectorAll(`li a`);

console.log(listBtns);

window.addEventListener(`scroll`, fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add(`active`);
  } else {
    nav.classList.remove(`active`);
  }
}

listBtns.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    btn.classList.add(`current`);
  });
});
