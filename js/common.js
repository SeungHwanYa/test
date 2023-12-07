const $ham = document.querySelector(".ham");
const $gnb = document.querySelector(".gnb");
const $person = document.querySelector(".person");
const $sec = document.querySelectorAll(".secCon > section");

$ham.addEventListener("click", () => {
  $gnb.classList.add("on");
  $person.classList.add("on");
});

window.addEventListener("resize", () => {
  $gnb.classList.remove("on");
  $person.classList.remove("on");
});

let slide1 = new Swiper(".slide1", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  breakpoints: {
    481: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
    },
    681: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

let slide2 = new Swiper(".slide2", {
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  centeredSlides: true,
  // loop: true,
  breakpoints: {
    681: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
let slide3 = new Swiper(".slide3", {
  slidesPerView: "auto",
  spaceBetween: 50,
  pagination: {
    el: ".pg1",
    clickable: true,
  },
});

let width = window.innerWidth;
window.addEventListener("resize", (e) => {
  width = window.innerWidth;
});

let moveTop = document.documentElement.scrollTop || window.scrollY;
$sec.forEach((section) => {
  section.addEventListener("mousewheel", (e) => {
    if (width > 680) {
      let delta = 0;
      if (e.deltaY) delta = e.deltaY;
      let nextElm = section.nextElementSibling;
      let prevElm = section.previousElementSibling;

      // 마우스 휠을 내리면
      if (delta > 0) {
        if (nextElm == undefined) return;
        moveTop = window.scrollY + nextElm.getBoundingClientRect().top;
      } else {
        if (prevElm == undefined) return;
        // 마우스 휠을 올리면
        moveTop = window.scrollY + prevElm.getBoundingClientRect().top;
      }
      window.scrollTo({ left: 0, top: moveTop, behavior: "smooth" });
    }
  });
});
