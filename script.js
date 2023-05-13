const buttons = document.querySelectorAll("[data-carousel-button]")
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
let scrollStarted = false;

document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');}

function scrollPage() {
  const scrollPos = window.scrollY;
    
      if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
      } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
      }
    }
    
btn.addEventListener('click', navToggle);
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})