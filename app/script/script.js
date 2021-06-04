const burgerBtn = document.querySelector(".burger");
const navLinks = document.querySelector(".nav__wrapper__links");
const navList1 = document.querySelector("#nav__list-1");
const navList2 = document.querySelector("#nav__list-2");
const navList3 = document.querySelector("#nav__list-3");
const section1Img = document.querySelector(".section-1__wrapper__img");
const section3Img = document.querySelector(".section-3__wrapper__image");

navList1.addEventListener("click", () => {
    navList1.classList.toggle("arrow__acitve");
    navList1.nextElementSibling.classList.toggle("open__list");
    navList2.nextElementSibling.classList.remove("open__list");
    navList3.nextElementSibling.classList.remove("open__list");
    navList2.classList.remove("arrow__acitve");
    navList3.classList.remove("arrow__acitve");
});

navList2.addEventListener("click", () => {
    navList2.classList.toggle("arrow__acitve");
    navList2.nextElementSibling.classList.toggle("open__list");
    navList1.nextElementSibling.classList.remove("open__list");
    navList3.nextElementSibling.classList.remove("open__list");
    navList1.classList.remove("arrow__acitve");
    navList3.classList.remove("arrow__acitve");
});
navList3.addEventListener("click", () => {
    navList3.classList.toggle("arrow__acitve");
    navList3.nextElementSibling.classList.toggle("open__list");
    navList1.nextElementSibling.classList.remove("open__list");
    navList2.nextElementSibling.classList.remove("open__list");
    navList1.classList.remove("arrow__acitve");
    navList2.classList.remove("arrow__acitve");
});
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    navLinks.classList.toggle("menu__open");
});
let arrow = document.querySelectorAll("#arrow");
const mediaQuery = window.matchMedia("(min-width:600px)");
if (mediaQuery.matches) {
    section1Img.innerHTML = '<img src="./img/illustration-editor-desktop.svg" alt="" />';
    section3Img.innerHTML = '<img src="./img/illustration-laptop-desktop.svg" alt="" />';
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].innerHTML = '<img src="img/icon-arrow-light.svg" alt="" />';
        navLinks.classList.remove("menu__open");
    }
}
