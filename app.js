const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");

const submit = document.querySelector("#contact_submit")

hamburger.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("clicked");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
});

submit.addEventListener("click", (e) => {
    e.preventDefault()
    setTimeout(() => {
    alert("Your message has been sent successfully. I will get back to you asap.")
    }, 1000)
}
