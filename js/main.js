// ScrollMagic
const scrEls = document.querySelectorAll('section.scrolling')

scrEls.forEach(function (scrEl) {
  new ScrollMagic
    .Scene({
      triggerElement: scrEl,
      triggerHook: .8
    })
    .setClassToggle(scrEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

// 날짜
const Year = document.querySelector('.year')
Year.textContent = new Date().getFullYear()



// 햄버거
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))