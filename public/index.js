function toggle(fmenu, button) {
  if (!!fmenu.style.height && fmenu.style.height != "0px") {
    fmenu.style.height = "0px";
    button.classList.remove("opened");
  } else {
    fmenu.style.height = `${fmenu.scrollHeight}px`;
    button.classList.add("opened");
  }
}

const btnMobile = document.querySelector("span.mobile-menu-button");
const menuMobile = document.querySelector(".mobile-menu");
btnMobile.addEventListener("click", () => {
  // menuMobile.classList.toggle("hidden");
  toggle(menuMobile, btnMobile);
});

const btnSolutionsPlus = document.querySelector("span.button-red");
const menuSolutions1 = document.querySelector(".menu-red");

btnSolutionsPlus.addEventListener("click", () => {
  toggle(menuSolutions1, btnSolutionsPlus);
});

const btnSolutionsPlus2 = document.querySelector("span.button-red2");
const menuSolutions2 = document.querySelector(".menu-red2");

btnSolutionsPlus2.addEventListener("click", () => {
  toggle(menuSolutions2, btnSolutionsPlus2);
});

const btnSolutionsPlus3 = document.querySelector("span.button-red3");

btnSolutionsPlus3.addEventListener("click", () => {
  toggle(menuSolutions1, btnSolutionsPlus3);
  toggle(menuSolutions2, btnSolutionsPlus3);
});

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);
function toggleModal() {
  modalContainer.classList.toggle("active");
}
