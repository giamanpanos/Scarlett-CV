const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");

const form = document.querySelector(".contact__form");
const submit = document.querySelector("#contact_submit");

hamburger.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("clicked");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
});

submit.addEventListener("click", (e) => {
    e.preventDefault()

})
