const mobileBtn = document.getElementById("mobile_btn");
const mobileMenu = document.getElementById("mobile_menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");

  // Alterna o ícone
  if (mobileMenu.classList.contains("show")) {
    mobileBtn.textContent = "✖";
  } else {
    mobileBtn.textContent = "☰";
  }
});
