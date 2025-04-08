const mobileBtn = document.getElementById("mobile_btn");
const mobileMenu = document.getElementById("mobile_menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");

  if (mobileMenu.classList.contains("show")) {
    mobileBtn.textContent = "✖";
  } else {
    mobileBtn.textContent = "☰";
  }
});


ScrollReveal().reveal('.home', {
    origin: 'top',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.about', {
    origin: 'right',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.cartoes', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})

ScrollReveal().reveal('.dowload', {
    origin: 'right',
    duration: 2000,
    distance: '20%'
})

ScrollReveal().reveal('.blog',{
    origin: 'left',
    duration: 2000,
    distance: '20%'
})