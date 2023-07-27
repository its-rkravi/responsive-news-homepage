const toggleBtn = document.querySelector(".hamburger-icon");
const toggleCloseBtn = document.querySelector(".hamburger-icon i");
const dropDownMenu = document.querySelector(".mobile-nav");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const checkIsOpen = dropDownMenu.classList.contains("open");

  toggleCloseBtn.classList = checkIsOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars-staggered";
};

// <i class="fa-solid fa-xmark"></i>
