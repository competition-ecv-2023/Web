/* MENU */

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

/* COUNTER ANIMATION */

const speed = 0.1;

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(4000, endNbr, elt);
}

function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

incEltNbr("nbr");
