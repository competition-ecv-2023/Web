let menuBtn = document.querySelector(".header-navigation #menu-btn");
let menu = document.querySelector(".header-navigation ul");

menuBtn.addEventListener("click", () => {
    if(window.getComputedStyle(menu).display === "none") {
        menu.style.display = "flex";      
        menu.style.animation = "0.7s ease-in-out slidein";
        menuBtn.classList.add("menu-open");
    } else {
        menu.style.animation = "0.7s ease-in-out slideout";
        menuBtn.classList.remove("menu-open");
        setTimeout(() => {
            menu.style.display = "none";
        }, 690)
    }
})

/* SLIDER */

let testimoniesSlider = new Swiper(".testimonies-slider", {
    effect: "cards",
    grabCursor: true,
});