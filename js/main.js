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