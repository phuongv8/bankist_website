"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn-close");
const btnOpenModal = document.querySelectorAll(".btn-show");

function toggleModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", toggleModal);

btnCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    toggleModal();
  }
});
